import React, { useState } from 'react'
import "./HomePage.css";
// import SaveIcon from '@mui/icons-material/Save';
import { useNavigate } from "react-router-dom"
import LoadingButton from '@mui/lab/LoadingButton';


const HomePage = () => {
  var [load, setLoad] = useState(false)
  const fetchUsers = () => {
    alert("the data fetch in process")
    setLoad(true)
    fetch('http://localhost:8080/getall')
      .then((response) => response.json())
      .then((data) => {

        if (data) {

          alert("Data has been fetched")

        }
        setLoad(false)
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
      <div className='MainHomeContainer' >
        <div className='Homebtndiv'>
          <div className='Homebtngrp'>
            {
              load ? <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
                Fetch data
              </LoadingButton> :
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