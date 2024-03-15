import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import {useEffect,useStates} from 'react';
import landingpagevideo from '../video/car.mp4'

const HomePage = () => {

  const navigate = useNavigate();
  
  const handleNavigate = (path) => {
    navigate(path)
  }
//   const { setSearchvalue,getAllCars,searchvalue } = useStates();
//   useEffect(() => {
//     getAllCars();
//     // eslint-disable-next-line
// },[searchvalue]);
  return (
    <div className="home-page">
      <nav className="navbar">
        <a className="logo" href="#">LuxeCruise</a>
        <ul className="nav-links">
          <li className='nav_links' onClick={() => handleNavigate("/")}>Home</li>
          <li className='nav_links' onClick={() => handleNavigate("/cars")}>Cars</li>
          <li className='nav_links' onClick={() => handleNavigate("/")}>About</li>
          <li className='nav_links' onClick={() => handleNavigate("/")}>Contact</li>
          <li className='nav_links' onClick={() => handleNavigate("/login")}>Login </li>
          {/* <li>
          <input className='nav-searchbar' type='text' placeholder=' 🔍 Search items'
                        onChange={(e) => setSearchvalue(e.target.value)}>
                        </input>
            </li> */}
        </ul>
      </nav>

      <div className="slideshow-container">
        <div className="slide">
          <video src={landingpagevideo} width="100%" height=""  muted loop autoplay="autoplay">
          </video>          <div className="slide-text">
            <h2></h2>
            <p>Book your dream car with ease!</p>
            <a ><Link to="/booking/">Book now</Link></a>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>Welcome to our car booking website! We are dedicated to providing you with a seamless and convenient platform to book your desired car rental services. With a user-friendly interface and a wide selection of vehicles, we aim to make your car rental experience hassle-free and enjoyable.</p>
          <p>Customer satisfaction is our top priority. We value your feedback and continuously strive to enhance our services based on your needs. Our goal is to exceed your expectations and make your car rental experience seamless, reliable, and enjoyable.</p>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>1706 babu Street,banglore City</p>
          <p>Phone: 048-456-7890</p>
          <p>Email: info@luxecruise.com</p>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;


