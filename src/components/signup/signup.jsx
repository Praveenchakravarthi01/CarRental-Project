import { useState } from "react";
import '../signup/signup.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signup() {

  const navigate = useNavigate();
  const handleNavigate = (path)=>{
    navigate(path)
  }

  const [userid, setUserid] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("");
  // const [users,setUsers]=useState([])


  async function save(event) {
    event.preventDefault();
    if(userid===""||username===""||email===""||password===""||mobilenumber===""||address==="")
    {
      alert("Please fill sll the fields")
    }
    else{
      
 try {
        await axios.post("http://localhost:8080/usersave", {
          userid: userid,
          username: username,
          email: email,
          password: password,
          mobilenumber: mobilenumber,
          address: address
        }).then((response)=>{
          alert("User Registation Successfull");
          handleNavigate('/')
        });
        
      } catch (err) {
        alert(err);
       }
    }
  }

  return (
    <div className="signup_wrapper">
      <div class="container mt-4" >
        <div class="card">
          <h1>User Registation</h1>

          <form>
            <div class="form-group">
              <label>Userid</label>
              <input type="number" className="inputnum" class="form-control" id="userid" placeholder="Enter id"
                value={userid}
                onChange={(event) => {
                  setUserid(event.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="fom-control" id="username" placeholder="Enter Name"

                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />

            </div>

            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" id="email" placeholder="Enter Email"

                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}

              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter number"

                value={mobilenumber}
                onChange={(event) => {
                  setMobilenumber(event.target.value);
                }}

              />
            </div>

            <div class="form-group">
              <label>Mobileno</label>
              <input type="text" class="form-control" id="mobileno" placeholder="Enter password"

                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}

              />
            </div>
            <div class="form-group">
              <label>Address</label>
              <input type="text" class="form-control" id="address" placeholder="Enter address"

                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
            </div>
            {/* <button type="submit" class="btn btn-primary mt-4" onClick={save}{()=>handleNavigate("/home")}>Submit</button> */}
            <button type="submit" class="btn btn-primary mt-4" onClick={(e) => {save(e) }}>Submit</button>


          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;