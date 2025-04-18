import { DateTime } from "https://cdn.jsdelivr.net/npm/luxon@3/build/es6/luxon.min.js";

document.getElementById("calculate-btn").addEventListener("click", () => {
  const inputDateValue = document.getElementById("datepicker").value;
  const jsDate = new Date(inputDateValue);

  if (isNaN(jsDate)) {
    alert("Invalid date!");
    return;
  }

  const formatDate = DateTime.fromJSDate(jsDate);
  const now = DateTime.now();

  if (formatDate > now) {
    alert("Birthday cannot be in the future!");
    return;
  }

  const { years, months, days } = now.diff(formatDate, ["years", "months", "days"]).toObject();

  document.querySelector(".result").textContent =
    `You are ${Math.floor(years)} years, ${Math.floor(months)} months, and ${Math.floor(days)} days old.`;
});
