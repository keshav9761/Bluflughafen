import React from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Stapper from '../BussinessAgent/Stapper'
import svgImages from '../../Assets/Images/svgImages'
import { useTranslation } from 'react-i18next'
import { PaymentList } from '../../component/PaymentList'
import map from '../../Assets/Images/img_rectangle39832.png'
import car from '../../Assets/Images/car.jpeg'
import paypal from '../../Assets/Images/PayPal 1.png'
import wallet from '../../Assets/Images/Group (2).png'
import stripe from '../../Assets/Images/Group (1).png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom'

const { EditIcon, GernamySvg } = svgImages;

export default function Summary({ }) {
    const [dropValue, setDropValue] = React.useState('One Way');

    const role = sessionStorage.getItem("role")
    const navigate = useNavigate();
    const { t } = useTranslation()



    const handleChange = (event) => {
        setDropValue(event.target.value);
    };

    return (
        <>
            <div className='container-fluid'>
                <div className="row align-items-center " style={{ backgroundColor: "#F5F8FA" }}>
                    <div className="col-md-12">
                        <Stapper activeStep={3} />
                    </div>
                </div>
                <div className='row bg-white pt-2'>
                    <div className='col-md-4 text-white p-4' style={{ background: "#1A1F23", marginBottom: "auto" }}>
                        <div className='row mb-3'>
                            <div className='col-md-9 mt-3'>
                                <span className='vehicle-option-sider-text ' >
                                    Contact - Information
                                </span>
                                {/* <EditIcon /> */}
                            </div>
                            <div className='col-md-2 col-order-1'>
                                <span><button className='btn rounded-pill bg-white px-3 '> <b>Edit</b> </button></span>
                            </div>
                        </div>
                        <div className='pb-3'>
                            {/* <label className='Gesamt-text'>first Name</label> */}
                            {/* <p className='vehicle-option-sider-text'>z</p> */}
                            <TextField label="First Name*" variant='outlined' className="custom-textfield" size='small' fullWidth /> <br /><br />

                            {/* <label className='Gesamt-text'></label> */}
                            {/* <p className='vehicle-option-sider-text'>Last Name</p> */}
                            <TextField label="Last Name*" variant='outlined' className="custom-textfield" size='small' fullWidth /><br /><br />


                            {/* <label className='Gesamt-text'>E-Mail Addresse</label> */}
                            {/* <p className='vehicle-option-sider-text'>demo123@gmail.com</p> */}
                            <TextField label="E-Mail Addresse*" variant='outlined' className="custom-textfield" size='small' fullWidth /> <br /><br />


                            {/* <label className='Gesamt-text'>Phone Number</label> */}
                            {/* <p className='vehicle-option-sider-text'> <GernamySvg />-91+11112344345</p> */}
                            <TextField label="Phone Number*" variant='outlined' className="custom-textfield" size='small' fullWidth /> <br /><br />


                        </div>
                        <hr style={{ border: "5px solid slategrey", width: "100%" }}></hr>
                        <div className='mt-4 '>
                            <div>
                                <span className='vehicle-option-sider-text px-3'>Payment Method</span>
                                <span ><button className='btn rounded-pill bg-white px-4 '> <b>Edit</b> </button></span>
                            </div>

                            {/* <label className='Gesamt-text mt-3'>Your Choice</label> */}
                            {/* <p className='vehicle-option-sider-text'>Cash Payment</p> */}
                            <TextField label="Your Choice" variant='outlined' className="custom-textfield" size='small' fullWidth /> <br /><br />

                        </div>

                    </div>
                    <div className='col-md-5'>
                        {/* ------------------------------------------- */}
                        <div className="card white-card">
                            <img src={map} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2 className="card-title">{t('barZ')}</h2>
                                <div style={{ textAlign: "end" }}><button className='btn rounded-pill px-4' style={{ backgroundColor: "#E9F5FF" }}> <b>Edit </b> </button></div>
                                <div className='row'>
                                    <div className='col-md-6 '>
                                        <Box >
                                            <label className='summary-label'> Transfer type</label>
                                            <FormControl fullWidth spacing={2} sx={{ my: 1, width: 200 }}>
                                                <Select
                                                    size='small'
                                                    onChange={handleChange}
                                                    value={dropValue}
                                                >
                                                    <MenuItem value='One Way' >One Way</MenuItem>
                                                    <MenuItem value='Two way'>Two Way/Return Way</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </div>
                                    <div className='col-md-6 '>
                                        <label className='summary-label'>{t('pickt')}</label>
                                        <p className="card-text my-1">30-12-2022, 11:11</p>
                                    </div>
                                </div>
                                <div className='row pt-3'>
                                    <label className='summary-label'>Pick up address Destination </label>
                                    <Box>
                                        <Timeline sx={{
                                            [`& .${timelineItemClasses.root}:before`]: {
                                                flex: 0,
                                                padding: 0,
                                            },
                                        }}>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot color="secondary" />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent>Frankfurt Airport (FRA) (FRA)</TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot color="success" />
                                                </TimelineSeparator>
                                                <TimelineContent>Frankfurt Germany- Munster, Germany</TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    </Box>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <label className='summary-label'>Flight Number</label>
                                        <p className='passanger-details'>12345678</p>
                                    </div>
                                    <div className='col-md-4'>
                                        <label className='summary-label'>Passanger</label>
                                        <p className='passanger-details'>2 Member</p>
                                    </div>
                                    <div className='col-md-4'>
                                        <label className='summary-label'>Extra Time</label>
                                        <p className='passanger-details'>2 Hour</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-5'>
                                    <div>
                                        <label className='summary-label'>Distance</label>
                                        <p className='passanger-details'>192.2 Km</p>
                                    </div>
                                    <div>
                                        <label className='summary-label'>Estimated travel time</label>
                                        <p className='passanger-details'>2h 11m</p>


                                    </div>
                                </div>
                                {dropValue === "Two way" && 
                                <div>
                                    <hr></hr>
                                    <h3 className='return-way'>Return Way</h3>
                                    <div>
                                        <div className='col-md-6 '>
                                            <label className='summary-label'>{t('pickt')}</label>
                                            <p className="card-text my-1">30-12-2022, 11:11</p>
                                        </div>
                                    </div>
                                    <div className='row pt-3'>
                                        <label className='summary-label'>Pick up address Destination </label>
                                        <Box>
                                            <Timeline sx={{
                                                [`& .${timelineItemClasses.root}:before`]: {
                                                    flex: 0,
                                                    padding: 0,
                                                },
                                            }}>
                                                <TimelineItem>
                                                    <TimelineSeparator>
                                                        <TimelineDot color="secondary" />
                                                        <TimelineConnector />
                                                    </TimelineSeparator>
                                                    <TimelineContent>Frankfurt Airport (FRA) (FRA)</TimelineContent>
                                                </TimelineItem>
                                                <TimelineItem>
                                                    <TimelineSeparator>
                                                        <TimelineDot color="success" />
                                                    </TimelineSeparator>
                                                    <TimelineContent>Frankfurt Germany- Munster, Germany</TimelineContent>
                                                </TimelineItem>
                                            </Timeline>
                                        </Box>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label className='summary-label'>Flight Number</label>
                                            <p className='passanger-details'>12345678</p>
                                        </div>
                                        <div className='col-md-4'>
                                            <label className='summary-label'>Passanger</label>
                                            <p className='passanger-details'>2 Member</p>
                                        </div>
                                        <div className='col-md-4'>
                                            <label className='summary-label'>Extra Time</label>
                                            <p className='passanger-details'>2 Hour</p>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-5'>
                                        <div>
                                            <label className='summary-label'>Distance</label>
                                            <p className='passanger-details'>192.2 Km</p>
                                        </div>
                                        <div>
                                            <label className='summary-label'>Estimated travel time</label>
                                            <p className='passanger-details'>2h 11m</p>


                                        </div>
                                    </div>
                                </div>
                                }
                            </div>

                        </div>
                        {/* ------------------------------------------------------------ */}
                        <div className=''>
                            <h2>Select Payment method</h2>

                            <div className='d-flex flex-wrap gap-5'>
                                <div>
                                    <Button variant="contained" size="large" className='px-5 mb-2'>Buy Customer</Button>
                                </div>
                                <div>
                                    <Button variant="outlined" size="large" className='px-2 mb-2'>Buy Agent</Button>
                                </div>

                            </div>
                            <div className='row mt-3'>
                                <div className='d-flex flex-wrap gap-1'>
                                    <div className='col-md-4'>
                                        <Button variant="contained" size="medium" className='py-3 px-3'><img src={wallet} width="40px" /> Cash</Button>
                                    </div>
                                    <div className='col-md-3'>
                                        <Button variant="outlined" size="large" className='px-2 mb-2'><img src={stripe} width="83px" /></Button>
                                    </div>
                                    <div className='col-md-4'>
                                        <Button variant="outlined" size="large" className='px-2 mb-2'><img src={paypal} width="83px" /></Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-3 mb-5'>
                        <div className="my-2">
                            <img src={car} />
                        </div>
                        <div style={{ backgroundColor: "#16191C", padding: "5%" }}>
                            <div className='d-flex justify-content-between'>
                                <h2 className='vehicle-option-sider-text'>{t('vehiInfo')}</h2>
                                <div style={{ textAlign: "end" }}><button className='btn rounded-pill px-4' style={{ backgroundColor: "#E9F5FF" }}> <b>Edit </b> </button></div>
                            </div>
                            {/* <label className='Gesamt-text'>Vehical type</label> */}
                            {/* <p className='vehicle-option-sider-text'>SUV</p> */}
                            <TextField label="Vehical type" variant='outlined' className="custom-textfield" size='small' fullWidth /> <br /><br />

                            {/* <label className='Gesamt-text'>Extra Optionen</label> */}
                            {/* <p className='vehicle-option-sider-text'>1xGold - €10.00 <br />1xBabyschale - €2.00 <br />
                                (0 Monate - 9Monate) </p> */}
                            <TextField label="Extra Optionen" variant='outlined' className="custom-textfield" size='small' fullWidth /> <br /><br />

                        </div>
                        <div className='px-3 py-4 text-center white-card'>
                            <TextField placeholder='Coupon Code' fullWidth className='py-2 fs-2' />
                            <button className='btn Gesamt-text px-5 py-3 mt-3' style={{ backgroundColor: "#B2C4D2" }}>{t('applcode')}</button>
                            <TextField placeholder='Amount Collected' fullWidth className='py-2 fs-2' />

                        </div>

                        <PaymentList path="/business/done" buttonName="Book Nows" />
                        <Button variant="outlined" className="btn-primary w-100 mt-3">Contact-Information</Button>
                    </div>

                </div>
                <div className='row justify-content-between my-3'>
                    <div className='col-md-3 text-center'>
                        <Button variant="outlined" size={"large"}
                            onClick={(e) => navigate("/contact")}
                            startIcon={<ArrowBackIosIcon />}>Contact Information</Button>

                    </div>
                    <div className="col-md-3 text-center">
                        <Button variant="contained" className='px-5' size={"large"} onClick={(e) => navigate("/done")}
                            endIcon={<ArrowForwardIosIcon className='ms-4' />}>Book Now</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
