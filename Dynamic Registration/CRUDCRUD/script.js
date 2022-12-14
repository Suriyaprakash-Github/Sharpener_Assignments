function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;
    
    const obj = {
      name,
      email,
      phonenumber,
    };
    axios.post("https://crudcrud.com/api/923ef4a60ad64033835144642fc465b8/appointmets", obj)
    .then((response)=>{
        showNewUserOnScreen(response.data);
    })
    .catch((err)=>console.log(err))
   
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    
    axios.get("https://crudcrud.com/api/923ef4a60ad64033835144642fc465b8/appointmets")
    .then((response)=>{
        console.log(response.data)
        let res=response.data;
        for (var i = 0; i < res.length; i++) {
            showNewUserOnScreen(res[i]);
          }
        

    })
    .catch((err)=>console.log(err))
  
    
  });
  
  function showNewUserOnScreen(user) {
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('phonenumber').value = '';
    // console.log(localStorage.getItem(user.emailId))
    if (localStorage.getItem(user.email) !== null) {
      removeUserFromScreen(user.email);
    }
  
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user._id}')> Delete User </button>
                            <button onclick=editUserDetails('${user._id}','${user.email}','${user.name}','${user.phonenumber}')>Edit User </button>
                         </li>`;
  
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  }
  
  //Edit User
  
  function editUserDetails(id,emailId, name, phonenumber) {
    document.getElementById('email').value = emailId;
    document.getElementById('username').value = name;
    document.getElementById('phonenumber').value = phonenumber;
    deleteUser(id);
  }
  
  // deleteUser('abc@gmail.com')
  
  function deleteUser(emailId) {
    console.log(emailId);
    axios.delete(`https://crudcrud.com/api/923ef4a60ad64033835144642fc465b8/appointmets/${emailId}`)
    .then((res)=>{
        console.log(res)
        removeUserFromScreen(emailId)
    })

    
  }
  
  function removeUserFromScreen(emailId) {
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);
    if (childNodeToBeDeleted) {
      parentNode.removeChild(childNodeToBeDeleted);
    }
    }
  