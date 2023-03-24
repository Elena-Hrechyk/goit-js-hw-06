const input = document.querySelector("#validation-input");
const dataLength = input.dataset.length;

input.addEventListener('blur', handleBlur);

function handleBlur() {
  const valueLength = input.value.length;

  if (valueLength === Number(dataLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
};