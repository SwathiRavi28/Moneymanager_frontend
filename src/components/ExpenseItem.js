import React from 'react';

function ExpenseItem({Expense, index, removeExpense}) {
  let date = new Date(Expense.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let time = new Date().toLocaleString();

  const removeHandle = i => {
    removeExpense(i);
  }

  return (
    <div className="Expense-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>x</button>
      <div className="desc">{Expense.desc}</div>
      <div className="desc">{Expense.category}</div>
      <div className="desc">{Expense.type}</div>
      <div className="price">£{Expense.price}</div>
      <div className="date">{day + "/" + month + "/" + year+ time}</div>

      <div className="desc">{Expense.desc}</div>
    </div>
  )
}

export default ExpenseItem;