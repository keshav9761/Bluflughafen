import React from 'react'
import { Box, Button, FormControl, MenuItem, Select, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import Stapper from '../component/Elements/Stapper'
import svgImages from '../Assets/Images/svgImages'
import { useTranslation } from 'react-i18next'
import { PaymentList } from '../component/PaymentList'
import map from '../Assets/Images/img_rectangle39832.png'
import car from '../Assets/Images/car.jpeg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom'
import Timeline from '@mui/lab/Timeline/Timeline'
import TimelineItem from '@mui/lab/TimelineItem/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator/TimelineSeparator'
import TimelineDot from '@mui/lab/TimelineDot/TimelineDot'
import TimelineContent from '@mui/lab/TimelineContent/TimelineContent'
import TimelineConnector from '@mui/lab/TimelineConnector/TimelineConnector'
import { timelineItemClasses } from '@mui/lab/TimelineItem'

const { EditIcon, GernamySvg } = svgImages;

export default function Summary() {
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
                <div className='row'>
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
                            <label className='Gesamt-text'>first Name</label>
                            <p className='vehicle-option-sider-text'>z</p>

                            <label className='Gesamt-text'></label>
                            <p className='vehicle-option-sider-text'>Last Name</p>

                            <label className='Gesamt-text'>E-Mail Addresse</label>
                            <p className='vehicle-option-sider-text'>demo123@gmail.com</p>

                            <label className='Gesamt-text'>Phone Number</label>
                            <p className='vehicle-option-sider-text'> <GernamySvg />-91+11112344345</p>

                        </div>
                        <hr style={{ border: "5px solid slategrey", width: "100%" }}></hr>
                        <div className='mt-4 '>
                            <div>
                                <span className='vehicle-option-sider-text px-3'>Payment Method</span>
                                <span ><button className='btn rounded-pill bg-white px-4 '> <b>Edit</b> </button></span>
                            </div>

                            <label className='Gesamt-text mt-3'>Your Choice</label>
                            <p className='vehicle-option-sider-text'>Cash Payment</p>
                        </div>

                    </div>
                    <div className='col-md-5'>
                        <div className="card white-card">
                            <img src={map} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2 className="card-title">{t('barZ')}</h2>
                                <div style={{ textAlign: "end" }}><button className='btn rounded-pill px-4' style={{ backgroundColor: "#E9F5FF", position: "relative", top: "-47px" }}> <b>Edit </b> </button></div>
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
                            <label className='Gesamt-text'>Vehical type</label>
                            <p className='vehicle-option-sider-text'>SUV</p>
                            <label className='Gesamt-text'>Extra Optionen</label>
                            <p className='vehicle-option-sider-text'>1xGold - €10.00 <br />1xBabyschale - €2.00 <br />
                                (0 Monate - 9Monate) </p>
                        </div>
                        <div className='px-3 py-4 text-center white-card'>
                            <TextField placeholder='Coupon Code' fullWidth className='py-2 fs-2' />
                            <button className='btn Gesamt-text px-5 py-3 mt-3' style={{ backgroundColor: "#B2C4D2" }}>{t('applcode')}</button>
                            <TextField placeholder='Amount Collected' fullWidth className='py-2 fs-2' />

                        </div>

                        <PaymentList path="/done" buttonName="Book Now" />
                        <Button variant="outlined" className="btn-primary w-100 mt-3">Contact-Information</Button>
                    </div>

                </div>
                 <div className='row justify-content-between my-3'>
                    {/* <div className='col-md-3 text-center'>
                        <Button variant="outlined" size={"large"}
                            onClick={(e) => navigate("/contact")}
                            startIcon={<ArrowBackIosIcon />}>Contact Information</Button>

                    </div> */}
                    {/* <div className="col-md-3 text-center">
                        <Button variant="contained" className='px-5' size={"large"} onClick={(e) => navigate("/done")}
                            endIcon={<ArrowForwardIosIcon className='ms-4' />}>Book Now</Button>
                    </div> */}
                </div> 
            </div>
        </>
    )
}
