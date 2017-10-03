window.onload = oppstart;

function oppstart() {
  setInterval(tidTilEksamen, 1000);
  document.getElementById("hjemmeKnapp").onmouseover = gulHomeButton;
  document.getElementById("hjemmeKnapp").onmouseout = svartHomeButton;
}

function gulHomeButton() {
  document.getElementById("hjemmeKnapp").src = "bilder/homeorange.svg";
}

function svartHomeButton() {
  document.getElementById("hjemmeKnapp").src = "bilder/home.svg";
}

function tidTilEksamen() {
  var output = document.getElementById("tidtiloblig");
  var naa = new Date();
  var frist = new Date("10/18/2017 23:59");

  var forskjell = frist.getTime() - naa.getTime();
  var sekunder = Math.floor(forskjell / 1000);
  var forskjellIDager = Math.floor(forskjell / (1000 * 60 * 60 * 24));
  var forskjellIMinutter = Math.floor(sekunder / 60);
  var forskjellITimer = Math.round((sekunder % 86400) / 3600);

  if (!output) {
    console.log("Timeren lastes ikke fordi outputelementet (tidtiloblig) ikke finnes på denne siden")
  } else if (sekunder < 3600) {
    if (sekunder <= 60) {
      output.innerHTML = "Det er " + forskjellIDager +
        " dager og " + forskjellIMinutter + " minutt igjen til fristen på oblig 3 går ut.";
    } else {
      output.innerHTML = "Det er " + forskjellIDager +
        " dager og " + forskjellIMinutter + " minutter igjen til fristen på oblig 3 går ut.";
    }
  } else {
    output.innerHTML = "Det er " + forskjellIDager +
      " dager og " + forskjellITimer + " timer igjen til fristen på oblig 3 går ut.";
  }
}
