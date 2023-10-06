const toggleTheme = document.querySelector("#toggle-theme");

const html = document.documentElement;

toggleTheme.addEventListener("click", function () {
    ym(95178738, 'reachGoal', 'toggleTheme');
    if (html.hasAttribute("theme")) {
        html.removeAttribute("theme");
    } else {
        html.setAttribute("theme", "dark");
    }
});
