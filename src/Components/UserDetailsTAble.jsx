import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserTable from './UserTable'
import "./Style.css"



export default function UserDetailsTAble({ page, setPage, data, number }) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>AVTAR</TableCell>
                            <TableCell >NAME</TableCell>
                            <TableCell >LOCATION</TableCell>
                            <TableCell >GENDER</TableCell>
                            <TableCell >MAIL</TableCell>
                            <TableCell >PHONE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map(elem => (
                                <UserTable data={elem} />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            <div className='datachangebtn' >
                <div className='datachangebtn2'>
                    <button className='prevandnextbtn' disabled={page == 1} onClick={() => setPage(page - 1)}>PREV</button>
                    <button className='pagenumberbtn'>{page}</button>

                    <button className='prevandnextbtn' disabled={page == number} onClick={() => { setPage(page + 1) }}>NEXT</button>
                </div>
            </div>


        </>
    );
}