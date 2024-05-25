import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import svgImage from '../../Assets/Images/svgImages'
import { ResponsiveDatePickers } from './Date';
import { BasicTimePicker } from './Timer';
const { GernamySvg } = svgImage;

export function OpenBookIdModel({}) {
    const [open, setOpen] = useState(false);
    const [journey, setJourney] = React.useState('');
    const [extraTime, setExtraTime] = React.useState('');

    const handleJourney = (event) => {
        setJourney(event.target.value);
    };
    const handleExtraTime = (event) => {
        setExtraTime(event.target.value);
    };

    const handleModel=()=>{
        setOpen(true)
    }
    return (
        <div>

            <button type="button" onClick={handleModel} class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                OpenBookIdModel
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Booking-1111111131</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='col-md-12 heading-section '>Customer Details</div>

                            <div className='row my-3 gap-4 '>

                                <div className='col-md-3 white-card p-3 border' style={{ backgroundColor: "#F1F9FF" }}>
                                    <label className='label-admin-text'>Vorname*</label>
                                    <p className='text-admin'>HET</p>
                                </div>
                                <div className='col-md-4 white-card p-3 border'>
                                    <label className='label-admin-text'>E-mail Adresse*</label>
                                    <p className='text-admin'>demo133@gmail.com</p>

                                </div>
                                <div className='col-md-4 white-card p-3 border'>
                                    <label className='label-admin-text'>Telefonummer*</label> <br />
                                    <span><GernamySvg /></span><span className='text-admin'>+48 </span><span className='text-admin'>11112344345</span>
                                </div>
                                <div className='col-md-12 p-3 border my-3'>
                                    <label className='label-admin-text '>Adresse*</label>
                                    <p className='text-admin'>Surata Thai Massage, Hauptstraße, Eppelheim, Germany</p>
                                </div>
                            </div>
                            <div className='col-md-12 heading-section '>Ride Details</div>

                            <div className='row my-4 gap-5'>
                                <div className='col-md-6  p-3'>
                                    <div className='row my-3'>
                                        <div className='col-md-6 p-2'>
                                            <ResponsiveDatePickers label="PICKUP DATE" />

                                        </div>
                                        <div className='col-md-6 p-2'>
                                            <BasicTimePicker label="PICKUP TIME" />

                                        </div>

                                    </div>
                                    <div className='col-md-12 my-2 p-2 border'>
                                        <label className='label-admin-text'>FROM</label>
                                        <p className='text-admin'>rata Thai Massage, Hauptstraße, Eppelheim, Germany</p>
                                    </div>
                                    <div className='col-md-12 my-2 p-2 border'>
                                        <label className='label-admin-text '>TO</label>
                                        <p className='text-admin'>rata Thai Massage, Hauptstraße, Eppelheim, Germany</p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 my-2'>
                                            <Box >
                                                <FormControl fullWidth>
                                                    <InputLabel id="JOURNEY TYPE">JOURNEY TYPE</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"

                                                        value={journey}
                                                        label="JOURNEY TYPE"
                                                        onChange={handleJourney}
                                                    >
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                        <div className='col-md-6 my-2'>
                                            <Box>
                                                <FormControl fullWidth>
                                                    <InputLabel id="JOURNEY TYPE">EXTRA TIME</InputLabel>
                                                    <Select
                                                        value={extraTime}
                                                        label="EXTRA TIME"
                                                        onChange={handleExtraTime}
                                                    >
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                    </div>
                                    <div className='col-md-12 my-2 border p-2'>
                                        <label className='label-admin-text'>FARE</label>
                                        <p className='text-admin'>60</p>
                                    </div>

                                </div>

                                <div className='col-md-5 white-card border p-3'>
                                    <table className='table table-bordered' width="100%" cellPadding="18%" >
                                        <tr>
                                            <th className='text-admin table-th'>Distance in Miles:</th>
                                            <td className='text-admin'>16:42</td>
                                        </tr>
                                        <tr>
                                            <th className='text-admin table-th'>Distance in Kilometer:</th>
                                            <td className='text-admin'>24:42</td>
                                        </tr>
                                        <tr>
                                            <th className='text-admin table-th'>Duration (Hours):</th>
                                            <td className='text-admin'>18 Min, 20 Sec</td>
                                        </tr>
                                        <tr>
                                            <th className='text-admin table-th'>Duration (Seconds):</th>
                                            <td className='text-admin'>1519</td>
                                        </tr>
                                        <tr>
                                            <th className='text-admin table-th'>Route:</th>
                                            <td className='text-admin'>Messe Frankfurt ~ Halle 3, Ludwig-Ernard-anlage, Frankturt, Germany</td>
                                        </tr>
                                        <tr>
                                            <th className='text-admin table-th'>Fare:</th>
                                            <td className='text-admin'>60</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
