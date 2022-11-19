let myForm = document.querySelector('#my-form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');

myForm.addEventListener('submit', submitListener);

function submitListener(e) {
  e.preventDefault();
  let mailId = emailInput.value;
  let obj = {
    objName: nameInput.value,
    objEmail: emailInput.value,
  };
  let objSerialized = JSON.stringify(obj);
  // console.log(objSerialized);
  localStorage.setItem(obj.objEmail, objSerialized);
  let objDeserilized = JSON.parse(localStorage.getItem(obj.objEmail));
  //console.log(objDeserilized);
  let parsedObj = JSON.parse(localStorage.getItem(obj.objEmail));
  let parsedName = parsedObj.objName;
  let parsedEmail = parsedObj.objEmail;
  console.log(parsedName);
  console.log(parsedEmail);

  //printing the input:scaling assignment
  let div = document.createElement('li');
  div.className = 'item';
  let divText = document.createTextNode(parsedName + ' ' + parsedEmail);
  div.appendChild(divText);

  let container = document.querySelector('.container .items');
  let objText = document.querySelector('.item');
  container.insertBefore(div, objText);
}
