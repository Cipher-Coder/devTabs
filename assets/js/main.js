new GitHubCalendar(".calendar", "Cipher-Coder", { responsive: true }); // Change user-name to yours so your feed will show up

GithubFeed.init({
  username: "Cipher-Coder", // Change this user-name to yours so your feed shows up
  container: "#github-feeds",
  count: 8, //How many repos you want to show
  order: "desc",
  onComplete: function() {
    console.log("Feed Loaded");
  }
});

// Start of Clock and Calendar

let tday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let tmonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function GetClock() {
  let d = new Date();
  let nday = d.getDay(),
    nmonth = d.getMonth(),
    ndate = d.getDate(),
    nyear = d.getFullYear();
  let nhour = d.getHours(),
    nmin = d.getMinutes(),
    nsec = d.getSeconds(),
    ap;

  if (nhour == 0) {
    ap = " AM";
    nhour = 12;
  } else if (nhour < 12) {
    ap = " PM";
  } else if (nhour == 12) {
    ap = " PM";
  } else if (nhour > 12) {
    ap = " PM";
    nhour -= 12;
  }

  if (nmin <= 9) nmin = "0" + nmin;
  if (nsec <= 9) nsec = "0" + nsec;

  let clocktext =
    "" +
    tday[nday] +
    ", " +
    tmonth[nmonth] +
    " " +
    ndate +
    ", " +
    nyear +
    " " +
    "<br/>" +
    nhour +
    ":" +
    nmin +
    ":" +
    nsec +
    ap +
    "";
  document.getElementById("clock").innerHTML = clocktext;
}

GetClock();

setInterval(GetClock, 1000);

// Start of Weather Widget

const apiKey = "de86474ef2fa9963ad1c2292b7b89082"; //Please change to your own API key. They are free.
let cityEl = document.getElementById("city");
let currTempEl = document.getElementById("temp");
let humidityEl = document.getElementById("humidity");
let windEl = document.getElementById("wind");
let skyEl = document.getElementById("sky");

let lat = 35.398775; //Location you want your weather for.
let lon = -84.346465;

function findWeather() {
  let searchLink =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    apiKey +
    "&units=imperial"; // Change this to metric or leave as imperial if in the US
  httpRequestAsync(searchLink, theResponse);
}

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  cityEl.innerHTML = jsonObject.name; // Location
  currTempEl.innerHTML = parseInt(jsonObject.main.temp) + "° "; //Temperature
  humidityEl.innerHTML = jsonObject.main.humidity + "%"; // Humidity
  windEl.innerHTML = jsonObject.wind.speed + "mph "; // Wind Speed
  skyEl.innerHTML = jsonObject.clouds.all + "%"; // Cloud Cover %
}

function httpRequestAsync(url, callback) {
  console.log("hello");
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == 4 && httpRequest.status == 200)
      callback(httpRequest.responseText);
  };
  httpRequest.open("GET", url, true);
  httpRequest.send();
}
findWeather(); //Initiate the function
