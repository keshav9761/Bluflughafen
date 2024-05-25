import React from 'react'
import styled from '@emotion/styled';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(bookingid, date, ridefare, paymenttype, Re_Booking, Invoice) {
    return { bookingid, date, ridefare, paymenttype, Re_Booking, Invoice };
}
const rows = [
    createData("Booking-111109", "12/09/2020", "60.00", "Barzahlung/Cash", "Re-Booking", "60"),
    createData("Booking-11434109", "18/10/2023", "50.00", "Barzahlung/Cash", "Re-Booking", "60"),
    createData("Booking-111109", "12/09/2020", "60.00", "Barzahlung/Cash", "Re-Booking", "60"),
    createData("Booking-11434109", "18/10/2023", "50.00", "Barzahlung/Cash", "Re-Booking", "60"),
];
const tableWrapper = styled(Table)(() => ({
    '.txt-color': {
        color: "#0072CB"
    }
}))
export default function MyRide() {
    return (
        <div className='row vh-100 container-fluid bg-white justify-content-center'>
            <div className='col-md-11'>
                <div className='d-flex align-items-center my-5 justify-content-between'>
                    <div>
                        <h3 className='admin-booking'>My Rides</h3>
                    </div>
                    <div className=''>
                        <button className='btn-primary btn-small'>Export to xlsx</button>
                        <button className='btn-primary btn-small'>Export to cvs</button>
                        <button className='btn-primary btn-small'>Export to txt</button>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className=''>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 1400 }} aria-label="simple table">
                                <TableHead className='bg-light'>
                                    <TableRow>
                                        <TableCell>Booking-ID</TableCell>
                                        <TableCell align="left">Date</TableCell>
                                        <TableCell align="left">Ride Fare</TableCell>
                                        <TableCell align="left">Payment Type</TableCell>
                                        <TableCell align="left">Re_Booking</TableCell>
                                        <TableCell align="left">Invoice</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row"> <Link to="" sx={{ color: "#0072CB" }}>{row.bookingid}</Link></TableCell>
                                            <TableCell align="left">{row.date}</TableCell>
                                            <TableCell align="left">{row.ridefare}</TableCell>
                                            <TableCell align="left">{row.paymenttype}</TableCell>
                                            <TableCell align="left" sx={{ color: "#0072CB" }}>{row.Re_Booking}</TableCell>
                                            <TableCell align="left"><InsertDriveFileIcon /></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}
