import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AddVehical from './AddVehical';
import axios from "axios";

// function createData(vehivalid, brand, model, color, number, category, document, status) {
//     return { vehivalid, brand, model, color, number, category, document, status };
// }

// const rows = [
//     createData(20090932, "Mercedes", "Premium", "Black", "T6788", "Business", "GewerbeanmeldungTaxi-Mietwagenkonzession", "Unapproved"),
// ];

export default function DriveAndVehicle() {

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // let userId = "643012e67aef79cef34304eb"

    let id = sessionStorage.getItem("id")
    let obj = {
        userId: id
    }

    // console.log(userId)
    useEffect(() => {
        // const fetchData = async () =>{
        //   setLoading(true);
        //   try {
        // axios.post('https://i5y2sl7e13.execute-api.ap-south-1.amazonaws.com/api/vehical/getVehical', obj)
        //     .then(response => setData(response.data.data))
        // console.log(data)
        // setData(response);
        // console.log(response.data)
        //   } catch (error) {
        //     console.error(error.message);
        //   }
        //   setLoading(false);
        // }

        // fetchData();
        fetchVehicle();
    }, []);

    const fetchVehicle = async () => {
        setLoading(true);
        try {
            const res = await axios.post(`${process.env.REACT_APP_URL}api/vehical/getVehical`, obj);
            if(res?.status === 200) {
                setData(res?.data.data);
            }
        }
        catch(error) {
            console.log(error);
        }
        setLoading(false);
    }



    return (
        <div className='row container-fluid bg-white'>
            <AddVehical handleClose={handleClose} open={open} />
            <div className='d-flex align-items-center my-5 justify-content-between'>
                <div>
                    <h3 className='admin-booking mx-5'>Vehicle List</h3>
                </div>
                <div>
                    <button className='btn-primary btn-small' onClick={handleClickOpen}>Add New Vehical</button>
                </div>
            </div>
            <div className='row justify-content-center'>
                {error && <div className='fs-4 mb-3 text-center text-danger border border-danger' style={{ backgroundColor: "#FFEDEE" }}>error</div>}
                <div className='col-md-11 my-5'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead className='bg-light'>
                                <TableRow>
                                    <TableCell>VEHICLE-ID</TableCell>
                                    <TableCell align="left">BRAND</TableCell>
                                    <TableCell align="left">MODEL</TableCell>
                                    <TableCell align="left">COLOUR</TableCell>
                                    <TableCell align="left">NUMBER</TableCell>
                                    <TableCell align="left">CATEGORY</TableCell>
                                    <TableCell align="left">DOCUMENT</TableCell>
                                    <TableCell align="left">STATUS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.map((data, i) => {
                                    return (
                                        <TableRow
                                            key={data._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {i + 1}
                                            </TableCell>
                                            <TableCell align="left">{data?.vehicalName}</TableCell>
                                            <TableCell align="left">{data?.vehicalModel}</TableCell>
                                            <TableCell align="left">{data?.vehicalColor}</TableCell>
                                            <TableCell align="left">{data?.vehicalNumber}</TableCell>
                                            <TableCell align="left">{data?.vehicalCategory}</TableCell>
                                            <TableCell align="left">{data?.document}</TableCell>
                                            <TableCell align="left">{data?.status === "0" ? <span><RadioButtonUncheckedIcon color="warning" className='me-1' sx={{ fontSize: "15px" }} />pending</span> : <span><RadioButtonUncheckedIcon color="success" className='me-1' sx={{ fontSize: "15px" }} />Reject</span>}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}
