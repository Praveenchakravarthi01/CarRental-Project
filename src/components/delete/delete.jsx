import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../../index.css';

const DeleteCars = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  
  const handleNavigate = (path) => {
    navigate(path)
  }

  useEffect(() => {
    axios.get("http://localhost:8080/getcarbooking").then((res) => {
      setPosts(res.data);
    });
  }, []);

  const deleteRow = async(id) => {
    await axios.delete(`http://localhost:8080/deletecarbooking/${id}`).then(async() => {
      await axios.get("http://localhost:8080/getcarbooking").then((res) => {
        setPosts(res.data);
      });
    });
  };

  return (
    <>
    <nav className="navbar">
        <a className="logo" href="#">LuxeCruise</a>
        <ul className="nav-links">
        <li className='nav_links' onClick={()=>handleNavigate("/admin")}>Home</li>
          <li className='nav_links' onClick={()=>handleNavigate("/addcars")}>Add Cars</li>
          <li className='nav_links' onClick={()=>handleNavigate("/delete")}>Edit Cars</li>
          <li className='nav_links' onClick={() => handleNavigate("/login")}>User </li>
        </ul>
      </nav>
    <div>
      <div>
        <h1>Delete Car Detail</h1>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Car Id</th>
              <th>Car Model</th>
              <th>Color</th>
              <th>Price</th>
              <th>Car Engine</th>
              <th>Image</th>
              <th>Year</th>
              <th>Company Name</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post, i) => (
              <tr key={i}>
                <td>{post.id}</td>
                <td>{post.model}</td>
                <td>{post.color}</td>
                <td>{post.price}</td>
                <td>{post.engine}</td>
                <td>{post.topSpeed}</td>
                <td>{post.year}</td>
                <td>{post.companyname}</td>

                <td>
                  <i
                    onClick={() => deleteRow(post.id)}
                    className="fa-solid fa-trash"
                    ></i>
                </td>

                <td>
                  <i>
                    <Link
                    
                    to={`/update/${post.id}`}
                    className="fa-solid fa-pen-to-square text-decoration-none"
                    ></Link>
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
            </>
  );
};

export default DeleteCars;
