import React, { useState } from 'react'
import "./HomePage.css";
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  var [load, setLoad] = useState(false)
  const fetchUsers = () => {

    setLoad(true)
    fetch('http://localhost:8000/getall')
      .then((response) => response.json())
      .then((data) => {

        if (data) {
          setTimeout(() => {
            alert("Data has been fetched")
          }, 5000)

        }
        setTimeout(() => {
          setLoad(false)
        }, 5000)
      });

  }
  const senderror = () => {
    console.log("the data is in process")
    alert("please wait for few seconds \n The data is in process")
  }
  const DeleteUsers = () => {
    alert("All The Data Will be Deleted");
    fetch('http://localhost:8000/delete', {
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
      <div className='MainHomeContainer' >
        <div className='Homebtndiv'>
          <div className='Homebtngrp'>
            {
              load ? <button className='btn' onClick={senderror}>
                Fetch Users
              </button> :
                <button className='btn' onClick={fetchUsers}>
                  Fetch Users
                </button>
            }
            {<button className='btn' onClick={DeleteUsers}>
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