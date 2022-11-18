// let itemList=document.querySelector("#items")
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor="green"

// console.log(itemList.parentNode.parentNode.parentNode)

// console.log(itemList.childNodes)
// console.log(itemList.children)
// console.log(itemList.children[2])
// itemList.children[2].style.color="yellow"

//itemList.firstChild.style.backgroundColor="yellow" // that white only selected here.so console shpws error
//itemList.lastChild.style.backgroundColor="yellow"


// itemList.firstElementChild.style.background="yellow"
// itemList.lastElementChild.style.background="yellow"

// console.log(itemList.nextSibling)

// console.log(itemList.nextElementSibling)
// itemList.nextElementSibling.style.color="darkgreen"

// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.textContent="I Am Groot"

// let newDiv=document.createElement("div")
// console.log(newDiv)
// newDiv.className="Nope"
// newDiv.id="Noope"
// newDiv.setAttribute("title","Nooope")
// //newDiv.setAttribute("href",".com")

// let newDivText=document.createTextNode("I Am Groooot")

// newDiv.appendChild(newDivText)

// let container=document.querySelector("header .container");
// let h1=document.querySelector("header h1");
// container.insertBefore(newDiv, h1);

let div=document.createElement("div")
let divText= document.createTextNode("HEllo")
div.appendChild(divText)
console.log(divText)

//before item lister
let container=document.querySelector("header .container");
let h1=document.querySelector("header h1");
container.insertBefore(div, h1);

//before item1
// let container2=document.querySelector(".container .list-group");
// let h2=document.querySelector(".list-group-item");
// container2.insertBefore(div, h2);







