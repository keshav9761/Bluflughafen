import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Grid, TextField, styled } from '@mui/material';
import Stapper from '../component/Elements/Stapper'
// ------------images------------
import buttonIcon1 from '../Assets/Images/disability1.png'
import buttonIcon2 from '../Assets/Images/g105.png'
import buttonIcon3 from '../Assets/Images/apps1.png'
import buttonIcon4 from '../Assets/Images/package.png'
import minibus from '../Assets/Images/img_minibus.png'
import minibus2 from '../Assets/Images/img_minivan4pax1460x184.png'
import minibus3 from '../Assets/Images/img_minibus8seater1460x184.png'
import user from '../Assets/Images/user1.png'
import bag from '../Assets/Images/bag1.png'
import svgImages from '../Assets/Images/svgImages'
import { useTranslation } from 'react-i18next'
import { PaymentList } from '../component/PaymentList'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import { paths } from '../config/constants';
import { TableVehicle } from '../component/TableVehicle';
import Packages from './Packages';
import Extraoptions from './Extraoptions';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import axios from 'axios';

const EditWrapper = styled('form')({
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
    "& .MuiInputBase-input.Mui-disabled": {
        WebkitTextFillColor: "#AFAFAF",
        fontWeight: 700,
        marginBottom: 5,
        marginTop: 5
    },
    "& .MuiInputLabel-root.Mui-disabled": {
        color: "#455E72",
        fontWeight: 700,
        fontSize: 20
    },
    "& .MuiInputLabel-root": {
        color: "#FFFFFF",
        fontWeight: 700,
        fontSize: 20
    }
});


export default function VehicleOption({ }) {
    const { t } = useTranslation();
    const { EditIcon } = svgImages;

    const [value, setValue] = useState('one');
    const [edit, setEdit] = useState(true);
    const [vehicleList, setVehicleList] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const naviagte = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}api/vehicalType/getVehicalTypeList`)
            setVehicleList(res?.data.data)
        }
        catch (error) {
            console.log(error);
        }
    }
    
    // console.log(vehicleList);
    



    return (
        <>
            <div className='container-fluid' >
                <div className="row align-items-center " style={{ backgroundColor: "#F5F8FA" }}>
                    <Stapper activeStep={1} />
                </div>
                <div className='row '>
                    <div className='col-md-3 text-white px-4 py-5' style={{ background: "#1A1F23", marginBottom: "auto" }}>
                        <div className='d-flex align-items-center mb-5'>
                            <span className='text-white h3'>{t('Zfassung')}</span>
                            <span className='mx-5'>
                                {/* <EditIcon /> */}
                                {edit ? <div style={{ textAlign: "end" }}><button className='btn rounded-pill bg-white px-4 ' onClick={() => setEdit(false)}> <b>Edit</b> </button></div>
                                    : <div style={{ textAlign: "end" }}><button className='btn rounded-pill bg-white px-4 ' onClick={() => setEdit(true)}> <b>Update</b> </button></div>}
                            </span>
                        </div>
                        <EditWrapper>
                            <form>
                                <Stack spacing={5} >
                                    <TextField
                                        label="Transfer Type" variant="standard"
                                        defaultValue={"One Way"}
                                        disabled={true}
                                    // sx={{
                                    //     "& .MuiInputBase-input.Mui-disabled": {
                                    //         WebkitTextFillColor: "#7E868D",
                                    //     },
                                    // }}
                                    // InputLabelProps={{
                                    //     style: { color: '#17A2B8' },
                                    // }}
                                    />


                                    <TextField label="Pick Up Address Destination" className='custom-textfield'
                                        variant="standard"
                                        disabled={true}
                                        multiline
                                        minRows={2}
                                        defaultValue={"10209, 10210, Padam Singh Rd, near Pizza Hut, Block 14, WEA, Karol Bagh, New Delhi, Delhi 110005"}
                                    />

                                    <TextField label="Pick Up Date & Time" className='custom-textfield' variant="standard" defaultValue={"25/04/2023 12.34 AM"}
                                        disabled={edit}
                                    />
                                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            label="Pick Up Date & Time"
                                            defaultValue={"25/04/2023 12.34 AM"}
                                          
                                            value={value}
                                            onChange={handleChange}
                                            renderInput={(params) => <TextField 
                                                disabled={edit}
                                                variant="standard"  {...params} />}
                                        />
                                    </LocalizationProvider> */}
                                    <TextField label="Distance" className='custom-textfield' variant="standard"
                                        disabled={true}
                                        defaultValue={"126 KM"}
                                    />


                                    <TextField label="Estimated Travel Time" className='custom-textfield' variant="standard"
                                        disabled={true}
                                        defaultValue={"3 Hours"}
                                    />
                                </Stack>
                            </form>
                        </EditWrapper>
                    </div>
                    <div className='col-md-6 white-card p-2'>
                        {/* <div className='p-3'>
                            <h2 ><img src={buttonIcon3} className='me-2' />Extra Options</h2>
                        </div>

                        <div className=' d-flex flex-wrap justify-content-evenly gap-2 pb-3'>
                            <Button variant='contained' onClick={(e) => setValue("one")}><img src={buttonIcon2} /> Child Seat</Button>
                            <Button variant='contained' onClick={(e) => setValue("two")}> <img src={buttonIcon4} /> Package </Button>
                            <Button variant='contained' onClick={(e) => setValue("three")}> <img src={buttonIcon1} />Extra Options</Button>
                        </div>
                        {value === "one" && <TableVehicle />}
                        {value === "two" && <span><Packages /></span>}
                        {value === "three" && <span><Extraoptions /></span>} */}


                        <h2>Vehicle List</h2>
                        <div className='row justify-content-center '>
                            <div className=' col-md-11 col-sm-6 white-card border my-3'>
                                {
                                    vehicleList?.length > 0 &&
                                    vehicleList?.map((currentValue, i) => {
                                        return (
                                            <>
                                                <Grid container key={i} spacing={2} py={2}>
                                                    <Grid item md={5} xm={4} textAlign="center">
                                                        <img className="card-img-top" src={currentValue?.vehicalImage} alt="Card image cap" style={{ width: "100%", height: "auto" }} />
                                                    </Grid>
                                                    <Grid item md={5} xm={4} spacing={2}>
                                                        <div className="card-body ">
                                                            <label className='vehicle-type mt-2'>{currentValue?.vehicalStandard}</label>
                                                            <div className='d-flex flex-wrap gap-3 mt-3 '>
                                                                <div className='d-flex justify-content-center gap-2'>
                                                                    <div>
                                                                        <img src={user} className='' />
                                                                    </div>
                                                                    <div>
                                                                        <p className='people-bag'>{currentValue?.passengersNumber} People </p>
                                                                    </div>

                                                                </div>
                                                                <div className='d-flex gap-2 justify-content-center'>
                                                                    <div>
                                                                        <img src={bag} />
                                                                    </div>
                                                                    <div>
                                                                        <p className='people-bag'>{currentValue?.suitcasesNumber} Bag</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <p className='vehicle-card-text'>{currentValue?.baseLocation}</p>
                                                        </div>
                                                    </Grid>

                                                    <Grid item md={2} textAlign="center">
                                                        <div className=' card-text mt-2'>
                                                            <p>&#8364; {currentValue?.price}</p>
                                                            <div className='me-5'>
                                                                <button className="btn-primary btn-sm px-3">{t('wah')}</button>
                                                            </div>
                                                        </div>
                                                    </Grid>
                                                </Grid>


                                            </>
                                        )
                                    })
                                }

                            </div>

                            {/* <div className=' col-md-11 col-sm-6 white-card border my-3'>

                                <Grid container>
                                    <Grid item md={5} xm={4} textAlign="center">
                                        <img className="card-img-top" src={minibus2} alt="Card image cap" style={{ width: "177px", height: "115px" }} />
                                    </Grid>
                                    <Grid item md={5} xm={4}>
                                        <div className="card-body ">
                                            <label className='card-text mt-2'>Economy</label>
                                            <div className='d-flex flex-wrap gap-3 mt-3 '>
                                                <p className='people-bag'><img src={user} /><b> 2 People </b></p>
                                                <p className='people-bag'> <b><img src={bag} /></b><b>4 Bag</b>  </p>
                                            </div>

                                            <p className='vehicle-card-text'>VW Passat, Opel Insignia,<br /> Toyota Avensis</p>
                                        </div>
                                    </Grid>
                                    <Grid item md={2} textAlign="center">
                                        <div className=' card-text mt-2'>
                                            <p>€226.78</p>
                                            <button className="btn-primary ">{t('wah')}</button>
                                        </div>
                                    </Grid>
                                </Grid>

                            </div> */}

                            {/* <div className=' col-md-11 col-sm-6 white-card border my-3'>

                                <Grid container>
                                    <Grid item md={5} xm={4} textAlign="center">
                                        <img className="card-img-top" src={minibus3} alt="Card image cap" style={{ width: "177px", height: "115px" }} />
                                    </Grid>
                                    <Grid item md={5} xm={4}>
                                        <div className="card-body ">
                                            <label className='card-text mt-2'>Economy</label>
                                            <div className='d-flex flex-wrap gap-3 mt-3 '>
                                                <p className='people-bag'><img src={user} /><b> 2 People </b></p>
                                                <p className='people-bag'> <b><img src={bag} /></b><b>4 Bag</b>  </p>
                                            </div>

                                            <p className='vehicle-card-text'>VW Passat, Opel Insignia,<br /> Toyota Avensis</p>
                                        </div>
                                    </Grid>
                                    <Grid item md={2} textAlign="center">
                                        <div className=' card-text mt-2'>
                                            <p>€226.78</p>
                                            <button className="btn-primary ">{t('wah')}</button>
                                        </div>
                                    </Grid>
                                </Grid>

                            </div> */}
                        </div>

                    </div>

                    <div className='col-md-3 mb-5 '>
                        <PaymentList path='/contact' buttonName="Continue" />

                    </div>

                </div>

                {/* <div className='row justify-content-between my-3'>
                    <div className='col-md-3 text-center'>
                        <Button variant="outlined" size={"large"} onClick={(e) => naviagte("/")} className="btn-primary" startIcon={<ArrowBackIosIcon />}>Ride Booking</Button>

                    </div>
                    <div className="col-md-3 text-center">
                        <Button variant="contained" onClick={(e) => naviagte("/contact")} size={"large"} className="btn-primary" endIcon={<ArrowForwardIosIcon />}>Contact Information</Button>
                    </div>
                </div> */}



            </div>

        </>
    )






}
