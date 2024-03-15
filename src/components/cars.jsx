import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
const Cars = () => {

    const navigate = useNavigate();
    const handleNavigate = (path)=>{
      navigate(path)
    }
  
    
    const [cars,setcars] = useState([]);

  const getAllCars = () => {
    fetch('http://localhost:8080/getcarbooking')
    .then((res) => res.json())
    .then((result) => {
    setcars(result);
      console.log(result);
    });
  }

  useEffect(() => {
    getAllCars();
    // eslint-disable-next-line
},[]);


    return (
<>
        <nav className="navbar">
        <a className="logo" href="#">LuxeCruise</a>
        <ul className="nav-links">
          <li className='nav_links' onClick={() => handleNavigate("/")}>Home</li>
          <li className='nav_links' onClick={() => handleNavigate("/cars")}>Cars</li>
          <li className='nav_links' onClick={() => handleNavigate("/")}>About</li>
          <li className='nav_links' onClick={() => handleNavigate("/")}>Contact</li>
          <li className='nav_links' onClick={() => handleNavigate("/login")}>Login </li>
    
        </ul>
      </nav>
        <motion.div className="car-page">

        {cars.map((cars,i) => {
         return(
             <>
             <motion.div layout key={i} className="car-admin-div">

                 <img width='230'
                 className='admin-img' src={cars.topSpeed} alt=''></img>
                 <span>Model : {cars.model}</span>
                 <span>Color : {cars.color}</span>
                 <span>Price : {cars.price}</span>
                 <span>Power : {cars.engine}</span>
                 <span>Year : {cars.year}</span>
                 <span>From -  {cars.companyname}</span>
                
                 <button type="button" class="btn btn-dark" id="but"><Link to={`/booking/${cars.id}`} style={{color:"white"}} id="lin">Book Now</Link></button>
             </motion.div>
             </>
         )
     })}
     </motion.div>
</>
    )
}
export default Cars;