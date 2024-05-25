import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function createData(year, ride, totalValue, taxValue) {
    return { year, ride, totalValue, taxValue};
}

const rows = [
    createData(2022, "2,000", "12,240", "40.00"),
    createData(2023, "8,900", "10,340", "70.00"),
    createData(2022, "2,000", "12,240", "40.00"),
    createData(2023, "8,900", "10,340", "70.00"),
];

export default function TaxValues() {
    return (
        <div className='row vh-100 container-fluid bg-white justify-content-center'>
            <div className='col-md-11'>
                <div className='d-flex align-items-center my-5 justify-content-between'>
                    <div>
                        <h3 className='admin-booking'>Tax Values</h3>
                    </div>
                    <div className=''>
                        <button className='btn-primary btn-small'>Export to xlsx</button>
                        <button className='btn-primary btn-small'>Export to cvs</button>
                        <button className='btn-primary btn-small'>Export to txt</button>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='mt-2 pb-5'>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead className='bg-light'>
                                    <TableRow>
                                        <TableCell>Year</TableCell>
                                        <TableCell align="left">No. Of Rides</TableCell>
                                        <TableCell align="left">Total Value</TableCell>
                                        <TableCell align="left">Tax Value</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell className="text-primary" component="th" scope="row">
                                                <Link to="">{row.year}</Link>
                                            </TableCell>
                                            <TableCell align="left">{row.ride}</TableCell>
                                            <TableCell align="left">{row.totalValue}</TableCell>
                                            <TableCell align="left">{row.taxValue}</TableCell>
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
