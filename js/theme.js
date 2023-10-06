const THEME_LIGHT = "light";
const THEME_DARK = "dark";

export function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("theme") || THEME_LIGHT;
  const newTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;

  setTheme(html, newTheme);
  saveThemeToSessionStorage(newTheme);
  sendYandexMetricEvent("toggleTheme");
}

function setTheme(element, theme) {
  element.setAttribute("theme", theme);
}

function saveThemeToSessionStorage(theme) {
  sessionStorage.setItem("theme", theme);
}
