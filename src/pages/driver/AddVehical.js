import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import { TextField, styled, Grid, MenuItem, FormControl, Select, InputLabel, Button, InputAdornment, FormHelperText, helperText } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';


export default function AddVehical({ handleClose, open }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [number, setNumber] = useState("");
    const [category, setCategory] = useState("");
    const [bussinessRegis, setBussinessRegis] = useState("");
    const [taxRental, setTaxRental] = useState("");
    const [drivingLicense, setDrivingLicense] = useState("");
    const [document, setDocument] = useState("");

    const [brandError, setBrandError] = useState("");
    const [modelError, setModelError] = useState("");
    const [colorError, setColorError] = useState("");
    const [numberError, setNumberError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [bussinessRegisError, setBussinessRegisError] = useState("");
    const [taxRentalError, setTaxRentalError] = useState("");
    const [drivingLicenseError, setDrivingLicenseError] = useState("");
    const [documentError, setDocumentError] = useState("");


    const DriveRegisWrapper = styled('form')({
        'fieldset': {
            borderWidth: 0
        },
        '.content-fields': {
            border: '.01px solid lightgray',
            padding: '8px',
        },
        '.MuiOutlinedInput-notchedOutline': {
            borderWidth: '0 !important'
        },
        '.Button': {
            backgroundColor: "#0E4672",
            color: 'white'
        },
        '.Button:hover': {
            backgroundColor: "#0E4672",
            color: 'white'
        }
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        let isError = false;

        // Validate Brand
        if (!brand) {
            setBrandError("Please select a brand");
            isError = true;
        } else {
            setBrandError("");
        }

        // Validate Model
        if (!model) {
            setModelError("Please enter a model");
            isError = true;
        }

        // Validate Color
        if (!color) {
            setColorError("Please select a color");
            isError = true;
        }

        // Validate Number
        if (!number) {
            setNumberError("Please enter a number");
            isError = true;
        } else {
            setNumberError("");
        }

        // Validate Category
        if (!category) {
            setCategoryError("Please select a category");
            isError = true;
        }

        // Validate Business Registration
        if (!bussinessRegis) {
            setBussinessRegisError("Please select a business registration");
            isError = true;
        }

        // Validate Taxi Rental Car Concession
        if (!taxRental) {
            setTaxRentalError("Please select a taxi rental car concession");
            isError = true;
        }

        // Validate Driver's License for Passenger Transport
        if (!drivingLicense) {
            setDrivingLicenseError("Please select a driver's license for passenger transport");
            isError = true;
        }

        // Validate Document
        if (!document) {
            setDocumentError("Please select a document");
            isError = true;
        }

        // Submit the form if there are no errors
        if (!isError) {
            // Submit the form
            console.log("Form submitted successfully");
        }
    };

let data = {
    number:number,
    category:category,
    bussinessRegis:bussinessRegis,
    taxRental:taxRental,
    drivingLicense:drivingLicense,
    document: document
}

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth={"lg"}
            >
                <DialogTitle id="responsive-dialog-title" className='d-flex justify-content-between'>
                    <div><h3 className='admin-booking'>New Vehical</h3></div>
                    <div>
                        <IconButton aria-label="delete" onClick={handleClose}>
                            <CancelIcon color="error" />
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className='row p-0'>
                                    <div>
                                        {/* <div className='fs-4 mb-3 text-center text-danger border border-danger' style={{ backgroundColor: "#FFEDEE" }}>error</div> */}
                                        <DriveRegisWrapper>
                                            <Grid container>
                                                <Grid item xs={12} sm={6} md={4} className='content-fields' >
                                                    <FormControl fullWidth error={brandError}>
                                                        <InputLabel>Brand*</InputLabel>
                                                        <Select
                                                            label="Brand"
                                                            value={brand}
                                                            onChange={(e) => setBrand(e.target.value)}
                                                        >
                                                            <MenuItem value={"BMW"}>BMW</MenuItem>
                                                            <MenuItem value={"Mercdease"}>Mercdease</MenuItem>
                                                            <MenuItem value={"England"}>Audi</MenuItem>
                                                        </Select>
                                                        {brandError && <FormHelperText>{brandError}</FormHelperText>}
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={4} className='content-fields'>
                                                    <TextField label="Model*" variant='outlined' fullWidth
                                                        error={modelError}
                                                        helperText={modelError} />
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={4} className='content-fields' >
                                                    <FormControl fullWidth error={colorError}>
                                                        <InputLabel id="JOURNEY TYPE">Color*</InputLabel>
                                                        <Select
                                                            label="Countary"
                                                            value={color}
                                                            onChange={(e) => setColor(e.target.value)}
                                                        >
                                                            <MenuItem value={"Germany"}>Black</MenuItem>
                                                            <MenuItem value={"India"}>White</MenuItem>
                                                            <MenuItem value={"England"}>Red</MenuItem>
                                                        </Select>
                                                        {colorError && <FormHelperText>{colorError}</FormHelperText>}
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={4} className='content-fields'>
                                                    <TextField label="Number*" variant='outlined' fullWidth
                                                        onChange={(e) => setNumber(e.target.value)}
                                                        error={numberError}
                                                        helperText={numberError} />

                                                </Grid>

                                                <Grid item xs={12} sm={6} md={4} className='content-fields'>
                                                    <FormControl fullWidth error={category}>
                                                        <InputLabel id="JOURNEY TYPE">Category*</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            value={category}
                                                            label="Category"
                                                            onChange={(e) => setCategory(e.target.value)}
                                                        >
                                                            <MenuItem value={"Germany"}>Bussiness</MenuItem>
                                                            <MenuItem value={"India"}>Partner</MenuItem>
                                                            <MenuItem value={"England"}>Bussiness</MenuItem>
                                                        </Select>
                                                        {categoryError && <FormHelperText>{categoryError}</FormHelperText>}
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={4} className='content-fields' >
                                                    <TextField type="file" label="Business Registration*" variant='outlined' fullWidth
                                                        InputLabelProps={{ shrink: true }}
                                                    />
                                                    {bussinessRegisError && <FormHelperText>{bussinessRegisError}</FormHelperText>}

                                                </Grid>
                                                <Grid item xs={12} sm={6} md={4} className='content-fields'>
                                                    <TextField type="file" label="Taxi Rental Car Concession*" variant='outlined' fullWidth
                                                        InputLabelProps={{ shrink: true }}
                                                    />
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={4} className='content-fields'>
                                                    <TextField type="file" label="Driver's License for Passenger Transport" variant='outlined' fullWidth
                                                        InputLabelProps={{ shrink: true }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={4} className='content-fields' >
                                                    <TextField type="file" label="Document 4" variant='outlined' fullWidth
                                                        InputLabelProps={{ shrink: true }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </DriveRegisWrapper>
                                    </div>
                                </div>
                                <Grid item textAlign={'center'}>

                                    <LoadingButton
                                        type="submit"
                                        loadingPosition="end"
                                        color='primary'
                                        sx={{ backgroundColor: "#0E4672", textTransform: "none" }}
                                        variant='contained'
                                        endIcon={<></>}
                                        // loading={loading}
                                        size={"large"}
                                        className='px-5 my-5 Button'>Submit</LoadingButton>
                                </Grid>
                            </div>
                        </form>
                    </div >
                </DialogContent>
            </Dialog>
        </div>
    );
}