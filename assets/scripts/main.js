// main.js

// TODO
var volume = document.getElementById("volume-number");
var aud = document.getElementById("horn-sound")
var slider = document.getElementById("volume-slider");
var icon = document.getElementById("volume-image");

// Input field that serves as the textual indicator of sound level
volume.onchange = function() {
  var volumeValue = volume.value;
  aud.volume = volumeValue/100;
  slider.value = volumeValue;
  if(volume.value == 0) {
    icon.src = "./assets/media/icons/volume-level-0.svg";
  } else if(volume.value <= 33) {
    icon.src = "./assets/media/icons/volume-level-1.svg";
  } else if(volume.value <= 66) {
    icon.src = "./assets/media/icons/volume-level-2.svg";
  } else {
    icon.src = "./assets/media/icons/volume-level-3.svg";
  }
}

// Slider that serves visual controller for sound level
slider.onchange = function() {
  var sliderValue = slider.value;
  aud.volume = sliderValue/100;
  volume.value = sliderValue;
  if(volume.value == 0) {
    icon.src = "./assets/media/icons/volume-level-0.svg";
  } else if(volume.value <= 33) {
    icon.src = "./assets/media/icons/volume-level-1.svg";
  } else if(volume.value <= 66) {
    icon.src = "./assets/media/icons/volume-level-2.svg";
  } else {
    icon.src = "./assets/media/icons/volume-level-3.svg";
  }
}

// Radio that switches between different horn sounds

// Button that plays the horn sound