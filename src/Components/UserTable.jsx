import React from 'react';
// import UserTable from './UserTable'
import "./Style.css"

const UserTable = ({ data }) => {

  return (
    <tr>
      <td>
        <img  src={data.picture.medium} />

      </td>
      <td>{data.name.first}</td>
      <td>{data.location.country}</td>
      <td>{data.gender}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>




    </tr>
  )
}

export default UserTable