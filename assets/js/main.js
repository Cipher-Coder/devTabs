new GitHubCalendar(".calendar", "Cipher-Coder", { responsive: true });

GithubFeed.init({
  username: "Cipher-Coder",
  container: "#github-feeds",
  count: 8,
  order: "desc",
  onComplete: function() {
    console.log("Feed Loaded");
  }
});

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
