import { toggleTheme } from "./theme.js";
import { sendYandexMetricEvent } from "./analytics.js";

document.addEventListener("DOMContentLoaded", function() {
  const toggleThemeButton = document.getElementById("toggle-theme");
  toggleThemeButton.addEventListener("click", toggleTheme);
})


