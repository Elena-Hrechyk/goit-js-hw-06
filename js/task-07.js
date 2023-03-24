const sliderEl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sliderEl.addEventListener('input', onSliderChange);

function onSliderChange(event) {
  const slide = event.currentTarget;
  text.style.fontSize = `${slide.value}px`; 
};