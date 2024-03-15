import React from 'react';
import './Home.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect,useState } from 'react';

const AdminHome = () => {
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
  const location = useLocation();
  useEffect(() => {
    getAllCars();
    // eslint-disable-next-line
},[]);

  return (
    <div className="home-page">
      <nav className={`navbar`}>
        <a className="logo" href="#">LuxeCruise</a>
        <ul className="nav-links">
          <li className='nav_links' onClick={()=>handleNavigate("/admin")}>Home</li>
          <li className='nav_links' onClick={()=>handleNavigate("/addcars")}>Add Cars</li>
          <li className='nav_links' onClick={()=>handleNavigate("/delete")}>Edit Cars</li>
          <li className='nav_links' onClick={()=>handleNavigate("/login")}>User</li>
        </ul>
      </nav>

      <div className="slideshow-container">
        <div className="slide">
          <img src={"https://res.cloudinary.com/dp4xulfvi/image/upload/v1686067063/liam-martens-uUi5RQCyUdM-unsplash2222222_lpoyr7.jpg"} alt="Car 1" />
          <div className="slide-text">
            <h2></h2>
            <p>Book your dream car with ease!</p>
            {/* <a href="#">Book Now</a> */}
          </div>
        </div>
      </div>
      {/* <div className="car-list-section"> */}
        {/* <h2>Available Cars</h2> */}
        {/* Render the list of car cards here */}
      {/* </div> */}

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
                </motion.div>
                </>
            )
        })}
        </motion.div>

    </div>
  );
};

export default AdminHome;


