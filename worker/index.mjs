import {
  BASE_URL,
  RENDERER_VERSION,
  articlePublicPath,
  briefPublicPath,
  renderArticlePage,
  renderBriefPage,
} from "./render.mjs";
import {
  renderArchiveMonthPage,
  renderArchiveRootPage,
  renderHubPage,
  renderHubsIndexPage,
  renderNotFoundPage,
  renderVideosPage,
  renderWriterPage,
} from "./render-aggregate.mjs";

const R2_PREFIX = "content/v1/";
const LANGS = new Set(["tr", "en"]);
const DESKS = new Set(["ai", "geopolitics", "economics-markets", "science"]);
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const BRIEF_ID_RE = /^[a-z0-9][a-z0-9-]{0,79}$/;
const WRITER_RE = /^[a-z0-9][a-z0-9._-]{0,79}$/;
const YEAR_MONTH_RE = /^\d{4}-(?:0[1-9]|1[0-2])$/;
const HUB_SLUG_RE = /^[a-z0-9][a-z0-9-]{0,79}$/;
const SECURITY_HEADERS = {
  "Strict-Transport-Security": "max-age=31536000",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "0",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
};
const HTML_CACHE_CONTROL = "public, max-age=0, must-revalidate";

const FALLBACK_404 = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Page not found — Eigen Radar</title></head><body><h1>Page not found</h1></body></html>`;

function normalizePathname(pathname) {
  let path = pathname;
  if (path.endsWith("/index.html")) {
    path = path.slice(0, -"index.html".length);
  }
  if (!path.endsWith("/")) {
    path += "/";
  }
  return path;
}

function parseDetailRoute(parts) {
  if (parts.length < 4 || !LANGS.has(parts[0]) || !DESKS.has(parts[1])) {
    return null;
  }
  const lang = parts[0];
  const desk = parts[1];
  if (parts[2] === "briefs") {
    if (parts.length !== 5 || !DATE_RE.test(parts[3]) || !BRIEF_ID_RE.test(parts[4])) {
      return null;
    }
    if (!/[a-z]/.test(parts[4])) {
      return null;
    }
    return {
      kind: "brief",
      lang,
      desk,
      date: parts[3],
      briefId: parts[4],
      slot: null,
      canonicalPath: `/${lang}/${desk}/briefs/${parts[3]}/${parts[4]}/`,
    };
  }
  if (parts.length !== 4 && parts.length !== 5) {
    return null;
  }
  const writer = parts[2];
  const date = parts[3];
  if (!WRITER_RE.test(writer) || !DATE_RE.test(date)) {
    return null;
  }
  let slot = 1;
  if (parts.length === 5) {
    const parsed = Number.parseInt(parts[4], 10);
    if (!Number.isInteger(parsed) || parsed < 2) {
      return null;
    }
    slot = parsed;
  }
  return {
    kind: "article",
    lang,
    desk,
    writer,
    date,
    slot,
    canonicalPath: articlePublicPath(lang, desk, writer, date, slot),
  };
}

function parseAggregateRoute(parts) {
  if (parts.length < 2 || !LANGS.has(parts[0])) {
    return null;
  }
  const lang = parts[0];

  if (parts.length === 2 && parts[1] === "archive") {
    return { kind: "archive-root", lang, canonicalPath: `/${lang}/archive/` };
  }

  if (parts.length === 2 && parts[1] === "videos") {
    return { kind: "videos", lang, canonicalPath: `/${lang}/videos/` };
  }

  if (parts.length === 2 && parts[1] === "topics") {
    return { kind: "topics-index", lang, canonicalPath: `/${lang}/topics/` };
  }

  if (parts.length === 3 && parts[1] === "topics" && HUB_SLUG_RE.test(parts[2])) {
    return {
      kind: "topic-hub",
      lang,
      slug: parts[2],
      canonicalPath: `/${lang}/topics/${parts[2]}/`,
    };
  }

  if (
    parts.length === 3 &&
    DESKS.has(parts[1]) &&
    WRITER_RE.test(parts[2]) &&
    !DATE_RE.test(parts[2])
  ) {
    return {
      kind: "writer",
      lang,
      desk: parts[1],
      writer: parts[2],
      canonicalPath: `/${lang}/${parts[1]}/${parts[2]}/`,
    };
  }

  if (
    parts.length === 4 &&
    parts[1] === "archive" &&
    /^\d{4}$/.test(parts[2]) &&
    /^(?:0[1-9]|1[0-2])$/.test(parts[3])
  ) {
    const yearMonth = `${parts[2]}-${parts[3]}`;
    if (!YEAR_MONTH_RE.test(yearMonth)) {
      return null;
    }
    return {
      kind: "archive-month",
      lang,
      yearMonth,
      pageNo: 1,
      canonicalPath: `/${lang}/archive/${parts[2]}/${parts[3]}/`,
    };
  }

  if (
    parts.length === 6 &&
    parts[1] === "archive" &&
    /^\d{4}$/.test(parts[2]) &&
    /^(?:0[1-9]|1[0-2])$/.test(parts[3]) &&
    parts[4] === "page"
  ) {
    const yearMonth = `${parts[2]}-${parts[3]}`;
    const pageNo = Number.parseInt(parts[5], 10);
    if (!YEAR_MONTH_RE.test(yearMonth) || !Number.isInteger(pageNo) || pageNo < 2) {
      return null;
    }
    return {
      kind: "archive-month",
      lang,
      yearMonth,
      pageNo,
      canonicalPath: `/${lang}/archive/${parts[2]}/${parts[3]}/page/${pageNo}/`,
    };
  }

  return null;
}

export function parseRoute(pathname) {
  const path = normalizePathname(pathname);
  const parts = path.split("/").filter(Boolean);
  return parseDetailRoute(parts) || parseAggregateRoute(parts);
}

export function routeObjectKey(route, site = {}) {
  if (route?.kind === "article") {
    const suffix = route.slot >= 2 ? `-${route.slot}` : "";
    return `${R2_PREFIX}article/${route.desk}/${route.writer}/${route.date}${suffix}.json`;
  }
  if (route?.kind === "brief") {
    return `${R2_PREFIX}brief/${route.desk}/${route.date}/${route.briefId}.json`;
  }
  if (route?.kind === "writer") {
    return `${R2_PREFIX}writer/${route.desk}/${route.writer}.json`;
  }
  if (route?.kind === "archive-root") {
    const newest = site.archiveMonths?.[0]?.month;
    return newest ? `${R2_PREFIX}archive/${newest}.json` : null;
  }
  if (route?.kind === "archive-month") {
    return `${R2_PREFIX}archive/${route.yearMonth}.json`;
  }
  if (route?.kind === "topic-hub") {
    return `${R2_PREFIX}topics/${route.slug}.json`;
  }
  if (route?.kind === "videos") {
    return `${R2_PREFIX}videos.json`;
  }
  return null;
}

async function readJson(binding, key) {
  if (!binding) {
    return null;
  }
  const object = await binding.get(key);
  if (!object) {
    return null;
  }
  const text = await object.text();
  return {
    value: JSON.parse(text),
    identity: object.httpEtag || object.etag || await sha256Hex(text),
  };
}

async function loadSite(env) {
  return readJson(env.CONTENT, `${R2_PREFIX}site.json`);
}

async function fetchNotFoundBody(env) {
  if (env.ASSETS) {
    const asset = await env.ASSETS.fetch(new URL("/404.html", BASE_URL));
    if (asset.ok) {
      return asset.text();
    }
  }
  return FALLBACK_404;
}

async function sha256Hex(value) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(String(value)),
  );
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function dependencyEtag(
  contentIdentity,
  siteVersion,
  rendererVersion = RENDERER_VERSION,
) {
  const digest = await sha256Hex(JSON.stringify([
    String(contentIdentity ?? ""),
    String(siteVersion ?? ""),
    String(rendererVersion),
  ]));
  return `"${digest}"`;
}

export function currentIstanbulDate(now = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en", {
      timeZone: "Europe/Istanbul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(now).map(({ type, value }) => [type, value]),
  );
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function workerHeaders(extra = {}) {
  const headers = new Headers(SECURITY_HEADERS);
  headers.set("x-eigen-render", "worker");
  for (const [name, value] of Object.entries(extra)) {
    headers.set(name, value);
  }
  return headers;
}

async function ssrResponse(body, {
  status = 200,
  content,
  site,
  contentType = "text/html; charset=utf-8",
  headers: extraHeaders = {},
} = {}) {
  const headers = workerHeaders(extraHeaders);
  headers.set("content-type", contentType);
  headers.set(
    "etag",
    await dependencyEtag(content.identity, site?.value?.version),
  );
  return new Response(body, { status, headers });
}

async function notFoundResponse(env, site) {
  if (site) {
    return ssrResponse(renderNotFoundPage(site.value, { baseUrl: BASE_URL }), {
      status: 404,
      content: site,
      site,
    });
  }
  const body = await fetchNotFoundBody(env);
  return ssrResponse(body, {
    status: 404,
    content: { identity: await sha256Hex(body) },
    site: null,
  });
}

async function redirect(location, content, site, status = 301) {
  return ssrResponse(null, {
    status,
    content,
    site,
    headers: { Location: location },
  });
}

async function htmlResponse(body, content, site, status = 200) {
  return ssrResponse(body, {
    status,
    content,
    site,
  });
}

function routeEdgeTtl(route, status) {
  if (status === 301 || status === 404) {
    return 60;
  }
  if (
    status === 200 &&
    (route?.kind === "article" || route?.kind === "brief") &&
    route.date < currentIstanbulDate()
  ) {
    return 86400;
  }
  return 300;
}

function cacheKeyFor(request) {
  return new Request(request.url, { method: "GET" });
}

function ifNoneMatch(request, response) {
  const expected = response.headers.get("etag");
  const supplied = request.headers.get("if-none-match");
  if (!expected || !supplied) {
    return response;
  }
  const matched = supplied.split(",").some((candidate) => {
    const tag = candidate.trim();
    return tag === "*" || tag.replace(/^W\//, "") === expected;
  });
  return matched
    ? new Response(null, { status: 304, headers: new Headers(response.headers) })
    : response;
}

function writerKnown(site, desk, writerId) {
  return (site?.writers || []).some(
    (row) => row?.id === writerId && row?.topic === desk,
  );
}

function hubKnown(site, slug) {
  return (site?.hubs || []).some((row) => row?.slug === slug);
}

async function renderRoute(env, url, route) {
  if (!route || !route.canonicalPath) {
    return notFoundResponse(env, null);
  }

  const site = await loadSite(env);
  if (!site?.value) {
    return notFoundResponse(env, null);
  }

  if (route.kind === "article") {
    const payload = await readJson(env.CONTENT, routeObjectKey(route, site.value));
    if (!payload) {
      if (route.slot >= 2) {
        const base = await readJson(
          env.CONTENT,
          routeObjectKey({ ...route, slot: 1 }, site.value),
        );
        if (base) {
          return redirect(
            new URL(
              articlePublicPath(route.lang, route.desk, route.writer, route.date, 1),
              url,
            ).toString(),
            base,
            site,
          );
        }
      }
      return notFoundResponse(env, site);
    }
    if (route.slot >= 2 && (payload.value.routeSlot || 1) !== route.slot) {
      return redirect(
        new URL(
          articlePublicPath(route.lang, route.desk, route.writer, route.date, 1),
          url,
        ).toString(),
        payload,
        site,
      );
    }
    const html = renderArticlePage(payload.value, site.value, route.lang, {
      baseUrl: BASE_URL,
    });
    return htmlResponse(html, payload, site);
  }

  if (route.kind === "brief") {
    const payload = await readJson(env.CONTENT, routeObjectKey(route, site.value));
    if (!payload) {
      return notFoundResponse(env, site);
    }
    const html = renderBriefPage(payload.value, site.value, route.lang, {
      baseUrl: BASE_URL,
    });
    return htmlResponse(html, payload, site);
  }

  if (route.kind === "writer") {
    if (!writerKnown(site.value, route.desk, route.writer)) {
      return notFoundResponse(env, site);
    }
    const payload = await readJson(
      env.CONTENT,
      routeObjectKey(route, site.value),
    );
    if (!payload) {
      return notFoundResponse(env, site);
    }
    const html = renderWriterPage(payload.value, site.value, route.lang, {
      baseUrl: BASE_URL,
    });
    return htmlResponse(html, payload, site);
  }

  if (route.kind === "archive-root") {
    const months = site.value.archiveMonths || [];
    const newest = months[0]?.month;
    if (!newest) {
      const html = renderArchiveRootPage(
        site.value,
        route.lang,
        { month: null, entries: [] },
        { baseUrl: BASE_URL },
      );
      return htmlResponse(html, site, site);
    }
    const payload = await readJson(env.CONTENT, routeObjectKey(route, site.value));
    if (!payload) {
      return notFoundResponse(env, site);
    }
    const html = renderArchiveRootPage(site.value, route.lang, payload.value, {
      baseUrl: BASE_URL,
    });
    return htmlResponse(html, payload, site);
  }

  if (route.kind === "archive-month") {
    const payload = await readJson(
      env.CONTENT,
      routeObjectKey(route, site.value),
    );
    if (!payload) {
      return notFoundResponse(env, site);
    }
    const html = renderArchiveMonthPage(site.value, route.lang, payload.value, route.pageNo, {
      baseUrl: BASE_URL,
    });
    if (!html) {
      return notFoundResponse(env, site);
    }
    return htmlResponse(html, payload, site);
  }

  if (route.kind === "topics-index") {
    const html = renderHubsIndexPage(site.value, route.lang, { baseUrl: BASE_URL });
    return htmlResponse(html, site, site);
  }

  if (route.kind === "topic-hub") {
    if (!hubKnown(site.value, route.slug)) {
      return notFoundResponse(env, site);
    }
    const payload = await readJson(
      env.CONTENT,
      routeObjectKey(route, site.value),
    );
    if (!payload) {
      return notFoundResponse(env, site);
    }
    const html = renderHubPage(payload.value, site.value, route.lang, {
      baseUrl: BASE_URL,
    });
    return htmlResponse(html, payload, site);
  }

  if (route.kind === "videos") {
    const payload = await readJson(env.CONTENT, routeObjectKey(route, site.value));
    if (!payload) {
      return notFoundResponse(env, site);
    }
    const html = renderVideosPage(payload.value, site.value, route.lang, {
      baseUrl: BASE_URL,
    });
    return htmlResponse(html, payload, site);
  }

  return notFoundResponse(env, site);
}

export async function handleRequest(request, env) {
  const requestUrl = new URL(request.url);

  if (request.method === "GET" && requestUrl.pathname === "/__worker/health") {
    const site = await loadSite(env);
    return new Response(JSON.stringify({
      ok: true,
      rendererVersion: RENDERER_VERSION,
      siteVersion: site?.value?.version ?? null,
    }), {
      status: 200,
      headers: workerHeaders({
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store",
        "x-robots-tag": "noindex",
      }),
    });
  }

  const previewPrefix = "/__worker/preview";
  const preview = request.method === "GET" && (
    requestUrl.pathname === previewPrefix ||
    requestUrl.pathname.startsWith(`${previewPrefix}/`)
  );
  const url = new URL(requestUrl);
  if (preview) {
    url.pathname = requestUrl.pathname.slice(previewPrefix.length) || "/";
  }
  const route = parseRoute(url.pathname);
  const cache = !preview && request.method === "GET"
    ? globalThis.caches?.default
    : null;
  const cacheKey = cache ? cacheKeyFor(request) : null;

  if (cache) {
    try {
      const cached = await cache.match(cacheKey);
      if (cached) {
        return ifNoneMatch(request, cached);
      }
    } catch {
      // Rendering remains available when the edge cache is unavailable.
    }
  }

  const response = await renderRoute(env, url, route);
  if (preview) {
    response.headers.set("cache-control", "no-store");
    response.headers.set("x-robots-tag", "noindex");
    return ifNoneMatch(request, response);
  }

  const ttl = routeEdgeTtl(route, response.status);
  response.headers.set(
    "cache-control",
    `${HTML_CACHE_CONTROL}, s-maxage=${ttl}`,
  );
  if (cache) {
    try {
      await cache.put(cacheKey, response.clone());
    } catch {
      // A failed cache write must not fail the rendered response.
    }
  }
  return ifNoneMatch(request, response);
}

export default {
  async fetch(request, env) {
    return handleRequest(request, env);
  },
};
