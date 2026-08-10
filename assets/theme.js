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
