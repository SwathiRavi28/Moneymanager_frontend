import React from 'react';

function IncomeItem({income, index, removeIncome}) {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let time = new Date().toLocaleString();

  const removeHandle = i => {
    removeIncome(i);
  }

  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>x</button>
      <div className="desc">{income.desc}</div>
      <div className="desc">{income.category}</div>
      <div className="desc">{income.type}</div>
      <div className="price">£{income.price}</div>
      <div className="date">{day + "/" + month + "/" + year+ time}</div>

      <div className="desc">{income.desc}</div>
    </div>
  )
}

export default IncomeItem;