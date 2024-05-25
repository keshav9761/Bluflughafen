import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton'
import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Input, styled, Grid, FormHelperText } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { paths } from '../../config/constants';

// import { Input } from 'reactstrap';
const DriveRegisWrapper = styled('form')({
    'fieldset': {
        borderWidth: 0
    },
    '.content-fields': {
        border: '.01px solid lightgray',
        padding: '10px'
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

export default function DriverEditProfile() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("shashank");
    const [lastName, setLastName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [addressLineOne, setAddressLineOne] = useState("");
    const [addressLineTwo, setAddressLineTwo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    // const [country, setCountry] = useState("");
    const [zip, setZip] = useState("");
    const [companyCity, setCompanyCity] = useState("");
    const [phone, setPhone] = useState("");
    const [taxNumber, setTaxNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [edit, setEdit] = useState(false)




    const [firstNameErrorText, setFirstNameErrorText] = useState("");
    const [lastNameErrorText, setLastNameErrorText] = useState("");
    const [companyNameErrorText, setCompanyNameErrorText] = useState("");
    const [emailErrorText, setEmailErrorText] = useState("");
    const [addressLineOneErrorText, setAddressLineOneErrorText] = useState("");
    // const [country, setCountry] = useState("");
    const [companyCityErrorText, setCompanyCityErrorText] = useState("");
    const [phoneErrorText, setPhoneErrorText] = useState("");
    const [userNameErrorText, setUserNameErrorText] = useState("");
    const [taxNumberErrorText, setTaxNumberErrorText] = useState("");
    const [passwordErrorText, setPasswordErrorText] = useState("");
    const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [journey, setJourney] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleJourney = (e) => {
        setJourney(e.target.value)
    }

    const validateForm = () => {
        let valid = true;

        if (!firstName) {
            setFirstNameErrorText("Please enter First Name");
            valid = false;
        } else {
            setFirstNameErrorText("");
        }

        if (!lastName) {
            setLastNameErrorText("Please enter Last Name");
            valid = false;
        } else {
            setLastNameErrorText("");
        }


        if (!taxNumber) {
            setTaxNumberErrorText("Please enter Tax number");
            valid = false;
        } else {
            setTaxNumberErrorText("");
        }



        if (!companyName) {
            setCompanyNameErrorText("Please enter Company Name");
            valid = false;
        } else {
            setCompanyNameErrorText("");
        }
        if (!email) {
            setEmailErrorText("Please enter Email Address");
            valid = false;
        } else {
            setEmailErrorText("");
        }
        if (!addressLineOne) {
            setAddressLineOneErrorText("Please enter Address 1 Name");
            valid = false;
        } else {
            setAddressLineOneErrorText("");
        }
        if (!companyCity) {
            setCompanyCityErrorText("Please enter Company City");
            valid = false;
        } else {
            setCompanyCityErrorText("");
        }
        if (!phone) {
            setPhoneErrorText("Please enter Phone");
            valid = false;
        } else {
            setPhoneErrorText("");
        }
        if (!userName) {
            setUserNameErrorText("Please enter User Name");
            valid = false;
        } else {
            setUserNameErrorText("");
        }

        if (!password) {
            setPasswordErrorText("Please enter Password");
            valid = false;
        } else {
            setPasswordErrorText("");
        }

        if (!confirmPassword) {
            setConfirmPasswordErrorText("Please enter Confirm Password");
            valid = false;
        } else if (confirmPassword !== password) {
            setConfirmPasswordErrorText("Password and Confirm Password does not match");
            valid = false;
        } else {
            setConfirmPasswordErrorText("");
        }

        return valid;
    }



    let data = {
        username: userName,
        fName: firstName,
        lName: lastName,
        phoneNumber: phone,
        email: email,
        taxNumber: taxNumber,
        password: password,
        website: website,
        companyName: companyName,
        address1: addressLineOne,
        address2: addressLineTwo,
        city: city,
        stateRegion: state,
        country: journey,
        zip: zip,
        companyCity: companyCity,

    }
    console.log(data)

    const handleRegister = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            setLoading(true)

        }

    }




    return (<>
        <div className='container-fluid bg-white p-5'>
            <div className='my-4'>
                <h3 className='admin-booking'>Edit Profile Details</h3>
            </div>
            <div className='row shadow p-0 m-0'>
                <form onSubmit={handleRegister}>
                    <div>
                        <div className='row p-0'>
                            <div className='col-md-12 '>
                                {error && <div className='fs-4 mb-3 text-center text-danger border border-danger' style={{ backgroundColor: "#FFEDEE" }}>{error}</div>}
                                <div className='label-text border' style={{ backgroundColor: "#E6E6E6" }}>Personal Details</div>
                                <DriveRegisWrapper>
                                    <Grid container>
                                        <Grid item xs={12} sm={6} md={6} className='content-fields' >
                                            <TextField label="First Name*" variant='outlined' fullWidth onChange={(e) => setFirstName(e.target.value)}
                                                error={!!firstNameErrorText}
                                                helperText={firstNameErrorText} 
                                                value={firstName}
                                               disabled={edit}/>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6} className='content-fields'>
                                            <TextField label="Last Name*" variant='outlined' fullWidth onChange={(e) => setLastName(e.target.value)}
                                                error={!!lastNameErrorText}
                                                helperText={lastNameErrorText} />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={6} className='content-fields' >
                                            <TextField label="Company Name*" variant='outlined' fullWidth onChange={(e) => setCompanyName(e.target.value)}
                                                error={!!companyNameErrorText}
                                                helperText={companyNameErrorText} />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={6} className='content-fields'>

                                            <TextField label="E-Mail Address*" variant='outlined' fullWidth onChange={(e) => setEmail(e.target.value)}
                                                error={!!emailErrorText}
                                                helperText={emailErrorText} />
                                        </Grid>

                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={12} sm={6} md={6} className='content-fields'>
                                            <TextField label="Address Line 1*" variant='outlined' fullWidth onChange={(e) => setAddressLineOne(e.target.value)}
                                                error={!!addressLineOneErrorText}
                                                helperText={addressLineOneErrorText} />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6} className='content-fields' >
                                            <TextField label="Address Line 2" variant='outlined' fullWidth onChange={(e) => setAddressLineTwo(e.target.value)} />
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={12} sm={6} md={3} className='content-fields'>
                                            <TextField label="City" variant='outlined' fullWidth onChange={(e) => setCity(e.target.value)} />

                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3} className='content-fields'>
                                            <TextField label="State or Region" variant='outlined' fullWidth onChange={(e) => setState(e.target.value)} />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={3} className='content-fields' >
                                            <FormControl fullWidth>
                                                <InputLabel id="JOURNEY TYPE">Country</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    value={journey}
                                                    label="Countary"
                                                    onChange={handleJourney}
                                                >
                                                    <MenuItem value={"Germany"}>Germany</MenuItem>
                                                    <MenuItem value={"India"}>India</MenuItem>
                                                    <MenuItem value={"England"}>England</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={3} className='content-fields'>
                                            <TextField label="ZIP" variant='outlined' fullWidth onChange={(e) => setZip(e.target.value)} />

                                        </Grid>

                                    </Grid>
                                    <Grid container >
                                        <Grid item xs={12} sm={4} md={4} className='content-fields'>
                                            <TextField label="Company City*" variant='outlined' fullWidth onChange={(e) => setCompanyCity(e.target.value)}
                                                error={!!companyCityErrorText}
                                                helperText={companyCityErrorText} /><br /><br />
                                        </Grid>
                                        <Grid item xs={12} sm={4} md={4} className='content-fields'>
                                            <TextField label="Phone Number*" variant='outlined' fullWidth onChange={(e) => setPhone(e.target.value)}
                                                error={!!phoneErrorText}
                                                helperText={phoneErrorText} /><br /><br />
                                        </Grid>
                                        <Grid item xs={12} sm={4} md={4} className='content-fields'>
                                            <TextField label="Tax Number*" variant='outlined' fullWidth onChange={(e) => setTaxNumber(e.target.value)}
                                                error={!!taxNumberErrorText}
                                                helperText={taxNumberErrorText} /><br /><br />
                                        </Grid>

                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={12} className='content-fields'>
                                            <TextField label="Website" variant='outlined' fullWidth onChange={(e) => setWebsite(e.target.value)} /><br /><br />
                                        </Grid>
                                    </Grid>


                                </DriveRegisWrapper> 
                            </div>
                        </div>
                        {/* <DriveRegisWrapper> */}
                        <Grid item textAlign={'center'}>

                            <LoadingButton
                                type="submit"
                                loadingPosition="end"
                                color='primary'
                                sx={{ backgroundColor: "#0E4672", textTransform: "none" }}
                                variant='contained'
                                endIcon={<></>}
                                loading={loading}
                                size={"large"}
                                className='px-5 my-5 Button'>Update Profile</LoadingButton>
                        </Grid>
                        {/* </DriveRegisWrapper> */}
                    </div>
                </form>
            </div >

        </div >
    </>)
}


