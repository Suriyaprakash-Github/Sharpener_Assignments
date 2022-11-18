let form=document.getElementById("addForm");
let itemList=document.getElementById("items");

form.addEventListener("submit", addItem);
itemList.addEventListener("click",removeItem);
itemList.addEventListener("click",editItem);

function addItem(e){
    e.preventDefault();

    let newItem=document.getElementById("item").value;

    let li=document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem));

    let deleteBtn=document.createElement("button");
    deleteBtn.className="btn btn-danger btn-sm float-right delete"

    deleteBtn.appendChild(document.createTextNode("X"))

    li.appendChild(deleteBtn);

    itemList.appendChild(li);

//Edit Button:
    let editBtn=document.createElement("button");
    editBtn.className="btn btn-warning btn-sm float-right"

    editBtn.appendChild(document.createTextNode("E"));
    li.appendChild(editBtn);
    itemList.appendChild(li);


   
}

function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are You Sure?")){
            let li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}

function editItem(e){
    if(e.target.classList.contains("edit")){
        if(confirm("Do You Want to Edit?")){
            // let li=e.target.parentElement;
            // itemList.removeChild(li)
        }
    }
}