import React, {useRef, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function App(props) {
    console.log(props);
    const date = useRef(null);
    const category=useRef(null);
  const type=useRef(null);
  const [addrtype, setAddrtype] = useState(["Personal", "Official"])
  const [currenttype,setcurrenttype]=useState ("Personal");
  const [expensetype,setexpensetype]=useState ("Grocery");
  const [personaltype, setPersonaltype] = useState(["Grocery","Rent","Health"])
  const [officialtype, setofficialtype] = useState(["Fuel", "wifi"])
  


  const personal = personaltype.map(personal => personal)
  const handleTypeChange = (e) => {
    var e = document.getElementById("type");
    var strUser1 = e.options[e.selectedIndex].text;
    setexpensetype(strUser1);
    console.log("val",strUser1)
  }
  const official = officialtype.map(official => official)
  
  const Add = addrtype.map(Add => Add)
  const handleAddrTypeChange = (e) => {
    var e = document.getElementById("category");
var strUser = e.options[e.selectedIndex].text;
   
    setcurrenttype(strUser);
  
}



  
	return (
		<div className="App">
            <Navbar />
        <div className="wrapper">
            <Sidebar />
            <div id="content">
                <Button onClick={() => window.location='/income'}>+Income</Button>
                <Button onClick={() => window.location='/expense'}>+Expense</Button>
                < select name="Category" id="category"
      onChange={e => handleAddrTypeChange(e)}
      className="browser-default custom-select" >
      {
        Add.map((address, key) => <option value={key}>{address}</option>)
      } ref={currenttype}
    </select >
    < select name="type" id="type"
      onChange={e => handleTypeChange(e)}
      className="browser-default custom-select" >
      {
        currenttype=="Personal"?
        personal.map((address, key) => <option value={key}>{address}</option>):
        official.map((address, key) => <option value={key}>{address}</option>)

      }ref={expensetype}
      </ select>
      <Button onClick={() => window.location='/income'}>Income</Button>
                <Button onClick={() => window.location='/expense'}>Expense</Button>
      <form className="income-form" >
      <div className="form-inner">
      <input type="text" name="date" id="date" placeholder="From Date" ref={date} /> 
        <input type="date" name="date" id="date" ref={date} />
        <input type="text" name="date" id="date" placeholder="To Date" ref={date} /> 
        <input type="date" name="date" id="date" ref={date} />
       
        <input type="submit" value="Track Income" />
      </div>
    </form>
    <form className="income-form" >
      <div className="form-inner">
      <input type="text" name="date" id="date" placeholder="From Date" ref={date} /> 
        <input type="date" name="date" id="date" ref={date} />
        <input type="text" name="date" id="date" placeholder="To Date" ref={date} /> 
        <input type="date" name="date" id="date" ref={date} />
       
        <input type="submit" value="Track Expense" />
      </div>
    </form>
    
            </div>
        </div>
        
    		
		</div>
	);
}

export default withRouter(App)