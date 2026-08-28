
(() => {
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  if (!button) return;

  const updateButton = () => {
    const dark = root.dataset.theme === 'dark';
    button.textContent = dark ? '☀' : '☾';
    button.setAttribute('aria-label', dark ? 'Use light theme' : 'Use dark theme');
    button.setAttribute('title', dark ? 'Use light theme' : 'Use dark theme');
  };

  updateButton();
  button.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('runhua-theme', next);
    updateButton();
  });
})();
