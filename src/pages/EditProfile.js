import React from 'react'
import { FormControl, Grid, InputLabel, MenuItem, Select, styled, TextField, Button, FormControlLabel, Checkbox, FormGroup, Stack } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const PersonalDetailWrapper = styled('form')({
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
    },

});

export default function EditProfile() {
    const [journey, setJourney] = React.useState('');

    const handleJourney = (e) => {
        setJourney(e.target.value)
    }
    return (<>
        <div className='container-fluid bg-white'>
            <div className='container '>
                <div className='row'>
                    <h3 className='admin-booking my-5 '> Edit Profile Details</h3>
                    <div className='col-md-12 border p-1 white-card mb-5'>
                        <div className='text-admin p-1' style={{ backgroundColor: "#F0F0F0" }}>Personal Details </div>
                        <PersonalDetailWrapper>
                            <Grid container>
                                <Grid item md={12}>
                                    <Grid container >
                                        <Grid item xs={6} sm={12} md={6} className="content-fields">
                                            <TextField label="First Name*" variant='outlined' size='small' fullWidth />
                                        </Grid>
                                        <Grid item xs={6} sm={12} md={6} className="content-fields">
                                            <TextField label="Last Name*" variant='outlined' size='small' fullWidth />
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={6} sm={12} md={6} className="content-fields">
                                            <TextField label="Contact Number" variant='outlined' size='small' fullWidth />
                                            <Stack direction='row' spacing={0.1}>
                                                <FormControlLabel control={<Checkbox />} label="Will be used in" />
                                                <FormControlLabel control={<WhatsAppIcon />} label="What's App" />
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={6} sm={12} md={6} className="content-fields">
                                            <TextField label="E-mail Address*" variant='outlined' size='small' fullWidth />
                                        </Grid>
                                    </Grid>
                                    <div className='text-admin p-1' style={{ backgroundColor: "#F0F0F0" }}>Personal Details </div>
                                    <Grid container>
                                        <Grid item xs={6} sm={12} md={6} className="content-fields">
                                            <TextField label="Address Line 1*" variant='outlined' size='small' fullWidth />
                                        </Grid>
                                        <Grid item xs={6} sm={12} md={6} className="content-fields">
                                            <TextField label="address Line 2" variant='outlined' size='small' fullWidth />
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item className='content-fields' xs={6} sm={6} md={3}  >
                                            <TextField label="City" variant='outlined' fullWidth />
                                        </Grid>
                                        <Grid item className='content-fields' xs={6} sm={6} md={3}>
                                            <TextField label="State or Region" variant='outlined' fullWidth />
                                        </Grid>
                                        <Grid item className='content-fields' xs={6} sm={6} md={3}>
                                            <FormControl fullWidth>
                                                <InputLabel id="JOURNEY TYPE">Countary</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"

                                                    value={journey}
                                                    label="Countary"
                                                    onChange={handleJourney}
                                                >
                                                    <MenuItem value={10}>Germany</MenuItem>
                                                    <MenuItem value={20}>India</MenuItem>
                                                    <MenuItem value={30}>England</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item className='content-fields' xs={6} sm={6} md={3}>
                                            <TextField label="ZIP" variant='outlined' fullWidth />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item textAlign={'center'}>
                                <Button className='px-5 my-4 Button' >Update Profile</Button>
                            </Grid>
                        </PersonalDetailWrapper>
                    </div>

                </div>

            </div>

        </div>
    </>)
}
