(() => {
  document.querySelectorAll('[data-writer-history]').forEach(root => {
    const label = root.querySelector('label[for="writer-history-select"]');
    const select = root.querySelector('[data-writer-history-select]');
    const fallback = root.querySelector('[data-writer-history-fallback]');
    if (!label || !select || select.options.length < 2) return;
    select.addEventListener('change', () => {
      if (select.value) window.location.assign(select.value);
    });
    label.hidden = false;
    select.hidden = false;
    if (fallback) fallback.hidden = true;
  });
})();

(() => {
  document.querySelectorAll('[data-brief-listen]').forEach(root => {
    if (!('speechSynthesis' in window)
        || !('SpeechSynthesisUtterance' in window)) return;
    const article = root.closest('article');
    const button = root.querySelector('[data-brief-listen-button]');
    const icon = root.querySelector('[data-brief-listen-icon]');
    const label = root.querySelector('[data-brief-listen-label]');
    const rate = root.querySelector('[data-brief-listen-rate]');
    const output = root.querySelector('[data-brief-listen-rate-value]');
    if (!article || !button || !icon || !label || !rate || !output) return;

    const parts = [...article.querySelectorAll(
      '.article-header h1,.article-header .deck,.article-body h2,.article-body p'
    )].map(node => {
      const copy = node.cloneNode(true);
      copy.querySelectorAll('.citation').forEach(marker => marker.remove());
      return copy.textContent.trim();
    }).filter(Boolean);
    if (!parts.length) return;

    const synth = window.speechSynthesis;
    const defaultRate = 1.2;
    const normalize = value => {
      const parsed = Number.parseFloat(value);
      return Number.isFinite(parsed) && parsed >= 0.5 && parsed <= 2
        ? Math.round(parsed * 10) / 10
        : defaultRate;
    };
    try {
      rate.value = String(normalize(localStorage.getItem('ttsRate')));
    } catch {
      rate.value = String(defaultRate);
    }
    const showRate = () => {
      output.value = `${rate.value}×`;
      output.textContent = output.value;
    };
    let run = 0;
    let speaking = false;
    let activeIndex = 0;
    const setState = active => {
      speaking = active;
      const nextLabel = active ? root.dataset.stopLabel : root.dataset.listenLabel;
      icon.textContent = active ? '⏹' : '🔊';
      label.textContent = nextLabel;
      button.setAttribute('aria-label', nextLabel);
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('speaking', active);
    };
    const finish = token => {
      if (token !== run) return;
      setState(false);
      activeIndex = 0;
    };
    const stop = () => {
      run += 1;
      synth.cancel();
      setState(false);
      activeIndex = 0;
    };
    const speakFrom = start => {
      const token = ++run;
      synth.cancel();
      activeIndex = start;
      setState(true);
      const next = () => {
        if (token !== run) return;
        if (activeIndex >= parts.length) {
          finish(token);
          return;
        }
        const utterance = new SpeechSynthesisUtterance(parts[activeIndex++]);
        utterance.lang = root.dataset.lang;
        utterance.rate = normalize(rate.value);
        utterance.onend = next;
        utterance.onerror = () => finish(token);
        try {
          synth.speak(utterance);
        } catch {
          finish(token);
        }
      };
      next();
    };
    button.addEventListener('click', () => {
      if (speaking) stop();
      else speakFrom(0);
    });
    rate.addEventListener('input', () => {
      rate.value = String(normalize(rate.value));
      showRate();
      try {
        localStorage.setItem('ttsRate', rate.value);
      } catch {}
    });
    rate.addEventListener('change', () => {
      if (speaking) speakFrom(Math.max(0, activeIndex - 1));
    });
    addEventListener('pagehide', stop);
    showRate();
    setState(false);
    root.hidden = false;
  });
})();

(() => {
  document.querySelectorAll('[data-brief-share]').forEach(button => {
    const label = button.querySelector('[data-brief-share-label]');
    const status = button.parentElement.querySelector('[data-brief-share-status]');
    if (!label || !status) return;
    const canNativeShare = typeof navigator.share === 'function';
    const canClipboard = Boolean(
      navigator.clipboard
      && typeof navigator.clipboard.writeText === 'function'
    );
    const canLegacyCopy = typeof document.execCommand === 'function';
    if (!canNativeShare && !canClipboard && !canLegacyCopy) return;

    let resetTimer = 0;
    const restore = () => {
      label.textContent = button.dataset.shareLabel;
      button.setAttribute('aria-label', button.dataset.shareLabel);
      button.classList.remove('is-confirmed', 'is-error');
    };
    const feedback = (message, state) => {
      clearTimeout(resetTimer);
      label.textContent = message;
      button.setAttribute('aria-label', message);
      button.classList.remove('is-confirmed', 'is-error');
      button.classList.add(state);
      status.textContent = '';
      requestAnimationFrame(() => {
        status.textContent = message;
      });
      resetTimer = setTimeout(restore, 2000);
    };
    const copyUrl = async url => {
      if (canClipboard) {
        try {
          await navigator.clipboard.writeText(url);
          return;
        } catch (error) {
          if (!canLegacyCopy) throw error;
        }
      }
      if (!canLegacyCopy) throw new Error('copy unavailable');
      const field = document.createElement('textarea');
      field.value = url;
      field.setAttribute('readonly', '');
      field.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
      document.body.appendChild(field);
      let copied = false;
      try {
        field.focus();
        field.select();
        copied = document.execCommand('copy');
      } finally {
        field.remove();
        button.focus();
      }
      if (!copied) throw new Error('copy failed');
    };

    button.addEventListener('click', async () => {
      const main = button.closest('main');
      const heading = main && main.querySelector('.article-header h1');
      const canonical = document.querySelector('link[rel="canonical"]');
      const payload = {
        title: heading ? heading.textContent.trim() : document.title,
        url: canonical ? canonical.href : location.href,
      };
      try {
        if (canNativeShare) {
          await navigator.share(payload);
          return;
        }
        await copyUrl(payload.url);
        feedback(button.dataset.copiedLabel, 'is-confirmed');
      } catch (error) {
        if (error && error.name === 'AbortError') return;
        if (!canNativeShare) {
          feedback(button.dataset.failedLabel, 'is-error');
          return;
        }
        try {
          await copyUrl(payload.url);
          feedback(button.dataset.copiedLabel, 'is-confirmed');
        } catch {
          feedback(button.dataset.failedLabel, 'is-error');
        }
      }
    });
    button.hidden = false;
  });
})();
