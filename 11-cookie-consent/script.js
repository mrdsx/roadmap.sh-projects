// If you need to remove cookie consent
// localStorage.setItem("cookie-consent", "");

const cookieConsent = localStorage.getItem("cookie-consent") || false;

if (!cookieConsent) showCookieWindow();

function showCookieWindow() {
  document.querySelector(".cookie-window").classList.remove("hidden");
}

function acceptCookies() {
  localStorage.setItem("cookie-consent", true);
  document.querySelector(".cookie-window").classList.add("hidden");
}