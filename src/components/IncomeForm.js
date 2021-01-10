import React, {useRef,useState} from 'react';
import axios from 'axios';

function IncomeForm({ income, setIncome }) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);
  const category=useRef(null);
  const type=useRef(null);
  const [addrtype, setAddrtype] = useState(["Personal", "Official"])
  const [currenttype,setcurrenttype]=useState ("Personal");
  const [expensetype,setexpensetype]=useState ("pension");
  const [personaltype, setPersonaltype] = useState(["Sharemarket","youtube","pension"])
  const [officialtype, setofficialtype] = useState(["salary", "voucher"])
  


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


  const AddIncome = e => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);
    

    
    setIncome([...income, {
      "desc": desc.current.value,
      "category":currenttype,
      "type":expensetype,
      "price": price.current.value,
      "date": newD.getTime()
      
    }],
    
 );
const obj={"desc": desc.current.value,
"category":currenttype,
"type":expensetype,
"price": price.current.value,
"date": newD.getTime()}
 axios.post('http://localhost:5000/add-income',obj)
 .then(response => console.log(response))

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
   
   
  }

  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">
        <input type="text" name="desc" id="desc" placeholder="Income Description..." ref={desc} /> 
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
    </select >
        <input type="number" name="price" id="price" placeholder="Price..." ref={price}/>
        <input type="date" name="date" id="date" placeholder="Income date..." ref={date} />
       
        <input type="submit" value="Add Income" />
      </div>
    </form>
  )
}

export default IncomeForm;