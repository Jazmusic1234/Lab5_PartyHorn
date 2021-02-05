// main.js

// TODO
let volume = document.getElementById("volume-number");
let aud = document.getElementById("horn-sound");
let slider = document.getElementById("volume-slider");
let icon = document.getElementById("volume-image");
let image = document.getElementById("sound-image");
let button = document.getElementById("honk-btn");

// Input field that serves as the textual indicator of sound level
volume.addEventListener("input", function(event) {
  let volumeValue = volume.value;
  aud.volume = volumeValue/100;
  slider.value = volumeValue;
  if(volume.value == 0) {
    icon.src = "./assets/media/icons/volume-level-0.svg";
    button.disabled = true;
  } else if(volume.value <= 33) {
    icon.src = "./assets/media/icons/volume-level-1.svg";
    button.disabled = false;
  } else if(volume.value <= 66) {
    icon.src = "./assets/media/icons/volume-level-2.svg";
    button.disabled = false;
  } else {
    icon.src = "./assets/media/icons/volume-level-3.svg";
    button.disabled = false;
  }
  event.preventDefault();
});

// Slider that serves visual controller for sound level
slider.addEventListener("click", function(event) {
  let sliderValue = slider.value;
  aud.volume = sliderValue/100;
  volume.value = sliderValue;
  if(volume.value == 0) {
    icon.src = "./assets/media/icons/volume-level-0.svg";
    button.disabled = true;
  } else if(volume.value <= 33) {
    icon.src = "./assets/media/icons/volume-level-1.svg";
    button.disabled = false;
  } else if(volume.value <= 66) {
    icon.src = "./assets/media/icons/volume-level-2.svg";
    button.disabled = false;
  } else {
    icon.src = "./assets/media/icons/volume-level-3.svg";
    button.disabled = false;
  }
  event.preventDefault();
});

// Radio that switches between different horn sounds
document.getElementById("radio-air-horn").addEventListener("click", function(event) {
  aud.setAttribute('src', "./assets/media/audio/air-horn.mp3");
  image.setAttribute('src', "./assets/media/images/air-horn.svg");
});

document.getElementById("radio-car-horn").addEventListener("click", function(event) {
  aud.setAttribute('src', "./assets/media/audio/car-horn.mp3");
  image.setAttribute('src', "./assets/media/images/car.svg");
});

document.getElementById("radio-party-horn").addEventListener("click", function(event) {
  aud.setAttribute('src', "./assets/media/audio/party-horn.mp3");
  image.setAttribute('src', "./assets/media/images/party-horn.svg");
});

// Button that plays the horn sound
button.addEventListener("click", function(event) {
  aud.play();
  event.preventDefault();
});