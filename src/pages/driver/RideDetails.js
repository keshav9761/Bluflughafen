import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import axios from 'axios';

function createData(bookingid, date, ridefare, paymenttype, commission, commissionValue, commissionFb, paymentBlu, earningcommission, taxEarning) {
    return { bookingid, date, ridefare, paymenttype, commission, commissionValue, commissionFb, paymentBlu, earningcommission, taxEarning };
}

const rows = [
    createData("Booking-111109", "12/09/2020", "60.00", "Barzahlung/Cash", "10%", "60", "40", "40", "40", "18"),
    createData("Booking-11434109", "18/10/2023", "50.00", "Barzahlung/Cash", "10%", "60", "40", "40", "40", "18"),
    createData("Booking-111109", "12/09/2020", "60.00", "Barzahlung/Cash", "10%", "60", "40", "40", "40", "18"),
    createData("Booking-11434109", "18/10/2023", "50.00", "Barzahlung/Cash", "10%", "60", "40", "40", "40", "18"),
];

export default function RideDetails() {
    return (
        <div className='row vh-100 container-fluid bg-white justify-content-center'>
            <div className='col-md-11'>
                <div className='d-flex align-items-center my-5 justify-content-between'>
                    <div>
                        <h3 className='admin-booking'>Ride Details</h3>
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
                                        <TableCell align="left">Commission</TableCell>
                                        <TableCell align="left">Commission Value</TableCell>
                                        <TableCell align="left">Commission to Blu</TableCell>
                                        <TableCell align="left">Payment from Blu</TableCell>
                                        <TableCell align="left">Earning After Commission</TableCell>
                                        <TableCell align="left">Tax on Earning</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <Link to="">{row.bookingid}</Link>
                                            </TableCell>
                                            <TableCell align="left">{row.date}</TableCell>
                                            <TableCell align="left">{row.ridefare}</TableCell>
                                            <TableCell align="left">{row.paymenttype}</TableCell>
                                            <TableCell align="left">{row.commission}</TableCell>
                                            <TableCell align="left">{row.commissionValue}</TableCell>
                                            <TableCell align="left">{row.commissionFb}</TableCell>
                                            <TableCell align="left">{row.paymentBlu}</TableCell>
                                            <TableCell align="left">{row.earningcommission}</TableCell>
                                            <TableCell align="left">{row.taxEarning}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
