import React from 'react'
import "./Style.css"
import { useNavigate } from 'react-router-dom';
const FlexComponent = ({ filter, setFilter, setPage }) => {

  const navigate = useNavigate();
  function filter(e) {
    setFilter(e.target.value);
    setPage(1);
  }
  return (
    <div className=" dropandbackdiv">
      <select
        placeholder="Select option"
        onChange={(e) => filter(e)}>

        <option value="">Select Option</option>
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <button className="backbtn" onClick={() => navigate("/")}>
        HomePage
      </button>
    </div>
  )
}

export default FlexComponent