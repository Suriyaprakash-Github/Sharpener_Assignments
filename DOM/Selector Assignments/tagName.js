let items=document.getElementsByClassName("list-group-item");
//console.log(items[2]);
items[2].style.background="green";
//items.style.fontWeight="bold";


for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold"
}


let li=document.getElementsByTagName("li");
console.log(li)


for(let i=0;i<li.length;i++){
    li[i].style.borderBottom="solid 2px"
}