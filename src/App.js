import React, { useState, useEffect } from 'react';
import home from './components/home.js';
import { BrowserRouter as Router, Route  } from "react-router-dom";
import Income from './components/Income.js';
import Dashboard from './components/Dashboard.js';
import Expense from './components/Expense.js';

function App() {

	return (
		<div className="App">
      <Router>
        
                <Route path="/" exact component={home} />
               <Route  path="/income" component={Income} />
               <Route  path="/expense" component={Expense} />
               <Route  path="/dashboard" component={Dashboard} /> 
           
    </Router>
			
		</div>
	);
}

export default App;