import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import { InputBase, Stack } from "@mui/material";
import Button from '@mui/material/Button';
import './update.css';

function Update() {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    price: "",
    engine: "",
    topSpeed: "",
    color: "",
    companyname: "",
    model: "",
    year: ""
  })
  useEffect(() => {
    axios.get('http://localhost:8080/car/' + id)
      .then(res => {
        setValues({
          ...values, id: res.data.id,
          price: res.data.price,
          engine: res.data.engine,
          color: res.data.color,
          companyname: res.data.companyname,
          topSpeed: res.data.topSpeed,
          model: res.data.model,
          year: res.data.year
        })
      })
      .catch(err => console.log(err))
  }, [])
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/car/' + id, values)
      .then(res => {
        navigate('/delete');
      })
      .catch(err => console.log(err))
  }
  const handleNavigate = (path) => {
    navigate(path)
  }
  return (

    <>
      <nav className="navbar">
        <a className="logo" href="#">LuxeCruise</a>
        <ul className="nav-links">
          <li className='nav_links' onClick={() => handleNavigate("/admin")}>Home</li>
          <li className='nav_links' onClick={() => handleNavigate("/addcars")}>Add Cars</li>
          <li className='nav_links' onClick={() => handleNavigate("/delete")}>Edit Cars</li>
          <li className='nav_links' onClick={() => handleNavigate("/login")}>User </li>
        </ul>
      </nav>
      <form >
        <h1>Update The Car Details</h1>
        <div>
          <div className='update-full-container'>
            <div>
              <img width="483" src={"https://res.cloudinary.com/dp4xulfvi/image/upload/v1686679514/pexels-kris-lucas-3742734_ih8agx.jpg"} alt="" />
            </div>

            <div class="update-cont">


              <Stack direction="column" spacing={1}>
                <TextField type="text" id="out" label="Car Id" placeholder="Car Id" value={values.id} onChange={e => setValues({ ...values, id: e.target.value })} />
                <TextField type="text" id="out" label="Companyname" value={values.companyname} onChange={e => setValues({ ...values, companyname: e.target.value })} />
                <TextField type="text" id="out" label="Car Engine" value={values.engine} onChange={e => setValues({ ...values, engine: e.target.value })} />
                <TextField type="text" id="out" label="Car Price" value={values.price} onChange={e => setValues({ ...values, price: e.target.value })} />
                <TextField type="text" id="out" label="Car Model" value={values.model} onChange={e => setValues({ ...values, model: e.target.value })} />
                <TextField type="text"
                  id="out"
                  label="Year"
                  defaultValue="Hello World"
                  value={values.year} onChange={e => setValues({ ...values, year: e.target.value })}
                />
                <TextField type="text"
                  id="out"
                  label="Color"
                  defaultValue="Hello Word"
                  value={values.color} onChange={e => setValues({ ...values, color: e.target.value })}

                />
                <TextField type="text"
                  id="out"
                  label="Image"
                  defaultValue="Hello Word"
                  value={values.topSpeed} onChange={e => setValues({ ...values, topSpeed: e.target.value })}

                />



                <Button variant="contained" onClick={handleSubmit}> Edit</Button>
              </Stack>
            </div>
          </div>




          {/* <button onClick={handleSubmit}>edit</button>*/}
        </div>
      </form>

    </>
  )

}
export default Update;