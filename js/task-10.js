const input = document.querySelector("#controls > input");
const btnCreate = document.querySelector("#controls > button[data-create]");
const btnDestroy = document.querySelector("#controls > button[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);

function createBoxes(amount) {
  amount = Number(input.value);

  const boxSize = 30;

  const bgcolor = function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

  for (let i = 0; i < amount; i += 1) {
    const size = boxSize + i * 10;

    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.marginTop = "20px";
    box.style.backgroundColor = bgcolor();
    boxes.append(box);
  }
}

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}
