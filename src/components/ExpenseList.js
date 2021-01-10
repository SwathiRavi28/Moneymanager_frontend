import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ Expense, setExpense }) {

  const removeExpense = i => {
    let temp = Expense.filter((v, index) => index != i);
    setExpense(temp);
  }

  const sortByDate = (a, b) => {
    return a.date - b.date;
  }

  return (
    <div className="Expense-list">
      {
        Expense.sort(sortByDate).map((value, index) => (
          <ExpenseItem 
            key={index} 
            Expense={value} 
            index={index} 
            removeExpense={removeExpense}
          />
        ))
      }
    </div>
  )
}

export default ExpenseList;