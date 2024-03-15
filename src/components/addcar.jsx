import axios from "axios";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import {Stack} from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function Register()
{
    const [id, setId] = useState("");
    const [price, setPrice] = useState("");
   const [engine, setEngine] = useState("");
   const [companyname, setCompanyname] = useState("");
   const [model, setModel] = useState("");
   const [color, setColor] = useState("");
   const [topSpeed, setTopSpeed] = useState("");
   const [year, setYear] = useState("");
 
   const navigate = useNavigate();
   const handleNavigate = (path) => {
    navigate(path)
   }
   async function handleSubmit(event)
    {
        event.preventDefault();
        if(id===""||price===""||engine===""||topSpeed===""||color===""||model===""||companyname===""||year==="")
        {
            alert("Please fill all the fields")
        }
        else{
    try
        {
            await axios.post("http://localhost:8080/savecarbooking",
        {
        id: id,
        price: price,
        engine : engine,
        topSpeed :topSpeed,
        color: color,
        model:model,
        companyname:companyname,
        year: year
        });
        navigate('/admin')
          alert("Car Registered Successfully");
          setId("");
          setPrice("");
          setEngine("");
          setCompanyname("");
          setModel("");
          setColor("");
          setTopSpeed("");
          setYear("");
          
        }
        catch(err)
        {
            alert("Car Registation Failed");
        }
    }
}
    return (
        
        <>
        <nav className="navbar">
        <a className="logo" href="#">LuxeCruise</a>
        <ul className="nav-links">
        <li className='nav_links' onClick={()=>handleNavigate("/Adminhome")}>Home</li>
          <li className='nav_links' onClick={()=>handleNavigate("/addcars")}>Add Cars</li>
          <li className='nav_links' onClick={()=>handleNavigate("/delete")}>Edit Cars</li>
          <li className='nav_links' onClick={() => handleNavigate("/login")}>User </li>
        </ul>
      </nav>
        <div className="register-container">
            
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Add Cars</h1>
            <p>Fill in the Information Below</p>
            <Stack direction="row" spacing={1}>
 
            <TextField type="text"  label="id" placeholder="id" onChange={(event) =>{ setId(event.target.value); }}/>
 
            <TextField type="text" label="model" placeholder="model" onChange={(event) => { setModel(event.target.value); }}  />
 
            <TextField type="text" label="engine" placeholder="engine" onChange={(event) =>{setEngine(event.target.value);  }}  />

         <TextField type="text" label="Price" placeholder="Price" onChange={(event) => { setPrice(event.target.value);       }}  />

 
        <TextField type="text" label="Companyname" placeholder="Companyname" onChange={(event) => { setCompanyname(event.target.value); }} />
 
        <TextField type="text" label="Image" placeholder="Image"  onChange={(event) =>{ setTopSpeed(event.target.value);   }}   />

            <TextField type="text" label="Color" placeholder="Color" onChange={(event) =>{    setColor(event.target.value);  }} />
 
        <TextField type="text" label="Year" placeholder="Year" onChange={(event) =>{ setYear(event.target.value);   }}  />
 
 
        <Button variant="contained" onClick={handleSubmit} >ADD</Button>
            </Stack>
 -
    
            </form>    
 
    
        </div>

 </>
    )
}
 
export default Register;