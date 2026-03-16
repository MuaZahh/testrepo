(function () {
  var toggle = document.getElementById("theme-toggle");
  var savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "Light";
  }

  toggle.addEventListener("click", function () {
    var isDark = document.body.classList.toggle("dark");
    toggle.textContent = isDark ? "Light" : "Dark";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
})();
