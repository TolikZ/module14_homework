const button = document.querySelector('.btn')
const errorBox = document.querySelector('.error');
const resultNode = document.querySelector('.j-result');

function useRequest() {
  let value = document.querySelector('.input').value;
  let xhr = new XMLHttpRequest();
  let url = `https://jsonplaceholder.typicode.com/photos?_limit=${value}`;
  if (value >= 1 && value <= 10) {
    xhr.open('GET', url, true);
    xhr.onload = function () {
      if (xhr.status != 200) {
        console.log("статус ответа:", xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        console.log(result);
        displayResult(result);
      }
    };
    xhr.onerror = function () {
      console.log('ошибка:', xhr.status);
    };
    xhr.send();
  } else {
    errorBox.innerHTML = 'число вне диапазона от 1 до 10';
  }
}

function displayResult(apiData) {
  let cards = '';
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img src="${item.thumbnailUrl}" class="card-image">
      </div>
      `;
    cards = cards + cardBlock;
  });
  resultNode.innerHTML = cards;
}

button.addEventListener('click', () => {
  useRequest();
});