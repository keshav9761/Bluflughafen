import styled from '@emotion/styled'
import { Box, Button, FormControl, Grid, IconButton, ImageList, ImageListItem, InputLabel, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

const PaperWraper = styled(Paper)(() => ({
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
    '.general-Info': {
        fontstyle: 'normal',
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: ' 26px',
        color: '#1F3648'
    },
}))

const TableWapper = styled(Paper)(() => ({
    '.pricing-type': {
        fontstyle: 'normal',
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: ' 26px',
        color: '#1F3648',
    },
    '.link-text': {
        fontstyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: ' 26px',
        color: '#CFC4B7'
    },
    '.textblue': {
        fontstyle: 'normal',
        fontWeight: 500,
        fontSize: '15.65px',
        lineHeight: ' 20px',
        color: '#0072CB',
    }
}))

const TableCellWrapper = styled(TableCell)(() => ({
    fontstyle: 'normal',
    fontWeight: 500,
    fontSize: '15.65px',
    lineHeight: ' 20px',
    color: '#000000',

    'fieldset': {
        borderWidth: 0
    },

}))
const AvailabilityWrapper = styled(Paper)(() => ({
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
    '.availability': {
        fontstyle: 'normal',
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: ' 26px',
        color: '#1F3648',
    },
    '.day-number': {
        fontstyle: 'normal',
        fontWeight: 500,
        fontSize: '19.943px',
        lineHeight: ' 22px',
        color: '#455E72',
    },
    '.para-text': {
        fontstyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: ' 18px',
        color: '#1F3648',
    },
   
}))
export default function AddnewVehicle() {
    const [journey, setJourney] = useState('');
    const [valeDropdown, setValeDropdown] = useState('0.0%')

    const handleJourney = (e) => {
        setJourney(e.target.value)
    }

    const handleChange = (e) => {
        setValeDropdown(e.target.value)
    }
    return (
        <>
            <Box mt={9}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container>
                        <Grid item md={12}>
                            <PaperWraper>
                                <Grid container p={1}>
                                    <Grid item className='general-Info'>
                                        General Information
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={3} className="content-fields">
                                        <TextField label="Vehicle Name" variant='outlined' size='small' fullWidth />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} className="content-fields">
                                        <TextField label="Vehicle ID" variant='outlined' size='small' fullWidth />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} className="content-fields">
                                        <TextField label="Vehicle Make" variant='outlined' size='small' fullWidth />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} className="content-fields">
                                        <TextField label="Vehicle Model" variant='outlined' size='small' fullWidth />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sm={6} md={4} className="content-fields">
                                        <TextField label="Company" variant='outlined' size='small' fullWidth />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} className="content-fields">
                                        <TextField label="Number of Passengers" variant='outlined' size='small' fullWidth />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} className="content-fields">
                                        <TextField label="Number Of Suitcases" variant='outlined' size='small' fullWidth />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sm={6} md={3} className="content-fields">
                                        <TextField label="Vehicle Standard" variant='outlined' size='small' fullWidth />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} className="content-fields">
                                        <FormControl fullWidth>
                                            <InputLabel id="JOURNEY TYPE">Base Location</InputLabel>
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
                                    <Grid item xs={12} sm={6} md={3} className="content-fields">
                                        <TextField label="Gallery" variant='outlined' size='small' fullWidth />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3} className="content-fields">
                                        <InputLabel />
                                        <FormControl>
                                            <input type='file'
                                                label="Choose Vehicle images"
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </PaperWraper>
                            {/* -----------------------table-------------- */}
                            <Box mt={5}>
                                <TableWapper>
                                    <Grid container spacing={3} padding={1}>
                                        <Grid item className='pricing-type'>
                                            Prices Type
                                        </Grid>
                                        <Grid item className='link-text'>
                                            Variable Pricing
                                        </Grid>
                                        <Grid item className='link-text'>
                                            Fixed Pricing
                                        </Grid>
                                    </Grid>
                                    <TableContainer>
                                        <Table>
                                            <TableHead sx={{ backgroundColor: "#FBFAFA", borderBottom: "0.978128px solid #F0F0F0" }}>
                                                <TableRow>
                                                    <TableCellWrapper>Name</TableCellWrapper>
                                                    <TableCellWrapper>Type</TableCellWrapper>
                                                    <TableCellWrapper>Description</TableCellWrapper>
                                                    <TableCellWrapper>Value</TableCellWrapper>
                                                    <TableCellWrapper>Tax</TableCellWrapper>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCellWrapper>Initial Fee</TableCellWrapper>
                                                    <TableCellWrapper>Variable</TableCellWrapper>
                                                    <TableCellWrapper>Fixed value which is added to the order sum</TableCellWrapper>
                                                    <TableCellWrapper className='textblue'>0.00</TableCellWrapper>
                                                    <TableCellWrapper>
                                                        <FormControl sx={{ minWidth: 120 }} >
                                                            <Select
                                                                size='small'
                                                                value={valeDropdown}
                                                                onChange={handleChange}
                                                                style={{ borderRadius: '5.86877px' }}
                                                            >
                                                                <MenuItem value='0.0%'>0.0%</MenuItem>
                                                                <MenuItem value={11}>11</MenuItem>
                                                                <MenuItem value={21}>21</MenuItem>
                                                                <MenuItem value={31}>31</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </TableCellWrapper>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCellWrapper>Initial Fee</TableCellWrapper>
                                                    <TableCellWrapper>Variable</TableCellWrapper>
                                                    <TableCellWrapper>Fixed value which is added to the order sum</TableCellWrapper>
                                                    <TableCellWrapper className='textblue'>0.00</TableCellWrapper>
                                                    <TableCellWrapper>
                                                        <FormControl sx={{ minWidth: 120 }} >
                                                            <Select
                                                                size='small'
                                                                value={valeDropdown}
                                                                onChange={handleChange}
                                                                style={{ borderRadius: '5.86877px' }}
                                                            >
                                                                <MenuItem value='0.0%'>0.0%</MenuItem>
                                                                <MenuItem value={11}>11</MenuItem>
                                                                <MenuItem value={21}>21</MenuItem>
                                                                <MenuItem value={31}>31</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </TableCellWrapper>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCellWrapper>Initial Fee</TableCellWrapper>
                                                    <TableCellWrapper>Variable</TableCellWrapper>
                                                    <TableCellWrapper>Fixed value which is added to the order sum</TableCellWrapper>
                                                    <TableCellWrapper className='textblue'>0.00</TableCellWrapper>
                                                    <TableCellWrapper>
                                                        <FormControl sx={{ minWidth: 120 }} >
                                                            <Select
                                                                size='small'
                                                                value={valeDropdown}
                                                                onChange={handleChange}
                                                                style={{ borderRadius: '5.86877px' }}
                                                            >
                                                                <MenuItem value='0.0%'>0.0%</MenuItem>
                                                                <MenuItem value={11}>11</MenuItem>
                                                                <MenuItem value={21}>21</MenuItem>
                                                                <MenuItem value={31}>31</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </TableCellWrapper>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </TableWapper>
                            </Box>
                            <Box mt={3}>
                                <AvailabilityWrapper>
                                    <Grid container className='availability' p={1}>
                                        Availability
                                    </Grid>
                                    <Grid container >
                                        <Grid item xs={12} sm={12} md={6} className="content-fields">
                                            <TextField label="Start Date" variant='outlined' size='small' fullWidth />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} className="content-fields">
                                            <TextField label="End Date" variant='outlined' size='small' fullWidth />
                                        </Grid>
                                    </Grid>
                                    <Grid container p={1}>
                                        <Grid item>
                                            <Stack spacing={1}>
                                                <Box className="day-number"> Day Number</Box>
                                                <Box className="para-text"> Select number of the day in which vehicle is avaliable</Box>
                                            </Stack>
                                        </Grid>

                                    </Grid>
                                    <Grid container>
                                        <Stack direction='row' spacing={2}>
                                            <IconButton>
                                                <Button variant='outlined' size='large'>All Day</Button>
                                            </IconButton>
                                            <IconButton>
                                                <Button variant='outlined' size='large'>Monday</Button>
                                            </IconButton>
                                            <IconButton>
                                                <Button variant='outlined' size='large'>Tuesday</Button>
                                            </IconButton>
                                            <IconButton>
                                                <Button variant='outlined' size='large'>Wednesday</Button>
                                            </IconButton>
                                            <IconButton>
                                                <Button variant='outlined' size='large'>Thursday</Button>
                                            </IconButton>
                                            <IconButton>
                                                <Button variant='outlined' size='large'>Friday</Button>
                                            </IconButton>
                                            <IconButton>
                                                <Button variant='outlined' size='large'>Saturday</Button>
                                            </IconButton>
                                            <IconButton>
                                                <Button variant='outlined' size='large'>Sunday</Button>
                                            </IconButton>
                                        </Stack>
                                    </Grid>
                                </AvailabilityWrapper>
                            </Box>
                        </Grid>
                    </Grid>
                </Box >
            </Box >
        </>
    )
}
