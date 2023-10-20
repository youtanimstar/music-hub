const tabWrap = document.querySelector('.tabs');
const tabContentList = Array.from(document.querySelectorAll('.tab-content'));
const inputList = Array.from(document.querySelectorAll('input'));
const signUpBtn = document.querySelector('.signUpBtn');
const signInBtn = document.querySelector('.signInBtn');

const hideTabContent = () => tabContentList.forEach(tab => tab.classList.remove('tab-content_active'));
const cleanInputs = () => inputList.forEach(input => input.value = '');

const showTab = ({ target }) => {
    const tab = target.dataset.tab;
    const tabContent = document.querySelector(`.${tab}`);
    hideTabContent();
    cleanInputs();
    tabContent.classList.add('tab-content_active');
}

const userCheck = () => {
    window.open('./index.html');
}

tabWrap.addEventListener('click', showTab);
signInBtn.addEventListener('click', userCheck);
signUpBtn.addEventListener('click', userCheck);