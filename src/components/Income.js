import React, { useState, useEffect } from 'react';
import Header from './Header';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';
import axios from 'axios';

export default function Income() {
    const [income, setIncome] = useState([]);
	const [totalIncome, setTotalIncome] = useState(0);

	useEffect(() => {
		axios.get('http://localhost:5000/get-income')
		.then(response =>{console.log("res:",response.data.data) 
		setTotalIncome(response.data.data)});
		
		let temp = 0;
		for(let i = 0; i < income.length; i++) {
			temp += parseInt(income[i].price);
		}

		setTotalIncome(temp);
	}, [income]);
	

    return (
        <div>
            <Header totalIncome={totalIncome} />
			<IncomeForm income={income} setIncome={setIncome} />
			<IncomeList income={income} setIncome={setIncome} />
        </div>
    )
}
