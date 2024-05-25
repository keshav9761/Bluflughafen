import React, { useState } from 'react'
import { Button, Checkbox, Stack, styled, TextField, FormControlLabel } from '@mui/material'
import Stapper from '../BussinessAgent/Stapper'
import { useTranslation } from 'react-i18next'
import svgImages from '../../Assets/Images/svgImages'
import paypal from '../../Assets/Images/PayPal 1.png'
import wallet from '../../Assets/Images/Group (2).png'
import stripe from '../../Assets/Images/Group (1).png'
import { Label } from '@mui/icons-material'
import { PaymentList } from '../BussinessAgent/Payment'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { paths } from '../../config/constants'
import { useNavigate } from 'react-router-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const { EditIcon } = svgImages;


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
        WebkitTextFillColor: "#FFFFFF",
        fontWeight: 700,
        marginBottom: 5,
        marginTop: 5
    },
    "& .MuiInputLabel-root.Mui-disabled": {
        color: "#17A2B8",
        fontWeight: 700,
        fontSize: 20
    },
    "& .MuiInputLabel-root": {
        color: "#635BFF",
        fontWeight: 700,
        fontSize: 20,
    }
});

export default function ContactInfo({ }) {
    const { t } = useTranslation();

    const [checked, setChecked] = useState(false);
    const [whatsapp, setWhatsapp] = useState(false);
    const [edit, setEdit] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleWhatsapp = (event) => {
        setWhatsapp(event.target.checked);
    };
    const navigate = useNavigate();


    return (
        <>
            <div className='container-fluid'>
                <div className="row align-items-center " style={{ backgroundColor: "#F5F8FA" }}>

                    <div className="col-sm-12">
                        <Stapper activeStep={2} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 text-white px-4 py-5' style={{ background: "#1A1F23", marginBottom: "auto" }}>
                        <div className='d-flex align-items-center mb-5'>
                            <span className='text-white h3'>{t('Zfassung')}</span>
                            <span className='mx-5'>
                                {edit ? <div style={{ textAlign: "end" }}><button className='btn rounded-pill bg-white px-4 ' onClick={() => setEdit(false)}> <b>Edit</b> </button></div>
                                    : <div style={{ textAlign: "end" }}><button className='btn rounded-pill bg-white px-4 ' onClick={() => setEdit(false)}> <b>Update</b> </button></div>}
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
                    <div className='col-md-6'>
                        <div className='white-card p-3 '>
                            <h2 style={{ backgroundColor: "#E6E6E6", paddingLeft: "10px" }}>{t('contactI')}</h2>
                            <form className='form-control white-card'>
                                <div className='d-flex flex-wrap'>
                                    <div className='col-md-6 p-2'>
                                        <TextField fullWidth label={t('fn')} variant="standard" />
                                    </div>
                                    <div className='col-md-6 p-2'>
                                        <TextField fullWidth label={"Last Name"} variant="standard" />

                                    </div>
                                </div>
                                <div className='d-flex flex-wrap'>
                                    <div className='col-md-12 p-2'>
                                        <TextField fullWidth label="E-Mail Adresse*" variant="standard" />
                                    </div>
                                    <div className='col-md-12 p-2'>
                                        <TextField fullWidth label={"Contact Number*"} variant="standard" />

                                    </div>
                                    <div className='col-md-12 p-2'>
                                        <FormControlLabel className='me-0'
                                            control={<Checkbox checked={whatsapp} onChange={handleWhatsapp} />}
                                        /><span>Will be<WhatsAppIcon color='success' className='mx-1' />used in whatsapp</span>
                                    </div>

                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control my-3" placeholder="Type Something...." />
                                    <label for="floatingTextarea2">{t('remark')}</label>
                                </div>
                                <FormControlLabel
                                    control={<Checkbox checked={checked} onChange={handleChange} />}
                                    label={t('bilADD')}
                                />
                            </form>
                        </div>


                        {checked && <div className='white-card my-3 p-3'>
                            <form className='form-control white-card py-4'>
                                <h5>Other Addresss</h5>
                                <div className='d-flex flex-wrap'>
                                    <div className='col-md-6 p-2'>
                                        <TextField fullWidth label="Company Name*" variant="standard" />
                                    </div>
                                    <div className='col-md-6 p-2'>
                                        <TextField fullWidth label="Tax Number*" variant="standard" />

                                    </div>
                                    <div className='col-md-4 p-2'>
                                        <TextField fullWidth label="City" variant="standard" />
                                    </div>
                                    <div className='col-md-4 p-2'>
                                        <TextField fullWidth label="State or Region" variant="standard" />

                                    </div>
                                    <div className='col-md-4 p-2'>
                                        <TextField fullWidth label="Country" variant="standard" />
                                    </div>
                                    <div className='col-md-4 p-2'>
                                        <TextField fullWidth label="House Number" variant="standard" />

                                    </div>
                                    <div className='col-md-4 p-2'>
                                        <TextField fullWidth label="Street Name" variant="standard" />

                                    </div>
                                    <div className='col-md-4 p-2'>
                                        <TextField fullWidth label="Postal Code" variant="standard" />

                                    </div>
                                    <div className='my-2'>
                                        <Button variant='contained' size='large' className='px-5'>Save & Continue</Button>
                                    </div>
                                </div>
                            </form>
                        </div>}

                        {/* <h2>Other Address</h2> */}
                        {/* <div className='row py-5'>
                            <div className='d-flex flex-wrap gap-2'>
                                <div className='col-md-4'>
                                    <button className='btn-primary p-2 payment-mehtod-button'><img src={wallet} width="40px" /> Cash</button>
                                </div>
                                <div className='col-md-3'>
                                    <button className='btn-outline-primary p-2 payment-mehtod-button'><img src={stripe} width="83px" /></button>
                                </div>
                                <div className='col-md-4'>
                                    <button className=' btn-outline-primary p-2 payment-mehtod-button'><img src={paypal} width="83px" /></button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className='col-md-3 mb-5'>
                        <PaymentList path="/business/summary" buttonName="Continue" />
                    </div>

                </div>



                <div className='row justify-content-between my-3'>
                    <div className='col-md-3 text-center'>
                        <Button variant="outlined" size={"large"}
                            className='px-5'
                            onClick={(e) => navigate("/vehicle")}
                            startIcon={<ArrowBackIosIcon />}>Vehical Option</Button>

                    </div>
                    <div className="col-md-3 text-center">
                        <Button variant="contained" className='px-5' size={"large"} onClick={(e) => navigate("/summary")}
                            endIcon={<ArrowForwardIosIcon className='ms-3' />}>Summary</Button>
                    </div>
                </div>


            </div>

        </>
    )
}
