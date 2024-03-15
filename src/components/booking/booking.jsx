import { useState, useEffect } from "react";
import axios from "axios";
import '../booking/booking.css'
import { useNavigate, useParams } from 'react-router-dom';

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path)
  }

  const [bookingid, setBookingid] = useState("");
  const [bookingname, setBookingname] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [model, setModel] = useState("");
  const [image, setImage] = useState("");
  const [idproof, setIdproof] = useState("");
  const [feedback, setFeedback] = useState("");
  const [drivinglicense, setDrivinglicense] = useState("");

  // const [users,setUsers]=useState([])
  useEffect(() => {
    getData();
  }, [id]);
  const getData = async () => {
    await axios.get(`http://localhost:8080/car/${id}`).then((response) => {
      setModel(response.data.model);
      setImage(response.data.topSpeed)
      console.log(response);
    })
  }
  async function save(event) {
    event.preventDefault();
    if (bookingname === "") {
      alert("please fill booking name")
    }
    else if (companyname === "") {
      alert("please fill companyname")
    }
    else if (model === "") {
      alert("please fill the model")
    }
    else if (idproof === "") {
      alert("please fill idproof")
    }
    else if (drivinglicense === "") {
      alert("please give the license number")

    }
    else if (feedback === "") {
      alert("please give the feedback")
    }
    else {


      try {
        await axios.post("http://localhost:8080/postbooking", {
          bookingid: bookingid,
          bookingname: bookingname,
          companyname: companyname,
          model: model,
          idproof: idproof,
          drivinglicense: drivinglicense,
          feedback: feedback
        }).then((response) => {
          alert("Car Booking Successfull");
          handleNavigate('/home')
        });

      } catch (err) {
        alert(err);
      }
    }

  }

  return (
    <div className="booking">
      {/* <div className="book-full-container">
        
      <div>
              <img width="475"  src={"https://i.pinimg.com/originals/4d/bf/60/4dbf60b66e97ff8c2312f4c9a88082ed.jpg"} alt="" />
            </div>
      </div> */}
      <div class="container-mt-3" >
        <div class="carde">
          <img height={'180px'} className="booking_car_image" src={image} alt="" />
          <div className="form div">

            <h1>Booking</h1>
            <form>
              <div class="form-groupb">
                <tr>

                  <td><label>Booking name</label></td>
                  <td><input type="text" class="form-control" id="bookingname" placeholder="Enter Name"

                    value={bookingname}
                    onChange={(event) => {
                      setBookingname(event.target.value);
                    }}
                  /></td>
                </tr>

              </div>

              <div class="form-groupb">
                <tr>
                  <td><label>Company name</label></td><br></br>
                  <td><input type="text" class="form-control" id="company" placeholder="Enter Company name"

                    value={companyname}
                    onChange={(event) => {
                      setCompanyname(event.target.value);
                    }}

                  /></td>
                </tr>
              </div>
              <div class="form-groupb">
                <tr>
                  <td><label>Model</label></td>
                  <td><input type="text" class="form-control" id="model" placeholder="Enter model"

                    value={model}
                    onChange={(event) => {
                      setModel(event.target.value);
                    }}
                  />
                  </td>
                </tr>
              </div>

              <div class="form-groupb">
                <tr>
                  <td><label>id Proof</label></td>
                  <td><input type="text" class="form-control" id="idproof" placeholder="Enter id proof"

                    value={idproof}
                    onChange={(event) => {
                      setIdproof(event.target.value);
                    }}

                  /></td>
                </tr>
              </div>
              <div class="form-groupb">
                <tr>
                  <td><label>Driving License</label></td>
                  <td><input type="text" class="form-control" id="drivinglicense" placeholder="Enter Driving license"

                    value={drivinglicense}
                    onChange={(event) => {
                      setDrivinglicense(event.target.value);
                    }}
                  /></td>
                </tr>
              </div>
              <div class="form-groupb">
                <tr>
                  <td><label>Feedback</label></td>
                  <td><input type="text" class="form-control" id="feedback" placeholder="Enter feedback"

                    value={feedback}
                    onChange={(event) => {
                      setFeedback(event.target.value);
                    }}
                  /></td>
                </tr>
              </div>

              <button type="submit" class="btn btn-primary mt-4" onClick={(e) => { save(e) }}>Submit</button>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;