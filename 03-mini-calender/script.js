let monthName = document.querySelector(".month-name");
let dayName = document.querySelector(".day-name");
let dayNumber = document.querySelector(".day-number");
let year = document.querySelector(".year");

let currentDate = new Date();

let months = [
  "january",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "july",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentMonth = currentDate.getMonth();
monthName.textContent = months[currentMonth]


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ];
const currentDay = currentDate.getDay();
dayName.textContent = days[currentDay]


const currentDayNumber = currentDate.getDate();
dayNumber.textContent = currentDayNumber;

const currentYear = currentDate.getFullYear();
year.textContent = currentYear;