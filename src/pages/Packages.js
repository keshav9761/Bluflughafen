import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios from 'axios';


function createData(name, fame, calories, fat,) {
    return { name, fame, calories, fat };
}

const rows = [
    createData('Silver', "Meet and Greet (1 hour free)", "5.00", 6.0),
    createData('Gold', "Meet and Greet (1 hour free)", "10.00", 9.0),
    createData('Platinum', "Meet and Greet (1 hour free)", "20.00", 16.0),
];

export default function Packages() {

   const [packageList, setPackageList] = useState([]);

   let packageObj = {
    "category":"PACKAGE",
   };


       useEffect(
        ()=>{

           fetchPackage();

        },[]);

        
    const fetchPackage = async ()=>{
        try{
        const res = await axios.post(`${process.env.REACT_APP_URL}api/extraOption/getExtraOptionList`, packageObj);
        setPackageList(res?.data.data);
        // console.log(res);
    }
    catch(error){
        console.log(error);
    }
    };
    console.log(packageList);

return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableBody>
                    {packageList?.length > 0 &&
                    packageList?.map((currentValue, i) => (
                        <TableRow className='py-5'
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className='fw-bold' component="th" scope="row">
                                <div className='fs-5 fw-bold'>{currentValue.type}</div>
                                <div>{currentValue.fame}</div>
                            </TableCell>
                            <TableCell className='fw-bold bluetext fs-4' align="left">&euro; {currentValue.price}</TableCell>
                            <TableCell className='fw-bold' align="right"><Button variant='outlined'>Select</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
