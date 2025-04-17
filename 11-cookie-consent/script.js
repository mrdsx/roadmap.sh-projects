// If you need to remove cookie consent
//
// localStorage.setItem("cookie-consent", "");

const cookieConsent = localStorage.getItem("cookie-consent") || false;

if (cookieConsent) hideCookieWindow(".cookie-window");

function hideCookieWindow(windowClassName) {
  document.querySelector(windowClassName).style.display = "none";
};

function acceptCookies() {
  localStorage.setItem("cookie-consent", true);
  hideCookieWindow(".cookie-window");
};