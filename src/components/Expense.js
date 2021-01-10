import React, { useState, useEffect } from 'react';
import Header1 from './Header1';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import axios from'axios';

export default function Expense() {
    const [Expense, setExpense] = useState([]);
	const [totalExpense, setTotalExpense] = useState(0);

	useEffect(() => {
		axios.get('http://localhost:5000/get-expense')
		.then(response =>{console.log("res:",response.data.data) 
		setTotalExpense(response.data.data)});
		
		let temp1 = 0;
		for(let i = 0; i < Expense.length; i++) {
			temp1 += parseInt(Expense[i].price);
		}

		setTotalExpense(temp1);
	}, [Expense]);
	

    return (
        <div>
            <Header1 totalExpense={totalExpense} />
			<ExpenseForm Expense={Expense} setExpense={setExpense} />
			<ExpenseList Expense={Expense} setExpense={setExpense} />
        </div>
    )
}
