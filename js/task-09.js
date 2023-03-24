const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");


btnChangeColor.addEventListener('click', onChangeColor);

function onChangeColor (event) {

  const bgcolor = function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  body.style.backgroundColor = bgcolor();

  spanColor.textContent = bgcolor();
  
}

