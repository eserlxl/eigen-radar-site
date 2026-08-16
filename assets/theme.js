(() => {
  const root = document.documentElement;
  const storageKey = 'theme';
  const colors = {
    dark: '#040711',
    light: '#c7d2e0',
  };
  const copy = {
    tr: {
      name: 'Açık tema',
      toDark: 'Koyu temaya geç',
      toLight: 'Açık temaya geç',
    },
    en: {
      name: 'Light theme',
      toDark: 'Switch to dark theme',
      toLight: 'Switch to light theme',
    },
  };

  const normalize = value => value === 'light' ? 'light' : 'dark';
  const language = () => root.lang.toLowerCase().startsWith('tr') ? 'tr' : 'en';
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const updateControls = theme => {
    const strings = copy[language()];
    const light = theme === 'light';
    document.querySelectorAll('[data-theme-switch]').forEach(button => {
      button.setAttribute('aria-checked', String(light));
      button.setAttribute('aria-label', strings.name);
      button.title = light ? strings.toDark : strings.toLight;
    });
  };

  const apply = (value, persist = false) => {
    const theme = normalize(value);
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    if (themeColor) themeColor.content = colors[theme];
    updateControls(theme);
    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch {}
    }
  };

  document.querySelectorAll('[data-theme-switch]').forEach(button => {
    button.addEventListener('click', () => {
      apply(root.dataset.theme === 'light' ? 'dark' : 'light', true);
    });
  });

  new MutationObserver(() => updateControls(normalize(root.dataset.theme))).observe(root, {
    attributes: true,
    attributeFilter: ['lang'],
  });

  addEventListener('storage', event => {
    if (event.key === storageKey) apply(event.newValue);
  });

  apply(root.dataset.theme);
})();

(() => {
  const root = document.documentElement;
  const storageKey = 'textScale';
  const scales = ['1', '1.125', '1.25'];
  const copy = { tr: 'Metin boyutu', en: 'Text size' };
  const levels = {
    '1': { tr: 'normal', en: 'normal' },
    '1.125': { tr: 'büyük', en: 'large' },
    '1.25': { tr: 'daha büyük', en: 'larger' },
  };
  const language = () => root.lang.toLowerCase().startsWith('tr') ? 'tr' : 'en';
  const stored = () => {
    try {
      return localStorage.getItem(storageKey) || '1';
    } catch {
      return '1';
    }
  };
  const apply = (value, persist = false) => {
    const scale = scales.includes(value) ? value : '1';
    if (scale === '1') delete root.dataset.textScale;
    else root.dataset.textScale = scale;
    document.querySelectorAll('[data-text-scale-switch]').forEach(button => {
      const lang = language();
      const name = `${copy[lang]}: ${levels[scale][lang]}`;
      button.setAttribute('aria-label', name);
      button.title = name;
      button.textContent = scale === '1' ? 'A' : scale === '1.125' ? 'A+' : 'A++';
    });
    if (persist) {
      try {
        localStorage.setItem(storageKey, scale);
      } catch {}
    }
  };
  document.querySelectorAll('[data-text-scale-switch]').forEach(button => {
    button.addEventListener('click', () => {
      // Cycle from the applied scale, not storage: with localStorage blocked,
      // stored() is stuck at '1' and the switch could never reach 1.25.
      const current = root.dataset.textScale || '1';
      apply(scales[(scales.indexOf(current) + 1) % scales.length], true);
    });
  });
  addEventListener('storage', event => {
    if (event.key === storageKey) apply(event.newValue || '1');
  });
  apply(stored());
})();
