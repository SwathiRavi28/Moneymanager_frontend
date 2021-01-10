import React, {useRef,useState} from 'react';
import Button from 'react-bootstrap/Button';


export default function Dashboard() {

  const [addrtype, setAddrtype] = useState(["By Month","By Week","By Year"])
  const [currenttype,setcurrenttype]=useState ("By Month");
  
  const Add = addrtype.map(Add => Add)
  const handlefilter = (e) => {
    var e = document.getElementById("category");
var strUser = e.options[e.selectedIndex].text;
   
    setcurrenttype(strUser);
  
}
  return (
    <div>

<header>
  
      <h1>Dashboard
      <Button className="total-income">History</Button>
      </h1>
      
    </header>
   
    <form className="income-form" >
    <div className="form-inner">
      
      < select name="Category" id="category"
    onChange={e => handlefilter(e)}
    className="browser-default custom-select" >
    {
      Add.map((address, key) => <option value={key}>{address}</option>)
    } ref={currenttype}
  </select >
   
   
      <input type="submit" value="Search" />
    </div>
  </form>
  </div>
)
}
  
