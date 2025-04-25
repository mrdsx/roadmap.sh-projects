const body = document.body;
const sunIcon = document.getElementById("sun_icon");
const moonIcon = document.getElementById("moon_icon");
let theme = localStorage.getItem("theme");

if (!theme) {
  localStorage.setItem("theme", "light");
} else if (theme === "dark") {
  body.classList.add("dark");
  showIcon("sunIcon");
}

function toggleTheme() {
  const nextTheme = (theme === "dark") ? "light" : "dark";
  if (nextTheme === "light") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}

function setTheme(themeColor) {
  if (themeColor === "light") {
    theme = "light";
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    showIcon("moonIcon");
  } else {
    theme = "dark";
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    showIcon("sunIcon");
  }
}

function showIcon(icon) {
  if (icon === "sunIcon") {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
}
