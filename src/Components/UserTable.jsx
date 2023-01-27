import React from 'react';
import "./Style.css";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
const UserTable = ({ data }) => {

  return (
    <TableRow>
      <TableCell>
        <img  src={data.picture.medium} />

      </TableCell>
      <TableCell>{data.name.first}</TableCell>
      <TableCell>{data.location.country}</TableCell>
      <TableCell>{data.gender}</TableCell>
      <TableCell>{data.email}</TableCell>
      <TableCell>{data.phone}</TableCell>




    </TableRow>
  )
}

export default UserTable