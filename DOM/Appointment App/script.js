let myForm=document.querySelector("#my-form");
let nameInput=document.querySelector("#name")
let emailInput=document.querySelector("#email")


myForm.addEventListener("submit", submitListener)

function submitListener(e){
    e.preventDefault();
  //  console.log(nameInput.value);
   // console.log(emailInput.value);
   // Previous Assignment:
          //  localStorage.setItem("name",nameInput.value)
          //   localStorage.setItem("email",emailInput.value)
          //   console.log(localStorage.getItem("name"))
          //   console.log(localStorage.getItem("email"))
  let obj={
    objName:nameInput.value,
    objEmail:emailInput.value
  }
  let objSerialized=JSON.stringify(obj)
  console.log(objSerialized);
  localStorage.setItem("details", objSerialized);
  let objDeserilized=JSON.parse(localStorage.getItem("details"))
  console.log(objDeserilized)
}

