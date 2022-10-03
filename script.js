'use strict';
const adviceNo = document.getElementById('advice-no');
const advice = document.getElementById('advice');
const adviceBtn = document.getElementById('advice-btn');

// fetch url
const urlAdvice = 'https://api.adviceslip.com/advice';

// loader
let isLoading = true;

const getAdvice = async () => {
  isLoading = true;
  if (isLoading) advice.innerHTML = `<i class="fas fa-spinner fa-pulse"></i>`;

  try {
    const response = await fetch(urlAdvice);
    const data = await response.json();
    console.log(data.slip);
    console.log(data.id);
    console.log(data.advice);

    adviceNo.textContent = data.slip.id;
    advice.textContent = `"${data.slip.advice}"`;
  } catch (e) {
    console.log(e);
  } finally {
    isLoading = false;
  }
};
// getAdvice();

adviceBtn.addEventListener('click', getAdvice);
