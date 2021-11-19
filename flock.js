var startCard = document.getElementById("home-main-card");
var nextCard = document.getElementById("home-next-card");
var logCard = document.getElementById("home-log-card");
var logAlert = document.getElementById("alert");

var getSrarted = document.getElementById("get-started");
var next = document.getElementById("next");
var back = document.getElementById("back");


getSrarted.onclick = function() {
  startCard.style.display = "none";
  nextCard.style.display = "block";
}

back.onclick = function() {
  startCard.style.display = "block";
  nextCard.style.display = "none";
}

next.onclick = function() {
  nextCard.style.display = "none";
  logCard.style.display = "block";
  logAlert.style.display = "block";
}

