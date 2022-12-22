var userId="";
var isEdit=false;

form.addEventListener('submit', (e) => {

  
  e.preventDefault();
  let expenseValue = document.querySelector('#expense').value;
  let amountValue = document.querySelector('#amount').value;
  let categoryValue = document.querySelector('#category').value;
  
  let obj = {
    expenseValue,
    amountValue,
    categoryValue,
  };
  if(isEdit){
    axios.put(`https://crudcrud.com/api/09b616799e734405ba23e309aebdae1d/expensetracker/${userId}`, obj)
    .then((response)=>{
      console.log(response)
      printExpense(response.data);
    })
  }else { 
    axios.post("https://crudcrud.com/api/09b616799e734405ba23e309aebdae1d/expensetracker", obj)
    .then((response)=>{
      console.log(response)
      printExpense(response.data);
    })
  }
 
});

window.addEventListener('DOMContentLoaded', () => {
  axios.get("https://crudcrud.com/api/09b616799e734405ba23e309aebdae1d/expensetracker")
  .then((response)=>{
      let res=response.data;
      for (var i = 0; i < res.length; i++) {
          printExpense(res[i]);
        }
 
      })
});

function printExpense(details) {
  document.querySelector('#expense').value = '';
  document.querySelector('#amount').value = '';
  document.querySelector('#category').value = '';


  let parent = document.querySelector('.ul');
  let text = `<li id=${details._id}> ${details.expenseValue} ${details.amountValue} ${details.categoryValue} 
  <button class="btn btn-primary mt-1  btn-sm" onclick=deleteExpense("${details._id}")> Delete Expense </button>
  <button class="btn btn-primary mt-1  btn-sm" onclick=editExpense("${details._id}","${details.expenseValue}","${details.amountValue}","${details.categoryValue}")> Edit Expense </button>
  </li>`;
  parent.innerHTML = parent.innerHTML + text;
}

// Edit Expenses:
function editExpense(id,expense, amount, category) {
  isEdit=true;
  userId=id;
  console.log(id)
  document.querySelector('#expense').value = expense;
  document.querySelector('#amount').value = amount;
  document.querySelector('#category').value = category;

  // deleteExpense(id);
  removeExpense(id);
}

// Delete Expense
function deleteExpense(id) {
    axios.delete(`https://crudcrud.com/api/09b616799e734405ba23e309aebdae1d/expensetracker/${id}`)
    .then((res)=>{
        console.log(res)
        removeExpense(id)
    })

}

function removeExpense(id) {
  let parent = document.querySelector('.ul');
  let text = document.getElementById(`${id}`);
  if (text) {
    parent.removeChild(text);
  }
}
