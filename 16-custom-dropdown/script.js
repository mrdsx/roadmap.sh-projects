const dropdown = document.querySelector(".dropdown")
const dropdownBtn = dropdown.querySelector(".dropdown-btn");
const dropdownList = dropdown.querySelector(".dropdown-list");

const label = dropdownBtn.querySelector("span");
const icon = dropdownBtn.querySelector("img");

dropdownBtn.addEventListener("click", () => {
  const isActive = dropdownList.classList.toggle("active");
  icon.classList.toggle("active", isActive);
});

dropdownList.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    label.innerHTML = item.textContent;
    dropdownList.classList.remove("active");
    icon.classList.remove("active");
  });
});
