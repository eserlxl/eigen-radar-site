export const FONT_PRELOAD_HTML = "<link rel=\"preload\" href=\"/assets/fonts/inter-latin.woff2\" as=\"font\" type=\"font/woff2\" crossorigin>";
export const THEME_BOOT_SCRIPT = "<script>\n(()=>{let t='dark';try{t=localStorage.getItem('theme')==='light'?'light':'dark'}catch{}\nlet s='1';try{s=localStorage.getItem('textScale')||'1'}catch{}\nif(s==='1.125'||s==='1.25')document.documentElement.dataset.textScale=s;\ndocument.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;\ndocument.querySelector('meta[name=\"theme-color\"]').content=t==='light'?'#c7d2e0':'#040711'})();\n</script>";
export const THEME_RUNTIME_SCRIPT = "<script src=\"/assets/theme.js\" defer></script>";
export const WRITER_DETAIL_STYLE = "\n.edition-symbol{display:inline;margin-inline-start:.3em}.edition-text{display:inline}@media(max-width:640px){.edition-btn .edition-symbol{display:inline;margin-inline-start:0}.edition-btn .edition-text{display:none}}@media(min-width:641px) and (max-width:1000px) and (max-height:500px) and (orientation:landscape){.edition-btn .edition-symbol{display:inline;margin-inline-start:0}.edition-btn .edition-text{display:none}}\n.page-detail{padding-top:1.75rem}.writer-reader{display:grid;grid-template-columns:minmax(0,1fr);gap:18px;align-items:start}.reader-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.reader-back{display:inline-flex;align-items:center;justify-content:center;width:max-content;min-height:44px;padding:7px 14px;border:1px solid var(--line);border-radius:8px;background:var(--card);color:var(--muted);font-family:inherit;font-size:.85rem;text-decoration:none;cursor:pointer}.reader-back:hover{border-color:var(--accent);color:var(--text)}.reader-share{margin-left:auto}.reader-share[hidden]{display:none}.reader-share.is-confirmed{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}.reader-share.is-error{border-color:var(--amber);color:var(--amber)}\n.reader-nav{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:0 0 22px}.reader-nav .nav-head{flex:0 0 auto;margin:0 4px 0 0;color:var(--muted);font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.reader-nav a{display:inline-flex;align-items:center;min-height:36px;padding:5px 12px;border:1px solid var(--line);border-radius:999px;background:var(--card);color:var(--muted);font-size:.8rem;line-height:1.3;text-decoration:none}.reader-nav .nm{color:var(--text);font-weight:600}.reader-nav .tl{display:none}.reader-nav a:hover{border-color:var(--accent);color:var(--text)}.reader-nav a[aria-current=page]{border-color:var(--accent);background:var(--accent-soft)}\n.writer-content{min-width:0}.writer-content .article-header{max-width:none}.writer-content .article-header .eyebrow{margin:0 0 .6rem}.writer-content .article-header h1{max-width:none;margin:0 0 .6rem;font-size:calc(clamp(1.9rem,4.5vw,2.75rem) * var(--text-zoom));line-height:1.15;letter-spacing:-.03em}.writer-content .deck{max-width:none;margin:0 0 1.1rem;color:var(--muted);font-size:calc(1.08rem * var(--text-zoom));line-height:1.6}.writer-content .wtop{display:flex;align-items:center;gap:12px;margin:0 0 8px}.writer-content .avatar{position:relative;flex-shrink:0;width:46px;height:46px;overflow:hidden;border-radius:50%;background:var(--accent-soft)}.writer-content .avatar::before{content:'\u03bb';position:absolute;inset:0;display:grid;place-items:center;color:var(--accent);font-size:.9rem;font-weight:800}.writer-content .avatar img{position:relative;z-index:1;display:block;width:100%;height:100%;object-fit:cover}.writer-content .wname{font-weight:700}.writer-content .wrole{color:var(--muted);font-size:.75rem}.writer-content .ai-badge{margin-left:6px;padding:1px 6px;border:1px solid var(--amber-line);border-radius:5px;color:var(--amber);font-size:.6rem;font-weight:800;letter-spacing:.08em;vertical-align:2px}.writer-content .article-body{max-width:none;color:var(--body-copy);font-size:calc(1rem * var(--text-zoom));line-height:1.75}.writer-content .article-body p{margin:0 0 17px}.writer-content .article-body h2{margin:30px 0 10px;color:var(--text);font-size:calc(1.15rem * var(--text-zoom));font-weight:750;letter-spacing:-.01em}\n.listen-row{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;margin:1.1rem 0 0;padding:.55rem 0;border-block:1px solid var(--line)}.listen-row .brief-listen[hidden]{display:none}.listen-row .text-scale-switch{min-width:2.75rem;min-height:2.75rem}.listen-row .reader-print{min-width:2.75rem;width:2.75rem;padding:0;justify-content:center}\n.listen-row .reader-share{display:inline-flex;align-items:center;gap:.35rem;width:auto;min-height:2.75rem;padding:.35rem .7rem;border-color:var(--line);border-radius:.55rem;background:transparent;color:var(--text);font-size:.8rem;font-weight:800}\n.listen-row .reader-share[hidden]{display:none}\n.listen-row .reader-share:hover{background:var(--accent-soft)}\n.listen-row .reader-share:focus-visible{outline:3px solid var(--focus);outline-offset:2px}.listen-btn{min-height:44px;margin:0;padding:6px 14px;border:1px solid var(--line);border-radius:999px;background:var(--accent-soft);color:var(--accent);font-size:.8rem;cursor:pointer}.listen-btn.speaking{background:var(--accent);color:var(--card)}.listen-rate{width:110px;background:transparent;accent-color:var(--accent)}.listen-rate-val{min-width:2.2em;color:var(--muted);font-size:.75rem;font-variant-numeric:tabular-nums}\n.editions-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:10px 0 2px}.editions-label{color:var(--muted);font-size:.82rem}.edition-btn{display:inline-flex;align-items:center;justify-content:center;min-width:44px;min-height:44px;padding:3px 12px;border:1px solid var(--line);border-radius:999px;background:var(--card);color:var(--text);font-size:.82rem;text-decoration:none}.edition-btn[aria-current=page]{background:var(--accent);color:var(--card)}\n.writer-content .references{margin-top:38px;padding-top:24px}.writer-content .references h2{margin-top:0}.writer-content .reference-list{margin-top:12px}.writer-content .related{margin-top:38px;padding-top:24px}\n.writer-content .ai-badge{border-color:var(--amber-line)}.writer-content .article-body{max-width:none;margin-inline:0;color:var(--body-copy)}\n.breadcrumbs,.writer-reader{max-width:43rem;margin-inline:auto}\n.reader-history{display:flex;align-items:center;gap:8px;min-width:0;max-width:100%}.reader-history .nav-head{display:none}.reader-history-select{max-width:100%;min-height:44px;padding:7px 12px;border:1px solid var(--line);border-radius:8px;background:var(--card);color:var(--text);font-family:inherit;font-size:.85rem;appearance:none;-webkit-appearance:none;cursor:pointer}.reader-history-select:hover{border-color:var(--accent)}.reader-history-select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.reader-history-select[hidden],.reader-history-fallback[hidden],.reader-history .nav-head[hidden]{display:none}.reader-history-fallback{color:var(--muted);font-size:.8rem}.reader-history-fallback summary{min-height:44px;padding:9px 12px;border:1px solid var(--line);border-radius:8px;background:var(--card);color:var(--text);cursor:pointer}.reader-history-fallback-links{display:flex;flex-direction:column;gap:2px;margin-top:6px}\n@media(max-width:640px){.reader-actions{gap:8px}.reader-history{flex:1 1 auto}.reader-history-select{width:100%}.writer-content .article-header h1{font-size:calc(clamp(1.55rem,6.5vw,2rem) * var(--text-zoom))}}\n\n.article-header .article-kicker{display:flex;align-items:center;gap:.45rem .75rem;flex-wrap:wrap;margin:0 0 .6rem}\n.article-header .article-kicker .eyebrow{margin:0}\n.article-kicker .hub-chips{display:flex;gap:.4rem;flex-wrap:wrap}\n.article-kicker .hub-chip{display:inline-flex;align-items:center;min-height:1.75rem;padding:.1rem .65rem;border:1px solid var(--line);border-radius:999px;color:var(--muted);font-size:.75rem;font-weight:650;line-height:1.2;text-decoration:none}\n.article-kicker .hub-chip:hover{border-color:var(--accent);color:var(--text)}\n.article-kicker .hub-chip:focus-visible{outline:3px solid var(--focus);outline-offset:2px}\n.meta .radar-stamp{display:inline;margin:0;font-size:inherit;letter-spacing:0}\n.meta .radar-stamp::before{content:\"\u00b7\";margin-inline-end:.5rem}\n.wrole .radar-stamp{display:inline;margin:0;font-size:inherit;letter-spacing:0}\n.wrole .radar-stamp::before{content:\" \u00b7 \"}\n.references h2,.related h2{margin:0 0 .75rem;color:var(--muted);font-size:.78rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}\n.reference-list{counter-reset:reference;padding-inline-start:0}\n.reference-list>li{counter-increment:reference;display:grid;grid-template-columns:1.6rem minmax(0,1fr) auto;grid-template-areas:\"n main kind\" \"n main back\" \". prim prim\";column-gap:.75rem;align-items:baseline;padding:0}\n.reference-list>li::before{content:counter(reference) \".\";grid-area:n;color:var(--muted);font-size:.86rem;font-weight:700;font-variant-numeric:tabular-nums}\n.reference-list>li+li{margin-top:1rem}\n.reference-list>li>a{grid-area:main}\n.reference-list>li>.reference-kind{grid-area:kind;justify-self:end;margin:0;padding:0;border:0;color:var(--muted);font-size:.62rem;letter-spacing:.06em;text-transform:uppercase}\n.reference-list>li>.reference-kind.internal{color:var(--accent)}\n.reference-list>li>.reference-primary{grid-area:prim}\n.reference-list>li>.reference-backlinks{grid-area:back;justify-self:end;gap:.1rem;margin:0}\n.reference-backlinks a{min-width:1.5rem;min-height:1.5rem;padding:0 .2rem;border:0;border-radius:.3rem;font-size:.75rem;text-decoration:none}\n.reference-backlinks a:hover{background:var(--accent-soft);color:var(--accent)}\n.reference-backlinks a:focus-visible{outline:3px solid var(--focus);outline-offset:1px}\n.related ul{margin:0;padding:0;list-style:none}\n.related li{margin:0;border-top:1px solid var(--line)}\n.related li:last-child{border-bottom:1px solid var(--line)}\n.related li a{display:block;padding:.75rem .15rem;color:var(--text);font-weight:600;line-height:1.4;text-decoration:none}\n.related li a:hover{color:var(--accent)}\n.related li a:focus-visible{outline:3px solid var(--focus);outline-offset:-3px}\n.related .related-all{margin-top:1rem}\n.page-rail{display:none}\n.page-rail .rail-head{display:block;margin:0 0 .5rem;color:var(--muted);font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}\n/* The right-rail date select carries its own look (the desk page's Brief select rules are not\n   loaded here); the [hidden] rule keeps it hidden until RAIL_SELECT_SCRIPT runs. */\n.page-rail .brief-date-control{display:block;margin:0 0 1rem}.page-rail .brief-date-control[hidden]{display:none}\n.page-rail .brief-date-static{display:flex;align-items:center;box-sizing:border-box;min-height:2.75rem;margin:0 0 1rem;padding:.45rem .75rem;border:1px solid var(--line);border-radius:.625rem;background:var(--soft);color:var(--text);font-size:.8rem}.page-rail .brief-date-static[hidden]{display:none}\n.page-rail .brief-date-select{width:100%;min-width:0;min-height:2.75rem;padding:.45rem .75rem;border:1px solid var(--line);border-radius:.625rem;background:var(--soft);color:var(--text);font:inherit;font-size:.8rem;cursor:pointer}\n.page-rail .brief-date-select:hover{border-color:var(--accent)}.page-rail .brief-date-select:focus-visible{outline:3px solid var(--focus);outline-offset:1px}\n.page-rail .rail-tree>.rail-node-head{margin:.35rem 0 .15rem .3rem}\n.rail-tree{margin:0 0 .4rem}\n.rail-tree>summary{display:grid;grid-template-columns:minmax(0,1fr) auto;column-gap:.5rem;padding:.35rem .3rem;border-radius:.45rem;color:var(--text);cursor:pointer;list-style:none}\n.rail-tree>summary::-webkit-details-marker{display:none}\n.rail-tree>summary::after{content:\"\u25be\";grid-column:2;grid-row:1 / span 2;align-self:center;color:var(--muted);transition:transform .15s}\n.rail-tree:not([open])>summary::after{transform:rotate(-90deg)}\n.rail-tree>summary:hover{background:var(--accent-soft)}\n.rail-tree>summary:focus-visible{outline:3px solid var(--focus);outline-offset:1px}\n.rail-tree>summary .rail-head{margin:0}\n.rail-name{font-weight:700}\n.rail-list{margin:.2rem 0 .5rem .3rem;padding:0;list-style:none;border-inline-start:1px solid var(--line)}\n.rail-list a{display:grid;gap:.1rem;margin-inline-start:-1px;padding:.35rem .4rem .35rem .7rem;border-inline-start:2px solid transparent;color:var(--muted);text-decoration:none}\n.rail-list a:hover{border-inline-start-color:var(--line);color:var(--text)}\n.rail-list a[aria-current=page]{border-inline-start-color:var(--accent);color:var(--text)}\n.rail-date,.rail-kind{color:var(--muted);font-size:.68rem;font-weight:700;letter-spacing:.02em}\n.rail-title{display:-webkit-box;overflow:hidden;-webkit-line-clamp:3;-webkit-box-orient:vertical}\n.rail-section+.rail-section,.rail-tree+.rail-section{margin-top:1.4rem}\n.rail-cards{display:grid;gap:.45rem;margin:0;padding:0;list-style:none}\n.rail-card{display:grid;grid-template-columns:auto minmax(0,1fr);gap:.55rem;align-items:start;padding:.55rem .6rem;border:1px solid var(--line);border-radius:.6rem;background:var(--card);color:var(--text);text-decoration:none}\n.rail-card.rail-brief{grid-template-columns:minmax(0,1fr)}\n.rail-card:hover{border-color:var(--accent)}\n.rail-list a:focus-visible,.rail-card:focus-visible{outline:3px solid var(--focus);outline-offset:1px}\n.page-rail .related-all{margin:.75rem 0 0;font-size:.78rem}\n.rail-thumb{position:relative;display:block;width:100%;aspect-ratio:16/9;overflow:hidden;border-radius:.35rem;background:var(--media-bg)}\n.rail-thumb img{display:block;width:100%;height:100%;object-fit:cover}\n.rail-thumb .ai-image-mark{position:absolute;z-index:2;inset-inline-start:6px;bottom:6px;padding:0 .4em;border-radius:.3em;background:rgba(10,16,24,.72);color:#fff;font:600 9px/1.5 system-ui,sans-serif;letter-spacing:.01em;white-space:nowrap;pointer-events:none}\n@media(min-width:1200px){main.wrap{max-width:88rem}\n.brief-detail-layout,.writer-reader{max-width:none;grid-template-columns:minmax(12rem,15.5rem) minmax(0,43rem) minmax(12rem,15.5rem);grid-template-areas:\"left main right\";justify-content:center;column-gap:clamp(1.75rem,3vw,3rem)}\n.writer-reader{grid-template-areas:\"left actions right\" \"left main right\"}\n.writer-reader>.reader-actions{grid-area:actions}\n.brief-detail-layout>article,.writer-reader>article{grid-area:main}\n/* The gutter and end padding keep the scrollbar off the cards and leave room after the last\n   one (operator 2026-11-27 16:39). The sticky top stays at or above the layout's start\n   (header + 1.75rem), so the rails begin level with the article. */\n.page-rail{display:block;position:sticky;top:4.75rem;align-self:start;max-height:calc(100vh - 6.5rem);overflow-y:auto;overscroll-behavior:contain;font-size:.8rem;line-height:1.4;scrollbar-width:thin;scrollbar-gutter:stable;padding-inline-end:.75rem;padding-bottom:1rem}\n.page-rail-left{grid-area:left}\n.page-rail-right{grid-area:right}\n.page-rail[hidden]{display:none}\n.brief-detail-layout:has(>.page-rail-right .rail-cards)>article>.related{display:none}\n.writer-reader:has(>.page-rail-left .rail-tree)>article>.reader-nav{display:none}\n.writer-reader:has(>.page-rail-right [data-rail-select]:not([hidden]))>.reader-actions{display:none}\n.writer-reader:has(>.page-rail-right [data-rail-select]:not([hidden])),.writer-reader:not(:has(>.reader-actions)){grid-template-areas:\"left main right\"}\n/* The rails give the way back on wide screens; phones keep the visible breadcrumb and every\n   width keeps the BreadcrumbList JSON-LD (operator 2026-11-27 09:19). Without it the Brief\n   page's 3.5rem top padding read as an empty band: both pages keep the column's 1.75rem. */\n.breadcrumbs:has(+.brief-detail-layout),.breadcrumbs:has(+.writer-reader){display:none}\n.page-detail{padding-top:1.75rem}}\n@media print{.page-rail{display:none!important}}\n@media(max-width:480px){.reference-list>li{grid-template-columns:1.6rem minmax(0,1fr);grid-template-areas:\"n main\" \". kind\" \". back\" \". prim\"}\n.reference-list>li>.reference-kind,.reference-list>li>.reference-backlinks{justify-self:start}}\n";
export const BRIEF_DETAIL_STYLE = "\n.ai-image-mark{position:absolute;z-index:2;inset-inline-start:1.25%;bottom:2.2%;padding:.1em .4em;border-radius:.35em;background:rgba(10,16,24,.72);color:#fff;font:600 clamp(6px,.85cqw,9px)/1.4 system-ui,sans-serif;letter-spacing:.01em;white-space:nowrap;pointer-events:none}\n.brief-hero{position:relative;max-width:68rem;background:var(--media-bg);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;container-type:inline-size}.brief-hero picture{display:block;aspect-ratio:16/9}.brief-hero img{display:block;width:100%;height:100%;object-fit:cover}.brief-image-toggle[hidden]{display:none}.brief-image-toggle{position:absolute;z-index:2;inset-block-start:.65rem;inset-inline-end:.65rem;display:grid;place-items:center;width:2.75rem;height:2.75rem;padding:0;border:1px solid rgba(255,255,255,.42);border-radius:999px;background:rgba(5,12,20,.62);color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.28);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);cursor:pointer;opacity:.82;transition:opacity .15s,background-color .15s,transform .15s}.brief-image-toggle:hover{background:rgba(5,12,20,.78);opacity:1;transform:scale(1.04)}.brief-image-toggle:focus-visible{outline:3px solid var(--focus);outline-offset:2px;opacity:1}.brief-image-toggle-icon{font-size:1.2rem;line-height:1;transform:translateY(-.03em)}.brief-opening{margin:1.5rem 0 0}.brief-opening .brief-hero{margin:0 0 2rem}.brief-opening-body h2{margin-top:0}.brief-hero img.brief-choice-badge{position:absolute;z-index:3;inset-block-start:.65rem;inset-inline-start:.65rem;width:3.25rem;height:3.25rem;object-fit:contain;border-radius:.55rem;filter:drop-shadow(0 2px 8px rgba(0,0,0,.5))}\n.brief-title-tools{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;margin:1.1rem 0 0;padding:.55rem 0;border-block:1px solid var(--line)}.brief-listen{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap}.brief-listen[hidden],.brief-share-button[hidden]{display:none}.brief-listen-button,.brief-share-button,.brief-title-tools .text-scale-switch{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;min-height:2.75rem;padding:.35rem .7rem;border:1px solid var(--accent);border-radius:.55rem;background:transparent;color:var(--accent);font-size:.8rem;font-weight:800;cursor:pointer}.brief-listen-button:hover,.brief-share-button:hover,.brief-title-tools .text-scale-switch:hover{background:var(--accent-soft)}.brief-listen-button:focus-visible,.brief-listen-rate:focus-visible,.brief-share-button:focus-visible,.brief-title-tools .text-scale-switch:focus-visible{outline:3px solid var(--focus);outline-offset:2px}.brief-listen-rate{width:clamp(5rem,10vw,6.5rem);min-height:2.75rem;background:transparent;accent-color:var(--accent);cursor:pointer}.brief-listen-rate-value{min-width:2.25rem;color:var(--muted);font-size:.78rem;font-variant-numeric:tabular-nums}.brief-share-button{flex-shrink:0;margin-inline-start:auto;border-color:var(--line);color:var(--text)}.brief-share-button[data-article-print]{min-width:2.75rem;width:2.75rem;padding:.35rem;gap:0;margin-inline-start:0}.brief-share-button.is-confirmed{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}.brief-share-button.is-error{border-color:var(--amber);color:var(--amber)}\n.brief-video{margin:1.25rem 0;max-width:34rem}.brief-video-frame{position:relative;aspect-ratio:16/9;border-radius:var(--radius);overflow:hidden;background:var(--media-bg)}.brief-video-frame iframe{position:absolute;inset:0;width:100%;height:100%;border:0}.brief-video figcaption{margin-top:.45rem;color:var(--muted);font-size:.82rem;line-height:1.45}.brief-detail-layout>article{min-width:0}.brief-detail-layout .article-header h1,.brief-detail-layout .article-header .deck,.brief-detail-layout .brief-opening-body{max-width:none}.breadcrumbs,.brief-detail-layout{max-width:43rem;margin-inline:auto}\n.brief-detail-layout .brief-continuation{max-width:none}\n.brief-related-columns{margin-top:2.5rem;padding:1.25rem;border:1px solid var(--line);border-radius:var(--radius);background:var(--soft)}.brief-related-columns h2{margin:0;font-size:1.2rem}.brief-related-columns-note{margin:.4rem 0 1rem;color:var(--muted);font-size:.9rem}.brief-related-column-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;margin:0;padding:0;list-style:none}.brief-related-column-link{display:grid;grid-template-columns:48px minmax(0,1fr);align-items:center;gap:.75rem;min-height:5rem;padding:.75rem;border:1px solid var(--line);border-radius:.7rem;background:var(--card);color:var(--text);text-decoration:none;transition:.15s}.brief-related-column-link:hover{transform:translateY(-2px);border-color:var(--accent)}.brief-related-column-link:focus-visible{outline:3px solid var(--focus);outline-offset:2px}.brief-related-column-avatar{display:grid;place-items:center;width:48px;height:48px;overflow:hidden;border-radius:50%;background:var(--accent-soft);color:var(--accent);font-weight:800}.brief-related-column-avatar img{display:block;width:100%;height:100%;object-fit:cover}.brief-related-column-copy{display:grid;gap:.2rem;min-width:0}.brief-related-column-name{font-size:.84rem;font-weight:800}.brief-related-column-role{overflow:hidden;color:var(--muted);font-size:.72rem;text-overflow:ellipsis;white-space:nowrap}.brief-related-column-title{font-size:.84rem;line-height:1.35}\n@media(min-width:1100px){.brief-opening.is-image-expanded .brief-hero{width:min(68rem,100vw - 3rem);max-width:none;margin-inline:calc((100% - min(68rem,100vw - 3rem)) / 2);z-index:3}}\n@media(max-width:1099px){.brief-image-toggle{display:none!important}}\n@media(max-width:640px){.brief-related-column-list{grid-template-columns:1fr}}\n\n.article-header .article-kicker{display:flex;align-items:center;gap:.45rem .75rem;flex-wrap:wrap;margin:0 0 .6rem}\n.article-header .article-kicker .eyebrow{margin:0}\n.article-kicker .hub-chips{display:flex;gap:.4rem;flex-wrap:wrap}\n.article-kicker .hub-chip{display:inline-flex;align-items:center;min-height:1.75rem;padding:.1rem .65rem;border:1px solid var(--line);border-radius:999px;color:var(--muted);font-size:.75rem;font-weight:650;line-height:1.2;text-decoration:none}\n.article-kicker .hub-chip:hover{border-color:var(--accent);color:var(--text)}\n.article-kicker .hub-chip:focus-visible{outline:3px solid var(--focus);outline-offset:2px}\n.meta .radar-stamp{display:inline;margin:0;font-size:inherit;letter-spacing:0}\n.meta .radar-stamp::before{content:\"\u00b7\";margin-inline-end:.5rem}\n.wrole .radar-stamp{display:inline;margin:0;font-size:inherit;letter-spacing:0}\n.wrole .radar-stamp::before{content:\" \u00b7 \"}\n.references h2,.related h2{margin:0 0 .75rem;color:var(--muted);font-size:.78rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}\n.reference-list{counter-reset:reference;padding-inline-start:0}\n.reference-list>li{counter-increment:reference;display:grid;grid-template-columns:1.6rem minmax(0,1fr) auto;grid-template-areas:\"n main kind\" \"n main back\" \". prim prim\";column-gap:.75rem;align-items:baseline;padding:0}\n.reference-list>li::before{content:counter(reference) \".\";grid-area:n;color:var(--muted);font-size:.86rem;font-weight:700;font-variant-numeric:tabular-nums}\n.reference-list>li+li{margin-top:1rem}\n.reference-list>li>a{grid-area:main}\n.reference-list>li>.reference-kind{grid-area:kind;justify-self:end;margin:0;padding:0;border:0;color:var(--muted);font-size:.62rem;letter-spacing:.06em;text-transform:uppercase}\n.reference-list>li>.reference-kind.internal{color:var(--accent)}\n.reference-list>li>.reference-primary{grid-area:prim}\n.reference-list>li>.reference-backlinks{grid-area:back;justify-self:end;gap:.1rem;margin:0}\n.reference-backlinks a{min-width:1.5rem;min-height:1.5rem;padding:0 .2rem;border:0;border-radius:.3rem;font-size:.75rem;text-decoration:none}\n.reference-backlinks a:hover{background:var(--accent-soft);color:var(--accent)}\n.reference-backlinks a:focus-visible{outline:3px solid var(--focus);outline-offset:1px}\n.related ul{margin:0;padding:0;list-style:none}\n.related li{margin:0;border-top:1px solid var(--line)}\n.related li:last-child{border-bottom:1px solid var(--line)}\n.related li a{display:block;padding:.75rem .15rem;color:var(--text);font-weight:600;line-height:1.4;text-decoration:none}\n.related li a:hover{color:var(--accent)}\n.related li a:focus-visible{outline:3px solid var(--focus);outline-offset:-3px}\n.related .related-all{margin-top:1rem}\n.page-rail{display:none}\n.page-rail .rail-head{display:block;margin:0 0 .5rem;color:var(--muted);font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}\n/* The right-rail date select carries its own look (the desk page's Brief select rules are not\n   loaded here); the [hidden] rule keeps it hidden until RAIL_SELECT_SCRIPT runs. */\n.page-rail .brief-date-control{display:block;margin:0 0 1rem}.page-rail .brief-date-control[hidden]{display:none}\n.page-rail .brief-date-static{display:flex;align-items:center;box-sizing:border-box;min-height:2.75rem;margin:0 0 1rem;padding:.45rem .75rem;border:1px solid var(--line);border-radius:.625rem;background:var(--soft);color:var(--text);font-size:.8rem}.page-rail .brief-date-static[hidden]{display:none}\n.page-rail .brief-date-select{width:100%;min-width:0;min-height:2.75rem;padding:.45rem .75rem;border:1px solid var(--line);border-radius:.625rem;background:var(--soft);color:var(--text);font:inherit;font-size:.8rem;cursor:pointer}\n.page-rail .brief-date-select:hover{border-color:var(--accent)}.page-rail .brief-date-select:focus-visible{outline:3px solid var(--focus);outline-offset:1px}\n.page-rail .rail-tree>.rail-node-head{margin:.35rem 0 .15rem .3rem}\n.rail-tree{margin:0 0 .4rem}\n.rail-tree>summary{display:grid;grid-template-columns:minmax(0,1fr) auto;column-gap:.5rem;padding:.35rem .3rem;border-radius:.45rem;color:var(--text);cursor:pointer;list-style:none}\n.rail-tree>summary::-webkit-details-marker{display:none}\n.rail-tree>summary::after{content:\"\u25be\";grid-column:2;grid-row:1 / span 2;align-self:center;color:var(--muted);transition:transform .15s}\n.rail-tree:not([open])>summary::after{transform:rotate(-90deg)}\n.rail-tree>summary:hover{background:var(--accent-soft)}\n.rail-tree>summary:focus-visible{outline:3px solid var(--focus);outline-offset:1px}\n.rail-tree>summary .rail-head{margin:0}\n.rail-name{font-weight:700}\n.rail-list{margin:.2rem 0 .5rem .3rem;padding:0;list-style:none;border-inline-start:1px solid var(--line)}\n.rail-list a{display:grid;gap:.1rem;margin-inline-start:-1px;padding:.35rem .4rem .35rem .7rem;border-inline-start:2px solid transparent;color:var(--muted);text-decoration:none}\n.rail-list a:hover{border-inline-start-color:var(--line);color:var(--text)}\n.rail-list a[aria-current=page]{border-inline-start-color:var(--accent);color:var(--text)}\n.rail-date,.rail-kind{color:var(--muted);font-size:.68rem;font-weight:700;letter-spacing:.02em}\n.rail-title{display:-webkit-box;overflow:hidden;-webkit-line-clamp:3;-webkit-box-orient:vertical}\n.rail-section+.rail-section,.rail-tree+.rail-section{margin-top:1.4rem}\n.rail-cards{display:grid;gap:.45rem;margin:0;padding:0;list-style:none}\n.rail-card{display:grid;grid-template-columns:auto minmax(0,1fr);gap:.55rem;align-items:start;padding:.55rem .6rem;border:1px solid var(--line);border-radius:.6rem;background:var(--card);color:var(--text);text-decoration:none}\n.rail-card.rail-brief{grid-template-columns:minmax(0,1fr)}\n.rail-card:hover{border-color:var(--accent)}\n.rail-list a:focus-visible,.rail-card:focus-visible{outline:3px solid var(--focus);outline-offset:1px}\n.page-rail .related-all{margin:.75rem 0 0;font-size:.78rem}\n.rail-thumb{position:relative;display:block;width:100%;aspect-ratio:16/9;overflow:hidden;border-radius:.35rem;background:var(--media-bg)}\n.rail-thumb img{display:block;width:100%;height:100%;object-fit:cover}\n.rail-thumb .ai-image-mark{position:absolute;z-index:2;inset-inline-start:6px;bottom:6px;padding:0 .4em;border-radius:.3em;background:rgba(10,16,24,.72);color:#fff;font:600 9px/1.5 system-ui,sans-serif;letter-spacing:.01em;white-space:nowrap;pointer-events:none}\n@media(min-width:1200px){main.wrap{max-width:88rem}\n.brief-detail-layout,.writer-reader{max-width:none;grid-template-columns:minmax(12rem,15.5rem) minmax(0,43rem) minmax(12rem,15.5rem);grid-template-areas:\"left main right\";justify-content:center;column-gap:clamp(1.75rem,3vw,3rem)}\n.writer-reader{grid-template-areas:\"left actions right\" \"left main right\"}\n.writer-reader>.reader-actions{grid-area:actions}\n.brief-detail-layout>article,.writer-reader>article{grid-area:main}\n/* The gutter and end padding keep the scrollbar off the cards and leave room after the last\n   one (operator 2026-11-27 16:39). The sticky top stays at or above the layout's start\n   (header + 1.75rem), so the rails begin level with the article. */\n.page-rail{display:block;position:sticky;top:4.75rem;align-self:start;max-height:calc(100vh - 6.5rem);overflow-y:auto;overscroll-behavior:contain;font-size:.8rem;line-height:1.4;scrollbar-width:thin;scrollbar-gutter:stable;padding-inline-end:.75rem;padding-bottom:1rem}\n.page-rail-left{grid-area:left}\n.page-rail-right{grid-area:right}\n.page-rail[hidden]{display:none}\n.brief-detail-layout:has(>.page-rail-right .rail-cards)>article>.related{display:none}\n.writer-reader:has(>.page-rail-left .rail-tree)>article>.reader-nav{display:none}\n.writer-reader:has(>.page-rail-right [data-rail-select]:not([hidden]))>.reader-actions{display:none}\n.writer-reader:has(>.page-rail-right [data-rail-select]:not([hidden])),.writer-reader:not(:has(>.reader-actions)){grid-template-areas:\"left main right\"}\n/* The rails give the way back on wide screens; phones keep the visible breadcrumb and every\n   width keeps the BreadcrumbList JSON-LD (operator 2026-11-27 09:19). Without it the Brief\n   page's 3.5rem top padding read as an empty band: both pages keep the column's 1.75rem. */\n.breadcrumbs:has(+.brief-detail-layout),.breadcrumbs:has(+.writer-reader){display:none}\n.page-detail{padding-top:1.75rem}}\n@media print{.page-rail{display:none!important}}\n@media(max-width:480px){.reference-list>li{grid-template-columns:1.6rem minmax(0,1fr);grid-template-areas:\"n main\" \". kind\" \". back\" \". prim\"}\n.reference-list>li>.reference-kind,.reference-list>li>.reference-backlinks{justify-self:start}}\n";
export const WRITER_TOOLS_SCRIPT = "<script src=\"/assets/article-tools.js\" defer></script>";
export const BRIEF_IMAGE_TOGGLE_SCRIPT = "\n<script>\n(()=>{document.querySelectorAll('[data-brief-image-toggle]').forEach(button=>{\n  const hero=button.closest('[data-brief-image]');\n  const opening=hero&&hero.closest('.brief-opening');\n  const label=button.querySelector('[data-brief-image-toggle-label]');\n  const icon=button.querySelector('[data-brief-image-toggle-icon]');\n  if(!hero||!opening||!label||!icon)return;\n  const sizeNodes=[...hero.querySelectorAll('[sizes]')];\n  const setState=expanded=>{\n    const nextLabel=expanded?button.dataset.collapseLabel:button.dataset.expandLabel;\n    opening.classList.toggle('is-image-expanded',expanded);\n    button.setAttribute('aria-expanded',String(expanded));\n    button.setAttribute('aria-label',nextLabel);\n    button.title=nextLabel;\n    label.textContent=nextLabel;\n    icon.textContent=expanded?'\u2921':'\u2922';\n    sizeNodes.forEach(node=>node.setAttribute('sizes',expanded?button.dataset.expandedSizes:button.dataset.collapsedSizes));\n  };\n  button.addEventListener('click',()=>setState(button.getAttribute('aria-expanded')!=='true'));\n  setState(false);button.hidden=false;\n});})();\n</script>\n";
export const BRIEF_LISTEN_SCRIPT = "\n<script>\n(()=>{document.querySelectorAll('[data-brief-listen]').forEach(root=>{\n  if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window))return;\n  const article=root.closest('article');\n  const button=root.querySelector('[data-brief-listen-button]');\n  const icon=root.querySelector('[data-brief-listen-icon]');\n  const label=root.querySelector('[data-brief-listen-label]');\n  const rate=root.querySelector('[data-brief-listen-rate]');\n  const output=root.querySelector('[data-brief-listen-rate-value]');\n  if(!article||!button||!icon||!label||!rate||!output)return;\n  const parts=[...article.querySelectorAll('.article-header h1,.article-header .deck,.article-body h2,.article-body p')]\n    .map(node=>{const copy=node.cloneNode(true);copy.querySelectorAll('.citation').forEach(marker=>marker.remove());return copy.textContent.trim();})\n    .filter(Boolean);\n  if(!parts.length)return;\n  const synth=window.speechSynthesis;\n  let voices=synth.getVoices();\n  if(typeof synth.addEventListener==='function'){synth.addEventListener('voiceschanged',()=>{voices=synth.getVoices();});}\n  const pickVoice=lang=>{if(!voices.length||!lang)return null;const lower=String(lang).toLowerCase();return voices.find(v=>v.lang&&v.lang.toLowerCase()===lower)||voices.find(v=>v.lang&&v.lang.toLowerCase().slice(0,2)===lower.slice(0,2))||null;};\n  const defaultRate=1.2;\n  const normalize=value=>{const parsed=Number.parseFloat(value);return Number.isFinite(parsed)&&parsed>=.5&&parsed<=2?Math.round(parsed*10)/10:defaultRate;};\n  try{rate.value=String(normalize(localStorage.getItem('ttsRate')));}catch{rate.value=String(defaultRate);}\n  const showRate=()=>{output.value=rate.value+'\u00d7';output.textContent=output.value;};\n  let run=0;\n  let speaking=false;\n  let activeIndex=0;\n  const setState=active=>{\n    speaking=active;\n    const nextLabel=active?root.dataset.stopLabel:root.dataset.listenLabel;\n    icon.textContent=active?'\u23f9':'\ud83d\udd0a';\n    label.textContent=nextLabel;\n    button.setAttribute('aria-label',nextLabel);\n    button.setAttribute('aria-pressed',String(active));\n  };\n  const finish=token=>{if(token!==run)return;setState(false);activeIndex=0;};\n  const stop=()=>{run+=1;synth.cancel();setState(false);activeIndex=0;};\n  const speakFrom=start=>{\n    const token=++run;\n    synth.cancel();\n    activeIndex=start;\n    setState(true);\n    const next=()=>{\n      if(token!==run)return;\n      if(activeIndex>=parts.length){finish(token);return;}\n      const utterance=new SpeechSynthesisUtterance(parts[activeIndex++]);\n      utterance.lang=root.dataset.lang;\n      const voice=pickVoice(root.dataset.lang);\n      if(voice)utterance.voice=voice;\n      utterance.rate=normalize(rate.value);\n      utterance.onend=next;\n      utterance.onerror=()=>finish(token);\n      try{synth.speak(utterance);}catch{finish(token);}\n    };\n    next();\n  };\n  button.addEventListener('click',()=>{if(speaking)stop();else speakFrom(0);});\n  rate.addEventListener('input',()=>{\n    rate.value=String(normalize(rate.value));showRate();\n    try{localStorage.setItem('ttsRate',rate.value);}catch{}\n  });\n  rate.addEventListener('change',()=>{if(speaking)speakFrom(Math.max(0,activeIndex-1));});\n  addEventListener('pagehide',stop);\n  showRate();setState(false);root.hidden=false;\n});})();\n</script>\n";
export const BRIEF_SHARE_SCRIPT = "\n<script>\n(()=>{document.querySelectorAll('[data-brief-share]').forEach(button=>{\n  const label=button.querySelector('[data-brief-share-label]');\n  const status=button.parentElement.querySelector('[data-brief-share-status]');\n  if(!label||!status)return;\n  const canNativeShare=typeof navigator.share==='function';\n  const canClipboard=Boolean(navigator.clipboard&&typeof navigator.clipboard.writeText==='function');\n  const canLegacyCopy=typeof document.execCommand==='function';\n  if(!canNativeShare&&!canClipboard&&!canLegacyCopy)return;\n  let resetTimer=0;\n  const restore=()=>{\n    label.textContent=button.dataset.shareLabel;\n    button.setAttribute('aria-label',button.dataset.shareLabel);\n    button.classList.remove('is-confirmed','is-error');\n    status.textContent='';\n  };\n  const feedback=(message,state)=>{\n    clearTimeout(resetTimer);\n    label.textContent=message;\n    button.setAttribute('aria-label',message);\n    button.classList.remove('is-confirmed','is-error');\n    button.classList.add(state);\n    status.textContent='';\n    requestAnimationFrame(()=>{status.textContent=message;});\n    resetTimer=setTimeout(restore,2000);\n  };\n  const copyUrl=async url=>{\n    if(canClipboard){\n      try{await navigator.clipboard.writeText(url);return;}\n      catch(error){if(!canLegacyCopy)throw error;}\n    }\n    if(!canLegacyCopy)throw new Error('copy unavailable');\n    const field=document.createElement('textarea');\n    field.value=url;field.setAttribute('readonly','');\n    field.style.cssText='position:fixed;left:-9999px;top:0;opacity:0';\n    document.body.appendChild(field);\n    let copied=false;\n    try{field.focus();field.select();copied=document.execCommand('copy');}\n    finally{field.remove();button.focus();}\n    if(!copied)throw new Error('copy failed');\n  };\n  button.addEventListener('click',async()=>{\n    const article=button.closest('article');\n    const heading=article&&article.querySelector('.article-header h1');\n    const canonical=document.querySelector('link[rel=\"canonical\"]');\n    const payload={title:heading?heading.textContent.trim():document.title,\n                   url:canonical?canonical.href:location.href};\n    try{\n      if(canNativeShare){\n        await navigator.share(payload);return;\n      }\n      await copyUrl(payload.url);\n      feedback(button.dataset.copiedLabel,'is-confirmed');\n    }catch(error){\n      if(error&&error.name==='AbortError')return;\n      if(!canNativeShare){feedback(button.dataset.failedLabel,'is-error');return;}\n      try{await copyUrl(payload.url);feedback(button.dataset.copiedLabel,'is-confirmed');}\n      catch{feedback(button.dataset.failedLabel,'is-error');}\n    }\n  });\n  button.hidden=false;\n});})();\n</script>\n";
export const EDITION_FRESHNESS_SCRIPT = "\n<script>\n(()=>{const bar=document.getElementById('editionRefreshBar');\nif(!bar||location.protocol==='file:')return;\nconst EDITION_CHECK_MS=5*60*1000;\nlet seen='',timer=0;\nconst check=async()=>{\n  // The first answer is the page's baseline even in a background tab, so an edition published\n  // before the reader first looks at the tab is still news to them.\n  if(!bar.hidden||(document.hidden&&seen))return;\n  try{\n    const res=await fetch('/edition.json',{cache:'no-store'});\n    if(!res.ok)return;\n    const edition=await res.json();\n    const n=Number(edition&&edition.n);\n    if(!edition||!/^\\d{4}-\\d{2}-\\d{2}$/.test(edition.date)||!Number.isInteger(n)||n<1)return;\n    const key=edition.date+'|'+n;\n    if(!seen){seen=key;return;}\n    if(key!==seen){bar.hidden=false;clearTimeout(timer);}\n  }catch{}\n};\n// A chained timeout, not an interval: permanent pages carry no repeating timer (test_site_pages).\nconst start=()=>{clearTimeout(timer);if(bar.hidden&&!document.hidden)timer=setTimeout(async()=>{await check();start();},EDITION_CHECK_MS);};\naddEventListener('pageshow',()=>{check();start();});\ndocument.addEventListener('visibilitychange',()=>{if(document.hidden)clearTimeout(timer);else{check();start();}});\n})();\n</script>\n";
export const ARCHIVE_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 7.5h16v12H4z\"/><path d=\"M3 4.5h18v3H3z\"/><path d=\"M9 11.5h6\"/></svg>";
export const THEME_MOON_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20.4 15.1A8.5 8.5 0 0 1 8.9 3.6a8.5 8.5 0 1 0 11.5 11.5Z\"/></svg>";
export const THEME_SUN_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"3.5\"/><path d=\"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4\"/></svg>";
export const UI = {"tr":{"skip":"Ana içeriğe geç","home":"Ana sayfa","topics":"Konu masaları","language":"Dil","theme_light":"Açık tema","theme_to_light":"Açık temaya geç","archive":"Arşiv","breadcrumb_label":"Sayfa yolu","archive_title":"Arşiv","archive_deck":"Tüm köşe yazıları ve Gündem analizleri.","archive_search":"Arşivde ara…","archive_type":"İçerik türü","archive_all_types":"Tümü","archive_columns":"Köşe Yazıları","archive_briefs":"Gündem","archive_topic":"Masa","archive_all_topics":"Tüm masalar","archive_clear":"Temizle","archive_results":"{count} sonuç","archive_result_one":"1 sonuç","archive_column":"Köşe Yazısı","archive_brief":"Gündem Analizi","archive_all_columns":"{topic} masasındaki tüm yazıları görüntüle →","archive_all_briefs":"Tüm {topic} gündemi →","archive_from":"Başlangıç","archive_to":"Bitiş","archive_newer":"Daha yeni","archive_older":"Daha eski","archive_page_of":"Sayfa {n} / {total}","archive_search_loading":"Aranıyor… {done}/{total} ay yüklendi","archive_search_partial":"Bazı aylar yüklenemedi; sonuçlar eksik olabilir.","brief_date":"Gündem analiz tarihi","podcast_title":"Sesli Özet","podcast_audio_label":"Sesli özeti oynat","podcast_play":"Sesli özeti oynat","podcast_pause":"Sesli özeti duraklat","podcast_seek":"Podcast konumu","podcast_mute":"Sesi kapat","podcast_unmute":"Sesi aç","overview_title":"Beş masada günün önemli gelişmeleri","overview_deck":"Eigen Radar; yapay zekâ, jeopolitik, ekonomi ve piyasalar, bilim ve spor gündemini Türkçe ve İngilizce izleyen bağımsız bir derlemedir.","latest":"Son Gelişmeler","agendas":"Gündem","writers_intro":"Yazarlarımız","writers_intro_prev":"Önceki yazarlar","writers_intro_next":"Sonraki yazarlar","writers_intro_status":"{total} yazardan {start}–{end} gösteriliyor","writers":"Yazarlar","more_from_writer":"Yazarın diğer yazıları","text_scale":"Metin boyutu","print_label":"Yazdır","opml_title":"Tüm akışlara tek adımda abone ol","editions_today":"Bugünkü sürümler","edition_word":"Sürüm","updated_at":"Güncellendi","columns":"Köşe Yazıları","columns_hint":"Günlük analiz ve yorumlar","column_date":"Baskı tarihi","ai_persona":"YZ","read_more":"Yazının tamamı →","references":"Kaynakça","reference":"Kaynak","news_source":"Haber kaynağı","previous_article":"Önceki yazı","primary_paper":"Birincil makale","primary_preprint":"Birincil ön baskı","return_to_citation":"Atfa dön","date_unavailable":"Yayın tarihi belirtilmemiş","retrospective_note":"† İşaretli kaynaklar arşiv yayımından sonra kaynakçaya eklendi ve geriye dönük olarak doğrulandı.","retrospective_label":"Geriye dönük doğrulandı","brief_analysis":"Analiz","brief_editors_choice":"Editörün seçimi","ai_image_mark":"YZ görseli","ai_image_credit":"Eigen Radar — yapay zekâ ile üretilmiş görsel","brief_listen":"Sesli Dinle","brief_listen_stop":"Durdur","brief_listen_rate":"Okuma hızı","brief_share":"Paylaş","brief_share_copied":"Bağlantı kopyalandı ✓","brief_share_failed":"Bağlantı kopyalanamadı","brief_image_expand":"Görseli büyüt","brief_image_collapse":"Görseli küçült","related_columns":"İlgili köşe yazıları","related_columns_note":"Bu gündem hakkında daha fazla bilgi için ilgili köşe yazılarını okuyabilirsiniz.","more_briefs":"{topic} gündemi","rail_writer_columns":"Yazarın son yazıları","rail_desk_briefs":"{topic} gündemi","rail_edition":"Bu baskıda","rail_kind_brief":"Gündem","rail_column_nav":"{topic} yazarları","all_topic":"Tüm masa gündemi","source":"Asıl kaynak","also_reported_by":"Ayrıca bildiren:","no_news":"Bu masa için henüz yayımlanmış haber yok.","no_columns":"Bu masa için henüz yayımlanmış köşe yazısı yok.","ai_label":"Yapay zekâ üretimi analiz","more":"Diğer {topic} yazıları","about":"Hakkında, yöntem & düzeltmeler","privacy":"Gizlilik Politikası","rss":"RSS","footer_rights":"© 2026 Eigen Radar — Her hakkı saklıdır.","footer_x":"X hesabımız","footer_contact":"İletişim","footer_identity":"kaynak haberciliğini konu masalarında seçen, yapılandıran ve yapay zekâ ile sentezleyen bağımsız bir editoryal derlemedir; haber ajansı değildir ve özgün saha haberciliği yapmaz. Ayrıca her masada altı köşe yazarının analiz ve yorumlarını sunar.","footer_sources":"Taranan kaynaklar: TechCrunch, The Verge, Wired, Ars Technica, VentureBeat, MIT Technology Review, CNBC, Al Jazeera ve diğerleri. Tüm haber hakları asıl kaynaklara aittir; özetler kaynağa yönlendirme amaçlıdır.","footer_notice_label":"Yapay zekâ içerik bildirimi:","footer_notice":"Bu sitedeki köşe yazıları ve Gündem analizleri bir yapay zekâ modelinin ürettiği çıktılardır; köşe yazarları yapay zekâ karakterleridir. İçerikler yalnızca bilgilendirme amaçlıdır; finansal, hukuki, tıbbi veya başka bir profesyonel tavsiye niteliği taşımaz. Doğruluğu sürekli iyileştirmeye çalışsak da yapay zekâ modelleri hatalı veya uydurma (\"halüsinasyon\") bilgiler üretebilir. Site sahibi, bu içeriklere dayanılarak alınan kararlardan doğabilecek herhangi bir zarar veya kayıptan sorumlu tutulamaz; önemli bilgileri lütfen asıl kaynaklardan doğrulayın.","footer_voice_credit":"Türkçe sesler: wite-tech'in pocket-tts-turkish modeli (<a href=\"https://creativecommons.org/licenses/by/4.0/\" rel=\"license\">CC BY 4.0</a>), Kyutai Pocket TTS tabanlı.","not_found":"Sayfa bulunamadı","not_found_text":"Aradığınız adres yayımlanmamış, taşınmış veya hatalı olabilir.","hubs_title":"Konular","hubs_briefs":"Gündem","hubs_columns":"Köşe yazıları","hubs_archive":"Arşiv","videos_title":"Videolar","videos_intro":"Eigen Radar her gün her masada günün videolarını seçerek kısa bir listeye indirger. Bu sayfa, her masadaki seçilmiş videoları kanal adı ve yayın tarihiyle birlikte YouTube üzerinde açılan gizlilik dostu oynatma bağlantıları olarak sunar. İzleme site dışında gerçekleşir; burada yalnızca o günün editoryal seçkisi yer alır.","new_edition_notice":"Yeni yayın var","new_edition_refresh":"Yenile"},"en":{"skip":"Skip to main content","home":"Home","topics":"Topic desks","language":"Language","theme_light":"Light theme","theme_to_light":"Switch to light theme","archive":"Archive","breadcrumb_label":"Breadcrumb","archive_title":"Archive","archive_deck":"All columns and Brief analyses.","archive_search":"Search the archive…","archive_type":"Content type","archive_all_types":"All","archive_columns":"Columns","archive_briefs":"Briefs","archive_topic":"Desk","archive_all_topics":"All desks","archive_clear":"Clear","archive_results":"{count} results","archive_result_one":"1 result","archive_column":"Column","archive_brief":"Brief Analysis","archive_all_columns":"View all columns from the {topic} desk →","archive_all_briefs":"View all Brief analyses from the {topic} desk →","archive_from":"From","archive_to":"To","archive_newer":"Newer","archive_older":"Older","archive_page_of":"Page {n} of {total}","archive_search_loading":"Searching… {done}/{total} months loaded","archive_search_partial":"Some months failed to load; results may be incomplete.","brief_date":"Brief analysis date","podcast_title":"Audio Brief","podcast_audio_label":"Play the audio brief","podcast_play":"Play the audio brief","podcast_pause":"Pause the audio brief","podcast_seek":"Podcast position","podcast_mute":"Mute","podcast_unmute":"Unmute","overview_title":"The day's important developments across every desk","overview_deck":"Eigen Radar is an independent Turkish and English digest covering AI, geopolitics, economics and markets, science, and sports.","latest":"Latest Stories","agendas":"Briefs","writers_intro":"Our Writers","writers_intro_prev":"Previous writers","writers_intro_next":"Next writers","writers_intro_status":"Showing writers {start}–{end} of {total}","writers":"Columnists","more_from_writer":"More from this columnist","text_scale":"Text size","print_label":"Print","opml_title":"Subscribe to every feed in one step","editions_today":"Today's editions","edition_word":"Edition","updated_at":"Updated","columns":"Columns","columns_hint":"Daily analysis and commentary","column_date":"Edition date","ai_persona":"AI","read_more":"Read the full piece →","references":"References","reference":"Reference","news_source":"News source","previous_article":"Previous article","primary_paper":"Primary paper","primary_preprint":"Primary preprint","return_to_citation":"Return to citation","date_unavailable":"Publication date unavailable","retrospective_note":"† Marked sources were added to the bibliography after archival publication and verified retrospectively.","retrospective_label":"Verified retrospectively","brief_analysis":"Analysis","brief_editors_choice":"Editor's choice","ai_image_mark":"AI image","ai_image_credit":"Eigen Radar — AI-generated image","brief_listen":"Listen","brief_listen_stop":"Stop","brief_listen_rate":"Reading speed","brief_share":"Share","brief_share_copied":"Link copied ✓","brief_share_failed":"Link could not be copied","brief_image_expand":"Enlarge image","brief_image_collapse":"Reduce image","related_columns":"Related columns","related_columns_note":"For more information on this topic, you can read the related columns.","more_briefs":"More analysis from this desk","rail_writer_columns":"Recent columns by this writer","rail_desk_briefs":"Briefs from this desk","rail_edition":"In this edition","rail_kind_brief":"Brief","rail_column_nav":"Writer and desk","all_topic":"View the full desk","source":"Original source","also_reported_by":"also reported by:","no_news":"No news has been published for this desk yet.","no_columns":"No columns have been published for this desk yet.","ai_label":"AI-generated analysis","more":"More from this desk","about":"About, methodology & corrections","privacy":"Privacy Policy","rss":"RSS","footer_rights":"© 2026 Eigen Radar — All rights reserved.","footer_x":"Our X account","footer_contact":"Contact","footer_identity":"an independent digest covering artificial intelligence, geopolitics, economics and markets, science, sports and the arts. It selects, structures and synthesizes source reporting with AI; it is not a news agency and does not conduct firsthand reporting. It also publishes analysis from six columnists on each desk.","footer_sources":"Sources scanned: TechCrunch, The Verge, Wired, Ars Technica, VentureBeat, MIT Technology Review, CNBC, Al Jazeera and others. All rights to the original stories belong to their publishers; summaries are meant to send you to the source.","footer_notice_label":"AI-generated content notice:","footer_notice":"The columns and Briefs analyses on this site are outputs of an artificial intelligence model; the columnists are AI personas. Content is provided for informational purposes only and does not constitute financial, legal, medical, or other professional advice. While we work continuously to improve accuracy, AI models can produce errors or fabricated information (\"hallucinations\"). The site owner accepts no responsibility or liability for any damage or loss arising from reliance on this content; please verify important information with the original sources.","footer_voice_credit":"Turkish voices: pocket-tts-turkish by wite-tech (<a href=\"https://creativecommons.org/licenses/by/4.0/\" rel=\"license\">CC BY 4.0</a>), based on Kyutai Pocket TTS.","not_found":"Page not found","not_found_text":"The address may be unpublished, moved, or incorrect.","hubs_title":"Topics","hubs_briefs":"Briefs","hubs_columns":"Columns","hubs_archive":"Archive","videos_title":"Videos","videos_intro":"Eigen Radar curates a daily shortlist of videos on every desk. This page lists each desk's picks with channel name and publication date as privacy-preserving playback links that open on YouTube. Viewing happens off-site — only the editorial selection for the day is listed here.","new_edition_notice":"A new edition is out","new_edition_refresh":"Refresh"}} ;
export const TOPIC_NAV_LABELS = {"ai":{"tr":"Yapay Zekâ","en":"AI"},"geopolitics":{"tr":"Jeopolitik","en":"Geopolitics"},"economics-markets":{"tr":"Ekonomi","en":"Economics"},"science":{"tr":"Bilim","en":"Science"},"sports":{"tr":"Spor","en":"Sports"},"arts":{"tr":"Sanat","en":"Arts"}} ;
export const TOPIC_COPY = {"ai":{"tr":["Yapay Zekâ","Modeller, şirketler, politika, yatırım ve güvenlik gelişmeleri."],"en":["Artificial Intelligence","Models, companies, policy, investment and safety developments."]},"geopolitics":{"tr":["Jeopolitik","Diplomasi, güvenlik, ticaret ve değişen güç dengeleri."],"en":["Geopolitics","Diplomacy, security, trade and shifting balances of power."]},"economics-markets":{"tr":["Ekonomi ve Piyasalar","Piyasalar, merkez bankaları, şirketler ve emtialar."],"en":["Economics & Markets","Markets, central banks, companies and commodities."]},"science":{"tr":["Bilim","Uzay, biyoloji, iklim, fizik ve bilimsel teknoloji."],"en":["Science","Space, biology, climate, physics and scientific technology."]},"sports":{"tr":["Spor","Futbol, basketbol, voleybol, halter, okçuluk ve motor sporları."],"en":["Sports","Football, basketball, volleyball, weightlifting, archery and motor sports."]},"arts":{"tr":["Sanat","Mimarlık, müzik, resim ve heykel, edebiyat, sinema ve sahne sanatları."],"en":["Arts","Architecture, music, painting and sculpture, literature, cinema and the performing arts."]}} ;
export const DESK_IDS = ["ai","geopolitics","economics-markets","science","sports","arts"] ;
export const DESK_CODES = ["ai","geo","eco","sci","spo","art"] ;
export const NAV_DESK_IDS = ["geopolitics","economics-markets","ai","science","sports","arts"] ;
export const MARKETS_NAV_LABELS = {"tr":"Piyasalar","en":"Markets"} ;
export const INTRADAY_LABELS = {"tr":{"1":"Sabah","2":"Öğle","3":"Akşam","4":"Gece"},"en":{"1":"Morning","2":"Midday","3":"Evening","4":"Night"}} ;
export const TR_MONTHS = ["","Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"] ;
export const EN_MONTHS = ["","January","February","March","April","May","June","July","August","September","October","November","December"] ;
export const ORG_SAME_AS = ["https://x.com/eigenradar","https://www.youtube.com/@eigenradar-tr","https://www.youtube.com/@eigenradar"] ;
export const ORG_DESCRIPTION = {"tr":"Eigen Radar, yapay zekâ, jeopolitik, ekonomi ve piyasalar, bilim, spor ve sanat gündemini Türkçe ve İngilizce izleyen kaynak bağlantılı bağımsız bir derlemedir.","en":"Eigen Radar is an independent, source-linked Turkish and English digest covering artificial intelligence, geopolitics, economics & markets, science, sports, and arts."} ;
export const ORG_FOUNDER_JOB_TITLE = {"tr":"Sorumlu Editör","en":"Editor of Record"} ;
export const NEWS_CARD_STYLE = "\n.card{height:19rem;overflow:hidden}.card:has(.also-reported){height:auto;min-height:19rem}.card h3{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.card>p{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.card .also-reported{margin-top:.35rem;color:var(--muted);font-size:.76rem;line-height:1.35}.card .also-reported a{display:inline;margin-top:0;font-size:inherit;font-weight:600}\n";
export const TR_SOURCE_NAMES = {"Anadolu Agency":"Anadolu Ajansı","Anadolu Agency (AA)":"Anadolu Ajansı"} ;
export const RENDERER_VERSION = "1";
export const MEDIA_BASE = "https://media.eigenradar.com/";

export const BASE_URL = "https://eigenradar.com";
export const LANGS = ["tr", "en"];
export const CANONICAL_TOPIC_IDS = NAV_DESK_IDS;
export const ORG_FOUNDING_DATE = "2026-07-14";
export const ORG_FOUNDER_NAME = "Şevket Eser KUBALI";
export const ORG_FOUNDER_SAME_AS = ["https://github.com/eserlxl"];

const BRIEF_ASSET =
  /^\/assets\/briefs\/\d{4}-\d{2}-\d{2}\/[a-z0-9][a-z0-9/_-]{0,159}\.[0-9a-f]{12}\.webp$/;
const AVATAR_ASSET =
  /^\/assets\/avatars\/avatar-[a-z0-9][a-z0-9-]{0,79}\.[0-9a-f]{12}\.webp$/;
const DATE_VALUE = /^\d{4}-\d{2}-\d{2}$/;
const WRITER_HISTORY_LIMIT = 30; // mirrors site_pages.WRITER_HISTORY_LIMIT
const ARTICLE_REFERENCE_PATH = new RegExp(
  "^/tr/(?:" + DESK_IDS.join("|") + ")/(?:" + DESK_CODES.join("|")
  + ")-\\d{2}/\\d{4}-\\d{2}-\\d{2}/(?:[2-9]\\d*/)?$"
);

export function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export function text(value) {
  return typeof value === "string" ? value : "";
}

export function localized(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    const chosen = value[lang];
    return typeof chosen === "string" ? chosen : "";
  }
  return "";
}

function localizedFallback(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    const other = lang === "tr" ? "en" : "tr";
    return text(value[lang]) || text(value[other]);
  }
  return text(value);
}

export function displaySourceName(value, lang) {
  return lang === "tr" ? (TR_SOURCE_NAMES[value] || value) : value;
}

export function validDate(value) {
  if (typeof value !== "string" || !DATE_VALUE.test(value)) {
    return false;
  }
  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return (
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day
  );
}

export function formatDate(value, lang) {
  if (!validDate(value)) {
    return text(value);
  }
  const [year, month, day] = value.split("-").map(Number);
  if (lang === "tr") {
    return `${day} ${TR_MONTHS[month]} ${year}`;
  }
  return `${EN_MONTHS[month]} ${day}, ${year}`;
}

export function topicLabel(topic, lang) {
  const copy = TOPIC_COPY[topic];
  return copy ? copy[lang][0] : topic;
}

export function writerFocus(value, lang) {
  const role = localized(value, lang);
  const parts = role.split(" · ");
  return parts[parts.length - 1] || "";
}

export function editionNumber(value) {
  const raw = value?.n ?? value?.edition ?? 1;
  const parsed = Number.parseInt(String(raw), 10);
  return Number.isFinite(parsed) ? parsed : 1;
}

export function editionLabel(value, lang) {
  const labels = INTRADAY_LABELS[lang] || INTRADAY_LABELS.en;
  return labels[editionNumber(value)] || String(editionNumber(value));
}

// Operator 2026-11-19 17:4x: the badge beside every writer's name says only that the writer is an AI persona.
export function writerBadge(lang) {
  return lang === "tr" ? "YZ" : "AI";
}

export function assetUrl(value) {
  return typeof value === "string" && BRIEF_ASSET.test(value) ? value : "";
}

export function mediaUrl(path) {
  return absoluteUrl(MEDIA_BASE, path);
}

export function avatarUrl(value) {
  return typeof value === "string" && AVATAR_ASSET.test(value) ? value : "";
}

export function siteBase(baseUrl = BASE_URL) {
  return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
}

export function absoluteUrl(baseUrl, path) {
  const base = siteBase(baseUrl).replace(/\/$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
}

export function categoryPublicPath(lang, topic) {
  return LANGS.includes(lang) && TOPIC_COPY[topic] ? `/${lang}/${topic}/` : null;
}

export function writerPublicPath(lang, topic, writerId) {
  return LANGS.includes(lang) && TOPIC_COPY[topic]
    ? `/${lang}/${topic}/${writerId}/`
    : null;
}

export function articlePublicPath(lang, topic, writerId, date, routeSlot = 1) {
  if (!LANGS.includes(lang) || !TOPIC_COPY[topic] || !validDate(date)) {
    return null;
  }
  const base = `/${lang}/${topic}/${writerId}/${date}/`;
  return routeSlot <= 1 ? base : `${base}${routeSlot}/`;
}

export function briefPublicPath(lang, topic, date, briefId) {
  if (
    !LANGS.includes(lang) ||
    !TOPIC_COPY[topic] ||
    !validDate(date) ||
    typeof briefId !== "string" ||
    !/[a-z]/.test(briefId)
  ) {
    return null;
  }
  return `/${lang}/${topic}/briefs/${date}/${briefId}/`;
}

export function archivePublicPath(lang) {
  return LANGS.includes(lang) ? `/${lang}/archive/` : null;
}

const YEAR_MONTH_RE = /^\d{4}-(?:0[1-9]|1[0-2])$/;

export function formatMonth(yearMonth, lang) {
  if (typeof yearMonth !== "string" || !YEAR_MONTH_RE.test(yearMonth)) {
    return text(yearMonth);
  }
  const year = Number.parseInt(yearMonth.slice(0, 4), 10);
  const month = Number.parseInt(yearMonth.slice(5, 7), 10);
  const months = lang === "tr" ? TR_MONTHS : EN_MONTHS;
  return `${months[month]} ${year}`;
}

export function archiveMonthPublicPath(lang, yearMonth, page = 1) {
  if (!LANGS.includes(lang) || !YEAR_MONTH_RE.test(yearMonth)) {
    return null;
  }
  const yyyy = yearMonth.slice(0, 4);
  const mm = yearMonth.slice(5, 7);
  const base = `/${lang}/archive/${yyyy}/${mm}/`;
  return page <= 1 ? base : `${base}page/${page}/`;
}

export function videosPublicPath(lang) {
  return LANGS.includes(lang) ? `/${lang}/videos/` : null;
}

export function aboutPublicPath(lang) {
  return LANGS.includes(lang) ? `/${lang}/about/` : null;
}

export function hubsIndexPublicPath(lang) {
  return LANGS.includes(lang) ? `/${lang}/topics/` : null;
}

export function hubPublicPath(lang, slug) {
  if (!LANGS.includes(lang) || typeof slug !== "string" || !slug.trim()) {
    return null;
  }
  return `/${lang}/topics/${slug}/`;
}

export function archiveFilteredPublicPath(lang, contentType, topic) {
  if (
    !LANGS.includes(lang) ||
    !["column", "brief"].includes(contentType) ||
    !TOPIC_COPY[topic]
  ) {
    return null;
  }
  const query = new URLSearchParams({ type: contentType, topic });
  return `${archivePublicPath(lang)}?${query}`;
}

export function safeWebUrl(value) {
  if (typeof value !== "string") {
    return "";
  }
  const trimmed = value.replace(/^[\x00-\x20]+|[\x00-\x20]+$/g, "");
  if (!trimmed || /[\t\r\n]/.test(trimmed)) {
    return "";
  }
  const match = /^([a-zA-Z][a-zA-Z0-9+.-]*):\/\/([^/?#]*)([^?#]*)(?:\?([^#]*))?(?:#.*)?$/.exec(
    trimmed,
  );
  if (!match) {
    return "";
  }
  const scheme = match[1].toLowerCase();
  const netloc = match[2];
  const path = match[3] || "";
  const query = match[4] || "";
  if ((scheme !== "http" && scheme !== "https") || !netloc || netloc.includes("@")) {
    return "";
  }
  try {
    const url = new URL(trimmed);
    if (
      !["http:", "https:"].includes(url.protocol) ||
      !url.hostname ||
      url.username ||
      url.password
    ) {
      return "";
    }
  } catch {
    return "";
  }
  return `${scheme}://${netloc}${path}${query ? `?${query}` : ""}`;
}

export function internalArticleUrl(value) {
  if (typeof value !== "string" || value !== value.trim()) {
    return "";
  }
  try {
    const url = new URL(value);
    const canonical = `https://eigenradar.com${url.pathname}`;
    if (
      url.protocol !== "https:" ||
      url.hostname !== "eigenradar.com" ||
      url.username ||
      url.password ||
      url.search ||
      url.hash ||
      value !== canonical ||
      !ARTICLE_REFERENCE_PATH.test(url.pathname)
    ) {
      return "";
    }
    return canonical;
  } catch {
    return "";
  }
}

export function localizedReferenceUrl(source, lang) {
  if (!source || typeof source !== "object") {
    return "";
  }
  const internal = source.kind === "article";
  const url = internal
    ? internalArticleUrl(source.url)
    : safeWebUrl(source.url);
  if (!url || !internal) {
    return url;
  }
  const parsed = new URL(url);
  parsed.pathname = parsed.pathname.replace(/^\/tr\//, `/${lang}/`);
  return parsed.toString();
}

function positiveDimension(value) {
  return typeof value === "number" &&
    Number.isInteger(value) &&
    value > 0 &&
    value <= 8192
    ? value
    : null;
}

export function jsonScript(value) {
  return JSON.stringify(value)
    .replace(/&/g, "\\u0026")
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function countWords(value) {
  const matches = text(value).match(/[\p{L}\p{M}\p{N}]+(?:['\u2019][\p{L}\p{M}\p{N}]+)*/gu);
  return matches ? matches.length : 0;
}

function analysisWordCount(sections, lang) {
  let total = 0;
  for (const section of sections || []) {
    for (const paragraph of section.ps || []) {
      const body = paragraph?.[lang];
      if (typeof body === "string") {
        total += countWords(body);
      }
    }
  }
  return total;
}

function briefBodyWordCount(brief, sources, lang) {
  const numbers = Object.fromEntries(
    (sources || []).map((source, index) => [source.key, index + 1]),
  );
  let total = 0;
  for (const section of brief.sections || []) {
    for (const paragraph of section.ps || []) {
      const body = localized(paragraph, lang);
      if (body) {
        total += countWords(body);
      }
      const refs = Array.isArray(paragraph.refs) ? paragraph.refs : [];
      total += refs.filter((key) => numbers[key]).length;
    }
  }
  return total;
}

function jsonldDateModified(content, datePublished) {
  const raw = text(content?.radarUpdatedAt).trim();
  if (raw) {
    const normalized = raw.endsWith("Z") ? `${raw.slice(0, -1)}+00:00` : raw;
    const parsed = new Date(normalized);
    if (!Number.isNaN(parsed.getTime())) {
      const fraction = raw.match(/\.(\d+)/)?.[1];
      const suffix = fraction
        ? `.${fraction.padEnd(6, "0").slice(0, 6)}+00:00`
        : "+00:00";
      return parsed.toISOString().replace(/\.\d{3}Z$/, suffix);
    }
  }
  return datePublished;
}

function casefoldTr(value) {
  return text(value).replace(/I/g, "ı").replace(/İ/g, "i").toLowerCase();
}

export function getRecordHubs(record, hubs) {
  const topic = record.topic || record.desk;
  if (!topic) {
    return [];
  }
  let trText = "";
  let enText = "";
  for (const field of ["title", "summary", "excerpt"]) {
    if (record[field]) {
      trText += ` ${record[field].tr || ""}`;
      enText += ` ${record[field].en || ""}`;
    }
  }
  for (const section of record.sections || []) {
    for (const field of ["heading", "h"]) {
      if (section[field]) {
        trText += ` ${section[field].tr || ""}`;
        enText += ` ${section[field].en || ""}`;
      }
    }
    for (const paragraph of section.ps || []) {
      trText += ` ${paragraph.tr || ""}`;
      enText += ` ${paragraph.en || ""}`;
    }
  }
  trText = casefoldTr(trText);
  enText = enText.toLowerCase();
  const matched = [];
  for (const hub of hubs || []) {
    if (!Array.isArray(hub.desks) || !hub.desks.includes(topic)) {
      continue;
    }
    const keywords = hub.keywords || {};
    const trKeywords = (keywords.tr || []).map(casefoldTr);
    const enKeywords = (keywords.en || []).map((item) => item.toLowerCase());
    const trHit = trKeywords.some((keyword) => keyword && trText.includes(keyword));
    const enHit = enKeywords.some((keyword) => keyword && enText.includes(keyword));
    if (trHit || enHit) {
      matched.push(hub.slug);
    }
  }
  return matched;
}

const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;

// Mirrors _brief_video_html in site_pages.py; the two renderers must agree byte for
// byte. Liveness is decided when the payload is built, never in the reader's browser.
function briefVideoHtml(payload, lang) {
  const video = payload && payload.video;
  if (!video || typeof video !== "object") {
    return "";
  }
  const videoId = String(video.id || "").trim();
  if (!YOUTUBE_ID.test(videoId)) {
    return "";
  }
  const caption = localized(video.caption, lang);
  const title = localized(video.title, lang) || caption;
  if (!caption || !title) {
    return "";
  }
  return (
    `<figure class="brief-video">`
    + `<div class="brief-video-frame">`
    + `<iframe src="https://www.youtube-nocookie.com/embed/${esc(videoId)}" `
    + `title="${esc(title)}" loading="lazy" allowfullscreen `
    + `referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`
    + `<figcaption>${esc(caption)}</figcaption></figure>`
  );
}

function citationMarkers(paragraph, sources, lang, occurrences, paragraphOccurrence) {
  const numbers = Object.fromEntries(
    (sources || []).map((source, index) => [source.key, index + 1]),
  );
  const links = [];
  const refs = Array.isArray(paragraph?.refs) ? paragraph.refs : [];
  for (const key of refs) {
    const number = numbers[key];
    if (!number) {
      continue;
    }
    const label = `${UI[lang].reference} ${number}`;
    const sourceOccurrences = occurrences[number] || (occurrences[number] = []);
    const citationId = `citation-${number}-${sourceOccurrences.length + 1}`;
    sourceOccurrences.push(citationId);
    links.push(
      `<a href="#reference-${number}" id="${citationId}" aria-label="${esc(label, true)}" data-citation-occurrence="${paragraphOccurrence}">[${number}]</a>`,
    );
  }
  return links.length
    ? `<sup class="citation">${links.join(", ")}</sup>`
    : "";
}

function referencesHtml(sources, lang, occurrences) {
  const items = [];
  let hasRetrospective = false;
  for (const [index, source] of (sources || []).entries()) {
    const number = index + 1;
    const title = localized(source.title, lang);
    const retrospective = source.retrospective === true;
    hasRetrospective = hasRetrospective || retrospective;
    const marker = retrospective
      ? `<sup class="retrospective-marker" aria-hidden="true">†</sup><span class="visually-hidden"> — ${esc(UI[lang].retrospective_label)}</span>`
      : "";
    const internal = source.kind === "article";
    const linkClass = internal ? "" : ' class="external"';
    const linkAttrs = internal
      ? ""
      : ' target="_blank" rel="noopener noreferrer external"';
    const url = localizedReferenceUrl(source, lang);
    const kindLabel = internal
      ? UI[lang].previous_article
      : UI[lang].news_source;
    const publishedDate = text(source.publishedDate).trim();
    const dateHtml = validDate(publishedDate)
      ? `<time datetime="${esc(publishedDate, true)}">${esc(formatDate(publishedDate, lang))}</time>`
      : `<span class="reference-date-unavailable">${esc(UI[lang].date_unavailable)}</span>`;
    const citationIds = occurrences[number] || [];
    const backlinkItems = citationIds.map((citationId, backlinkNumber) => {
      const occurrenceSuffix = citationIds.length > 1 ? ` ${backlinkNumber + 1}` : "";
      return `<a href="#${citationId}" aria-label="${esc(`${UI[lang].return_to_citation} ${number}${occurrenceSuffix}`, true)}">↩${citationIds.length > 1 ? backlinkNumber + 1 : ""}</a>`;
    });
    const backlinks = backlinkItems.length
      ? `<span class="reference-backlinks">${backlinkItems.join("")}</span>`
      : "";
    let primaryHtml = "";
    const primary = source.primary;
    if (primary && typeof primary === "object") {
      const primaryUrl = safeWebUrl(primary.url);
      const primaryTitle = localized(primary.title, lang);
      const primaryName = text(primary.name).trim();
      const primaryDate = text(primary.publishedDate).trim();
      if (
        primaryUrl &&
        primaryTitle &&
        primaryName &&
        validDate(primaryDate) &&
        ["paper", "preprint"].includes(primary.kind)
      ) {
        const primaryLabel =
          primary.kind === "preprint"
            ? UI[lang].primary_preprint
            : UI[lang].primary_paper;
        primaryHtml =
          `<div class="reference-primary"><span class="reference-kind">${esc(primaryLabel)}</span>` +
          `<a class="external" href="${esc(primaryUrl, true)}" target="_blank" rel="noopener noreferrer external">` +
          `<span class="reference-heading"><strong>${esc(primaryName)}</strong>` +
          `<span aria-hidden="true">·</span>` +
          `<time datetime="${esc(primaryDate, true)}">${esc(formatDate(primaryDate, lang))}</time></span>` +
          `<cite>${esc(primaryTitle)}</cite></a></div>`;
      }
    }
    items.push(
      `<li id="reference-${number}" tabindex="-1">` +
      `<span class="reference-kind${internal ? " internal" : ""}">${esc(kindLabel)}</span>` +
      `<a${linkClass} href="${esc(url, true)}"${linkAttrs}>` +
      `<span class="reference-heading"><strong>${esc(source.name)}</strong>` +
      `<span aria-hidden="true">·</span>${dateHtml}</span>` +
      `<cite>${esc(title)}${marker}</cite></a>${primaryHtml}${backlinks}</li>`,
    );
  }
  const note = hasRetrospective
    ? `<p class="references-note">${esc(UI[lang].retrospective_note)}</p>`
    : "";
  return (
    `<section class="references" id="references" aria-labelledby="references-title">` +
    `<h2 id="references-title">${esc(UI[lang].references)}</h2>` +
    `<ol class="reference-list">${items.join("")}</ol>${note}</section>`
  );
}

function radarStamp(record, lang, { includeDate = false, contextDate = null } = {}) {
  if (!record || typeof record !== "object") {
    return "";
  }
  const updated = text(record.radarUpdatedAt).trim();
  const field = updated ? "radarUpdatedAt" : "radarPublishedAt";
  const raw = text(record[field]).trim();
  if (!raw) {
    return "";
  }
  const normalized = raw.endsWith("Z") ? `${raw.slice(0, -1)}+00:00` : raw;
  const parsed = new Date(normalized);
  if (Number.isNaN(parsed.getTime())) {
    return "";
  }
  const locale = lang === "tr" ? "tr-TR" : "en-GB";
  const timeZone = lang === "tr" ? "Europe/Istanbul" : "UTC";
  const dateValue =
    contextDate || (typeof record.date === "string" ? record.date : null);
  const publishedDate = parsed.toLocaleDateString("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  let showDate = includeDate;
  if (dateValue && publishedDate !== dateValue) {
    showDate = true;
  }
  const label = field === "radarUpdatedAt" ? `${esc(UI[lang].updated_at)} ` : "";
  const datePrefix = showDate
    ? `${esc(formatDate(publishedDate, lang))} · `
    : "";
  const zone = lang === "tr" ? "TSİ" : "UTC";
  const timeText = parsed.toLocaleTimeString(locale, {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return (
    `<small class="radar-stamp"><time datetime="${esc(raw, true)}">` +
    `${label}${datePrefix}${timeText} ${zone}</time></small>`
  );
}

function itemTags(item) {
  const tags = [];
  const seen = new Set();
  const add = rawTag => {
    const t = text(rawTag);
    if (t && !seen.has(t)) {
      seen.add(t);
      tags.push(t);
    }
  };
  if (item && typeof item === "object") {
    add(item.tag);
    if (Array.isArray(item.tags)) {
      for (const t of item.tags) {
        add(t);
      }
    }
    if (Array.isArray(item.alsoReported)) {
      for (const other of item.alsoReported) {
        if (other && typeof other === "object") {
          add(other.tag);
          if (Array.isArray(other.tags)) {
            for (const t of other.tags) {
              add(t);
            }
          }
        }
      }
    }
  }
  return tags;
}

function itemCorroborators(item) {
  if (!item || typeof item !== "object" || !Array.isArray(item.alsoReported)) {
    return [];
  }
  const out = [];
  const seenUrls = new Set();
  for (const entry of item.alsoReported) {
    if (!entry || typeof entry !== "object") {
      continue;
    }
    const url = safeWebUrl(entry.url);
    if (!url || seenUrls.has(url)) {
      continue;
    }
    seenUrls.add(url);
    const normalized = {
      src: text(entry.src),
      url,
      title: entry.title,
      summary: entry.summary,
    };
    const entryTag = text(entry.tag);
    if (entryTag) {
      normalized.tag = entryTag;
    }
    out.push(normalized);
  }
  return out;
}

export function corroboratorFoldPlan(newsItems, latestBriefs){
  const items = Array.isArray(newsItems) ? newsItems.filter(n => n && typeof n === 'object') : [];
  const txt = v => (typeof v === 'string' ? v : '');
  const refKeyRe = /^[a-z][a-z0-9-]{0,63}$/;
  const safeWebUrl = value => {
    if (typeof value !== 'string') return '';
    const trimmed = value.replace(/^[\x00-\x20]+|[\x00-\x20]+$/g, '');
    if (!trimmed || /[\t\r\n]/.test(trimmed)) return '';
    const match = /^([a-zA-Z][a-zA-Z0-9+.-]*):\/\/([^/?#]*)([^?#]*)(?:\?([^#]*))?(?:#.*)?$/.exec(trimmed);
    if (!match) return '';
    const scheme = match[1].toLowerCase();
    const netloc = match[2];
    const path = match[3] || '';
    const query = match[4] || '';
    if ((scheme !== 'http' && scheme !== 'https') || !netloc || netloc.includes('@')) return '';
    try {
      const url = new URL(trimmed);
      if (!['http:', 'https:'].includes(url.protocol) || !url.hostname || url.username || url.password) return '';
    } catch {
      return '';
    }
    return `${scheme}://${netloc}${path}${query ? `?${query}` : ''}`;
  };
  const briefCorroborationPairs = brief => {
    if (!brief || typeof brief !== 'object' || !Array.isArray(brief.sources) || brief.sources.length < 2) return [];
    const byKey = new Map();
    for (const source of brief.sources){
      if (!source || typeof source !== 'object') continue;
      if (source.kind !== 'news') continue;
      const key = source.key;
      if (typeof key !== 'string' || !refKeyRe.test(key) || byKey.has(key)) continue;
      const url = safeWebUrl(source.url);
      if (!url) continue;
      byKey.set(key, {
        source,
        url,
        name: txt(source.name),
      });
    }
    if (byKey.size < 2) return [];
    let paragraphRefSets = null;
    if (Array.isArray(brief.sections)){
      paragraphRefSets = [];
      for (const section of brief.sections){
        if (!section || typeof section !== 'object' || !Array.isArray(section.ps)) continue;
        for (const paragraph of section.ps){
          if (!paragraph || typeof paragraph !== 'object' || !Array.isArray(paragraph.refs)) continue;
          paragraphRefSets.push(new Set(paragraph.refs.filter(ref => typeof ref === 'string')));
        }
      }
    }
    const pairs = [];
    const seenPairs = new Set();
    for (const source of brief.sources){
      if (!source || typeof source !== 'object' || !('corroborates' in source)) continue;
      const key = source.key;
      const targetKey = source.corroborates;
      if (
        typeof key !== 'string' ||
        typeof targetKey !== 'string' ||
        !refKeyRe.test(key) ||
        !refKeyRe.test(targetKey) ||
        key === targetKey
      ) continue;
      const own = byKey.get(key);
      const target = byKey.get(targetKey);
      if (!own || !target) continue;
      if ('corroborates' in target.source) continue;
      const ownName = own.name.toLowerCase();
      const targetName = target.name.toLowerCase();
      if (ownName && targetName && ownName === targetName) continue;
      if (
        paragraphRefSets !== null &&
        !paragraphRefSets.some(refSet => refSet.has(key) && refSet.has(targetKey))
      ) continue;
      const pairKey = `${target.url}\n${own.url}`;
      if (target.url !== own.url && !seenPairs.has(pairKey)){
        seenPairs.add(pairKey);
        pairs.push([target.url, own.url]);
      }
    }
    return pairs;
  };
  const markedPairs = [];
  for (const brief of (Array.isArray(latestBriefs) ? latestBriefs : [])){
    if (!brief || typeof brief !== 'object') continue;
    const pairs = briefCorroborationPairs(brief);
    if (!pairs.length) continue;
    const briefTopic = txt(brief.topic) || 'ai';
    const briefDate = txt(brief.editionDate || brief.date);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(briefDate) || briefDate.startsWith('0000') ||
        !Number.isFinite(Date.parse(briefDate)) || new Date(briefDate).toISOString().slice(0, 10) !== briefDate) continue;
    const pairUrls = new Set();
    for (const [primaryUrl, corroboratorUrl] of pairs){
      pairUrls.add(primaryUrl);
      pairUrls.add(corroboratorUrl);
    }
    const matchedByUrl = new Map();
    for (let idx = 0; idx < items.length; idx += 1){
      const item = items[idx];
      const itemTopic = txt(item.topic) || 'ai';
      if (itemTopic !== briefTopic) continue;
      const itemDate = txt(item.editionDate || item._edition_date);
      if (itemDate !== briefDate) continue;
      const itemUrl = safeWebUrl(item.url);
      if (itemUrl && pairUrls.has(itemUrl) && !matchedByUrl.has(itemUrl)){
        matchedByUrl.set(itemUrl, idx);
      }
    }
    if (matchedByUrl.size < 2) continue;
    for (const [primaryUrl, corroboratorUrl] of pairs){
      const rawPrimaryIdx = matchedByUrl.get(primaryUrl);
      const rawOtherIdx = matchedByUrl.get(corroboratorUrl);
      if (rawPrimaryIdx === undefined || rawOtherIdx === undefined) continue;
      const primarySrc = txt(items[rawPrimaryIdx].src).toLowerCase();
      const otherSrc = txt(items[rawOtherIdx].src).toLowerCase();
      if (primarySrc && otherSrc && primarySrc === otherSrc) continue;
      markedPairs.push([rawPrimaryIdx, rawOtherIdx]);
    }
  }
  markedPairs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const key = item => [txt(item.topic) || 'ai', txt(item.editionDate || item._edition_date), safeWebUrl(item.url)];
  const leader = items.map((_, idx) => idx);
  const leaderOf = idx => {
    while (leader[idx] !== idx){
      leader[idx] = leader[leader[idx]];
      idx = leader[idx];
    }
    return idx;
  };
  const plan = [];
  for (const [rawA, rawB] of markedPairs){
    const a = leaderOf(rawA), b = leaderOf(rawB);
    if (a !== b){
      plan.push([key(items[a]), key(items[b])]);
      leader[b] = a;
    }
  }
  return plan;
}

export function foldCorroboratingNews(newsItems, briefs = [], foldPlan = null) {
  const items = Array.isArray(newsItems)
    ? newsItems.filter(item => item && typeof item === "object")
    : [];
  if (items.length < 2) {
    return [...items];
  }
  const foldedIndices = new Set();
  const corroboratorsByPrimary = new Map();
  const tagsByPrimary = new Map();
  const plan = foldPlan === null ? corroboratorFoldPlan(items, briefs) : foldPlan;
  const key = item => JSON.stringify([text(item.topic) || "ai", text(item.editionDate || item._edition_date), safeWebUrl(item.url)]);
  const indices = new Map();
  items.forEach((item, idx) => { if (!indices.has(key(item))) indices.set(key(item), idx); });
  const markedPairs = plan.map(([a, b]) => [indices.get(JSON.stringify(a)), indices.get(JSON.stringify(b))])
    .filter(([a, b]) => a !== undefined && b !== undefined);
  for (const [primaryIdx, otherIdx] of markedPairs) {
    const primaryItem = items[primaryIdx];
    const otherItem = items[otherIdx];
    if (!corroboratorsByPrimary.has(primaryIdx)) {
      corroboratorsByPrimary.set(primaryIdx, itemCorroborators(primaryItem));
    }
    if (!tagsByPrimary.has(primaryIdx)) {
      tagsByPrimary.set(primaryIdx, itemTags(primaryItem));
    }
    const bucket = corroboratorsByPrimary.get(primaryIdx);
    const tagBucket = tagsByPrimary.get(primaryIdx);
    const seenUrls = new Set(bucket.map(entry => entry.url));
    const primaryCardUrl = safeWebUrl(primaryItem.url);
    if (primaryCardUrl) {
      seenUrls.add(primaryCardUrl);
    }
    foldedIndices.add(otherIdx);
    const otherCardUrl = safeWebUrl(otherItem.url);
    if (otherCardUrl && !seenUrls.has(otherCardUrl)) {
      seenUrls.add(otherCardUrl);
      const entry = {
        src: text(otherItem.src),
        url: otherCardUrl,
        title: otherItem.title,
        summary: otherItem.summary,
      };
      const otherTag = text(otherItem.tag);
      if (otherTag) {
        entry.tag = otherTag;
      }
      bucket.push(entry);
    }
    const otherCorroborators = corroboratorsByPrimary.has(otherIdx)
      ? corroboratorsByPrimary.get(otherIdx)
      : itemCorroborators(otherItem);
    corroboratorsByPrimary.delete(otherIdx);
    for (const sub of otherCorroborators) {
      const subUrl = safeWebUrl(sub.url);
      if (!subUrl || seenUrls.has(subUrl)) {
        continue;
      }
      seenUrls.add(subUrl);
      bucket.push(sub);
    }
    const otherTags = tagsByPrimary.has(otherIdx)
      ? tagsByPrimary.get(otherIdx)
      : itemTags(otherItem);
    tagsByPrimary.delete(otherIdx);
    for (const t of otherTags) {
      if (t && !tagBucket.includes(t)) {
        tagBucket.push(t);
      }
    }
  }
  if (foldedIndices.size === 0 && corroboratorsByPrimary.size === 0) {
    return [...items];
  }
  const folded = [];
  for (let idx = 0; idx < items.length; idx += 1) {
    if (foldedIndices.has(idx)) {
      continue;
    }
    const item = items[idx];
    const corroborators = corroboratorsByPrimary.get(idx);
    if (corroborators && corroborators.length > 0) {
      const merged = {
        ...item,
        alsoReported: [...corroborators],
      };
      const mergedTags = tagsByPrimary.get(idx) || itemTags(merged);
      if (mergedTags && mergedTags.length > 0) {
        merged.tags = [...mergedTags];
      }
      folded.push(merged);
    } else {
      folded.push(item);
    }
  }
  return folded;
}

export function renderNewsCard(item, lang, index = 0) {
  const u = UI[lang];
  const rawSource =
    text(item?.src) || (lang === "tr" ? "Bilinmeyen kaynak" : "Unknown source");
  const source = displaySourceName(rawSource, lang);
  const url = safeWebUrl(item?.url);
  const title = localizedFallback(item?.title, lang) || source;
  const summary = localizedFallback(item?.summary, lang);
  const displayDate = localizedFallback(item?.date, lang);
  const editionDate = text(item?.editionDate || item?._edition_date);
  let dateHtml = "";
  if (displayDate) {
    dateHtml = validDate(editionDate)
      ? `<time datetime="${esc(editionDate, true)}">${esc(displayDate)}</time>`
      : esc(displayDate);
  }
  const sourceHtml = url
    ? `<a class="source external" href="${esc(url, true)}" target="_blank" rel="noopener noreferrer external">${esc(source)}</a>`
    : esc(source);
  const alsoReported = Array.isArray(item?.alsoReported) ? item.alsoReported : [];
  const alsoLinks = [];
  for (const other of alsoReported) {
    if (!other || typeof other !== "object") {
      continue;
    }
    const otherUrl = safeWebUrl(other.url);
    const otherSrc =
      text(other.src) || (lang === "tr" ? "Bilinmeyen kaynak" : "Unknown source");
    const otherLabel = displaySourceName(otherSrc, lang);
    if (otherUrl) {
      alsoLinks.push(
        `<a class="external" href="${esc(otherUrl, true)}" target="_blank" rel="noopener noreferrer external">${esc(otherLabel)}</a>`,
      );
    } else if (otherLabel) {
      alsoLinks.push(esc(otherLabel));
    }
  }
  const alsoHtml = alsoLinks.length
    ? `\n<div class="also-reported"><span>${esc(u.also_reported_by)}</span> ${alsoLinks.join(", ")}</div>`
    : "";
  const stamp = radarStamp(item, lang, {
    contextDate: validDate(editionDate) ? editionDate : null,
  });
  const sourceCta = url
    ? `<a class="external" href="${esc(url, true)}" target="_blank" rel="noopener noreferrer external">${esc(u.source)}</a>`
    : "";
  return `<article class="card">
<div class="meta">${sourceHtml}${dateHtml ? `<span>·</span>${dateHtml}` : ""}</div>
<h3>${esc(title)}</h3><p>${esc(summary)}</p>${alsoHtml}${stamp}
${sourceCta}
</article>`;
}

export function renderNewsStream(newsItems, briefs, lang, { topic = null, foldPlan = null } = {}) {
  const u = UI[lang];
  let items = Array.isArray(newsItems)
    ? newsItems.filter(item => item && typeof item === "object")
    : [];
  if (topic !== null && topic !== undefined) {
    items = items.filter(item => (text(item.topic) || "ai") === topic);
  }
  const folded = foldCorroboratingNews(items, briefs, foldPlan);
  if (folded.length === 0) {
    return `<p class="empty">${esc(u.no_news)}</p>`;
  }
  return folded.map((item, idx) => renderNewsCard(item, lang, idx)).join("");
}

function renderArchiveLink(lang, { active = false } = {}) {
  const current = active ? ' aria-current="page"' : "";
  return (
    `<a class="archive-link" href="${archivePublicPath(lang)}"${current}>` +
    `${ARCHIVE_ICON}<span class="archive-label">${esc(UI[lang].archive)}</span></a>`
  );
}

function renderTextScaleSwitch(lang) {
  return (
    '<button class="text-scale-switch" type="button" ' +
    `aria-label="${esc(UI[lang].text_scale, true)}" ` +
    `title="${esc(UI[lang].text_scale, true)}" data-text-scale-switch>A</button>`
  );
}

function renderThemeSwitch(lang) {
  return (
    '<button class="theme-switch" type="button" role="switch" aria-checked="false" ' +
    `aria-label="${esc(UI[lang].theme_light, true)}" ` +
    `title="${esc(UI[lang].theme_to_light, true)}" data-theme-switch>` +
    '<span class="theme-switch-thumb" aria-hidden="true">' +
    `<span class="theme-switch-icon moon">${THEME_MOON_ICON}</span>` +
    `<span class="theme-switch-icon sun">${THEME_SUN_ICON}</span>` +
    "</span></button>"
  );
}

// Mirrors site_pages.desk_label: {topic} becomes the desk's display name.
function deskLabel(lang, key, desk) {
  return UI[lang][key].replace("{topic}", topicLabel(desk, lang));
}

function relatedArchiveCta(lang, topic, contentType) {
  const path = archiveFilteredPublicPath(lang, contentType, topic);
  if (!path) {
    return "";
  }
  const key = contentType === "column" ? "archive_all_columns" : "archive_all_briefs";
  const label = deskLabel(lang, key, topic);
  return `<p class="related-all"><a href="${esc(path, true)}">${esc(label)}</a></p>`;
}

export function baseGraph(baseUrl, lang) {
  const root = siteBase(baseUrl);
  return [
    {
      "@type": "Organization",
      "@id": `${root}#org`,
      name: "Eigen Radar",
      url: root,
      sameAs: ORG_SAME_AS,
      foundingDate: ORG_FOUNDING_DATE,
      description: ORG_DESCRIPTION[lang],
      founder: {
        "@type": "Person",
        name: ORG_FOUNDER_NAME,
        jobTitle: ORG_FOUNDER_JOB_TITLE[lang],
        sameAs: ORG_FOUNDER_SAME_AS,
      },
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(baseUrl, "/assets/icon-512.png"),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${root}#website`,
      name: "Eigen Radar",
      url: root,
      inLanguage: ["tr", "en"],
      publisher: { "@id": `${root}#org` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${absoluteUrl(baseUrl, archivePublicPath(lang))}?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];
}

function topicIds(site) {
  if (Array.isArray(site?.topicIds) && site.topicIds.length) {
    return site.topicIds.filter((topic) => site.desks?.[topic]);
  }
  return CANONICAL_TOPIC_IDS.filter((topic) => site?.desks?.[topic]);
}

function writerById(site) {
  const map = new Map();
  for (const writer of site?.writers || []) {
    if (writer?.id) {
      map.set(writer.id, writer);
    }
  }
  return map;
}

function briefPicture(brief, lang, sizes, { eager = false, title = "" } = {}) {
  const image = brief?.image;
  if (!image || typeof image !== "object") {
    return "";
  }
  const width = positiveDimension(image.width);
  const height = positiveDimension(image.height);
  const variants = {};
  for (const raw of image.variants || []) {
    if (!raw || typeof raw !== "object") {
      continue;
    }
    const variantWidth = positiveDimension(raw.width);
    const src = assetUrl(raw.src);
    if (variantWidth && src && !(variantWidth in variants)) {
      variants[variantWidth] = src;
    }
  }
  const fallback = assetUrl(image.src);
  if (!(width && height && width * 9 === height * 16 && Object.keys(variants).length && fallback)) {
    return "";
  }
  const ordered = Object.entries(variants).sort((a, b) => Number(a[0]) - Number(b[0]));
  const [lastWidth, lastSrc] = ordered[ordered.length - 1] || [];
  if (Number(lastWidth) !== width || lastSrc !== fallback) {
    return "";
  }
  const srcset = ordered.map(([variantWidth, src]) => `${src} ${variantWidth}w`).join(", ");
  const alt = localized(image.alt, lang) || localized(brief.title, lang);
  const titleAttr = title ? ` title="${esc(title, true)}"` : "";
  const loading = eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';
  return (
    `<picture><source type="image/webp" srcset="${esc(srcset, true)}" sizes="${esc(sizes, true)}">` +
    `<img src="${esc(fallback, true)}" srcset="${esc(srcset, true)}" sizes="${esc(sizes, true)}" ` +
    `width="${width}" height="${height}" ${loading} decoding="async" alt="${esc(alt, true)}"${titleAttr}></picture>`
  );
}

// Rail link validation mirrors site_pages.article_public_path / brief_public_path (SAFE_SEGMENT,
// BRIEF_ID), so an unsafe or missing id gives the same "#" or dropped card in both renderers.
const RAIL_SAFE_SEGMENT = /^[a-z0-9][a-z0-9._-]{0,79}$/;
const RAIL_BRIEF_ID = /^[a-z0-9][a-z0-9-]{0,79}$/;

function railArticlePath(lang, desk, writer, date, slot) {
  return typeof writer === "string" && RAIL_SAFE_SEGMENT.test(writer)
    ? articlePublicPath(lang, desk, writer, date, slot) : null;
}

function railBriefPath(lang, desk, date, id) {
  return typeof id === "string" && RAIL_BRIEF_ID.test(id)
    ? briefPublicPath(lang, desk, date, id) : null;
}

// Mirrors site_pages._rail_items / _rail_object.
function railItems(value) {
  return Array.isArray(value)
    ? value.filter((item) => item && typeof item === "object" && !Array.isArray(item)) : [];
}

function railObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

function railDimension(value) {
  return Number.isInteger(value) && value > 0 && value <= 8192 ? value : null;
}

// Mirrors site_pages._rail_thumb_html.
function railThumbHtml(lang, thumb) {
  const value = railObject(thumb);
  const src = assetUrl(value.src);
  const width = railDimension(value.width);
  const height = railDimension(value.height);
  if (!(src && width && height)) {
    return "";
  }
  return `<span class="rail-thumb"><img src="${esc(src)}" ` +
    `width="${width}" height="${height}" loading="lazy" decoding="async" alt="">` +
    `<span class="ai-image-mark">${esc(UI[lang].ai_image_mark)}</span></span>`;
}

// Mirrors site_pages._rail_brief_cards: Brief cards (title, then the thumbnail) and the desk
// archive link.
function railBriefCards(lang, desk, refs, heading) {
  const cards = [];
  for (const ref of railItems(refs)) {
    const path = railBriefPath(lang, desk, ref.date, ref.id);
    if (!path) {
      continue;
    }
    const title = localizedFallback(ref.title, lang) || text(ref.id);
    const thumbHtml = railThumbHtml(lang, ref.thumb);
    const cardClass = thumbHtml ? "rail-card rail-brief has-thumb" : "rail-card rail-brief";
    cards.push(
      `<li><a class="${cardClass}" href="${esc(path)}">` +
      `<span class="rail-title">${esc(title)}</span>${thumbHtml}</a></li>`,
    );
  }
  if (!cards.length) {
    return "";
  }
  return `<section class="rail-section"><h2 class="rail-head">${esc(heading)}</h2>` +
    `<ul class="rail-cards">${cards.join("")}</ul>` +
    `${relatedArchiveCta(lang, desk, "brief")}</section>`;
}

// Mirrors site_pages.INTRADAY_ICONS, RAIL_EDITIONS and RAIL_SELECT_SCRIPT.
const INTRADAY_ICONS = {"1": "☕", "2": "☀️", "3": "🕯️", "4": "🌙"};
const RAIL_EDITIONS = 30;
const RAIL_SELECT_SCRIPT = "<script>(()=>{document.querySelectorAll('[data-rail-select]').forEach(control=>{const select=control.querySelector('select');if(!select)return;select.addEventListener('change',()=>{if(select.value)location.assign(select.value);});addEventListener('pageshow',()=>{[...select.options].forEach(option=>{option.selected=option.defaultSelected;});});const rail=control.closest('.page-rail');if(rail){rail.hidden=false;rail.querySelectorAll('[data-rail-static]').forEach(node=>{node.hidden=true;});}control.hidden=false;});})();</script>";

// Mirrors site_pages._rail_edition_select.
function railEditionSelect(lang, desk, payload) {
  const u = UI[lang];
  const options = [];
  for (const entry of railItems(payload.railEditions)) {
    const { date, n } = entry;
    if (!(validDate(date) && Number.isInteger(n) && Object.hasOwn(INTRADAY_ICONS, n))) continue;
    const path = railBriefPath(lang, desk, date, entry.id);
    if (!path) continue;
    const dateText = formatDate(date, lang);
    const selected = date === payload.date && n === payload.n ? " selected" : "";
    const spoken = `${dateText} · ${editionLabel({ n }, lang)}`;
    options.push(
      `<option value="${esc(path)}"${selected} aria-label="${esc(spoken)}">` +
      `${esc(`${dateText} ${INTRADAY_ICONS[n]}`)}</option>`,
    );
    if (options.length === RAIL_EDITIONS) break;
  }
  const archive = archiveFilteredPublicPath(lang, "brief", desk);
  if (!options.length || !archive) return "";
  options.push(`<option value="${esc(archive)}">${esc(`${u.archive_older} · ${u.archive}`)}</option>`);
  return railSelect(u.brief_date, options);
}

// Mirrors site_pages._rail_history_select.
function railHistorySelect(lang, desk, payload) {
  const u = UI[lang];
  const history = railItems(railObject(payload.readerNav).history);
  if (history.length < 2) return "";
  const shown = history.slice(0, WRITER_HISTORY_LIMIT);
  if (!shown.some((candidate) => candidate.date === payload.date)) {
    shown.push({ date: payload.date, routeSlot: payload.routeSlot || 1 });
  }
  const options = [];
  for (const candidate of shown) {
    const path = railArticlePath(lang, desk, payload.writer, candidate.date, candidate.routeSlot || 1);
    if (!path) continue;
    const selected = candidate.date === payload.date ? " selected" : "";
    options.push(
      `<option value="${esc(path)}"${selected}>${esc(formatDate(text(candidate.date), lang))}</option>`,
    );
  }
  if (!options.length) return "";
  options.push(
    `<option value="${esc(archivePublicPath(lang))}">${esc(`${u.archive_older} · ${u.archive}`)}</option>`,
  );
  return railSelect(u.more_from_writer, options);
}

// Mirrors site_pages._rail_date_static.
function railDateStatic(lang, payload) {
  const { date } = payload;
  const n = payload.n ?? 1;
  if (!(validDate(date) && Number.isInteger(n) && Object.hasOwn(INTRADAY_ICONS, n))) return "";
  const dateText = formatDate(date, lang);
  return (
    `<p class="brief-date-static" data-rail-static>` +
    `<span aria-hidden="true">${esc(`${dateText} ${INTRADAY_ICONS[n]}`)}</span>` +
    `<span class="visually-hidden">${esc(dateText)} · ${esc(editionLabel({ n }, lang))}</span></p>`
  );
}

// Mirrors site_pages._rail_select.
function railSelect(label, options) {
  return (
    `<label class="brief-date-control" data-rail-select hidden>` +
    `<span class="visually-hidden">${esc(label)}</span>` +
    `<select class="brief-date-select date-select" ` +
    `aria-label="${esc(label)}">${options.join("")}</select>` +
    `</label>${RAIL_SELECT_SCRIPT}`
  );
}

// Mirrors site_pages._page_rails_html: side rails drawn from the payload, [left, right].
export function pageRails(lang, kind, payload, writers) {
  const u = UI[lang];
  const desk = payload.desk;
  const leftParts = [];
  let right = "";
  let leftLabel;
  let rightHeading;
  let rightRefs;
  let rightStatic = "";
  let rightSelect;
  let selectLabel;
  if (kind === "article") {
    // One node per writer: the page's writer open, the desk's other writers collapsed.
    const columns = railItems(payload.railWriterColumns);
    const nodes = [];
    if (columns.length) {
      const name = text(railObject(payload.writerRef).name) || text(payload.writer);
      const ownSlot = payload.routeSlot || 1;
      const items = [];
      for (const column of columns) {
        const slot = column.routeSlot || 1;
        const path = railArticlePath(lang, desk, payload.writer, column.date, slot);
        const dateLabel = formatDate(text(column.date), lang);
        const title = localizedFallback(column.title, lang) || dateLabel;
        const current = column.date === payload.date && slot === ownSlot
          ? ' aria-current="page"' : "";
        items.push(
          `<li><a href="${esc(path || "#")}"${current}>` +
          `<span class="rail-date">${esc(dateLabel)}</span>` +
          `<span class="rail-title">${esc(title)}</span></a></li>`,
        );
      }
      nodes.push(
        `<details class="rail-tree" open><summary>` +
        `<span class="rail-name">${esc(name)}</span></summary>` +
        `<p class="rail-head rail-node-head">${esc(u.rail_writer_columns)}</p>` +
        `<ol class="rail-list">${items.join("")}</ol></details>`,
      );
    }
    // A same-day entry without a writer id has no node to sit in: skip it.
    const others = new Map();
    for (const candidate of railItems(railObject(payload.readerNav).sameDay)) {
      const writerId = candidate.writer;
      if (typeof writerId === "string" && writerId && writerId !== payload.writer) {
        if (!others.has(writerId)) others.set(writerId, []);
        others.get(writerId).push(candidate);
      }
    }
    for (const [writerId, entries] of others) {
      const name = text(railObject(writers.get(writerId)).name) || writerId;
      const items = [];
      for (const candidate of entries) {
        const path = railArticlePath(
          lang, candidate.desk, writerId, candidate.date, candidate.routeSlot || 1,
        );
        const dateLabel = formatDate(text(candidate.date), lang);
        const title = localizedFallback(candidate.title, lang) || dateLabel;
        items.push(
          `<li><a href="${esc(path || "#")}">` +
          `<span class="rail-date">${esc(dateLabel)}</span>` +
          `<span class="rail-title">${esc(title)}</span></a></li>`,
        );
      }
      nodes.push(
        `<details class="rail-tree"><summary>` +
        `<span class="rail-name">${esc(name)}</span></summary>` +
        `<ul class="rail-list">${items.join("")}</ul></details>`,
      );
    }
    if (nodes.length) {
      leftParts.push(`<h2 class="rail-head">${esc(u.writers)}</h2>${nodes.join("")}`);
    }
    leftLabel = deskLabel(lang, "rail_column_nav", desk);
    rightHeading = deskLabel(lang, "rail_desk_briefs", desk);
    rightRefs = payload.railDeskBriefs;
    rightSelect = railHistorySelect(lang, desk, payload);
    selectLabel = u.more_from_writer;
  } else {
    // An entry without a known desk has no place in the tree: skip it.
    const edition = railItems(payload.railEdition).filter(
      (entry) => typeof entry.desk === "string" && Object.hasOwn(TOPIC_COPY, entry.desk),
    );
    if (edition.length) {
      const groups = [];
      for (const entry of edition) {
        if (!groups.length || groups[groups.length - 1][0] !== entry.desk) {
          groups.push([entry.desk, []]);
        }
        groups[groups.length - 1][1].push(entry);
      }
      const trees = [];
      for (const [groupDesk, entries] of groups) {
        const items = [];
        for (const entry of entries) {
          let path;
          let label;
          let current;
          if (entry.kind === "brief") {
            path = railBriefPath(lang, groupDesk, payload.date, entry.id);
            label = u.rail_kind_brief;
            // Brief ids are unique per desk, not per edition.
            current = groupDesk === desk && entry.id === payload.id ? ' aria-current="page"' : "";
          } else {
            path = railArticlePath(lang, groupDesk, entry.writer, payload.date, entry.routeSlot || 1);
            label = text(entry.name) || text(entry.writer);
            current = "";
          }
          const title = localizedFallback(entry.title, lang) || label;
          items.push(
            `<li><a href="${esc(path || "#")}"${current}>` +
            `<span class="rail-kind">${esc(label)}</span>` +
            `<span class="rail-title">${esc(title)}</span></a></li>`,
          );
        }
        const isOpen = groupDesk === desk ? " open" : "";
        trees.push(
          `<details class="rail-tree"${isOpen}><summary>` +
          `<span class="rail-name">${esc(topicLabel(groupDesk, lang))}</span>` +
          `</summary><ul class="rail-list">${items.join("")}</ul></details>`,
        );
      }
      // The date sits at the top of the right rail.
      leftParts.push(`<h2 class="rail-head">${esc(u.agendas)}</h2>${trees.join("")}`);
    }
    leftLabel = u.rail_edition;
    rightHeading = deskLabel(lang, "more_briefs", desk);
    rightRefs = "railDeskBriefs" in payload ? payload.railDeskBriefs : payload.relatedBriefs;
    rightStatic = railDateStatic(lang, payload);
    rightSelect = railEditionSelect(lang, desk, payload);
    selectLabel = u.brief_date;
  }
  const left = leftParts.length
    ? `<aside class="page-rail page-rail-left" aria-label="${esc(leftLabel)}">${leftParts.join("")}</aside>`
    : "";
  const cards = railBriefCards(lang, desk, rightRefs, rightHeading);
  if (rightStatic || rightSelect || cards) {
    // A rail holding only the select is named by the select, not by absent Brief cards.
    const label = cards ? rightHeading : selectLabel;
    // Without cards or a static date the select is the rail's only content: the rail
    // stays hidden until RAIL_SELECT_SCRIPT shows both, so no reader meets an empty landmark.
    const hidden = cards || rightStatic ? "" : " hidden";
    right = `<aside class="page-rail page-rail-right" aria-label="${esc(label)}"${hidden}>` +
      `${rightStatic}${rightSelect}${cards}</aside>`;
  }
  return [left, right];
}

function writerReaderNav(lang, payload, writers) {
  // Mirrors site_pages._writer_reader_nav: [chips nav, history select] as two strings.
  const nav = payload.readerNav || { sameDay: [], history: [] };
  const links = [`<div class="nav-head">${esc(UI[lang].writers)}</div>`];
  const currentKey = `${payload.writer}|${payload.date}|${payload.n}`;
  for (const candidate of nav.sameDay || []) {
    const path = articlePublicPath(
      lang,
      candidate.desk,
      candidate.writer,
      candidate.date,
      candidate.routeSlot || 1,
    );
    const writer = writers.get(candidate.writer);
    const name = text(writer?.name) || candidate.writer;
    const title = localized(candidate.title, lang) || candidate.writer;
    const candidateKey = `${candidate.writer}|${candidate.date}|${candidate.n}`;
    const current = candidateKey === currentKey ? ' aria-current="page"' : "";
    links.push(
      `<a href="${esc(path, true)}"${current} title="${esc(title, true)}">` +
      `<span class="nm">${esc(name)}</span><span class="tl">${esc(title)}</span></a>`,
    );
  }
  const navHtml = `<nav class="reader-nav" aria-label="${esc(UI[lang].writers, true)}">${links.join("")}</nav>`;
  let historyHtml = "";
  const history = nav.history || [];
  if (history.length > 1) {
    const shown = history.slice(0, WRITER_HISTORY_LIMIT);
    if (!shown.some((candidate) => candidate.date === payload.date)) {
      shown.push({ date: payload.date, n: payload.n, routeSlot: payload.routeSlot || 1 });
    }
    const moreFrom = esc(UI[lang].more_from_writer);
    const historyOptions = [];
    const fallbackLinks = [];
    for (const candidate of shown) {
      const path = articlePublicPath(
        lang,
        payload.desk,
        payload.writer,
        candidate.date,
        candidate.routeSlot || 1,
      );
      const dateLabel = formatDate(candidate.date, lang);
      const selected = candidate.date === payload.date ? " selected" : "";
      historyOptions.push(
        `<option value="${esc(path, true)}"${selected}>${esc(dateLabel)}</option>`,
      );
      const current = candidate.date === payload.date ? ' aria-current="page"' : "";
      fallbackLinks.push(
        `<a href="${esc(path, true)}"${current}><span class="nm">${esc(dateLabel)}</span></a>`,
      );
    }
    const archivePath = archivePublicPath(lang);
    const archiveLabel = `${UI[lang].archive_older} · ${UI[lang].archive}`;
    historyOptions.push(
      `<option value="${esc(archivePath, true)}">${esc(archiveLabel)}</option>`,
    );
    fallbackLinks.push(
      `<a href="${esc(archivePath, true)}"><span class="nm">${esc(archiveLabel)}</span></a>`,
    );
    historyHtml =
      '<div class="reader-history" data-writer-history>' +
      `<label class="nav-head" for="writer-history-select" hidden>${moreFrom}</label>` +
      '<select class="reader-history-select" id="writer-history-select" data-writer-history-select ' +
      `aria-label="${moreFrom}" hidden>${historyOptions.join("")}</select>` +
      '<details class="reader-history-fallback" data-writer-history-fallback>' +
      `<summary>${moreFrom}</summary>` +
      `<div class="reader-history-fallback-links">${fallbackLinks.join("")}</div>` +
      "</details></div>";
  }
  return [navHtml, historyHtml];
}

function hubsHtml(lang, record, site) {
  const hubs = site?.hubs || [];
  const syn = { ...record, topic: record.desk || record.topic };
  const matched = getRecordHubs(syn, hubs);
  if (!matched.length) {
    return "";
  }
  const chips = [];
  for (const hub of hubs) {
    if (!matched.includes(hub.slug)) {
      continue;
    }
    const path = hubPublicPath(lang, hub.slug);
    const title = localized(hub.title, lang);
    chips.push(`<a href="${esc(path, true)}" class="hub-chip">${esc(title)}</a>`);
  }
  return chips.length ? `<div class="hub-chips">${chips.join("")}</div>` : "";
}

// The index policy (site_pages.page_robots): with site.indexable present, a Brief or column page not on
// that list renders noindex,follow; without it, every page is indexable as before.
const INDEXABLE_SETS = new WeakMap();
export function pageRobots(site, path) {
  const list = site?.indexable;
  if (!Array.isArray(list)) {
    return "index,follow,max-image-preview:large";
  }
  let set = INDEXABLE_SETS.get(site);
  if (!set) {
    set = new Set(list);
    INDEXABLE_SETS.set(site, set);
  }
  return set.has(path) ? "index,follow,max-image-preview:large" : "noindex,follow";
}

export function shell({
  lang,
  title,
  description,
  canonical,
  alternate,
  body,
  graph,
  site,
  activeTopic = null,
  robots = "index,follow,max-image-preview:large",
  extraStyle = "",
  extraScript = "",
  extraHead = "",
  socialImage = null,
  collection = false,
  activeArchive = false,
}) {
  const u = UI[lang];
  const other = lang === "tr" ? "en" : "tr";
  const locale = lang === "tr" ? "tr_TR" : "en_US";
  const localeAlt = lang === "tr" ? "en_US" : "tr_TR";
  let socialSrc = "";
  if (socialImage && typeof socialImage === "object") {
    socialSrc = assetUrl(socialImage.src) || avatarUrl(socialImage.src);
  }
  const briefSocial = Boolean(socialSrc) && socialSrc === assetUrl(socialSrc);
  const socialWidth = socialImage ? positiveDimension(socialImage.width) : null;
  const socialHeight = socialImage ? positiveDimension(socialImage.height) : null;
  const socialAlt = socialImage ? text(socialImage.alt) : "";
  const ogImage = briefSocial
    ? mediaUrl(socialSrc)
    : socialSrc
      ? new URL(socialSrc, canonical).toString()
      : "https://eigenradar.com/assets/icon-512.png";
  const ogWidth = socialWidth || 512;
  const ogHeight = socialHeight || 512;
  const ogAlt = socialAlt || "Eigen Radar";
  const twitterCard = socialSrc ? "summary_large_image" : "summary";
  const scriptHtml = extraScript ? `\n${extraScript.trim()}` : "";
  const badge = activeArchive
    ? u.archive
    : activeTopic
      ? TOPIC_NAV_LABELS[activeTopic][lang]
      : lang === "tr"
        ? "Haber"
        : "News";
  const navParts = [];
  for (const topic of topicIds(site)) {
    if (!TOPIC_COPY[topic]) {
      continue;
    }
    navParts.push(
      `<a href="/${lang}/${topic}/" data-topic="${esc(topic)}"` +
      (topic === activeTopic ? ' aria-current="page"' : "") +
      `><span class="topic-label">${esc(TOPIC_NAV_LABELS[topic][lang])}</span></a>`,
    );
    if (topic === "economics-markets") {
      navParts.push(
        `<a href="/markets" data-topic="markets" aria-label="${MARKETS_NAV_LABELS[lang]}">` +
        `<span class="topic-label">${MARKETS_NAV_LABELS[lang]}</span></a>`,
      );
    }
  }
  const trUrl = lang === "tr" ? canonical : alternate;
  const enUrl = lang === "tr" ? alternate : canonical;
  const mainClass = collection ? "wrap page-collection" : "wrap page-detail";
  // Brief and column pages carry one top-level Article node (NewsArticle appears only in a
  // Brief's citations); its datePublished is the share card's publication time.
  const articleNode = (graph?.["@graph"] || []).find((node) => node && node["@type"] === "Article");
  const hasArticle = Boolean(articleNode);
  const published = articleNode && typeof articleNode.datePublished === "string"
    ? articleNode.datePublished.trim() : "";
  const articleMeta = published
    ? `\n<meta property="article:published_time" content="${esc(published, true)}">` : "";
  return `<!doctype html>
<html lang="${lang}">
<head>
${FONT_PRELOAD_HTML}
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#040711">
<meta name="color-scheme" content="dark light">
${THEME_BOOT_SCRIPT}
<meta name="robots" content="${esc(robots, true)}">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description, true)}">
<link rel="canonical" href="${esc(canonical, true)}">
<link rel="alternate" hreflang="${lang}" href="${esc(canonical, true)}">
<link rel="alternate" hreflang="${other}" href="${esc(alternate, true)}">
<link rel="alternate" hreflang="x-default" href="${esc(trUrl, true)}">
<link rel="alternate" type="application/rss+xml" title="Eigen Radar RSS" href="/feed.xml">
${extraHead}<link rel="search" type="application/opensearchdescription+xml" title="Eigen Radar ${lang.toUpperCase()}" href="/opensearch-${lang}.xml">
<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48">
<link rel="icon" href="/assets/icon.svg" type="image/svg+xml">
<link rel="manifest" href="/manifest.webmanifest">
<meta property="og:type" content="${hasArticle ? "article" : "website"}">${articleMeta}
<meta property="og:site_name" content="Eigen Radar">
<meta property="og:url" content="${esc(canonical, true)}">
<meta property="og:title" content="${esc(title, true)}">
<meta property="og:description" content="${esc(description, true)}">
<meta property="og:locale" content="${locale}">
<meta property="og:locale:alternate" content="${localeAlt}">
<meta property="og:image" content="${esc(ogImage, true)}">
<meta property="og:image:width" content="${ogWidth}">
<meta property="og:image:height" content="${ogHeight}">
<meta property="og:image:alt" content="${esc(ogAlt, true)}">
<meta name="twitter:card" content="${twitterCard}">
<meta name="twitter:site" content="@eigenradar">
<link rel="stylesheet" href="/assets/site-pages.css">
<style>${extraStyle}</style>
<script type="application/ld+json">${jsonScript(graph)}</script>
${THEME_RUNTIME_SCRIPT}
</head>
<body>
<a class="skip" href="#content">${esc(u.skip)}</a>
<header class="mast"><div class="mast-inner">
<a class="brand" href="/" aria-label="Eigen Radar — ${esc(u.home)}"><img class="mark" src="/assets/icon.svg" alt="" width="34" height="34"><span>Eigen Radar</span><span class="desk-badge">${esc(badge)}</span></a>
<nav class="topics" aria-label="${esc(u.topics)}">${navParts.join("")}</nav>
<div class="header-right">${renderArchiveLink(lang, { active: activeArchive })}<div class="utility-switches"><nav class="languages" aria-label="${esc(u.language)}">
<a href="${esc(trUrl, true)}"${lang === "tr" ? ' aria-current="page"' : ""} lang="tr" hreflang="tr">TR</a>
<a href="${esc(enUrl, true)}"${lang === "en" ? ' aria-current="page"' : ""} lang="en" hreflang="en">EN</a>
</nav>${renderThemeSwitch(lang)}</div></div></div></header>
<div class="edition-refresh-bar" id="editionRefreshBar" role="status" aria-live="polite" hidden><span class="edition-refresh-text">${esc(u.new_edition_notice)}</span><a class="edition-refresh-btn" href="${lang === "tr" ? "/" : `/${lang}/`}">${esc(u.new_edition_refresh)}</a></div>
<main id="content" class="${mainClass}">${body}</main>
<footer><div class="wrap"><p><strong>Eigen Radar</strong> — ${esc(u.footer_identity)}</p>
<p>${esc(u.footer_sources)}</p>
<p><strong>${esc(u.footer_notice_label)}</strong> ${esc(u.footer_notice)}</p>
<nav><a href="${archivePublicPath(lang)}">${esc(u.archive)}</a><a href="${hubsIndexPublicPath(lang)}">${esc(u.hubs_title)}</a><a href="${aboutPublicPath(lang)}">${esc(u.about)}</a><a href="/privacy">${esc(u.privacy)}</a><a href="/feed.xml">${esc(u.rss)}</a><a href="/feeds.opml" title="${esc(u.opml_title, true)}">OPML</a></nav><div class="footer-meta"><p class="footer-rights">${esc(u.footer_rights)}</p><div class="footer-links"><a href="https://x.com/eigenradar" rel="me noopener" target="_blank" aria-label="${esc(u.footer_x)} (@eigenradar)"><svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false" fill="currentColor"><path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-5.9l-4.62-6.04L5.94 21H2.92l7.06-8.07L2.25 3h6.05l4.18 5.52L17.53 3Zm-1.06 16.2h1.67L7.62 4.71H5.83l10.64 14.49Z"/></svg><span>@eigenradar</span></a><a data-mu="moc.radarnegie" data-mh="moc.liamg" data-label="${esc(u.footer_contact)}" href="${aboutPublicPath(lang)}" aria-label="${esc(u.footer_contact)}"><svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.6 7.2 7.5 5.1a1.6 1.6 0 0 0 1.8 0l7.5-5.1"/></svg><span>eigenradar.com (at) gmail.com</span></a></div></div><p class="footer-voice-credit">${u.footer_voice_credit}</p></div></footer><script>(function(){var r=function(s){return s.split('').reverse().join('')};document.querySelectorAll('a[data-mu]').forEach(function(a){var v=r(a.getAttribute('data-mu'))+String.fromCharCode(64)+r(a.getAttribute('data-mh'));a.href='mailto:'+v;var s=a.querySelector('span');if(s){s.textContent=v}a.setAttribute('aria-label',a.getAttribute('data-label')+': '+v);a.removeAttribute('data-mu');a.removeAttribute('data-mh')})})();</script><script>if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/service-worker.js').catch(function(){})})}</script>${EDITION_FRESHNESS_SCRIPT.trim()}${scriptHtml}
</body></html>`;
}

export function renderArticlePage(payload, site, lang, opts = {}) {
  const baseUrl = opts.baseUrl || BASE_URL;
  const u = UI[lang];
  const topic = payload.desk;
  const routeSlot = payload.routeSlot || 1;
  const path = articlePublicPath(lang, topic, payload.writer, payload.date, routeSlot);
  const otherPath = articlePublicPath(
    lang === "tr" ? "en" : "tr",
    topic,
    payload.writer,
    payload.date,
    routeSlot,
  );
  const root = siteBase(baseUrl);
  const canonical = absoluteUrl(root, path);
  const alternate = absoluteUrl(root, otherPath);
  const headline = localized(payload.title, lang) || payload.writer;
  const excerpt = localized(payload.excerpt, lang);
  const writer = payload.writerRef || {};
  const writerName = text(writer.name) || payload.writer;
  const sources = Array.isArray(payload.sources) ? payload.sources : [];
  const sections = [];
  const occurrences = {};
  let citationOccurrence = 0;
  for (const section of payload.sections || []) {
    if (!section || typeof section !== "object") {
      continue;
    }
    const heading = localized(section.h, lang);
    const renderedParagraphs = [];
    for (const paragraph of section.ps || []) {
      const paragraphText = localized(paragraph, lang);
      if (!paragraphText) {
        continue;
      }
      citationOccurrence += 1;
      renderedParagraphs.push(
        `<p>${esc(paragraphText)}${citationMarkers(paragraph, sources, lang, occurrences, citationOccurrence)}</p>`,
      );
    }
    const content = renderedParagraphs.join("");
    if (heading || content) {
      sections.push(`${heading ? `<h2>${esc(heading)}</h2>` : ""}${content}`);
    }
  }
  const references = referencesHtml(sources, lang, occurrences);
  const relatedHtml = (payload.related || [])
    .map((target) => {
      const href = articlePublicPath(
        lang,
        target.desk,
        target.writer,
        target.date,
        target.routeSlot || 1,
      );
      const title = localized(target.title, lang) || target.writer;
      return `<li><a href="${esc(href, true)}">${esc(title)}</a></li>`;
    })
    .join("");
  const archiveCta = relatedArchiveCta(lang, topic, "column");
  const relatedSection = relatedHtml
    ? `<section class="related"><h2>${esc(deskLabel(lang, "more", topic))}</h2><ul>${relatedHtml}</ul>${archiveCta}</section>`
    : `<div class="related">${archiveCta}</div>`;
  const topicPath = categoryPublicPath(lang, topic);
  const avatar = avatarUrl(writer.avatar);
  const avatarHtml = avatar
    ? `<img src="${esc(avatar, true)}" width="64" height="64" loading="eager" decoding="async" alt="">`
    : "";
  const role = writerFocus(writer.role, lang);
  const roleLine = [role, formatDate(payload.date, lang), editionLabel(payload, lang)]
    .filter(Boolean)
    .join(" · ");
  const badge = writerBadge(lang);
  const [readerNav, readerHistory] = writerReaderNav(lang, payload, writerById(site));
  const [railLeft, railRight] = pageRails(lang, "article", payload, writerById(site));
  const deckHtml = excerpt ? `<p class="deck">${esc(excerpt)}</p>` : "";
  const radarStampHtml = radarStamp(payload, lang);
  const textScaleSwitch = renderTextScaleSwitch(lang);
  const listenLang = lang === "tr" ? "tr-TR" : "en-US";
  const hubChips = hubsHtml(lang, payload, site);
  const body =
    `<nav class="breadcrumbs" aria-label="${esc(u.breadcrumb_label, true)}"><a href="/">${esc(u.home)}</a><span>/</span><a href="${topicPath}">${esc(topicLabel(topic, lang))}</a></nav>\n` +
    `<div class="article-layout writer-reader">${readerHistory ? `<div class="reader-actions">${readerHistory}</div>` : ""}\n` +
    `<article class="writer-content"><header class="article-header"><span class="visually-hidden">${esc(u.ai_label)}</span><div class="article-kicker"><div class="eyebrow">${esc(u.columns)}</div>${hubChips}</div><h1>${esc(headline)}</h1>${deckHtml}<div class="wtop"><div class="avatar">${avatarHtml}</div><div><div class="wname"><a href="${esc(writerPublicPath(lang, topic, payload.writer), true)}" style="color: inherit; text-decoration: none;">${esc(writerName)}</a><span class="ai-badge">${esc(badge)}</span></div><div class="wrole">${esc(roleLine)}${radarStampHtml}</div></div></div><div class="listen-row">${textScaleSwitch}<button class="reader-back reader-print" type="button" data-article-print aria-label="${esc(u.print_label, true)}" title="${esc(u.print_label, true)}" hidden><span aria-hidden="true">🖨</span></button><div class="brief-listen" data-brief-listen data-lang="${listenLang}" data-listen-label="${esc(u.brief_listen, true)}" data-stop-label="${esc(u.brief_listen_stop, true)}" hidden><button class="listen-btn" type="button" data-brief-listen-button aria-label="${esc(u.brief_listen, true)}" aria-pressed="false"><span aria-hidden="true" data-brief-listen-icon>🔊</span> <span data-brief-listen-label>${esc(u.brief_listen)}</span></button><label class="visually-hidden" for="writer-listen-rate">${esc(u.brief_listen_rate)}</label><input class="listen-rate" id="writer-listen-rate" type="range" min="0.5" max="2" step="0.1" value="1.2" data-brief-listen-rate><output class="listen-rate-val" for="writer-listen-rate" data-brief-listen-rate-value>1.2×</output></div><button class="reader-back reader-share" type="button" data-brief-share data-share-label="${esc(u.brief_share, true)}" data-copied-label="${esc(u.brief_share_copied, true)}" data-failed-label="${esc(u.brief_share_failed, true)}" aria-label="${esc(u.brief_share, true)}" hidden><span aria-hidden="true">↗</span><span data-brief-share-label>${esc(u.brief_share)}</span></button><span class="visually-hidden" role="status" aria-live="polite" aria-atomic="true" data-brief-share-status></span></div></header>\n` +
    readerNav +
    `\n<div class="article-body">${sections.join("") || `<p class="empty">${esc(u.no_columns)}</p>`}</div>\n` +
    `${references}\n${relatedSection}</article>${railLeft}${railRight}</div>`;
  const description = excerpt || headline;
  const articleNode = {
    "@type": "Article",
    "@id": `${canonical}#article`,
    url: canonical,
    mainEntityOfPage: canonical,
    headline,
    description,
    datePublished: payload.date,
    dateModified: jsonldDateModified(payload, payload.date),
    wordCount: analysisWordCount(payload.sections || [], lang),
    articleSection: topicLabel(topic, lang),
    inLanguage: lang,
    isAccessibleForFree: true,
    author: { "@id": `${root}#org` },
    creator: {
      "@type": "Thing",
      name: writerName,
      description: "Yapay zekâ karakteri / AI persona — not a real person",
    },
    publisher: { "@id": `${root}#org` },
    citation: sources.map((source) => localizedReferenceUrl(source, lang)),
    isBasedOn: sources.map((source) => ({
      "@type": source.kind === "article" ? "Article" : "NewsArticle",
      name: localized(source.title, lang),
      url: localizedReferenceUrl(source, lang),
      ...(validDate(source.publishedDate)
        ? { datePublished: source.publishedDate }
        : {}),
      publisher: { "@type": "Organization", name: source.name },
    })),
  };
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Eigen Radar", item: root },
      {
        "@type": "ListItem",
        position: 2,
        name: topicLabel(topic, lang),
        item: absoluteUrl(baseUrl, topicPath),
      },
      { "@type": "ListItem", position: 3, name: headline, item: canonical },
    ],
  };
  const graph = {
    "@context": "https://schema.org",
    "@graph": [...baseGraph(baseUrl, lang), articleNode, breadcrumb],
  };
  const writerFeedLink =
    `<link rel="alternate" type="application/rss+xml" title="Eigen Radar RSS — ${esc(writerName, true)}" href="/feed-writer-${esc(payload.writer, true)}.xml">\n`;
  const socialImage = avatar
    ? { src: avatar, width: 256, height: 256, alt: writerName }
    : null;
  return shell({
    lang,
    title: `${headline} — Eigen Radar`,
    description,
    canonical,
    alternate,
    body,
    graph,
    site,
    activeTopic: topic,
    extraStyle: WRITER_DETAIL_STYLE,
    extraScript: WRITER_TOOLS_SCRIPT,
    extraHead: writerFeedLink,
    socialImage,
    robots: pageRobots(site, path),
  });
}

function briefRelatedColumnsHtml(lang, payload, writers) {
  const related = payload.related;
  if (!Array.isArray(related) || !related.length) {
    return "";
  }
  const items = [];
  for (const target of related) {
    const writer = target.writerRef || writers.get(target.writer) || {};
    const name = text(writer.name).trim() || target.writer;
    const role = writerFocus(writer.role, lang);
    const title = localized(target.title, lang);
    const path = articlePublicPath(
      lang,
      target.desk,
      target.writer,
      target.date,
      target.routeSlot || 1,
    );
    if (!title || !path) {
      continue;
    }
    const avatar = avatarUrl(writer.avatar);
    const avatarHtml = avatar
      ? `<img src="${esc(avatar, true)}" width="48" height="48" loading="lazy" decoding="async" alt="">`
      : '<span aria-hidden="true">λ</span>';
    items.push(
      '<li><a class="brief-related-column-link" ' +
      `href="${esc(path, true)}">` +
      `<span class="brief-related-column-avatar">${avatarHtml}</span>` +
      '<span class="brief-related-column-copy">' +
      `<span class="brief-related-column-name">${esc(name)}</span>` +
      `<span class="brief-related-column-role">${esc(role)}</span>` +
      `<span class="brief-related-column-title">${esc(title)}</span>` +
      "</span></a></li>",
    );
  }
  if (!items.length) {
    return "";
  }
  return (
    '<section class="brief-related-columns" aria-labelledby="brief-related-columns-title">' +
    `<h2 id="brief-related-columns-title">${esc(UI[lang].related_columns)}</h2>` +
    `<p class="brief-related-columns-note">${esc(UI[lang].related_columns_note)}</p>` +
    `<ul class="brief-related-column-list">${items.join("")}</ul></section>`
  );
}

export function renderBriefPage(payload, site, lang, opts = {}) {
  const baseUrl = opts.baseUrl || BASE_URL;
  const u = UI[lang];
  const topic = payload.desk;
  const briefId = payload.id;
  const path = briefPublicPath(lang, topic, payload.date, briefId);
  const otherPath = briefPublicPath(
    lang === "tr" ? "en" : "tr",
    topic,
    payload.date,
    briefId,
  );
  const root = siteBase(baseUrl);
  const canonical = absoluteUrl(root, path);
  const alternate = absoluteUrl(root, otherPath);
  const headline = localized(payload.title, lang) || briefId;
  const summary = localized(payload.summary, lang);
  const topicPath = categoryPublicPath(lang, topic);
  const sources = Array.isArray(payload.sources) ? payload.sources : [];
  const sections = [];
  const occurrences = {};
  let citationOccurrence = 0;
  // The video sits inside the piece, after the second paragraph: by the bibliography
  // the reading is already over.
  // Mirrors site_pages.py: the mark belongs on the story, not only on the card.
  // The operator's badge, on the illustration. A styled word read as a line of text.
  const editorsChoiceMark = payload.editorsChoice === true
    ? `<img class="brief-choice-badge" src="/assets/editorschoice.svg" alt="${esc(u.brief_editors_choice, true)}" width="128" height="128" loading="lazy" decoding="async">`
    : "";
  let pendingVideo = briefVideoHtml(payload, lang);
  for (const section of payload.sections || []) {
    const heading = localized(section.h, lang);
    const renderedParagraphs = [];
    for (const paragraph of section.ps || []) {
      const paragraphText = localized(paragraph, lang);
      if (!paragraphText) {
        continue;
      }
      citationOccurrence += 1;
      renderedParagraphs.push(
        `<p>${esc(paragraphText)}${citationMarkers(paragraph, sources, lang, occurrences, citationOccurrence)}</p>`,
      );
      if (pendingVideo && citationOccurrence >= 2) {
        renderedParagraphs.push(pendingVideo);
        pendingVideo = "";
      }
    }
    const paragraphs = renderedParagraphs.join("");
    if (heading && paragraphs) {
      sections.push(`<section><h2>${esc(heading)}</h2>${paragraphs}</section>`);
    }
  }
  const references = referencesHtml(sources, lang, occurrences);
  const relatedColumns = briefRelatedColumnsHtml(lang, payload, writerById(site));
  const picture = briefPicture(
    payload,
    lang,
    "(min-width:760px) 43rem,calc(100vw - 2rem)",
    { eager: true },
  );
  const imageToggle = picture && sections.length
    ? `<button class="brief-image-toggle" type="button" data-brief-image-toggle data-expand-label="${esc(u.brief_image_expand, true)}" data-collapse-label="${esc(u.brief_image_collapse, true)}" data-collapsed-sizes="(min-width:760px) 43rem,calc(100vw - 2rem)" data-expanded-sizes="(min-width:1100px) 68rem,calc(100vw - 2rem)" aria-controls="brief-opening" aria-expanded="false" aria-label="${esc(u.brief_image_expand, true)}" title="${esc(u.brief_image_expand, true)}" hidden><span class="brief-image-toggle-icon" aria-hidden="true" data-brief-image-toggle-icon>⤢</span><span class="visually-hidden" data-brief-image-toggle-label>${esc(u.brief_image_expand)}</span></button>`
    : "";
  const imageHtml = picture
    ? `<figure class="brief-hero" data-brief-image>${editorsChoiceMark}${picture}<span class="ai-image-mark">${esc(u.ai_image_mark)}</span>${imageToggle}</figure>`
    : "";
  let analysisHtml;
  if (imageHtml && sections.length) {
    analysisHtml =
      `<div class="brief-opening" id="brief-opening">${imageHtml}` +
      `<div class="article-body brief-opening-body">${sections[0]}</div></div>`;
    if (sections.length > 1) {
      analysisHtml += `<div class="article-body brief-continuation">${sections.slice(1).join("")}</div>`;
    }
  } else {
    analysisHtml = `${imageHtml}<div class="article-body brief-continuation">${sections.join("")}</div>`;
  }
  const relatedHtml = (payload.relatedBriefs || [])
    .map((candidate) => {
      const href = briefPublicPath(lang, topic, candidate.date, candidate.id);
      const title = localized(candidate.title, lang) || candidate.id;
      return `<li><a href="${href}">${esc(title)}</a></li>`;
    })
    .join("");
  const archiveCta = relatedArchiveCta(lang, topic, "brief");
  const relatedSection = relatedHtml
    ? `<section class="related"><h2>${esc(deskLabel(lang, "more_briefs", topic))}</h2><ul>${relatedHtml}</ul>${archiveCta}</section>`
    : `<div class="related">${archiveCta}</div>`;
  const formattedDate = formatDate(payload.date, lang);
  const [railLeft, railRight] = pageRails(lang, "brief", payload, new Map());
  const radarStampHtml = radarStamp(payload, lang);
  const slotLabel = editionLabel(payload, lang);
  const textScaleSwitch = renderTextScaleSwitch(lang);
  const listenLang = lang === "tr" ? "tr-TR" : "en-US";
  const hubChips = hubsHtml(lang, payload, site);
  const body =
    `<nav class="breadcrumbs" aria-label="${esc(u.breadcrumb_label, true)}"><a href="/">${esc(u.home)}</a><span>/</span><a href="${topicPath}">${esc(topicLabel(topic, lang))}</a></nav>\n` +
    `<div class="article-layout brief-detail-layout"><article><header class="article-header"><div class="article-kicker"><div class="eyebrow">${esc(u.brief_analysis)}</div>${hubChips}</div>${picture ? "" : editorsChoiceMark}<h1>${esc(headline)}</h1><p class="deck">${esc(summary)}</p><div class="meta"><span>${esc(topicLabel(topic, lang))}</span><span>·</span><time datetime="${payload.date}">${esc(formattedDate)}</time><span>·</span><span>${esc(slotLabel)}</span>${radarStampHtml}</div><div class="brief-title-tools">${textScaleSwitch}<button class="brief-share-button" type="button" data-article-print aria-label="${esc(u.print_label, true)}" title="${esc(u.print_label, true)}" hidden><span aria-hidden="true">🖨</span></button><div class="brief-listen" data-brief-listen data-lang="${listenLang}" data-listen-label="${esc(u.brief_listen, true)}" data-stop-label="${esc(u.brief_listen_stop, true)}" hidden><button class="brief-listen-button" type="button" data-brief-listen-button aria-label="${esc(u.brief_listen, true)}" aria-pressed="false"><span aria-hidden="true" data-brief-listen-icon>🔊</span><span data-brief-listen-label>${esc(u.brief_listen)}</span></button><label class="visually-hidden" for="brief-listen-rate">${esc(u.brief_listen_rate)}</label><input class="brief-listen-rate" id="brief-listen-rate" type="range" min="0.5" max="2" step="0.1" value="1.2" data-brief-listen-rate><output class="brief-listen-rate-value" for="brief-listen-rate" data-brief-listen-rate-value>1.2×</output></div><button class="brief-share-button" type="button" data-brief-share data-share-label="${esc(u.brief_share, true)}" data-copied-label="${esc(u.brief_share_copied, true)}" data-failed-label="${esc(u.brief_share_failed, true)}" aria-label="${esc(u.brief_share, true)}" hidden><span aria-hidden="true">↗</span><span data-brief-share-label>${esc(u.brief_share)}</span></button><span class="visually-hidden" role="status" aria-live="polite" aria-atomic="true" data-brief-share-status></span></div></header>\n` +
    `${analysisHtml}\n${relatedColumns}\n${references}\n${relatedSection}</article>${railLeft}${railRight}</div>`;
  const image = payload.image && typeof payload.image === "object" ? payload.image : {};
  const imageSrc = assetUrl(image.src);
  const imageUrl = imageSrc ? mediaUrl(imageSrc) : null;
  const citationUrls = [];
  const basedOn = [];
  for (const source of sources) {
    const sourceUrl = localizedReferenceUrl(source, lang);
    citationUrls.push(sourceUrl);
    basedOn.push({
      "@type": "NewsArticle",
      name: localized(source.title, lang),
      url: sourceUrl,
      ...(validDate(source.publishedDate) ? { datePublished: source.publishedDate } : {}),
      publisher: { "@type": "Organization", name: source.name },
    });
    const primary = source.primary;
    if (primary && typeof primary === "object") {
      const primaryUrl = safeWebUrl(primary.url);
      if (primaryUrl) {
        citationUrls.push(primaryUrl);
        basedOn.push({
          "@type": "ScholarlyArticle",
          name: localized(primary.title, lang),
          url: primaryUrl,
          ...(validDate(primary.publishedDate)
            ? { datePublished: primary.publishedDate }
            : {}),
          publisher: {
            "@type": "Organization",
            name: text(primary.name).trim(),
          },
        });
      }
    }
  }
  const articleNode = {
    "@type": "Article",
    "@id": `${canonical}#article`,
    url: canonical,
    mainEntityOfPage: canonical,
    headline,
    description: summary,
    datePublished: payload.date,
    dateModified: jsonldDateModified(payload, payload.date),
    wordCount: briefBodyWordCount(payload, sources, lang),
    articleSection: topicLabel(topic, lang),
    inLanguage: lang,
    isAccessibleForFree: true,
    author: { "@id": `${root}#org` },
    publisher: { "@id": `${root}#org` },
    citation: citationUrls,
    isBasedOn: basedOn,
  };
  if (imageUrl) {
    articleNode.image = {
      "@type": "ImageObject",
      url: imageUrl,
      width: image.width,
      height: image.height,
      caption: localized(image.alt, lang),
      digitalSourceType: "http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia",
      creditText: UI[lang].ai_image_credit,
    };
  }
  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Eigen Radar", item: root },
      {
        "@type": "ListItem",
        position: 2,
        name: topicLabel(topic, lang),
        item: absoluteUrl(baseUrl, topicPath),
      },
      { "@type": "ListItem", position: 3, name: headline, item: canonical },
    ],
  };
  const graph = {
    "@context": "https://schema.org",
    "@graph": [...baseGraph(baseUrl, lang), articleNode, breadcrumb],
  };
  const socialImage = imageSrc
    ? {
        src: imageSrc,
        width: image.width,
        height: image.height,
        alt: localized(image.alt, lang),
      }
    : null;
  return shell({
    lang,
    title: `${headline} — Eigen Radar`,
    description: summary || headline,
    canonical,
    alternate,
    body,
    graph,
    site,
    activeTopic: topic,
    extraStyle: BRIEF_DETAIL_STYLE,
    extraScript: `${BRIEF_IMAGE_TOGGLE_SCRIPT}\n${BRIEF_LISTEN_SCRIPT}\n${BRIEF_SHARE_SCRIPT}`,
    socialImage,
    robots: pageRobots(site, path),
  });
}
