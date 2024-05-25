import React from 'react'
import { ResponsiveDatePickers } from '../../component/Elements/Date'
import { BasicTimePicker } from '../../component/Elements/Timer'
import svgImage from '../../Assets/Images/svgImages'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import pakage from '../../Assets/Images/Group (3).png'
import emoji from '../../Assets/Images/g105 (1).png'
import disability1 from '../../Assets/Images/disability.png'
import ModalFullscreenExample from '../../component/ModelEdit';
const { GernamySvg } = svgImage;

export default function AdminBooking() {
    const [journey, setJourney] = React.useState('');
    const [extraTime, setExtraTime] = React.useState('');
    
    const handleJourney = (event) => {
        setJourney(event.target.value);
    };
    const handleExtraTime = (event) => {
        setExtraTime(event.target.value);
    };
    return (<>

        <div className='container-fluid'>
            <div className='row bg-white p-2'>
                <div className='admin-booking my-4 '>Admin Booking</div>
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
                <div className='col-md-12 heading-section my-'>Booking Extra</div>

                <div className='row gap-5 my-4 p-2 m-2 '>
                    <div className='col-md-5 border white-card p-3'>
                        <div className='label-text '> <img src={emoji} width="50px" style={{ marginRight: "10px" }} />Child Seat</div>
                        <hr />
                        <div className='row mx-2 '>
                            <div className='col-md-8 text-admin'>Baby Seat (0 Months - 9 Months)</div>
                            <div className='col-md-1 pb-2 label-text mt-auto'>5</div>
                            <div className='col-md-3 '>
                                <div className='rounded-pill d-flex   ' >
                                    <span className='w-50 puls-minus-btn-darkblue' onClick={""}>+</span>
                                    <span className='w-50 puls-minus-btn-skyblue' onClick={""}>-</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='row mx-2 '>
                            <div className='col-md-8 text-admin'>Child Seat (9 Month - 4 Years)</div>
                            <div className='col-md-1 pb-2 label-text mt-auto'>5</div>
                            <div className='col-md-3'>
                                <div className='rounded-pill bg-secondary d-flex  ' >
                                    <span className='w-50 puls-minus-btn-darkblue' onClick={""}>+</span>
                                    <span className='w-50 puls-minus-btn-skyblue' onClick={""}>-</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='row mx-2 '>
                            <div className='col-md-8 text-admin'>Booster Seat (4 Month - 12 Years)</div>
                            <div className='col-md-1 pb-2 label-text mt-auto'>5</div>
                            <div className='col-md-3'>
                                <div>
                                    <div className='rounded-pill bg-secondary d-flex  ' >
                                        <span className='w-50 puls-minus-btn-darkblue' onClick={""}>+</span>
                                        <span className='w-50 puls-minus-btn-skyblue' onClick={""}>-</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className='col-md-5 border white-card  p-3'>

                        <div className='label-text '> <img src={pakage} width="40px" style={{ marginRight: "10px" }} />Package</div>
                        <hr />
                        <div className='row mx-2 '>
                            <div className='col-md-8 text-admin'>Silber </div>
                            <div className='col-md-1 pb-2 label-text mt-auto'>5</div>
                            <div className='col-md-3'>
                                <div className='rounded-pill bg-secondary d-flex ' >
                                    <span className='w-50 puls-minus-btn-darkblue' onClick={""}>+</span>
                                    <span className='w-50 puls-minus-btn-skyblue' onClick={""}>-</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='row mx-2 '>
                            <div className='col-md-8 text-admin'>Gold </div>
                            <div className='col-md-1 pb-2 label-text mt-auto'>5</div>
                            <div className='col-md-3'>
                                <div className='rounded-pill bg-secondary d-flex ' >
                                    <span className='w-50 puls-minus-btn-darkblue' onClick={""}>+</span>
                                    <span className='w-50 puls-minus-btn-skyblue' onClick={""}>-</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='row mx-2 '>
                            <div className='col-md-8 text-admin'>Platin </div>
                            <div className='col-md-1 pb-2 label-text mt-auto'>5</div>
                            <div className='col-md-3'>
                                <div className='rounded-pill bg-secondary d-flex  ' >
                                    <span className='w-50 puls-minus-btn-darkblue' onClick={""}>+</span>
                                    <span className='w-50 puls-minus-btn-skyblue' onClick={""}>-</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className='col-md-5 border white-card'>
                        <div className='label-text '> <img src={disability1} width="40px" style={{ marginRight: "10px" }} />Wheelchair (Foldable)</div>
                        <hr />
                        <div className='row mx-2 mb-4 '>
                            <div className='col-md-8 text-admin'>Rollstuhl </div>
                            <div className='col-md-1 pb-2 label-text mt-auto'>5</div>
                            <div className='col-md-3'>
                                <div className='rounded-pill bg-secondary d-flex ' >
                                    <span className='w-50 puls-minus-btn-darkblue' onClick={""}>+</span>
                                    <span className='w-50 puls-minus-btn-skyblue' onClick={""}>-</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-md-12 heading-section my-'>Comments</div>
                <div className='col-md-12 my-4 m-2'>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                </div>
                <button className='btn-primary w-auto mx-3 px-5 mb-5'>Submit</button>
            </div>
        </div>
        {/* ---------------model-------------- */}
          <center ><ModalFullscreenExample /></center> 
    </>)
}





