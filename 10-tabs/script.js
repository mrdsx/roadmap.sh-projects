function openTab(event, tabId) {
  const tabContens = document.querySelectorAll(".tab-content");
  tabContens.forEach(tab => tab.style.display = "none");

  const tabLinks = document.querySelectorAll(".tab-link");
  tabLinks.forEach(tabLink => tabLink.classList.remove("active"));

  document.getElementById(tabId).style.display = "block";
  event.target.classList.add("active");
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.tab-content').style.display = 'block';
});