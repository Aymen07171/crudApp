import './App.css';
import React from 'react';
import { useState } from 'react';
import Axios from 'axios'


function App() {

  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [country,setCountry] = useState("");
  const [position,setPosition] = useState("");
  const [wage,setWage] = useState(0);
  
  const [employeeList,setEmployeeList] = useState([]);
  
const addEmployee = () =>{
  Axios.post('http://localhost:3001/create',{
    name:name,
    age:age,
    country:country,
    position:position,
    wage:wage}).then(() => {
      console.log("Success")
    });
};



const getEmployees = () => {
  Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data);
    });
};


    

  return (
    
    <div className="App" > 
      <div className='info'>
            <label>
              Name
              <input type="text"  placeholder="type your Name here" onChange={(event) => {
                setName(event.target.value)
              }} />
            </label>

            <label>
              Age
              <input type="number"  placeholder="type your Age here"  onChange={(event) => {
                setAge(event.target.value)
              }}/>
            </label>

            <label>
              Country
              <input type="text" placeholder="type your Country here"  onChange={(event) => {
                setCountry(event.target.value)
              }}/>
            </label>

            <label>
              Position
              <input type="text" placeholder="type your Position here" onChange={(event) => {
                setPosition(event.target.value)
              }}/>
            </label>

            <label>
              Wage
              <input type="number" placeholder="type your Wage here" onChange={(event) => {
                setWage(event.target.value)
              }} />
            </label>

            <button onClick={addEmployee}>Add Employee</button>

      </div>

      <div className='employees'>
  <button onClick={getEmployees}>Show Employees</button>
</div>
{/*  */}
    </div>
    
  );

};
export default App;
