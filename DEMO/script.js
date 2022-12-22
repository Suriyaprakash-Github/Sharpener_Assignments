form.addEventListener('submit', async(e) => {
  e.preventDefault();
  let expenseValue = document.querySelector('#expense').value;
  let amountValue = document.querySelector('#amount').value;
  let categoryValue = document.querySelector('#category').value;

  let obj = {
    expenseValue,
    amountValue,
    categoryValue,
  };

   let response=await axios.post("https://crudcrud.com/api/09b616799e734405ba23e309aebdae1d/expensetracker", obj)
    try {
      printExpense(response.data);
    } catch (error) {
      console.log(error)
    }
});

window.addEventListener('DOMContentLoaded', async() => {
   try{
    let response= await(axios.get("https://crudcrud.com/api/09b616799e734405ba23e309aebdae1d/expensetracker"))
    let res=response.data;
    for (var i = 0; i < res.length; i++) {
        printExpense(res[i]);
      }
    }
  catch(error) {
    console.log(error)
  }
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
  document.querySelector('#expense').value = expense;
  document.querySelector('#amount').value = amount;
  document.querySelector('#category').value = category;

  deleteExpense(id);
}

// Delete Expense
async function deleteExpense(id) {
   try{ 
      let res=await(axios.delete(`https://crudcrud.com/api/09b616799e734405ba23e309aebdae1d/expensetracker/${id}`))
      console.log(res)
      removeExpense(id)
    }
    catch(error){
      console.log(error)
    }
}

function removeExpense(id) {
  let parent = document.querySelector('.ul');
  let text = document.getElementById(`${id}`);
  if (text) {
    parent.removeChild(text);
  }
}
