import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './components/booking/booking';
import Delete from './components/delete/delete';
import Signup from './components/signup/signup';
import Login from './components/Login/login';
import Home from './components/Home/Home';
import AdminHome from './components/Home/adminhome';
import AdminLogin from './components/Login/adminlogin';
import Update from './components/update/update';
import Register from './components/addcar';
import Cars from './components/cars'
function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/login" element={<Login/>}> </Route>
      <Route path="/signup" element={<Signup/>}> </Route>
      <Route path="/log" element={<AdminLogin/>}></Route>
      <Route path="/admin" element={<AdminHome/>}></Route>
      <Route path="/addcars" element={<Register/>}></Route>
      <Route path="/delete" element={<Delete/>}></Route>
      <Route path="/update/:id" element={<Update/>}></Route> 
      <Route path="/" element={<Home/>}></Route>
      <Route path="/booking/:id" element={<Booking/>}> </Route>
      <Route path="/cars" element={<Cars/>}></Route>
    </Routes>
     
     
    </div>
  );
}

export default App;
