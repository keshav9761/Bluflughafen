import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios from 'axios';


function createData(name, fat,) {
    return { name, fat };
}

const rows = [
    createData('Wheelchair (Foldable)',  "Free"),
    createData('Cycle', "3.00"),
    createData('Snowboards', "3.00"),
];

export default function Extraoptions() {

const [extraOption, setExtraOption] = useState([]);

let extraObj = {
    'category' : 'EXTRA'
}

useEffect(()=>{

fetchExtra();

},[]);


const fetchExtra = async ()=>{
    try{
    const res = await axios.post(`${process.env.REACT_APP_URL}api/extraOption/getExtraOptionList`, extraObj);
    setExtraOption(res?.data.data);
    }
    catch(error){
       console.log(error);
    }
}
console.log(extraOption);



    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
                <TableBody>
                    { extraOption?.length > 0 &&
                     extraOption.map((currentValue, i) =>{
                         return (
                            <>
                           <TableRow className='py-5'
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className='fw-bold' component="th" scope="row">
                                <div className='fs-6 fw-bold'>{currentValue.type}</div>
                                <div className='fs-5 fw-bold bluetext'>&euro;{currentValue.price}</div>
                            </TableCell>
                            <TableCell className='fw-bold' align="right"><Button variant='outlined'>Select</Button></TableCell>
                        </TableRow> 
                            
                            </>
                         )  

                     } 
                        
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
