function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInput.value;
  console.log("hi");
}

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();
  let currentDay = days[date.getDay()];

  let formattedDate = ` ${currentDay} ${currentHour}:${currentMinute}`;

  return formattedDate;
}
let currentTime = new Date();
let daytime = document.querySelector(".dayTime");
daytime.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
