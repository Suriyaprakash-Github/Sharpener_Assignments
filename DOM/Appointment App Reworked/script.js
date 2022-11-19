let nameInput = document.querySelector('#username');
let emailInput = document.querySelector('#email');
let myForm = document.querySelector('#myForm');

//Event Listener:
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  userName = nameInput.value;
  userEmail = emailInput.value;
  let obj = {
    name: userName,
    email: userEmail,
  };
  localStorage.setItem(obj.email, JSON.stringify(obj));
  onScreen(obj);
}

// for current input detail:
//if the user input already exists
function onScreen(obj) {
  //creating list element and appending its content together
  let li = document.createElement('li');
  let text = document.createTextNode(`${obj.name} ${obj.email}`);
  li.appendChild(text);
  //placing the list element on the dom
  let parent = document.querySelector('#div');
  let child = document.querySelector('#list');
  parent.insertBefore(li, child);
  editButton();
  deleteButton();
}

//from local storage details:
Object.keys(localStorage).forEach((key) => {
  stringifiedDetailsOfPeople = localStorage.getItem(key);
  detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
  //creating list element and appending its content together
  let li = document.createElement('li');
  let text = document.createTextNode(
    `${detailsOfPeople.name} ${detailsOfPeople.email}`
  );
  li.appendChild(text);
  //placing the list element on the dom
  let parent = document.querySelector('#div');
  let child = document.querySelector('#list');
  parent.insertBefore(li, child);
  editButton();
  deleteButton();
});
function editButton() {
  //creating edit button
  let editBtn = document.createElement('button');
  let editText = document.createTextNode(`Edit`);
  editBtn.appendChild(editText);
  //placing the list element on the dom
  let editParent = document.querySelector('#div');
  let editChild = document.querySelector('#list');
  editParent.insertBefore(editBtn, editChild);
}
function deleteButton() {
  //creating delete button
  let btn = document.createElement('button');
  let btnText = document.createTextNode(`Delete`);
  btn.appendChild(btnText);
  //placing the list element on the dom
  let btnParent = document.querySelector('#div');
  let btnChild = document.querySelector('#list');
  btnParent.insertBefore(btn, btnChild);
}
