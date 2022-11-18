// let header=document.querySelector("#main-header")
// header.style.borderBottom="solid 4px black"

// let item=document.querySelector(".list-group-item")
// item.style.color="red"

// let secondItem=document.querySelector(".list-group-item:nth-child(2)")
// secondItem.style.background="green";

// let thirdTtem=document.querySelector(".list-group-item:nth-child(3)")
// thirdTtem.style.opacity="0"

let items=document.querySelectorAll("li")
items[1].style.color="green";

let element=document.querySelectorAll("li:nth-child(odd)")
for(let i=0;i<element.length;i++){
    element[i].style.background="green"
}