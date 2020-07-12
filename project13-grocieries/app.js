const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// ****** select items **********


//edit items
let editItems;
let editFlag;
let editID = "";

// event listerns
//submit form
form.addEventListener('submit', addItem)

//functions
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value !== " " && editFlag === false) {
    console.log('add items to the list ');
  } else if (value !== '' && editFlag === true) {
    console.log('editing');
  } else {
    displayAlert("please enter value", "danger") // danger is calling our CSS for our function below to recgonize this action
  }
}

//display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`); //this is adding the CSS
  //we dont want the alert to be there for infinity time. so let's add a timer for it to go away
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}
