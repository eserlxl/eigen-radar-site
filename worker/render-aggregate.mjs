import {
  UI,
  TOPIC_COPY,
  esc,
  text,
  localized,
  formatDate,
  topicLabel,
  writerFocus,
  avatarUrl,
  absoluteUrl,
  siteBase,
  categoryPublicPath,
  writerPublicPath,
  articlePublicPath,
  briefPublicPath,
  archivePublicPath,
  archiveMonthPublicPath,
  hubsIndexPublicPath,
  hubPublicPath,
  videosPublicPath,
  formatMonth,
  baseGraph,
  shell,
} from "./render.mjs";

export const ARCHIVE_PAGE_SIZE = 100;

export const ARCHIVE_STYLE = `
.archive-hero{display:flex;flex-wrap:wrap;align-items:baseline;gap:.25rem .9rem;padding:.9rem 0 .35rem}.archive-hero h1{margin:0;max-width:none;font-size:clamp(1.45rem,3vw,1.85rem);line-height:1.2;letter-spacing:-.02em}.archive-hero .deck{margin:0;font-size:.95rem}.archive-controls{display:grid;grid-template-columns:minmax(14rem,2fr) repeat(2,minmax(10rem,1fr)) auto;align-items:end;gap:.75rem;margin:.6rem 0 .9rem;padding:.75rem;border:1px solid var(--line);border-radius:var(--radius);background:var(--soft)}.archive-controls[hidden]{display:none}.archive-field{display:grid;gap:.35rem;color:var(--muted);font-size:.75rem;font-weight:700}.archive-field input,.archive-field select{width:100%;min-height:2.75rem;padding:.55rem .7rem;border:1px solid var(--line);border-radius:.55rem;background:var(--bg);color:var(--text)}.archive-field input:focus,.archive-field select:focus{border-color:var(--accent)}.archive-clear{min-height:2.75rem;padding:.55rem .85rem;border:1px solid var(--line);border-radius:.55rem;background:transparent;color:var(--text);cursor:pointer}.archive-clear:hover{border-color:var(--accent);background:var(--accent-soft)}.archive-status{margin:.5rem 0 1.25rem;color:var(--muted);font-size:.86rem}.archive-empty{margin:1rem 0;padding:1rem;border-left:.2rem solid var(--accent);color:var(--muted)}.archive-empty[hidden],.archive-edition[hidden],.archive-result[hidden]{display:none}.archive-edition+.archive-edition{margin-top:2rem}.archive-edition>h2{padding-bottom:.65rem;border-bottom:1px solid var(--line);color:var(--muted);font-size:.92rem;letter-spacing:.03em}.archive-list{display:grid;gap:.7rem;margin:.8rem 0 0;padding:0;list-style:none}.archive.is-searching .archive-results{display:grid;gap:.7rem}.archive.is-searching .archive-edition,.archive.is-searching .archive-list{display:contents}.archive.is-searching .archive-edition>h2{display:none}.archive-result>a{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:.7rem 1rem;padding:1rem 1.1rem;border:1px solid var(--line);border-radius:.75rem;background:var(--card);color:var(--text);text-decoration:none;transition:.15s}.archive-result>a:hover{transform:translateY(-2px);border-color:var(--accent);background:var(--card-hover)}.archive-result-main{min-width:0}.archive-result-tags{display:flex;align-items:center;gap:.45rem;flex-wrap:wrap;color:var(--muted);font-size:.72rem}.archive-result h3{margin:.25rem 0 .35rem;font-size:1rem}.archive-result p{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;margin:.25rem 0;color:var(--muted);font-size:.84rem}.archive-kind,.archive-topic{display:inline-flex;width:max-content;padding:.12rem .45rem;border-radius:.35rem;font-size:.68rem;font-weight:800}.archive-kind{background:var(--accent-soft);color:var(--accent);letter-spacing:.04em;text-transform:uppercase}.archive-kind.is-brief{background:var(--brief-kind-soft);color:var(--brief-kind)}.archive-topic{border:1px solid var(--line);color:var(--muted)}.archive-result .meta{margin-top:.5rem}.archive-arrow{align-self:center;color:var(--accent);font-size:1.1rem;font-weight:800}
@media(max-width:760px){.archive-controls{grid-template-columns:1fr 1fr}.archive-field:first-child{grid-column:1/-1}.archive-clear{align-self:end}}
@media(max-width:480px){.archive-controls{grid-template-columns:1fr}.archive-field:first-child{grid-column:auto}.archive-result>a{grid-template-columns:minmax(0,1fr)}.archive-arrow{display:none}}
.archive-months{display:flex;gap:.45rem;flex-wrap:wrap;margin:.6rem 0 .6rem;padding:0}.archive-months a{display:inline-flex;padding:.3rem .65rem;border:1px solid var(--line);border-radius:.55rem;color:var(--muted);font-size:.78rem;font-weight:700;text-decoration:none;white-space:nowrap;transition:.12s}.archive-months a:hover{border-color:var(--accent);color:var(--text);background:var(--accent-soft)}.archive-months a[aria-current=page]{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}
.archive-pagination{display:flex;align-items:center;gap:1rem;margin:2rem 0 .5rem;padding:1rem 0;border-top:1px solid var(--line)}.archive-pagination a{display:inline-flex;padding:.45rem .85rem;border:1px solid var(--line);border-radius:.55rem;color:var(--text);font-size:.86rem;font-weight:700;text-decoration:none;transition:.12s}.archive-pagination a:hover{border-color:var(--accent);background:var(--accent-soft)}.archive-page-indicator{color:var(--muted);font-size:.82rem}
`;

export const ARCHIVE_SCRIPT = `
<script>
(()=>{
  const root=document.querySelector('[data-archive]');
  if(!root)return;
  const controls=root.querySelector('[data-archive-controls]');
  const query=root.querySelector('[data-archive-query]');
  const type=root.querySelector('[data-archive-type]');
  const topic=root.querySelector('[data-archive-topic]');
  const clear=root.querySelector('[data-archive-clear]');
  const status=root.querySelector('[data-archive-status]');
  const empty=root.querySelector('[data-archive-empty]');
  const items=[...root.querySelectorAll('[data-archive-item]')];
  const groups=[...root.querySelectorAll('[data-archive-group]')];
  if(!controls||!query||!type||!topic||!clear||!status||!empty)return;
  const lang=root.dataset.archiveLang||'en';
  const emptyText=lang==='tr'?'Aramanızla eşleşen arşiv '+'içeriği yok.':'No archive items match your '+'search.';
  const manifestUrl=root.dataset.archiveManifest||'';
  const loadingTpl=root.dataset.loadingTemplate||'';
  const partialNote=root.dataset.partialNote||'';
  const resultsBox=root.querySelector('.archive-results');
  let serverHTML=resultsBox?resultsBox.innerHTML:'';
  let manifest=null;
  let shardCache={};
  let shardPartial=false;
  const fold=value=>String(value??'').normalize('NFKD').toLocaleLowerCase('tr-TR')
    .replace(/ı/g,'i').replace(/[\u0300-\u036f]/g,'');
  const hasOption=(select,value)=>[...select.options].some(option=>option.value===value);
  const isDefault=()=>!query.value.trim()&&type.value==='all'&&topic.value==='all';
  const readParams=()=>{
    const params=new URLSearchParams(location.search);
    query.value=params.get('q')||'';
    const requestedType=params.get('type')||'all';
    const requestedTopic=params.get('topic')||'all';
    type.value=hasOption(type,requestedType)?requestedType:'all';
    topic.value=hasOption(topic,requestedTopic)?requestedTopic:'all';
  };
  const syncUrl=()=>{
    const params=new URLSearchParams();
    const q=query.value.trim();
    if(q)params.set('q',q);
    if(type.value!=='all')params.set('type',type.value);
    if(topic.value!=='all')params.set('topic',topic.value);
    const search=params.toString();
    history.replaceState(null,'',location.pathname+(search?'?'+search:'')+location.hash);
  };
  const renderItem=e=>{
    const bc=e.kind==='brief'?' is-brief':'';
    const byline=e.byline?\`<div class="meta"><span>\${esc(e.byline)}</span></div>\`:'';
    const summary=e.summary?\`<p>\${esc(e.summary)}</p>\`:'';
    return \`<li class="archive-result" data-archive\${'-item'} data-type="\${e.kind}" \`+
      \`data-topic="\${esc(e.topic)}" data-search="\${esc(e.search)}">\`+
      \`<a href="\${esc(e.url)}"><div class="archive-result-main">\`+
      \`<div class="archive-result-tags"><span class="archive-kind\${bc}">\${esc(e.kind_label||e.kind)}</span>\`+
      \`<span class="archive-topic">\${esc(e.topic_label||e.topic)}</span>\`+
      \`<time datetime="\${e.date}">\${esc(e.date)}</time></div>\`+
      \`<h3>\${esc(e.title)}</h3>\${summary}\${byline}</div>\`+
      \`<span class="archive-arrow" aria-hidden="true">→</span></a></li>\`;
  };
  const esc=s=>{const d=document.createElement('div');d.textContent=s;return d.innerHTML.replace(/"/g,'&quot;');};
  const applyLocal=sync=>{
    const q=fold(query.value.trim());
    let count=0;
    items.forEach(item=>{
      const visible=(!q||fold(item.dataset.search).includes(q))
        &&(type.value==='all'||item.dataset.type===type.value)
        &&(topic.value==='all'||item.dataset.topic===topic.value);
      item.hidden=!visible;
      if(visible)count+=1;
    });
    root.classList.toggle('is-searching',Boolean(q));
    groups.forEach(group=>{group.hidden=!group.querySelector('[data-archive-item]:not([hidden])');});
    status.textContent=count===1
      ?root.dataset.countOne
      :root.dataset.countTemplate.replace('{count}',String(count));
    empty.hidden=count!==0;
    if(count===0)empty.textContent=emptyText;
    if(sync)syncUrl();
  };
  const fetchManifest=async()=>{
    if(manifest)return manifest;
    if(!manifestUrl)return null;
    try{
      const r=await fetch(manifestUrl);
      if(!r.ok)throw new Error(r.status);
      manifest=await r.json();
      return manifest;
    }catch{shardPartial=true;return null;}
  };
  const fetchShard=async(path)=>{
    if(shardCache[path])return shardCache[path];
    try{
      const r=await fetch(path);
      if(!r.ok)throw new Error(r.status);
      const data=await r.json();
      shardCache[path]=data.entries||[];
      return shardCache[path];
    }catch{shardPartial=true;return [];}
  };
  const applyShards=async(sync)=>{
    if(isDefault()){
      if(resultsBox)resultsBox.innerHTML=serverHTML;
      root.classList.toggle('is-searching',false);
      const restored=[...root.querySelectorAll('[data-archive-item]')];
      const ct=restored.length;
      status.textContent=ct===1?root.dataset.countOne
        :root.dataset.countTemplate.replace('{count}',String(ct));
      empty.hidden=ct!==0;
      if(ct===0)empty.textContent=emptyText;
      if(sync)syncUrl();
      return;
    }
    const m=await fetchManifest();
    if(!m||!m.shards){applyLocal(sync);return;}
    const langShards=m.shards.filter(s=>s.lang===lang);
    const total=langShards.length;
    let done=0;
    let allEntries=[];
    for(const shard of langShards){
      const entries=await fetchShard(shard.path);
      allEntries=allEntries.concat(entries);
      done++;
      status.textContent=loadingTpl.replace('{done}',String(done)).replace('{total}',String(total));
    }
    if(shardPartial&&partialNote){
      status.textContent=partialNote;
    }
    const q=fold(query.value.trim());
    const tv=type.value;
    const tpv=topic.value;
    const filtered=allEntries.filter(e=>
      (!q||fold(e.search||'').includes(q))
      &&(tv==='all'||e.kind===tv)
      &&(tpv==='all'||e.topic===tpv)
    );
    root.classList.toggle('is-searching',Boolean(q));
    if(resultsBox){
      const grouped={};
      filtered.forEach(e=>{(grouped[e.date]=grouped[e.date]||[]).push(e);});
      let html='';
      for(const[date,entries]of Object.entries(grouped)){
        const id='search-'+lang+'-'+date;
        html+=\`<section class="archive-edition" data-archive\${'-group'} aria-labelledby="\${id}">\`;
        html+=\`<h2 id="\${id}"><time datetime="\${date}">\${esc(date)}</time></h2>\`;
        html+=\`<ol class="archive-list">\${entries.map(renderItem).join('')}</ol></section>\`;
      }
      resultsBox.innerHTML=html;
    }
    const count=filtered.length;
    if(!shardPartial){
      status.textContent=count===1?root.dataset.countOne
        :root.dataset.countTemplate.replace('{count}',String(count));
    }
    empty.hidden=count!==0;
    if(count===0)empty.textContent=emptyText;
    if(sync)syncUrl();
  };
  const apply=sync=>{
    if(!manifestUrl){
      applyLocal(sync);
    }else{
      applyShards(sync);
    }
  };
  controls.hidden=false;
  readParams();
  controls.addEventListener('submit',event=>event.preventDefault());
  query.addEventListener('input',()=>apply(true));
  type.addEventListener('change',()=>apply(true));
  topic.addEventListener('change',()=>apply(true));
  clear.addEventListener('click',()=>{query.value='';type.value='all';topic.value='all';apply(true);query.focus();});
  addEventListener('popstate',()=>{readParams();apply(false);});
  document.addEventListener('keydown',e=>{
    if(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)return;
    const t=e.target;
    const typing=t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.tagName==='SELECT'||t.isContentEditable);
    if(e.key==='/'&&!typing){e.preventDefault();query.focus();}
    else if(e.key==='Escape'&&t===query){query.blur();}
  });
  apply(false);
})();
</script>
`;

const YOUTUBE_VIDEO_ID = /^[A-Za-z0-9_-]{11}$/;

function topicIds(site) {
  if (Array.isArray(site?.topicIds) && site.topicIds.length) {
    return site.topicIds.filter((topic) => site.desks?.[topic]);
  }
  return Object.keys(TOPIC_COPY).filter((topic) => site?.desks?.[topic]);
}

function archiveMonths(site) {
  if (!Array.isArray(site?.archiveMonths)) {
    return [];
  }
  return site.archiveMonths
    .filter((row) => row && typeof row.month === "string")
    .map((row) => [row.month, Number(row.count) || 0]);
}

function archiveEntryFromPayload(entry, lang) {
  const kind = entry.kind === "brief" ? "brief" : "column";
  return {
    kind,
    kind_label: UI[lang][kind === "brief" ? "archive_brief" : "archive_column"],
    topic: entry.desk,
    topic_label: topicLabel(entry.desk, lang),
    date: entry.date,
    title: localized(entry.title, lang),
    summary: localized(entry.summary, lang),
    byline: kind === "column" ? localized(entry.byline, lang) : "",
    search: localized(entry.search, lang),
    url: entry.paths?.[lang] || "",
  };
}

function casefoldTr(value) {
  return text(value).replace(/I/g, "ı").replace(/İ/g, "i").toLowerCase();
}

export function sortArchiveEntries(entries, lang) {
  const sorted = entries.map((entry) => archiveEntryFromPayload(entry, lang));
  sorted.sort((a, b) => {
    const rankA = a.kind === "column" ? 0 : 1;
    const rankB = b.kind === "column" ? 0 : 1;
    if (rankA !== rankB) {
      return rankA - rankB;
    }
    const titleA =
      lang === "tr" ? casefoldTr(a.title) : a.title.toLowerCase();
    const titleB =
      lang === "tr" ? casefoldTr(b.title) : b.title.toLowerCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  sorted.sort((a, b) => b.date.localeCompare(a.date));
  return sorted;
}

export function paginateArchiveEntries(entries) {
  if (!entries.length) {
    return [];
  }
  const monthOrder = [];
  const byMonth = new Map();
  for (const entry of entries) {
    const yearMonth = entry.date.slice(0, 7);
    if (!byMonth.has(yearMonth)) {
      byMonth.set(yearMonth, []);
      monthOrder.push(yearMonth);
    }
    byMonth.get(yearMonth).push(entry);
  }
  const pages = [];
  for (const yearMonth of monthOrder) {
    const monthEntries = byMonth.get(yearMonth);
    const totalPages = Math.ceil(monthEntries.length / ARCHIVE_PAGE_SIZE);
    for (let pageNo = 1; pageNo <= totalPages; pageNo += 1) {
      const start = (pageNo - 1) * ARCHIVE_PAGE_SIZE;
      pages.push({
        month: yearMonth,
        pageNo,
        totalPages,
        entries: monthEntries.slice(start, start + ARCHIVE_PAGE_SIZE),
      });
    }
  }
  return pages;
}

function renderArchivePage(
  lang,
  pageEntries,
  site,
  {
    baseUrl,
    months = [],
    month = null,
    pageNo = 1,
    totalPages = 1,
    isBase = false,
  } = {},
) {
  const u = UI[lang];
  const other = lang === "tr" ? "en" : "tr";
  const ids = topicIds(site);
  const entries = Array.isArray(pageEntries) ? pageEntries : [];

  let path;
  let canonical;
  let alternate;
  let h1Text;
  let pageTitle;
  let crumbsHtml;
  let breadcrumbItems;
  let collectionName;

  if (isBase) {
    path = archivePublicPath(lang);
    canonical = absoluteUrl(baseUrl, path);
    alternate = absoluteUrl(baseUrl, archivePublicPath(other));
    h1Text = u.archive_title;
    pageTitle = `${u.archive_title} — Eigen Radar`;
    crumbsHtml =
      `<nav class="breadcrumbs" aria-label="${esc(u.breadcrumb_label)}">` +
      `<a href="/">${esc(u.home)}</a><span>/</span>` +
      `<span aria-current="page">${esc(u.archive)}</span></nav>`;
    breadcrumbItems = [
      { "@type": "ListItem", position: 1, name: "Eigen Radar", item: siteBase(baseUrl) },
      {
        "@type": "ListItem",
        position: 2,
        name: u.archive_title,
        item: canonical,
      },
    ];
    collectionName = u.archive_title;
  } else {
    path = archiveMonthPublicPath(lang, month, pageNo);
    canonical = absoluteUrl(baseUrl, path);
    alternate = absoluteUrl(baseUrl, archiveMonthPublicPath(other, month, pageNo));
    const monthLabel = formatMonth(month, lang);
    h1Text = monthLabel;
    pageTitle = `${monthLabel} — ${u.archive_title} — Eigen Radar`;
    const archiveRoot = archivePublicPath(lang);
    const monthRoot = archiveMonthPublicPath(lang, month, 1);
    if (pageNo >= 2) {
      const pageLabel = u.archive_page_of
        .replace("{n}", String(pageNo))
        .replace("{total}", String(totalPages));
      pageTitle = `${monthLabel} — ${pageLabel} — ${u.archive_title} — Eigen Radar`;
      crumbsHtml =
        `<nav class="breadcrumbs" aria-label="${esc(u.breadcrumb_label)}">` +
        `<a href="/">${esc(u.home)}</a><span>/</span>` +
        `<a href="${esc(archiveRoot)}">${esc(u.archive)}</a><span>/</span>` +
        `<a href="${esc(monthRoot)}">${esc(monthLabel)}</a><span>/</span>` +
        `<span aria-current="page">${esc(pageLabel)}</span></nav>`;
      breadcrumbItems = [
        { "@type": "ListItem", position: 1, name: "Eigen Radar", item: siteBase(baseUrl) },
        {
          "@type": "ListItem",
          position: 2,
          name: u.archive_title,
          item: absoluteUrl(baseUrl, archiveRoot),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: monthLabel,
          item: absoluteUrl(baseUrl, monthRoot),
        },
        { "@type": "ListItem", position: 4, name: pageLabel, item: canonical },
      ];
    } else {
      crumbsHtml =
        `<nav class="breadcrumbs" aria-label="${esc(u.breadcrumb_label)}">` +
        `<a href="/">${esc(u.home)}</a><span>/</span>` +
        `<a href="${esc(archiveRoot)}">${esc(u.archive)}</a><span>/</span>` +
        `<span aria-current="page">${esc(monthLabel)}</span></nav>`;
      breadcrumbItems = [
        { "@type": "ListItem", position: 1, name: "Eigen Radar", item: siteBase(baseUrl) },
        {
          "@type": "ListItem",
          position: 2,
          name: u.archive_title,
          item: absoluteUrl(baseUrl, archiveRoot),
        },
        { "@type": "ListItem", position: 3, name: monthLabel, item: canonical },
      ];
    }
    collectionName = monthLabel;
  }

  const grouped = new Map();
  for (const entry of entries) {
    if (!grouped.has(entry.date)) {
      grouped.set(entry.date, []);
    }
    grouped.get(entry.date).push(entry);
  }

  const editionHtml = [];
  for (const [date, dateEntries] of grouped) {
    const resultHtml = dateEntries.map((entry) => {
      const byline = entry.byline
        ? `<div class="meta"><span>${esc(entry.byline)}</span></div>`
        : "";
      const summaryHtml = entry.summary ? `<p>${esc(entry.summary)}</p>` : "";
      const briefClass = entry.kind === "brief" ? " is-brief" : "";
      return (
        `<li class="archive-result" data-archive-item data-type="${entry.kind}" ` +
        `data-topic="${esc(entry.topic)}" data-search="${esc(entry.search)}">` +
        `<a href="${esc(entry.url)}"><div class="archive-result-main">` +
        `<div class="archive-result-tags"><span class="archive-kind${briefClass}">` +
        `${esc(entry.kind_label)}</span><span class="archive-topic">` +
        `${esc(entry.topic_label)}</span><time datetime="${entry.date}">` +
        `${esc(formatDate(entry.date, lang))}</time></div>` +
        `<h3>${esc(entry.title)}</h3>${summaryHtml}${byline}</div>` +
        `<span class="archive-arrow" aria-hidden="true">→</span></a></li>`
      );
    });
    const editionId = `archive-${lang}-${date}`;
    editionHtml.push(
      `<section class="archive-edition" data-archive-group aria-labelledby="${editionId}">` +
      `<h2 id="${editionId}"><time datetime="${date}">` +
      `${esc(formatDate(date, lang))}</time></h2>` +
      `<ol class="archive-list">${resultHtml.join("")}</ol></section>`,
    );
  }

  let monthsHtml = "";
  if (months.length) {
    const monthLinks = months.map(([yearMonth, count]) => {
      const href = archiveMonthPublicPath(lang, yearMonth);
      const label = `${formatMonth(yearMonth, lang)} (${count})`;
      const current =
        !isBase && month === yearMonth ? ' aria-current="page"' : "";
      return `<a href="${esc(href)}"${current}>${esc(label)}</a>`;
    });
    monthsHtml =
      `<nav class="archive-months" aria-label="${esc(u.archive_months)}">` +
      `${monthLinks.join("")}</nav>`;
  }

  let newerHref = null;
  if (!isBase && month && pageNo > 1) {
    newerHref = archiveMonthPublicPath(lang, month, pageNo - 1);
  }
  let olderHref = null;
  if (month && pageNo < totalPages) {
    olderHref = archiveMonthPublicPath(lang, month, pageNo + 1);
  } else if (isBase && month && months.length) {
    const yearMonths = months.map(([yearMonth]) => yearMonth);
    const monthIndex = yearMonths.indexOf(month);
    if (monthIndex >= 0 && monthIndex < yearMonths.length - 1) {
      olderHref = archiveMonthPublicPath(lang, yearMonths[monthIndex + 1]);
    }
  }

  let paginationHtml = "";
  if (newerHref || olderHref) {
    const pageIndicator = u.archive_page_of
      .replace("{n}", String(pageNo))
      .replace("{total}", String(totalPages));
    const ariaLabel = totalPages > 1 ? pageIndicator : u.archive_older;
    const parts = [];
    if (newerHref) {
      parts.push(`<a href="${esc(newerHref)}">${esc(u.archive_newer)}</a>`);
    }
    if (totalPages > 1) {
      parts.push(
        `<span class="archive-page-indicator">${esc(pageIndicator)}</span>`,
      );
    }
    if (olderHref) {
      parts.push(`<a href="${esc(olderHref)}">${esc(u.archive_older)}</a>`);
    }
    paginationHtml =
      `<nav class="archive-pagination" aria-label="${esc(ariaLabel)}">` +
      `${parts.join("")}</nav>`;
  }

  const topicOptions = ids
    .filter((topic) => TOPIC_COPY[topic])
    .map(
      (topic) =>
        `<option value="${esc(topic)}">${esc(topicLabel(topic, lang))}</option>`,
    )
    .join("");

  const countText = u.archive_results.replace("{count}", String(entries.length));
  const body =
    `${crumbsHtml}` +
    `<div class="archive" data-archive data-count-template="${esc(u.archive_results)}" data-count-one="${esc(u.archive_result_one)}" data-archive-lang="${esc(lang)}" data-archive-manifest="/assets/archive-index/manifest.json" data-loading-template="${esc(u.archive_search_loading)}" data-partial-note="${esc(u.archive_search_partial)}">` +
    `<header class="archive-hero"><h1>${esc(h1Text)}</h1><p class="deck">${esc(u.archive_deck)}</p></header>` +
    `${monthsHtml}<form class="archive-controls" data-archive-controls role="search" hidden>` +
    `<label class="archive-field"><span>${esc(u.archive_search)}</span><input type="search" data-archive-query autocomplete="off" enterkeyhint="search" placeholder="${esc(u.archive_search)}"></label>` +
    `<label class="archive-field"><span>${esc(u.archive_type)}</span><select data-archive-type><option value="all">${esc(u.archive_all_types)}</option><option value="column">${esc(u.archive_columns)}</option><option value="brief">${esc(u.archive_briefs)}</option></select></label>` +
    `<label class="archive-field"><span>${esc(u.archive_topic)}</span><select data-archive-topic><option value="all">${esc(u.archive_all_topics)}</option>${topicOptions}</select></label>` +
    `<button class="archive-clear" type="button" data-archive-clear>${esc(u.archive_clear)}</button>` +
    `</form>` +
    `<p class="archive-status" data-archive-status role="status" aria-live="polite" aria-atomic="true">${esc(countText)}</p>` +
    `<p class="archive-empty" data-archive-empty hidden></p>` +
    `<div class="archive-results">${editionHtml.join("")}</div>` +
    `${paginationHtml}</div>`;

  let description = u.archive_deck;
  if (!isBase && month && pageNo >= 2) {
    const pageOf = u.archive_page_of
      .replace("{n}", String(pageNo))
      .replace("{total}", String(totalPages));
    description = `${formatMonth(month, lang)} — ${pageOf}. ${description}`;
  }

  const collection = {
    "@type": "CollectionPage",
    "@id": `${canonical}#archive`,
    url: canonical,
    name: collectionName,
    description,
    inLanguage: lang,
    isPartOf: { "@id": `${siteBase(baseUrl)}#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: entries.length,
      itemListElement: entries.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: entry.title,
        url: absoluteUrl(baseUrl, entry.url),
      })),
    },
  };
  const breadcrumb = { "@type": "BreadcrumbList", itemListElement: breadcrumbItems };
  const graph = {
    "@context": "https://schema.org",
    "@graph": [...baseGraph(baseUrl, lang), collection, breadcrumb],
  };

  let sequenceLinks = "";
  if (!isBase && month) {
    if (newerHref) {
      sequenceLinks += `<link rel="prev" href="${esc(absoluteUrl(baseUrl, newerHref))}">\n`;
    }
    if (olderHref) {
      sequenceLinks += `<link rel="next" href="${esc(absoluteUrl(baseUrl, olderHref))}">\n`;
    }
  }

  const robots =
    pageNo > 1
      ? "noindex,follow"
      : "index,follow,max-image-preview:large";

  return shell({
    lang,
    title: pageTitle,
    description,
    canonical,
    alternate,
    body,
    graph,
    site,
    activeArchive: true,
    extraStyle: ARCHIVE_STYLE,
    extraScript: ARCHIVE_SCRIPT,
    extraHead: sequenceLinks,
    collection: true,
    robots,
  });
}

export function renderArchiveRootPage(site, lang, monthPayload, opts = {}) {
  const baseUrl = opts.baseUrl || "https://eigenradar.com";
  const months = archiveMonths(site);
  const rawEntries = sortArchiveEntries(monthPayload?.entries || [], lang);
  const pages = paginateArchiveEntries(rawEntries);
  const baseMonth = months[0]?.[0] || monthPayload?.month || null;
  const pageEntries = pages[0]?.entries || [];
  const totalPages = pages[0]?.totalPages || 1;
  return renderArchivePage(lang, pageEntries, site, {
    baseUrl,
    months,
    month: baseMonth,
    pageNo: 1,
    totalPages,
    isBase: true,
  });
}

export function renderArchiveMonthPage(
  site,
  lang,
  monthPayload,
  pageNo,
  opts = {},
) {
  const baseUrl = opts.baseUrl || "https://eigenradar.com";
  const months = archiveMonths(site);
  const yearMonth = monthPayload?.month;
  const rawEntries = sortArchiveEntries(monthPayload?.entries || [], lang);
  const pages = paginateArchiveEntries(rawEntries);
  const match = pages.find((page) => page.pageNo === pageNo);
  if (!match) {
    return null;
  }
  return renderArchivePage(lang, match.entries, site, {
    baseUrl,
    months,
    month: yearMonth,
    pageNo: match.pageNo,
    totalPages: match.totalPages,
    isBase: false,
  });
}

const WRITER_HUB_LIMIT = 30; // dated columns listed before the archive link

export function renderWriterPage(payload, site, lang, opts = {}) {
  const baseUrl = opts.baseUrl || "https://eigenradar.com";
  const u = UI[lang];
  const topic = payload.desk;
  const writer = payload.writer || {};
  const writerId = text(writer.id);
  const path = writerPublicPath(lang, topic, writerId);
  const canonical = absoluteUrl(baseUrl, path);
  const alternate = absoluteUrl(
    baseUrl,
    writerPublicPath(lang === "tr" ? "en" : "tr", topic, writerId),
  );
  const writerName = text(writer.name) || writerId;
  const role = writerFocus(writer.role, lang);
  const h1Text = writerName;
  const pageTitle = `${h1Text} — Eigen Radar`;
  const avatar = avatarUrl(writer.avatar);
  const avatarHtml = avatar
    ? `<img src="${esc(avatar)}" width="64" height="64" loading="eager" decoding="async" alt="">`
    : "";
  const roleLine = [role, topicLabel(topic, lang)].filter(Boolean).join(" · ");
  const crumbsHtml =
    `<nav class="breadcrumbs" aria-label="${esc(u.breadcrumb_label)}">` +
    `<a href="/">${esc(u.home)}</a><span>/</span>` +
    `<a href="${esc(categoryPublicPath(lang, topic))}">${esc(topicLabel(topic, lang))}</a><span>/</span>` +
    `<span aria-current="page">${esc(h1Text)}</span></nav>`;

  const bodyParts = [
    '<main id="main" class="writer-hub-main wrap">',
    crumbsHtml,
    `<header class="writer-hub-header"><div class="wtop"><div class="avatar">${avatarHtml}</div><div><div class="wname"><h1>${esc(h1Text)}</h1></div><div class="wrole">${esc(roleLine)}</div></div></div>`,
    "</header>",
  ];

  const columns = [...(payload.columns || [])].sort((a, b) => {
    const dateCmp = b.date.localeCompare(a.date);
    if (dateCmp !== 0) {
      return dateCmp;
    }
    return (b.n || 1) - (a.n || 1);
  });

  // The newest column is the destination readers came for: lead with it, then the
  // dated list (capped like the reader's selector), then the archive for the rest.
  if (columns.length) {
    const latest = columns[0];
    const latestPath = articlePublicPath(lang, topic, writerId, latest.date, latest.routeSlot || 1);
    const latestTitle = localized(latest.title, lang) || writerId;
    bodyParts.push(
      `<p class="writer-latest"><a class="writer-latest-link" href="${esc(latestPath)}">${esc(latestTitle)}</a> ` +
      `<time datetime="${esc(latest.date)}">${esc(formatDate(latest.date, lang))}</time></p>`,
    );
  }
  bodyParts.push(
    `<section class="hub-group"><h2 class="hub-group-title">${esc(u.columns)}</h2>`,
  );
  if (columns.length) {
    bodyParts.push("<ul class=\"hub-list\">");
    for (const column of columns.slice(0, WRITER_HUB_LIMIT)) {
      const dateStr = column.date;
      const routeSlot = column.routeSlot || 1;
      const title = localized(column.title, lang) || writerId;
      const rPath = articlePublicPath(lang, topic, writerId, dateStr, routeSlot);
      bodyParts.push(
        `<li><a href="${esc(rPath)}">${esc(title)}</a> <time datetime="${esc(dateStr)}">${esc(dateStr)}</time></li>`,
      );
    }
    bodyParts.push("</ul>");
    if (columns.length > WRITER_HUB_LIMIT) {
      bodyParts.push(
        `<p class="hub-more"><a href="${esc(archivePublicPath(lang))}">${esc(u.archive_older)} · ${esc(u.archive)} →</a></p>`,
      );
    }
  } else {
    bodyParts.push(`<p>${esc(u.no_columns)}</p>`);
  }
  bodyParts.push("</section></main>");

  const personNode = {
    "@type": "Person",
    "@id": `${absoluteUrl(baseUrl, path)}#person`,
    name: writerName,
    description: "Yapay zekâ karakteri / AI persona — not a real person",
  };
  if (avatar) {
    personNode.image = absoluteUrl(baseUrl, avatar);
  }
  const profilePageNode = {
    "@type": "ProfilePage",
    "@id": canonical,
    url: canonical,
    name: pageTitle,
    mainEntity: personNode,
    publisher: { "@id": `${siteBase(baseUrl)}#org` },
  };
  const graph = {
    "@context": "https://schema.org",
    "@graph": [...baseGraph(baseUrl, lang), profilePageNode],
  };
  const socialImage = avatar
    ? { src: avatar, width: 256, height: 256, alt: writerName }
    : null;

  return shell({
    lang,
    title: pageTitle,
    description: "Yapay zekâ karakteri / AI persona — not a real person",
    canonical,
    alternate,
    body: bodyParts.join(""),
    graph,
    site,
    activeTopic: topic,
    collection: true,
    socialImage,
  });
}

function renderHubGroup(lang, members, heading, isBrief, topicField, baseUrl) {
  if (!members.length) {
    return null;
  }
  const limited = members.slice(0, 30);
  const itemList = [];
  const rows = [`<section class="hub-group"><h2 class="hub-group-title">${esc(heading)}</h2>`, '<ul class="hub-list">'];
  for (const member of limited) {
    const dateStr = member.date;
    let title;
    let mPath;
    if (isBrief) {
      title = localized(member.title, lang);
      mPath = briefPublicPath(lang, member.desk || member[topicField], dateStr, member.briefId);
    } else {
      title = localized(member.title, lang);
      const desk = member.desk;
      const writer = member.writer;
      mPath = articlePublicPath(
        lang,
        desk,
        writer,
        dateStr,
        member.routeSlot || 1,
      );
    }
    itemList.push(absoluteUrl(baseUrl, mPath));
    rows.push(
      `<li><a href="${esc(mPath)}">${esc(title)}</a> <time datetime="${esc(dateStr)}">${esc(dateStr)}</time></li>`,
    );
  }
  rows.push("</ul></section>");
  return { html: rows.join(""), itemList };
}

export function renderHubPage(payload, site, lang, opts = {}) {
  const baseUrl = opts.baseUrl || "https://eigenradar.com";
  const u = UI[lang];
  const hub = payload.hub || {};
  const slug = hub.slug;
  const path = hubPublicPath(lang, slug);
  const canonical = absoluteUrl(baseUrl, path);
  const alternate = absoluteUrl(baseUrl, hubPublicPath(lang === "tr" ? "en" : "tr", slug));
  const h1Text = localized(hub.title, lang);
  const intro = localized(hub.intro, lang);
  const pageTitle = `${h1Text} — Eigen Radar`;
  const crumbsHtml =
    `<nav class="breadcrumbs" aria-label="${esc(u.breadcrumb_label)}">` +
    `<a href="/">${esc(u.home)}</a><span>/</span>` +
    `<a href="${esc(hubsIndexPublicPath(lang))}">${esc(u.hubs_title)}</a><span>/</span>` +
    `<span aria-current="page">${esc(h1Text)}</span></nav>`;

  const bodyParts = [
    '<main id="main" class="hub-main wrap">',
    crumbsHtml,
    `<header class="hub-header"><h1 class="hub-title">${esc(h1Text)}</h1>`,
    `<p class="hub-intro">${esc(intro)}</p></header>`,
    '<div class="hub-groups">',
  ];

  const itemList = [];
  const briefGroup = renderHubGroup(lang, payload.briefs || [], u.hubs_briefs, true, "desk", baseUrl);
  if (briefGroup) {
    bodyParts.push(briefGroup.html);
    itemList.push(...briefGroup.itemList);
  }
  const columnGroup = renderHubGroup(
    lang,
    payload.columns || [],
    u.hubs_columns,
    false,
    "desk",
    baseUrl,
  );
  if (columnGroup) {
    bodyParts.push(columnGroup.html);
    itemList.push(...columnGroup.itemList);
  }
  bodyParts.push("</div></main>");

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...baseGraph(baseUrl, lang),
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#page`,
        url: canonical,
        name: h1Text,
        description: intro,
        inLanguage: lang,
        isPartOf: { "@id": `${siteBase(baseUrl)}#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: itemList.map((url, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url,
          })),
        },
      },
    ],
  };

  return shell({
    lang,
    title: pageTitle,
    description: intro,
    canonical,
    alternate,
    body: bodyParts.join(""),
    graph,
    site,
    robots: "index,follow",
    collection: true,
  });
}

export function renderHubsIndexPage(site, lang, opts = {}) {
  const baseUrl = opts.baseUrl || "https://eigenradar.com";
  const u = UI[lang];
  const path = hubsIndexPublicPath(lang);
  const canonical = absoluteUrl(baseUrl, path);
  const alternate = absoluteUrl(baseUrl, hubsIndexPublicPath(lang === "tr" ? "en" : "tr"));
  const h1Text = u.hubs_title;
  const pageTitle = `${h1Text} — Eigen Radar`;
  const crumbsHtml =
    `<nav class="breadcrumbs" aria-label="${esc(u.breadcrumb_label)}">` +
    `<a href="/">${esc(u.home)}</a><span>/</span>` +
    `<span aria-current="page">${esc(h1Text)}</span></nav>`;

  const hubs = site?.hubs || [];
  const activeHubs = hubs.filter((hub) => !hub.archived);
  const archivedHubs = hubs.filter((hub) => hub.archived);
  const itemList = [];

  function renderHubList(hubList) {
    const rows = ['<ul class="hubs-index-list">'];
    for (const hub of hubList) {
      const slug = hub.slug;
      const title = localized(hub.title, lang);
      const intro = localized(hub.intro, lang);
      const firstSentence = intro.includes(". ")
        ? `${intro.split(". ")[0]}.`
        : intro;
      const hPath = hubPublicPath(lang, slug);
      itemList.push(absoluteUrl(baseUrl, hPath));
      rows.push(
        `<li><a href="${esc(hPath)}">${esc(title)}</a><p>${esc(firstSentence)}</p></li>`,
      );
    }
    rows.push("</ul>");
    return rows.join("");
  }

  const bodyParts = [
    '<main id="main" class="hubs-index-main wrap">',
    crumbsHtml,
    `<header class="hubs-index-header"><h1 class="hubs-index-title">${esc(h1Text)}</h1></header>`,
    '<div class="hubs-list-container">',
  ];
  if (activeHubs.length) {
    bodyParts.push(renderHubList(activeHubs));
  }
  if (archivedHubs.length) {
    bodyParts.push(
      `<section class="hubs-archive-section"><h2>${esc(u.hubs_archive)}</h2>`,
    );
    bodyParts.push(renderHubList(archivedHubs));
    bodyParts.push("</section>");
  }
  bodyParts.push("</div></main>");

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...baseGraph(baseUrl, lang),
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#page`,
        url: canonical,
        name: h1Text,
        inLanguage: lang,
        isPartOf: { "@id": `${siteBase(baseUrl)}#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: itemList.map((url, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url,
          })),
        },
      },
    ],
  };

  return shell({
    lang,
    title: pageTitle,
    description: h1Text,
    canonical,
    alternate,
    body: bodyParts.join(""),
    graph,
    site,
    robots: "index,follow",
    collection: true,
  });
}

function videoLangBucket(entry) {
  if (!entry || typeof entry !== "object") {
    return "en";
  }
  const lang = entry.lang;
  if (lang === "tr" || lang === "en") {
    return lang;
  }
  return "en";
}

function videoId(entry) {
  const id = text(entry?.id).trim();
  return YOUTUBE_VIDEO_ID.test(id) ? id : "";
}

function videoTitle(entry, lang) {
  if (!entry || typeof entry !== "object") {
    return "";
  }
  if (lang === "tr") {
    const titleTr = text(entry.titleTr).trim();
    if (titleTr) {
      return titleTr;
    }
  }
  return text(entry.title).trim();
}

function videosForDesk(videos, lang, topic) {
  const items = videos.filter(
    (entry) => entry && entry.topic === topic && videoId(entry),
  );
  const trItems = items.filter((entry) => videoLangBucket(entry) === "tr");
  const enItems = items.filter((entry) => videoLangBucket(entry) !== "tr");
  const byDate = (a, b) =>
    text(b.publishedDate).localeCompare(text(a.publishedDate));
  trItems.sort(byDate);
  enItems.sort(byDate);
  return lang === "en" ? enItems : [...trItems, ...enItems];
}

export function renderVideosPage(videosPayload, site, lang, opts = {}) {
  const baseUrl = opts.baseUrl || "https://eigenradar.com";
  const u = UI[lang];
  const path = videosPublicPath(lang);
  const canonical = absoluteUrl(baseUrl, path);
  const alternate = absoluteUrl(baseUrl, videosPublicPath(lang === "tr" ? "en" : "tr"));
  const h1Text = u.videos_title;
  const intro = u.videos_intro;
  const pageTitle = `${h1Text} — Eigen Radar`;
  const crumbsHtml =
    `<nav class="breadcrumbs" aria-label="${esc(u.breadcrumb_label)}">` +
    `<a href="/">${esc(u.home)}</a><span>/</span>` +
    `<span aria-current="page">${esc(h1Text)}</span></nav>`;

  const bodyParts = [
    '<main id="main" class="videos-hub-main wrap">',
    crumbsHtml,
    `<header class="videos-hub-header"><h1 class="videos-hub-title">${esc(h1Text)}</h1>`,
    `<p class="videos-hub-intro">${esc(intro)}</p></header>`,
    '<div class="videos-hub-groups">',
  ];

  const itemList = [];
  const rawVideos = Array.isArray(videosPayload?.videos) ? videosPayload.videos : [];
  for (const topic of topicIds(site)) {
    const deskVideos = videosForDesk(rawVideos, lang, topic);
    if (!deskVideos.length) {
      continue;
    }
    bodyParts.push(
      `<section class="hub-group"><h2 class="hub-group-title">${esc(topicLabel(topic, lang))}</h2><ul class="hub-list">`,
    );
    for (const entry of deskVideos) {
      const title = videoTitle(entry, lang) || videoId(entry);
      const channel = text(entry.channel).trim();
      const dateStr = text(entry.publishedDate).trim();
      const id = videoId(entry);
      const embedUrl = id ? `https://www.youtube-nocookie.com/embed/${id}` : "";
      if (!embedUrl) {
        continue;
      }
      itemList.push(embedUrl);
      const channelPart = channel ? ` &mdash; ${esc(channel)}` : "";
      const datePart = dateStr
        ? ` <time datetime="${esc(dateStr)}">${esc(dateStr)}</time>`
        : "";
      bodyParts.push(
        `<li><a href="${esc(embedUrl)}" rel="noopener noreferrer external" target="_blank">${esc(title)}</a>${channelPart}${datePart}</li>`,
      );
    }
    bodyParts.push("</ul></section>");
  }
  bodyParts.push("</div></main>");

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      ...baseGraph(baseUrl, lang),
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#page`,
        url: canonical,
        name: h1Text,
        description: intro,
        inLanguage: lang,
        isPartOf: { "@id": `${siteBase(baseUrl)}#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: itemList.map((url, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url,
          })),
        },
      },
    ],
  };

  return shell({
    lang,
    title: pageTitle,
    description: intro,
    canonical,
    alternate,
    body: bodyParts.join(""),
    graph,
    site,
    robots: "index,follow",
    collection: true,
  });
}

export function renderNotFoundPage(site, opts = {}) {
  const baseUrl = opts.baseUrl || "https://eigenradar.com";
  const u = UI.en;
  const canonical = absoluteUrl(baseUrl, "/404");
  const body =
    `<div class="eyebrow">404</div><h1>${esc(u.not_found)}</h1>` +
    `<p class="deck">${esc(u.not_found_text)}</p>` +
    '<p><a class="button" href="/">Eigen Radar</a> ' +
    '<a class="button" href="/en/archive/">Search the archive</a> ' +
    '<a class="button" href="/tr/archive/">Arşivde ara</a></p>';
  const graph = {
    "@context": "https://schema.org",
    "@graph": baseGraph(baseUrl, "en"),
  };
  return shell({
    lang: "en",
    title: "Page not found — Eigen Radar",
    description: u.not_found_text,
    canonical,
    alternate: absoluteUrl(baseUrl, "/"),
    body,
    graph,
    site,
    robots: "noindex,follow",
  });
}
