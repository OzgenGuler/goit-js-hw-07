const form = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
let itemBox = {
  width: 30,
  height: 30,
};

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};
const createBox = (w, h) => {
  const box = document.createElement('div');
  box.style.width = w + 'px';
  box.style.height = h + 'px';
  box.style.backgroundColor = getRandomHexColor();
  box.style.display = 'inline-block';
  box.style.margin = '5px';
  box.style.gap = '10px';
  return box;
};
form.addEventListener('submit', e => {
  e.preventDefault();
  boxes.innerHTML = '';
  itemBox = {
    width: 30,
    height: 30,
  };

  const formboxCount = form.elements[0].value;
  for (let i = 0; i < formboxCount; i++) {
    boxes.appendChild(createBox(itemBox.width, itemBox.height));
    itemBox.width += 10;
    itemBox.height += 10;
  }
});
