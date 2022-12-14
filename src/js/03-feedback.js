'use strict';

import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');

let formData = {};

checkLocalStorage();
function checkLocalStorage() {
  const localStorageData = localStorage.getItem('feedback-form-state'); //string
  const parsedlocalStorageData = JSON.parse(localStorageData); //object
  if (parsedlocalStorageData) {
    inputEmail.value = parsedlocalStorageData[inputEmail.name] || '';
    inputMessage.value = parsedlocalStorageData[inputMessage.name] || '';
  }
}

form.addEventListener('input', throttle(onFormInput, 444));
function onFormInput(event) {
  const dataFilledBefore = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (dataFilledBefore) {
    dataFilledBefore[event.target.name] = event.target.value;
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(dataFilledBefore)
    );
    return;
  }
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (inputEmail.value === '' || inputMessage.value === '') {
    return alert('Please, fill in all the fields!');
  }
  const submitedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(submitedData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData = {};
}
