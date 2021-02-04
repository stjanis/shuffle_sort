const contentShuffle = document.querySelector('.content__shuffle');
const contentSort = document.querySelector('.content__sort');
const contentCardGrid = document.querySelector('.content__card-grid');

document.addEventListener("DOMContentLoaded", renderCards);
contentSort.addEventListener('click', sortData);
contentShuffle.addEventListener('click', shuffleData);

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const liFromData = data =>
  data.map(item => {
    const card = document.createElement('li');
    card.classList.add('card', `card__${item}`);
    card.innerText = item;
    return card;
  })

function renderCards() {
  contentCardGrid.append(...liFromData(data));
}

function sortData() {
  contentCardGrid.innerHTML = '';
  data.sort((a, b) => a - b);
  contentCardGrid.append(...liFromData(data));
}

function shuffleData() {
  contentCardGrid.innerHTML = '';
  const dataToAppend = liFromData(data);
  let total = dataToAppend.length;
  let current = 0;
  let remaining = 0;
  while (total) {
    remaining = Math.floor(Math.random() * total--);
    current = dataToAppend[total];
    dataToAppend[total] = dataToAppend[remaining];
    dataToAppend[remaining] = current;
  }
  contentCardGrid.append(...dataToAppend);
}