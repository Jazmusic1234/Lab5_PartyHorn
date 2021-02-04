// main.js

// TODO
var volume = document.getElementById("volume-number");
var aud = document.getElementById("horn-sound");
var slider = document.getElementById("volume-slider");
var icon = document.getElementById("volume-image");
var image = document.getElementById("sound-image");

// Input field that serves as the textual indicator of sound level
volume.addEventListener("click", function(event) {
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
  event.preventDefault();
});

// Slider that serves visual controller for sound level
slider.addEventListener("click", function(event) {
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
  event.preventDefault();
});

// Radio that switches between different horn sounds
document.getElementById("radio-air-horn").addEventListener("click", function(event) {
  aud.setAttribute("src", "./assets/media/audio/air-horn.mp3");
  image.setAttribute("src", "./assets/media/images/air-horn.svg");
  event.preventDefault();
});

document.getElementById("radio-car-horn").addEventListener("click", function(event) {
  aud.setAttribute("src", "./assets/media/audio/car-horn.mp3");
  image.setAttribute("src", "./assets/media/images/car.svg");
  event.preventDefault();
});

document.getElementById("radio-party-horn").addEventListener("click", function(event) {
  aud.setAttribute("src", "./assets/media/audio/party-horn.mp3");
  image.setAttribute("src", "./assets/media/images/party-horn.svg");
  event.preventDefault();
});

// Button that plays the horn sound
