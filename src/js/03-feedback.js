const throttle = require('lodash.throttle');

const formRef = document.querySelector(".feedback-form");
const inputEmailRef = document.querySelector("input[name=email]");
const textareaRef = document.querySelector("textarea[name=message]");
const serve = JSON.parse(localStorage.getItem("feedback-form-state"));
const messageError = document.querySelector(".message");

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
   localDataObj[e.target.name] = e.target.value;
   saveDataInput(localDataObj);
}

function saveDataInput(dataObj){
   localStorage.setItem("feedback-form-state", JSON.stringify(dataObj));
}

function submitForm(e){
   e.preventDefault();
   if(!(e.srcElement.email.value && e.srcElement.message.value) ){
      messageError.textContent = "Все поля обязательны для заполнения!";
      return false;
   }
   messageError.textContent = "";
   e.target.reset();
   console.log(localDataObj);
   localStorage.removeItem("feedback-form-state");
}

inputEmailRef.addEventListener("input", throttle(userInputText, 500));
textareaRef.addEventListener("input", throttle(userInputText, 500));
formRef.addEventListener("submit", submitForm);