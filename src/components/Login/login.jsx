import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';
import '../Login/login.css'
function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  async function login(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/login", {
        username: username,
        password: password,
      }).then((res) => {
        console.log(res.data);

        if (res.data.message === "Username not exits") {
          alert("Username not exits");
        }
        else if (res.data.message === "Login Success") {

          navigate('/');
        }
        else {
          alert("Incorrect Username and Password not match");
        }
      }, fail => {
        console.error(fail);
      });
    }

    catch (err) {
      alert(err);
    }

  }






  return (
    <div className="login-page">
      {/* <link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap" rel="stylesheet"></link> */}
      <div className="login-container">
        <div class="row">
          <h1 classname="title_log">Luxecruise</h1>
          <h2 className="loginh2">Login</h2>
          <hr />
        </div>

        <div >
          <div className="login_box">
            <form>
              <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter Name"

                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}

                />

              </div>

              <div class="form-group">
                <label>password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter Password"

                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}

                />
              </div>
              <button type="submit" class="btn btn-primary login-btn" onClick={login} >Login</button>
              <p>To create new account <Link to='/signup'>Signup</Link></p>
              <p>To log admin account <Link to='/log'>AdminLogin</Link></p>
            </form>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Login;