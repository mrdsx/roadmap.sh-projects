const body = document.body;
const sunIcon = document.getElementById("sun_icon");
const moonIcon = document.getElementById("moon_icon");
let theme = localStorage.getItem("theme");

if (!theme) {
  localStorage.setItem("theme", "light");
} else if (theme === "dark") {
  body.classList.add("dark");
  displaySunIcon();
}

function toggleTheme() {
  theme = (theme === "dark") ? "light" : "dark";
  if (theme === "light") {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    displayMoonIcon();
  } else {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    displaySunIcon();
  };
};

function displaySunIcon() {
  sunIcon.style.display = "block";
  moonIcon.style.display = "none";
}

function displayMoonIcon() {
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
}
