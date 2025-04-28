const bodyElem = document.querySelector('body');
const btnElem = document.querySelector('.change-color');
const spanElem = document.querySelector('.color');
btnElem.addEventListener('click', handleBtnClick);

function handleBtnClick() {
  let currentColor = getRandomHexColor();
  bodyElem.style.backgroundColor = currentColor;
  spanElem.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
