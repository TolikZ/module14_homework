const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const errorBox = document.querySelector('.error');

function getResult() {
  const valueWidth = document.querySelector('.inputWidth').value;
  const valueHeight = document.querySelector('.inputHeight').value;

  if ((valueWidth >= 100 && valueWidth <= 300) && (valueHeight >= 100 && valueHeight <= 300)) {

    fetch(`https://dummyimage.com/${valueWidth}x${valueHeight}/`)
      .then((response) => response.blob())
      .then((myBlobe) => {
        const objectURL = URL.createObjectURL(myBlobe);
        let img = document.createElement('img');
        img.src = objectURL;
        result.append(img);
      })
  } else {
    errorBox.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
  }
}

btn.addEventListener('click', () => {
  getResult();
});