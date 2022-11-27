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

  localStorage.setItem(obj.expenseValue, JSON.stringify(obj));
  printExpense(obj);
});

window.addEventListener('DOMContentLoaded', () => {
  let localStorageObj = localStorage;
  let localStorageKeys = Object.keys(localStorageObj);
  for (let i = 0; i < localStorageKeys.length; i++) {
    let key = localStorageKeys[i];
    let expenseString = localStorageObj[key];
    let expenseDetails = JSON.parse(expenseString);
    printExpense(expenseDetails);
  }
});

function printExpense(details) {
  document.querySelector('#expense').value = '';
  document.querySelector('#amount').value = '';
  document.querySelector('#category').value = '';

  if (localStorage.getItem(details.expenseValue) !== null) {
    removeExpense(details.expenseValue);
  }

  let parent = document.querySelector('.ul');
  let text = `<li id=${details.expenseValue}> ${details.expenseValue} ${details.amountValue} ${details.categoryValue} 
  <button onclick=deleteExpense("${details.expenseValue}")> Delete Expense </button>
  <button onclick=editExpense("${details.expenseValue}","${details.amountValue}","${details.categoryValue}")> Edit Expense </button>
  </li>`;
  parent.innerHTML = parent.innerHTML + text;
}

// Edit Expenses:
function editExpense(expense, amount, category) {
  document.querySelector('#expense').value = expense;
  document.querySelector('#amount').value = amount;
  document.querySelector('#category').value = category;

  deleteExpense(expense);
}

// Delete Expense
function deleteExpense(expense) {
  localStorage.removeItem(expense);
  removeExpense(expense);
}

function removeExpense(expense) {
  let parent = document.querySelector('.ul');
  let text = document.querySelector(`#${expense}`);
  if (text) {
    parent.removeChild(text);
  }
}
