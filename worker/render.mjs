export const THEME_BOOT_SCRIPT = "<script>\n(()=>{let t='dark';try{t=localStorage.getItem('theme')==='light'?'light':'dark'}catch{}\nlet s='1';try{s=localStorage.getItem('textScale')||'1'}catch{}\nif(s==='1.125'||s==='1.25')document.documentElement.dataset.textScale=s;\ndocument.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;\ndocument.querySelector('meta[name=\"theme-color\"]').content=t==='light'?'#c7d2e0':'#040711'})();\n</script>";
export const THEME_RUNTIME_SCRIPT = "<script src=\"/assets/theme.js\" defer></script>";
export const X_CONVERSION_TRACKING = "<!-- X conversion tracking base code -->\n<script>\n!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);\n},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',\na=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');\ntwq('config','re3b4');\n</script>\n<!-- End X conversion tracking base code -->";
export const WRITER_DETAIL_STYLE = "\n.edition-symbol{display:inline;margin-inline-start:.3em}.edition-text{display:inline}@media(max-width:640px){.edition-btn .edition-symbol{display:inline;margin-inline-start:0}.edition-btn .edition-text{display:none}}@media(min-width:641px) and (max-width:1000px) and (max-height:500px) and (orientation:landscape){.edition-btn .edition-symbol{display:inline;margin-inline-start:0}.edition-btn .edition-text{display:none}}\n.page-detail{padding-top:1.75rem}.writer-reader{display:grid;grid-template-columns:minmax(0,1fr);gap:18px;align-items:start}.reader-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.reader-back{display:inline-flex;align-items:center;justify-content:center;width:max-content;min-height:44px;padding:7px 14px;border:1px solid var(--line);border-radius:8px;background:var(--card);color:var(--muted);font-family:inherit;font-size:.85rem;text-decoration:none;cursor:pointer}.reader-back:hover{border-color:var(--accent);color:var(--text)}.reader-share{margin-left:auto}.reader-share[hidden]{display:none}.reader-share.is-confirmed{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}.reader-share.is-error{border-color:var(--amber);color:var(--amber)}\n.reader-nav{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:0 0 22px}.reader-nav .nav-head{flex:0 0 auto;margin:0 4px 0 0;color:var(--muted);font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.reader-nav a{display:inline-flex;align-items:center;min-height:36px;padding:5px 12px;border:1px solid var(--line);border-radius:999px;background:var(--card);color:var(--muted);font-size:.8rem;line-height:1.3;text-decoration:none}.reader-nav .nm{color:var(--text);font-weight:600}.reader-nav .tl{display:none}.reader-nav a:hover{border-color:var(--accent);color:var(--text)}.reader-nav a[aria-current=page]{border-color:var(--accent);background:var(--accent-soft)}\n.writer-content{min-width:0}.writer-content .article-header{max-width:none}.writer-content .article-header .eyebrow{margin:0 0 .6rem}.writer-content .article-header h1{max-width:none;margin:0 0 .6rem;font-size:calc(clamp(1.9rem,4.5vw,2.75rem) * var(--text-zoom));line-height:1.15;letter-spacing:-.03em}.writer-content .deck{max-width:none;margin:0 0 1.1rem;color:var(--muted);font-size:calc(1.08rem * var(--text-zoom));line-height:1.6}.writer-content .wtop{display:flex;align-items:center;gap:12px;margin:0 0 8px}.writer-content .avatar{position:relative;flex-shrink:0;width:46px;height:46px;overflow:hidden;border-radius:50%;background:var(--accent-soft)}.writer-content .avatar::before{content:'\u03bb';position:absolute;inset:0;display:grid;place-items:center;color:var(--accent);font-size:.9rem;font-weight:800}.writer-content .avatar img{position:relative;z-index:1;display:block;width:100%;height:100%;object-fit:cover}.writer-content .wname{font-weight:700}.writer-content .wrole{color:var(--muted);font-size:.75rem}.writer-content .ai-badge{margin-left:6px;padding:1px 6px;border:1px solid var(--amber-line);border-radius:5px;color:var(--amber);font-size:.6rem;font-weight:800;letter-spacing:.08em;vertical-align:2px}.writer-content .article-body{max-width:none;color:var(--body-copy);font-size:calc(1rem * var(--text-zoom));line-height:1.75}.writer-content .article-body p{margin:0 0 17px}.writer-content .article-body h2{margin:30px 0 10px;color:var(--text);font-size:calc(1.15rem * var(--text-zoom));font-weight:750;letter-spacing:-.01em}\n.listen-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:14px 0 0}.listen-row .brief-listen[hidden]{display:none}.listen-row .text-scale-switch{min-width:2.75rem;min-height:2.75rem}.listen-row .reader-print{min-width:2.75rem;width:2.75rem;padding:0;justify-content:center}.listen-btn{min-height:44px;margin:6px 0 2px;padding:6px 14px;border:1px solid var(--line);border-radius:999px;background:var(--accent-soft);color:var(--accent);font-size:.8rem;cursor:pointer}.listen-btn.speaking{background:var(--accent);color:var(--card)}.listen-rate{width:110px;background:transparent;accent-color:var(--accent)}.listen-rate-val{min-width:2.2em;color:var(--muted);font-size:.75rem;font-variant-numeric:tabular-nums}\n.editions-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:10px 0 2px}.editions-label{color:var(--muted);font-size:.82rem}.edition-btn{display:inline-flex;align-items:center;justify-content:center;min-width:44px;min-height:44px;padding:3px 12px;border:1px solid var(--line);border-radius:999px;background:var(--card);color:var(--text);font-size:.82rem;text-decoration:none}.edition-btn[aria-current=page]{background:var(--accent);color:var(--card)}\n.writer-content .references{margin-top:38px;padding-top:24px}.writer-content .references h2{margin-top:0}.writer-content .reference-list{margin-top:12px}.writer-content .related{margin-top:38px;padding-top:24px}\n.writer-content .ai-badge{border-color:var(--amber-line)}.writer-content .article-body{max-width:72ch;margin-inline:auto;color:var(--body-copy)}\n.reader-history{display:flex;align-items:center;gap:8px;min-width:0;max-width:100%}.reader-history .nav-head{display:none}.reader-history-select{max-width:100%;min-height:44px;padding:7px 12px;border:1px solid var(--line);border-radius:8px;background:var(--card);color:var(--text);font-family:inherit;font-size:.85rem;appearance:none;-webkit-appearance:none;cursor:pointer}.reader-history-select:hover{border-color:var(--accent)}.reader-history-select:focus-visible{outline:2px solid var(--accent);outline-offset:2px}.reader-history-select[hidden],.reader-history-fallback[hidden],.reader-history .nav-head[hidden]{display:none}.reader-history-fallback{color:var(--muted);font-size:.8rem}.reader-history-fallback summary{min-height:44px;padding:9px 12px;border:1px solid var(--line);border-radius:8px;background:var(--card);color:var(--text);cursor:pointer}.reader-history-fallback-links{display:flex;flex-direction:column;gap:2px;margin-top:6px}\n@media(max-width:640px){.reader-actions{gap:8px}.reader-history{flex:1 1 auto}.reader-history-select{width:100%}.writer-content .article-header h1{font-size:calc(clamp(1.55rem,6.5vw,2rem) * var(--text-zoom))}}\n";
export const BRIEF_DETAIL_STYLE = "\n.brief-hero{position:relative;max-width:68rem;background:var(--media-bg);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden}.brief-hero picture{display:block;aspect-ratio:16/9}.brief-hero img{display:block;width:100%;height:100%;object-fit:cover}.brief-image-toggle[hidden]{display:none}.brief-image-toggle{position:absolute;z-index:2;inset-block-start:.65rem;inset-inline-end:.65rem;display:grid;place-items:center;width:2.75rem;height:2.75rem;padding:0;border:1px solid rgba(255,255,255,.42);border-radius:999px;background:rgba(5,12,20,.62);color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.28);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);cursor:pointer;opacity:.82;transition:opacity .15s,background-color .15s,transform .15s}.brief-image-toggle:hover{background:rgba(5,12,20,.78);opacity:1;transform:scale(1.04)}.brief-image-toggle:focus-visible{outline:3px solid var(--focus);outline-offset:2px;opacity:1}.brief-image-toggle-icon{font-size:1.2rem;line-height:1;transform:translateY(-.03em)}.brief-opening{margin:1.5rem 0 0}.brief-opening .brief-hero{margin:0 0 2rem}.brief-opening-body h2{margin-top:0}\n.brief-title-tools{display:flex;align-items:center;gap:.75rem;flex-wrap:wrap;margin-bottom:.35rem}.brief-title-tools .eyebrow{margin:0}.brief-listen{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap}.brief-listen[hidden],.brief-share-button[hidden]{display:none}.brief-listen-button,.brief-share-button,.brief-title-tools .text-scale-switch{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;min-height:2.75rem;padding:.35rem .7rem;border:1px solid var(--accent);border-radius:.55rem;background:transparent;color:var(--accent);font-size:.8rem;font-weight:800;cursor:pointer}.brief-listen-button:hover,.brief-share-button:hover,.brief-title-tools .text-scale-switch:hover{background:var(--accent-soft)}.brief-listen-button:focus-visible,.brief-listen-rate:focus-visible,.brief-share-button:focus-visible,.brief-title-tools .text-scale-switch:focus-visible{outline:3px solid var(--focus);outline-offset:2px}.brief-listen-rate{width:clamp(5rem,10vw,6.5rem);min-height:2.75rem;background:transparent;accent-color:var(--accent);cursor:pointer}.brief-listen-rate-value{min-width:2.25rem;color:var(--muted);font-size:.78rem;font-variant-numeric:tabular-nums}.brief-share-button{flex-shrink:0;margin-inline-start:auto;border-color:var(--line);color:var(--text)}.brief-share-button[data-article-print]{min-width:2.75rem;width:2.75rem;padding:.35rem;gap:0;margin-inline-start:0}.brief-share-button.is-confirmed{border-color:var(--accent);background:var(--accent-soft);color:var(--accent)}.brief-share-button.is-error{border-color:var(--amber);color:var(--amber)}\n.brief-detail-layout>article{min-width:0}.brief-detail-layout .article-header h1,.brief-detail-layout .article-header .deck,.brief-detail-layout .brief-opening-body{max-width:none}.brief-detail-layout .brief-continuation{max-width:72ch;margin-inline:auto}\n.brief-related-columns{margin-top:2.5rem;padding:1.25rem;border:1px solid var(--line);border-radius:var(--radius);background:var(--soft)}.brief-related-columns h2{margin:0;font-size:1.2rem}.brief-related-columns-note{margin:.4rem 0 1rem;color:var(--muted);font-size:.9rem}.brief-related-column-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;margin:0;padding:0;list-style:none}.brief-related-column-link{display:grid;grid-template-columns:48px minmax(0,1fr);align-items:center;gap:.75rem;min-height:5rem;padding:.75rem;border:1px solid var(--line);border-radius:.7rem;background:var(--card);color:var(--text);text-decoration:none;transition:.15s}.brief-related-column-link:hover{transform:translateY(-2px);border-color:var(--accent)}.brief-related-column-link:focus-visible{outline:3px solid var(--focus);outline-offset:2px}.brief-related-column-avatar{display:grid;place-items:center;width:48px;height:48px;overflow:hidden;border-radius:50%;background:var(--accent-soft);color:var(--accent);font-weight:800}.brief-related-column-avatar img{display:block;width:100%;height:100%;object-fit:cover}.brief-related-column-copy{display:grid;gap:.2rem;min-width:0}.brief-related-column-name{font-size:.84rem;font-weight:800}.brief-related-column-role{overflow:hidden;color:var(--muted);font-size:.72rem;text-overflow:ellipsis;white-space:nowrap}.brief-related-column-title{font-size:.84rem;line-height:1.35}\n@media(min-width:1100px){.brief-opening{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);align-items:start;gap:clamp(1.5rem,3vw,2.5rem)}.brief-opening .brief-hero{width:100%;max-width:32rem;margin:0}.brief-opening.is-image-expanded{display:block}.brief-opening.is-image-expanded .brief-hero{width:100%;max-width:68rem;margin:0 0 2rem}}\n@media(max-width:1099px){.brief-image-toggle{display:none!important}}\n@media(max-width:640px){.brief-related-column-list{grid-template-columns:1fr}}\n@media(max-width:480px){.brief-title-tools>.eyebrow{flex-basis:100%}}\n";
export const WRITER_TOOLS_SCRIPT = "<script src=\"/assets/article-tools.js\" defer></script>";
export const BRIEF_IMAGE_TOGGLE_SCRIPT = "\n<script>\n(()=>{document.querySelectorAll('[data-brief-image-toggle]').forEach(button=>{\n  const hero=button.closest('[data-brief-image]');\n  const opening=hero&&hero.closest('.brief-opening');\n  const label=button.querySelector('[data-brief-image-toggle-label]');\n  const icon=button.querySelector('[data-brief-image-toggle-icon]');\n  if(!hero||!opening||!label||!icon)return;\n  const sizeNodes=[...hero.querySelectorAll('[sizes]')];\n  const setState=expanded=>{\n    const nextLabel=expanded?button.dataset.collapseLabel:button.dataset.expandLabel;\n    opening.classList.toggle('is-image-expanded',expanded);\n    button.setAttribute('aria-expanded',String(expanded));\n    button.setAttribute('aria-label',nextLabel);\n    button.title=nextLabel;\n    label.textContent=nextLabel;\n    icon.textContent=expanded?'\u2921':'\u2922';\n    sizeNodes.forEach(node=>node.setAttribute('sizes',expanded?button.dataset.expandedSizes:button.dataset.collapsedSizes));\n  };\n  button.addEventListener('click',()=>setState(button.getAttribute('aria-expanded')!=='true'));\n  setState(false);button.hidden=false;\n});})();\n</script>\n";
export const BRIEF_LISTEN_SCRIPT = "\n<script>\n(()=>{document.querySelectorAll('[data-brief-listen]').forEach(root=>{\n  if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window))return;\n  const article=root.closest('article');\n  const button=root.querySelector('[data-brief-listen-button]');\n  const icon=root.querySelector('[data-brief-listen-icon]');\n  const label=root.querySelector('[data-brief-listen-label]');\n  const rate=root.querySelector('[data-brief-listen-rate]');\n  const output=root.querySelector('[data-brief-listen-rate-value]');\n  if(!article||!button||!icon||!label||!rate||!output)return;\n  const parts=[...article.querySelectorAll('.article-header h1,.article-header .deck,.article-body h2,.article-body p')]\n    .map(node=>{const copy=node.cloneNode(true);copy.querySelectorAll('.citation').forEach(marker=>marker.remove());return copy.textContent.trim();})\n    .filter(Boolean);\n  if(!parts.length)return;\n  const synth=window.speechSynthesis;\n  let voices=synth.getVoices();\n  if(typeof synth.addEventListener==='function'){synth.addEventListener('voiceschanged',()=>{voices=synth.getVoices();});}\n  const pickVoice=lang=>{if(!voices.length||!lang)return null;const lower=String(lang).toLowerCase();return voices.find(v=>v.lang&&v.lang.toLowerCase()===lower)||voices.find(v=>v.lang&&v.lang.toLowerCase().slice(0,2)===lower.slice(0,2))||null;};\n  const defaultRate=1.2;\n  const normalize=value=>{const parsed=Number.parseFloat(value);return Number.isFinite(parsed)&&parsed>=.5&&parsed<=2?Math.round(parsed*10)/10:defaultRate;};\n  try{rate.value=String(normalize(localStorage.getItem('ttsRate')));}catch{rate.value=String(defaultRate);}\n  const showRate=()=>{output.value=rate.value+'\u00d7';output.textContent=output.value;};\n  let run=0;\n  let speaking=false;\n  let activeIndex=0;\n  const setState=active=>{\n    speaking=active;\n    const nextLabel=active?root.dataset.stopLabel:root.dataset.listenLabel;\n    icon.textContent=active?'\u23f9':'\ud83d\udd0a';\n    label.textContent=nextLabel;\n    button.setAttribute('aria-label',nextLabel);\n    button.setAttribute('aria-pressed',String(active));\n  };\n  const finish=token=>{if(token!==run)return;setState(false);activeIndex=0;};\n  const stop=()=>{run+=1;synth.cancel();setState(false);activeIndex=0;};\n  const speakFrom=start=>{\n    const token=++run;\n    synth.cancel();\n    activeIndex=start;\n    setState(true);\n    const next=()=>{\n      if(token!==run)return;\n      if(activeIndex>=parts.length){finish(token);return;}\n      const utterance=new SpeechSynthesisUtterance(parts[activeIndex++]);\n      utterance.lang=root.dataset.lang;\n      const voice=pickVoice(root.dataset.lang);\n      if(voice)utterance.voice=voice;\n      utterance.rate=normalize(rate.value);\n      utterance.onend=next;\n      utterance.onerror=()=>finish(token);\n      try{synth.speak(utterance);}catch{finish(token);}\n    };\n    next();\n  };\n  button.addEventListener('click',()=>{if(speaking)stop();else speakFrom(0);});\n  rate.addEventListener('input',()=>{\n    rate.value=String(normalize(rate.value));showRate();\n    try{localStorage.setItem('ttsRate',rate.value);}catch{}\n  });\n  rate.addEventListener('change',()=>{if(speaking)speakFrom(Math.max(0,activeIndex-1));});\n  addEventListener('pagehide',stop);\n  showRate();setState(false);root.hidden=false;\n});})();\n</script>\n";
export const BRIEF_SHARE_SCRIPT = "\n<script>\n(()=>{document.querySelectorAll('[data-brief-share]').forEach(button=>{\n  const label=button.querySelector('[data-brief-share-label]');\n  const status=button.parentElement.querySelector('[data-brief-share-status]');\n  if(!label||!status)return;\n  const canNativeShare=typeof navigator.share==='function';\n  const canClipboard=Boolean(navigator.clipboard&&typeof navigator.clipboard.writeText==='function');\n  const canLegacyCopy=typeof document.execCommand==='function';\n  let resetTimer=0;\n  const restore=()=>{\n    label.textContent=button.dataset.shareLabel;\n    button.setAttribute('aria-label',button.dataset.shareLabel);\n    button.classList.remove('is-confirmed','is-error');\n  };\n  const feedback=(message,state)=>{\n    clearTimeout(resetTimer);\n    label.textContent=message;\n    button.setAttribute('aria-label',message);\n    button.classList.remove('is-confirmed','is-error');\n    button.classList.add(state);\n    status.textContent='';\n    requestAnimationFrame(()=>{status.textContent=message;});\n    resetTimer=setTimeout(restore,2000);\n  };\n  const copyUrl=async url=>{\n    if(canClipboard){\n      try{await navigator.clipboard.writeText(url);return;}\n      catch(error){if(!canLegacyCopy)throw error;}\n    }\n    if(!canLegacyCopy)throw new Error('copy unavailable');\n    const field=document.createElement('textarea');\n    field.value=url;field.setAttribute('readonly','');\n    field.style.cssText='position:fixed;left:-9999px;top:0;opacity:0';\n    document.body.appendChild(field);\n    let copied=false;\n    try{field.focus();field.select();copied=document.execCommand('copy');}\n    finally{field.remove();button.focus();}\n    if(!copied)throw new Error('copy failed');\n  };\n  button.addEventListener('click',async()=>{\n    const article=button.closest('article');\n    const heading=article&&article.querySelector('.article-header h1');\n    const canonical=document.querySelector('link[rel=\"canonical\"]');\n    const payload={title:heading?heading.textContent.trim():document.title,\n                   url:canonical?canonical.href:location.href};\n    try{\n      if(canNativeShare){\n        await navigator.share(payload);return;\n      }\n      await copyUrl(payload.url);\n      feedback(button.dataset.copiedLabel,'is-confirmed');\n    }catch(error){\n      if(error&&error.name==='AbortError')return;\n      if(!canNativeShare){feedback(button.dataset.failedLabel,'is-error');return;}\n      try{await copyUrl(payload.url);feedback(button.dataset.copiedLabel,'is-confirmed');}\n      catch{feedback(button.dataset.failedLabel,'is-error');}\n    }\n  });\n  button.hidden=false;\n});})();\n</script>\n";
export const ARCHIVE_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4 7.5h16v12H4z\"/><path d=\"M3 4.5h18v3H3z\"/><path d=\"M9 11.5h6\"/></svg>";
export const THEME_MOON_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20.4 15.1A8.5 8.5 0 0 1 8.9 3.6a8.5 8.5 0 1 0 11.5 11.5Z\"/></svg>";
export const THEME_SUN_ICON = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"3.5\"/><path d=\"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4\"/></svg>";
export const UI = {"tr":{"skip":"Ana içeriğe geç","home":"Ana sayfa","topics":"Konu masaları","language":"Dil","theme_light":"Açık tema","theme_to_light":"Açık temaya geç","archive":"Arşiv","breadcrumb_label":"Sayfa yolu","archive_title":"Arşiv","archive_deck":"Tüm köşe yazıları ve Gündem analizleri.","archive_search":"Arşivde ara…","archive_type":"İçerik türü","archive_all_types":"Tümü","archive_columns":"Köşe Yazıları","archive_briefs":"Gündem","archive_topic":"Masa","archive_all_topics":"Tüm masalar","archive_clear":"Temizle","archive_results":"{count} sonuç","archive_result_one":"1 sonuç","archive_column":"Köşe Yazısı","archive_brief":"Gündem Analizi","archive_all_columns":"{topic} masasındaki tüm yazıları görüntüle →","archive_all_briefs":"{topic} masasındaki tüm Gündem analizlerini görüntüle →","archive_from":"Başlangıç","archive_to":"Bitiş","archive_newer":"Daha yeni","archive_older":"Daha eski","archive_page_of":"Sayfa {n} / {total}","archive_search_loading":"Aranıyor… {done}/{total} ay yüklendi","archive_search_partial":"Bazı aylar yüklenemedi; sonuçlar eksik olabilir.","brief_date":"Gündem analiz tarihi","podcast_title":"Günlük Özet","podcast_audio_label":"Günlük sesli özeti oynat","podcast_play":"Günlük sesli özeti oynat","podcast_pause":"Günlük sesli özeti duraklat","podcast_seek":"Podcast konumu","podcast_mute":"Sesi kapat","podcast_unmute":"Sesi aç","overview_title":"Dört masada günün önemli gelişmeleri","overview_deck":"Eigen Radar; yapay zekâ, jeopolitik, ekonomi ve piyasalar ile bilim gündemini Türkçe ve İngilizce izleyen bağımsız bir derlemedir.","latest":"Son Gelişmeler","agendas":"Gündem","writers_intro":"Yazarlarımız","writers_intro_prev":"Önceki yazarlar","writers_intro_next":"Sonraki yazarlar","writers_intro_status":"{total} yazardan {start}–{end} gösteriliyor","writers":"Yazarlar","reader_back":"← Baskıya dön","more_from_writer":"Yazarın diğer yazıları","text_scale":"Metin boyutu","print_label":"Yazdır","opml_title":"Tüm akışlara tek adımda abone ol","editions_today":"Bugünkü sürümler","edition_word":"Sürüm","updated_at":"Güncellendi","columns":"Köşe Yazıları","columns_hint":"Günlük analiz ve yorumlar","column_date":"Baskı tarihi","ai_persona":"YZ","read_more":"Yazının tamamı →","references":"Kaynakça","reference":"Kaynak","news_source":"Haber kaynağı","previous_article":"Önceki yazı","primary_paper":"Birincil makale","primary_preprint":"Birincil ön baskı","return_to_citation":"Atfa dön","date_unavailable":"Yayın tarihi belirtilmemiş","retrospective_note":"† İşaretli kaynaklar arşiv yayımından sonra kaynakçaya eklendi ve geriye dönük olarak doğrulandı.","retrospective_label":"Geriye dönük doğrulandı","brief_analysis":"Analiz","brief_listen":"Sesli Dinle","brief_listen_stop":"Durdur","brief_listen_rate":"Okuma hızı","brief_share":"Paylaş","brief_share_copied":"Bağlantı kopyalandı ✓","brief_share_failed":"Bağlantı kopyalanamadı","brief_image_expand":"Görseli büyüt","brief_image_collapse":"Görseli küçült","related_columns":"İlgili köşe yazıları","related_columns_note":"Bu gündem hakkında daha fazla bilgi için ilgili köşe yazılarını okuyabilirsiniz.","more_briefs":"Aynı masadan diğer analizler","all_topic":"Tüm masa gündemi","source":"Asıl kaynak","no_news":"Bu masa için henüz yayımlanmış haber yok.","no_columns":"Bu masa için henüz yayımlanmış köşe yazısı yok.","ai_label":"Yapay zekâ üretimi analiz","more":"Aynı masadan diğer yazılar","about":"Hakkında, yöntem & düzeltmeler","privacy":"Gizlilik Politikası","rss":"RSS","footer_rights":"© 2026 Eigen Radar — Her hakkı saklıdır.","footer_x":"X hesabımız","footer_contact":"İletişim","footer_identity":"kaynak haberciliğini dört masada seçen, yapılandıran ve yapay zekâ ile sentezleyen bağımsız bir editoryal derlemedir; haber ajansı değildir ve özgün saha haberciliği yapmaz. Ayrıca 24 köşe yazarının analiz ve yorumlarını sunar.","footer_sources":"Taranan kaynaklar: TechCrunch, The Verge, Wired, Ars Technica, VentureBeat, MIT Technology Review, CNBC, Al Jazeera ve diğerleri. Tüm haber hakları asıl kaynaklara aittir; özetler kaynağa yönlendirme amaçlıdır.","footer_notice_label":"Yapay zekâ içerik bildirimi:","footer_notice":"Bu sitedeki köşe yazıları ve Gündem analizleri bir yapay zekâ modelinin ürettiği çıktılardır; köşe yazarları yapay zekâ karakterleridir. İçerikler yalnızca bilgilendirme amaçlıdır; finansal, hukuki, tıbbi veya başka bir profesyonel tavsiye niteliği taşımaz. Doğruluğu sürekli iyileştirmeye çalışsak da yapay zekâ modelleri hatalı veya uydurma (\"halüsinasyon\") bilgiler üretebilir. Site sahibi, bu içeriklere dayanılarak alınan kararlardan doğabilecek herhangi bir zarar veya kayıptan sorumlu tutulamaz; önemli bilgileri lütfen asıl kaynaklardan doğrulayın.","not_found":"Sayfa bulunamadı","not_found_text":"Aradığınız adres yayımlanmamış, taşınmış veya hatalı olabilir.","hubs_title":"Konular","hubs_briefs":"Gündem","hubs_columns":"Köşe yazıları","hubs_archive":"Arşiv","videos_title":"Videolar","videos_intro":"Eigen Radar her gün dört masada günün videolarını seçerek kısa bir listeye indirger. Bu sayfa, her masadaki seçilmiş videoları kanal adı ve yayın tarihiyle birlikte YouTube üzerinde açılan gizlilik dostu oynatma bağlantıları olarak sunar. İzleme site dışında gerçekleşir; burada yalnızca o günün editoryal seçkisi yer alır."},"en":{"skip":"Skip to main content","home":"Home","topics":"Topic desks","language":"Language","theme_light":"Light theme","theme_to_light":"Switch to light theme","archive":"Archive","breadcrumb_label":"Breadcrumb","archive_title":"Archive","archive_deck":"All columns and Brief analyses.","archive_search":"Search the archive…","archive_type":"Content type","archive_all_types":"All","archive_columns":"Columns","archive_briefs":"Briefs","archive_topic":"Desk","archive_all_topics":"All desks","archive_clear":"Clear","archive_results":"{count} results","archive_result_one":"1 result","archive_column":"Column","archive_brief":"Brief Analysis","archive_all_columns":"View all columns from the {topic} desk →","archive_all_briefs":"View all Brief analyses from the {topic} desk →","archive_from":"From","archive_to":"To","archive_newer":"Newer","archive_older":"Older","archive_page_of":"Page {n} of {total}","archive_search_loading":"Searching… {done}/{total} months loaded","archive_search_partial":"Some months failed to load; results may be incomplete.","brief_date":"Brief analysis date","podcast_title":"Daily Audio Brief","podcast_audio_label":"Play the daily audio brief","podcast_play":"Play the daily audio brief","podcast_pause":"Pause the daily audio brief","podcast_seek":"Podcast position","podcast_mute":"Mute","podcast_unmute":"Unmute","overview_title":"The day's important developments across four desks","overview_deck":"Eigen Radar is an independent Turkish and English digest covering AI, geopolitics, economics and markets, and science.","latest":"Latest Stories","agendas":"Briefs","writers_intro":"Our Writers","writers_intro_prev":"Previous writers","writers_intro_next":"Next writers","writers_intro_status":"Showing writers {start}–{end} of {total}","writers":"Columnists","reader_back":"← Back to the edition","more_from_writer":"More from this columnist","text_scale":"Text size","print_label":"Print","opml_title":"Subscribe to every feed in one step","editions_today":"Today's editions","edition_word":"Edition","updated_at":"Updated","columns":"Columns","columns_hint":"Daily analysis and commentary","column_date":"Edition date","ai_persona":"AI","read_more":"Read the full piece →","references":"References","reference":"Reference","news_source":"News source","previous_article":"Previous article","primary_paper":"Primary paper","primary_preprint":"Primary preprint","return_to_citation":"Return to citation","date_unavailable":"Publication date unavailable","retrospective_note":"† Marked sources were added to the bibliography after archival publication and verified retrospectively.","retrospective_label":"Verified retrospectively","brief_analysis":"Analysis","brief_listen":"Listen","brief_listen_stop":"Stop","brief_listen_rate":"Reading speed","brief_share":"Share","brief_share_copied":"Link copied ✓","brief_share_failed":"Link could not be copied","brief_image_expand":"Enlarge image","brief_image_collapse":"Reduce image","related_columns":"Related columns","related_columns_note":"For more information on this topic, you can read the related columns.","more_briefs":"More analysis from this desk","all_topic":"View the full desk","source":"Original source","no_news":"No news has been published for this desk yet.","no_columns":"No columns have been published for this desk yet.","ai_label":"AI-generated analysis","more":"More from this desk","about":"About, methodology & corrections","privacy":"Privacy Policy","rss":"RSS","footer_rights":"© 2026 Eigen Radar — All rights reserved.","footer_x":"Our X account","footer_contact":"Contact","footer_identity":"an independent four-desk digest covering artificial intelligence, geopolitics, economics and markets, and science. It selects, structures and synthesizes source reporting with AI; it is not a news agency and does not conduct firsthand reporting. It also publishes analysis from 24 columnists.","footer_sources":"Sources scanned: TechCrunch, The Verge, Wired, Ars Technica, VentureBeat, MIT Technology Review, CNBC, Al Jazeera and others. All rights to the original stories belong to their publishers; summaries are meant to send you to the source.","footer_notice_label":"AI-generated content notice:","footer_notice":"The columns and Briefs analyses on this site are outputs of an artificial intelligence model; the columnists are AI personas. Content is provided for informational purposes only and does not constitute financial, legal, medical, or other professional advice. While we work continuously to improve accuracy, AI models can produce errors or fabricated information (\"hallucinations\"). The site owner accepts no responsibility or liability for any damage or loss arising from reliance on this content; please verify important information with the original sources.","not_found":"Page not found","not_found_text":"The address may be unpublished, moved, or incorrect.","hubs_title":"Topics","hubs_briefs":"Briefs","hubs_columns":"Columns","hubs_archive":"Archive","videos_title":"Videos","videos_intro":"Eigen Radar curates a daily shortlist of videos across four desks. This page lists each desk's picks with channel name and publication date as privacy-preserving playback links that open on YouTube. Viewing happens off-site — only the editorial selection for the day is listed here."}} ;
export const TOPIC_NAV_LABELS = {"ai":{"tr":"Yapay Zekâ","en":"AI"},"geopolitics":{"tr":"Jeopolitik","en":"Geopolitics"},"economics-markets":{"tr":"Ekonomi","en":"Economics"},"science":{"tr":"Bilim","en":"Science"}} ;
export const TOPIC_COPY = {"ai":{"tr":["Yapay Zekâ","Modeller, şirketler, politika, yatırım ve güvenlik gelişmeleri."],"en":["Artificial Intelligence","Models, companies, policy, investment and safety developments."]},"geopolitics":{"tr":["Jeopolitik","Diplomasi, güvenlik, ticaret ve değişen güç dengeleri."],"en":["Geopolitics","Diplomacy, security, trade and shifting balances of power."]},"economics-markets":{"tr":["Ekonomi ve Piyasalar","Piyasalar, merkez bankaları, şirketler ve emtialar."],"en":["Economics & Markets","Markets, central banks, companies and commodities."]},"science":{"tr":["Bilim","Uzay, biyoloji, iklim, fizik ve bilimsel teknoloji."],"en":["Science","Space, biology, climate, physics and scientific technology."]}} ;
export const MARKETS_NAV_LABELS = {"tr":"Piyasalar","en":"Markets"} ;
export const INTRADAY_LABELS = {"tr":{"1":"Sabah","2":"Öğle","3":"Akşam","4":"Gece"},"en":{"1":"Morning","2":"Midday","3":"Evening","4":"Night"}} ;
export const TR_MONTHS = ["","Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"] ;
export const EN_MONTHS = ["","January","February","March","April","May","June","July","August","September","October","November","December"] ;
export const ORG_SAME_AS = ["https://x.com/eigenradar"] ;
export const ORG_DESCRIPTION = {"tr":"Eigen Radar, yapay zekâ, jeopolitik, ekonomi ve piyasalar ile bilim gündemini Türkçe ve İngilizce izleyen kaynak bağlantılı bağımsız bir derlemedir.","en":"Eigen Radar is an independent, source-linked Turkish and English digest covering AI, geopolitics, economics and markets, and science."} ;
export const ORG_FOUNDER_JOB_TITLE = {"tr":"Sorumlu Editör","en":"Editor of Record"} ;
export const RENDERER_VERSION = "1";

export const BASE_URL = "https://eigenradar.com";
export const LANGS = ["tr", "en"];
export const CANONICAL_TOPIC_IDS = [
  "geopolitics",
  "economics-markets",
  "ai",
  "science",
];
export const ORG_FOUNDING_DATE = "2026-07-14";
export const ORG_FOUNDER_NAME = "Şevket Eser KUBALI";
export const ORG_FOUNDER_SAME_AS = ["https://github.com/eserlxl"];

const BRIEF_ASSET =
  /^\/assets\/briefs\/\d{4}-\d{2}-\d{2}\/[a-z0-9][a-z0-9/_-]{0,159}\.[0-9a-f]{12}\.webp$/;
const AVATAR_ASSET =
  /^\/assets\/avatars\/avatar-[a-z0-9][a-z0-9-]{0,79}\.[0-9a-f]{12}\.webp$/;
const DATE_VALUE = /^\d{4}-\d{2}-\d{2}$/;
const WRITER_HISTORY_LIMIT = 30; // mirrors site_pages.WRITER_HISTORY_LIMIT
const ARTICLE_REFERENCE_PATH =
  /^\/tr\/(?:ai|geopolitics|economics-markets|science)\/(?:ai|geo|eco|sci)-\d{2}\/\d{4}-\d{2}-\d{2}\/(?:[2-9]\d*\/)?$/;

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

export function topicBadge(topic, lang) {
  let label = TOPIC_NAV_LABELS[topic]?.[lang] || topic;
  if (lang === "tr") {
    label = label.replace(/i/g, "İ").replace(/ı/g, "I");
  }
  return label.toUpperCase();
}

export function assetUrl(value) {
  return typeof value === "string" && BRIEF_ASSET.test(value) ? value : "";
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
  try {
    const url = new URL(value);
    if (!["http:", "https:"].includes(url.protocol) || !url.hostname) {
      return "";
    }
    if (url.username || url.password) {
      return "";
    }
    return `${url.protocol}//${url.host}${url.pathname}${url.search}`;
  } catch {
    return "";
  }
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

function relatedArchiveCta(lang, topic, contentType) {
  const path = archiveFilteredPublicPath(lang, contentType, topic);
  if (!path) {
    return "";
  }
  const key = contentType === "column" ? "archive_all_columns" : "archive_all_briefs";
  const label = UI[lang][key].replace("{topic}", topicLabel(topic, lang));
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
  const socialWidth = socialImage ? positiveDimension(socialImage.width) : null;
  const socialHeight = socialImage ? positiveDimension(socialImage.height) : null;
  const socialAlt = socialImage ? text(socialImage.alt) : "";
  const ogImage = socialSrc
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
  const hasArticle = (graph?.["@graph"] || []).some((node) => node["@type"] === "Article");
  return `<!doctype html>
<html lang="${lang}">
<head>
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
<meta property="og:type" content="${hasArticle ? "article" : "website"}">
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
<link rel="stylesheet" href="/assets/site-pages.css">
<style>${extraStyle}</style>
<script type="application/ld+json">${jsonScript(graph)}</script>
${THEME_RUNTIME_SCRIPT}
${X_CONVERSION_TRACKING}
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
<main id="content" class="${mainClass}">${body}</main>
<footer><div class="wrap"><p><strong>Eigen Radar</strong> — ${esc(u.footer_identity)}</p>
<p>${esc(u.footer_sources)}</p>
<p><strong>${esc(u.footer_notice_label)}</strong> ${esc(u.footer_notice)}</p>
<nav><a href="${archivePublicPath(lang)}">${esc(u.archive)}</a><a href="${hubsIndexPublicPath(lang)}">${esc(u.hubs_title)}</a><a href="${aboutPublicPath(lang)}">${esc(u.about)}</a><a href="/privacy">${esc(u.privacy)}</a><a href="/feed.xml">${esc(u.rss)}</a><a href="/feeds.opml" title="${esc(u.opml_title, true)}">OPML</a></nav><div class="footer-meta"><p class="footer-rights">${esc(u.footer_rights)}</p><div class="footer-links"><a href="https://x.com/eigenradar" rel="me noopener" target="_blank" aria-label="${esc(u.footer_x)} (@eigenradar)"><svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false" fill="currentColor"><path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-5.9l-4.62-6.04L5.94 21H2.92l7.06-8.07L2.25 3h6.05l4.18 5.52L17.53 3Zm-1.06 16.2h1.67L7.62 4.71H5.83l10.64 14.49Z"/></svg><span>@eigenradar</span></a><a data-mu="moc.radarnegie" data-mh="moc.liamg" data-label="${esc(u.footer_contact)}" href="${aboutPublicPath(lang)}" aria-label="${esc(u.footer_contact)}"><svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.6 7.2 7.5 5.1a1.6 1.6 0 0 0 1.8 0l7.5-5.1"/></svg><span>eigenradar.com (at) gmail.com</span></a></div></div></div></footer><script>(function(){var r=function(s){return s.split('').reverse().join('')};document.querySelectorAll('a[data-mu]').forEach(function(a){var v=r(a.getAttribute('data-mu'))+String.fromCharCode(64)+r(a.getAttribute('data-mh'));a.href='mailto:'+v;var s=a.querySelector('span');if(s){s.textContent=v}a.setAttribute('aria-label',a.getAttribute('data-label')+': '+v);a.removeAttribute('data-mu');a.removeAttribute('data-mh')})})();</script><script>if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/service-worker.js').catch(function(){})})}</script>${scriptHtml}
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
    ? `<section class="related"><h2>${esc(u.more)}</h2><ul>${relatedHtml}</ul>${archiveCta}</section>`
    : `<div class="related">${archiveCta}</div>`;
  const topicPath = categoryPublicPath(lang, topic);
  const avatar = avatarUrl(writer.avatar);
  const avatarHtml = avatar
    ? `<img src="${esc(avatar, true)}" width="64" height="64" loading="eager" decoding="async" alt="">`
    : "";
  const role = writerFocus(writer.role, lang);
  const roleLine = [role, u.ai_persona, formatDate(payload.date, lang), editionLabel(payload, lang)]
    .filter(Boolean)
    .join(" · ");
  const badge = topicBadge(topic, lang);
  const [readerNav, readerHistory] = writerReaderNav(lang, payload, writerById(site));
  const deckHtml = excerpt ? `<p class="deck">${esc(excerpt)}</p>` : "";
  const radarStampHtml = radarStamp(payload, lang);
  const textScaleSwitch = renderTextScaleSwitch(lang);
  const listenLang = lang === "tr" ? "tr-TR" : "en-US";
  const hubChips = hubsHtml(lang, payload, site);
  const body =
    `<nav class="breadcrumbs visually-hidden" aria-label="${esc(u.breadcrumb_label, true)}"><a href="/">${esc(u.home)}</a><span>/</span><a href="${topicPath}">${esc(topicLabel(topic, lang))}</a></nav>\n` +
    `<div class="article-layout writer-reader"><div class="reader-actions"><a class="reader-back" href="${esc(topicPath, true)}">${esc(u.reader_back)}</a>${readerHistory}<button class="reader-back reader-share" type="button" data-brief-share data-share-label="${esc(u.brief_share, true)}" data-copied-label="${esc(u.brief_share_copied, true)}" data-failed-label="${esc(u.brief_share_failed, true)}" aria-label="${esc(u.brief_share, true)}" hidden><span data-brief-share-label>${esc(u.brief_share)}</span></button><span class="visually-hidden" role="status" aria-live="polite" aria-atomic="true" data-brief-share-status></span></div>\n` +
    `<article class="writer-content"><header class="article-header"><span class="visually-hidden">${esc(u.ai_label)}</span><div class="eyebrow">${esc(u.columns)}</div><h1>${esc(headline)}</h1>${deckHtml}<div class="wtop"><div class="avatar">${avatarHtml}</div><div><div class="wname"><a href="${esc(writerPublicPath(lang, topic, payload.writer), true)}" style="color: inherit; text-decoration: none;">${esc(writerName)}</a><span class="ai-badge">${esc(badge)}</span></div><div class="wrole">${esc(roleLine)}</div></div></div>${radarStampHtml}<div class="listen-row">${textScaleSwitch}<button class="reader-back reader-print" type="button" data-article-print aria-label="${esc(u.print_label, true)}" title="${esc(u.print_label, true)}" hidden><span aria-hidden="true">🖨</span></button><div class="brief-listen" data-brief-listen data-lang="${listenLang}" data-listen-label="${esc(u.brief_listen, true)}" data-stop-label="${esc(u.brief_listen_stop, true)}" hidden><button class="listen-btn" type="button" data-brief-listen-button aria-label="${esc(u.brief_listen, true)}" aria-pressed="false"><span aria-hidden="true" data-brief-listen-icon>🔊</span> <span data-brief-listen-label>${esc(u.brief_listen)}</span></button><label class="visually-hidden" for="writer-listen-rate">${esc(u.brief_listen_rate)}</label><input class="listen-rate" id="writer-listen-rate" type="range" min="0.5" max="2" step="0.1" value="1.2" data-brief-listen-rate><output class="listen-rate-val" for="writer-listen-rate" data-brief-listen-rate-value>1.2×</output></div></div></header>\n` +
    readerNav +
    `\n<div class="article-body">${sections.join("") || `<p class="empty">${esc(u.no_columns)}</p>`}</div>\n` +
    `${references}\n${hubChips}${relatedSection}</article></div>`;
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
    "(min-width:1100px) 32rem,calc(100vw - 2rem)",
    { eager: true },
  );
  const imageToggle = picture && sections.length
    ? `<button class="brief-image-toggle" type="button" data-brief-image-toggle data-expand-label="${esc(u.brief_image_expand, true)}" data-collapse-label="${esc(u.brief_image_collapse, true)}" data-collapsed-sizes="(min-width:1100px) 32rem,calc(100vw - 2rem)" data-expanded-sizes="(min-width:1100px) 44rem,calc(100vw - 2rem)" aria-controls="brief-opening" aria-expanded="false" aria-label="${esc(u.brief_image_expand, true)}" title="${esc(u.brief_image_expand, true)}" hidden><span class="brief-image-toggle-icon" aria-hidden="true" data-brief-image-toggle-icon>⤢</span><span class="visually-hidden" data-brief-image-toggle-label>${esc(u.brief_image_expand)}</span></button>`
    : "";
  const imageHtml = picture
    ? `<figure class="brief-hero" data-brief-image>${picture}${imageToggle}</figure>`
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
    ? `<section class="related"><h2>${esc(u.more_briefs)}</h2><ul>${relatedHtml}</ul>${archiveCta}</section>`
    : `<div class="related">${archiveCta}</div>`;
  const formattedDate = formatDate(payload.date, lang);
  const radarStampHtml = radarStamp(payload, lang);
  const slotLabel = editionLabel(payload, lang);
  const textScaleSwitch = renderTextScaleSwitch(lang);
  const listenLang = lang === "tr" ? "tr-TR" : "en-US";
  const hubChips = hubsHtml(lang, payload, site);
  const body =
    `<nav class="breadcrumbs" aria-label="${esc(u.breadcrumb_label, true)}"><a href="/">${esc(u.home)}</a><span>/</span><a href="${topicPath}">${esc(topicLabel(topic, lang))}</a></nav>\n` +
    `<div class="article-layout brief-detail-layout"><article><header class="article-header"><div class="brief-title-tools"><div class="eyebrow">${esc(u.brief_analysis)}</div>${textScaleSwitch}<button class="brief-share-button" type="button" data-article-print aria-label="${esc(u.print_label, true)}" title="${esc(u.print_label, true)}" hidden><span aria-hidden="true">🖨</span></button><div class="brief-listen" data-brief-listen data-lang="${listenLang}" data-listen-label="${esc(u.brief_listen, true)}" data-stop-label="${esc(u.brief_listen_stop, true)}" hidden><button class="brief-listen-button" type="button" data-brief-listen-button aria-label="${esc(u.brief_listen, true)}" aria-pressed="false"><span aria-hidden="true" data-brief-listen-icon>🔊</span><span data-brief-listen-label>${esc(u.brief_listen)}</span></button><label class="visually-hidden" for="brief-listen-rate">${esc(u.brief_listen_rate)}</label><input class="brief-listen-rate" id="brief-listen-rate" type="range" min="0.5" max="2" step="0.1" value="1.2" data-brief-listen-rate><output class="brief-listen-rate-value" for="brief-listen-rate" data-brief-listen-rate-value>1.2×</output></div><button class="brief-share-button" type="button" data-brief-share data-share-label="${esc(u.brief_share, true)}" data-copied-label="${esc(u.brief_share_copied, true)}" data-failed-label="${esc(u.brief_share_failed, true)}" aria-label="${esc(u.brief_share, true)}"><span aria-hidden="true">↗</span><span data-brief-share-label>${esc(u.brief_share)}</span></button><span class="visually-hidden" role="status" aria-live="polite" aria-atomic="true" data-brief-share-status></span></div><h1>${esc(headline)}</h1><p class="deck">${esc(summary)}</p><div class="meta"><span>${esc(topicLabel(topic, lang))}</span><span>·</span><time datetime="${payload.date}">${esc(formattedDate)}</time><span>·</span><span>${esc(slotLabel)}</span></div>${radarStampHtml}</header>\n` +
    `${analysisHtml}\n${relatedColumns}\n${references}\n${hubChips}${relatedSection}</article></div>`;
  const image = payload.image && typeof payload.image === "object" ? payload.image : {};
  const imageSrc = assetUrl(image.src);
  const imageUrl = imageSrc ? absoluteUrl(baseUrl, imageSrc) : null;
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
  });
}
