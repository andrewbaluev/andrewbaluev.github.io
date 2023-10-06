const toggleTheme = document.querySelector("#toggle-theme");
const html = document.documentElement;
const savedTheme = sessionStorage.getItem("theme");

if (savedTheme) {
  html.setAttribute("theme", savedTheme);
}

toggleTheme.addEventListener("click", function () {
    if (html.hasAttribute("theme")) {
        html.removeAttribute("theme");
        sessionStorage.setItem("theme", "light");
    } else {
        html.setAttribute("theme", "dark");
        sessionStorage.setItem("theme", "dark");
    }
    ym(95178738, 'reachGoal', 'toggleTheme');
});
