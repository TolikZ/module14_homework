const button = document.querySelector('.btn');
const errorPage = document.querySelector('.error-page');
const errorLimit = document.querySelector('.error-limit');
const errorAll = document.querySelector('.error-all');
const resultNode = document.querySelector('.j-result');

function useRequest() {
  let valuePage = document.querySelector('.inputPage').value;
  let valueLimit = document.querySelector('.inputLimit').value;
  if ((valuePage < 1 || valuePage > 10) && (valueLimit < 1 || valueLimit > 10)) {
    errorAll.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    errorAll.style.marginBottom = '20px';
    return;
  } else if (valuePage < 1 || valuePage > 10) {
    errorPage.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    errorPage.style.marginBottom = '20px';
    return;
  } else if (valueLimit < 1 || valueLimit > 10) {
    errorLimit.innerHTML = 'Лимит вне диапазона от 1 до 10';
    errorLimit.style.marginBottom = '20px';
    return;
  } else {
    fetch(`https://jsonplaceholder.typicode.com/photos?_page=${valuePage}&_limit=${valueLimit}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        displayResult(data);
        localStorage.setItem('data', JSON.stringify(data));
        console.log(data);
      });
  }
}

function displayResult(apiData) {
  let cards = '';
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img src="${item.thumbnailUrl}" alt="${item.title}" class="card-image">
      </div>
      `;
    cards = cards + cardBlock;
  });
  resultNode.innerHTML = cards;
}

button.addEventListener('click', () => {
  useRequest();
});

window.addEventListener('DOMContentLoaded', () => {
  let data = localStorage.getItem('data');
  if (data) {
    let jsonData = JSON.parse(data);
    displayResult(jsonData);
  } else {
    useRequest(data);
  }
});