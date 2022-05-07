const throttle = require('lodash.throttle');

const formRef = document.querySelector(".feedback-form");
const inputEmailRef = document.querySelector("input[name=email]");
const textareaRef = document.querySelector("textarea[name=message]");
const serve = JSON.parse(localStorage.getItem("feedback-form-state"));

let localDataObj = {};
localDataObj = {
   ...serve,
}

if(localDataObj && localDataObj.email){
   inputEmailRef.value = localDataObj.email;
}

if(localDataObj && localDataObj.message){
   textareaRef.value = localDataObj.message;
}

function userInputText(e){
   localDataObj[e.currentTarget.name] = e.currentTarget.value;
   throttle(saveDataInput(localDataObj), 500);
}

function saveDataInput(dataObj){
   localStorage.setItem("feedback-form-state", JSON.stringify(dataObj));
}

function submitForm(e){
   e.preventDefault();
   e.currentTarget.reset();
   console.log(localDataObj);
   localStorage.removeItem("feedback-form-state");
}

inputEmailRef.addEventListener("input", userInputText);
textareaRef.addEventListener("input", userInputText);
formRef.addEventListener("submit", submitForm);