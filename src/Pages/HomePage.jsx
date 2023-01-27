import React from 'react'
import "./HomePage.css"
import { useNavigate } from "react-router-dom"



const HomePage = () => {

  const fetchUsers = () => {
    alert("the data fetch in process")
   
    fetch('http://localhost:8080/getall')
      .then((response) => response.json())
      .then((data) => {

        if (data) {
        alert("Data has been fetched")
        }
      
      });

  }

  const DeleteUsers = () => {
    alert("All The Data Will be Deleted");
    fetch('http://localhost:8080/delete', {
      method: 'DELETE'
    })
      .then((response) => response.json())
    }

  const navigate = useNavigate();
  const userDetails = () => {
    navigate("/users")
  }
  return (
    <>
      <div  className='MainHomeContainer' >
        <div className='Homebtndiv'>
          <div className='Homebtngrp'>
            {<button className='btn' onClick={fetchUsers}>
                  Fetch Users
                </button>
            }
            { <button className='btn' onClick={DeleteUsers}>
                  Delete Users
                </button>
            }
            <button className='btn' onClick={userDetails}>
              User Details
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default HomePage