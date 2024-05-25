import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Box, Checkbox, FormControl, Grid, IconButton, InputAdornment, MenuItem, Pagination, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Switch from '@mui/material/Switch';

const PaperWraper = styled(Paper)(() => ({
    '.delcolor': {
        color: "red",
    },

    '.viewblue': {
        textAlign: 'center',
        fontstyle: 'normal',
        fontWeight: 500,
        fontSize: '15.65px',
        lineHeight: ' 20px',
        color: "blue",
    },
    '.userManagertext': {
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '26px',
        lineHeight: '25px',
        color: '#000000',
    }
}))
const TableCellWraper = styled(TableCell)(() => ({
    textAlign: 'center',
    fontstyle: 'normal',
    fontWeight: 500,
    fontSize: '15.65px',
    lineHeight: ' 20px',
    color: '#000000',

}))

const BodyTableCellWraper = styled(TableCell)(() => ({
    textAlign: 'center',
    fontstyle: 'normal',
    fontWeight: 500,
    fontSize: '15.65px',
    lineHeight: ' 20px',
    color: '#000000',
}));



const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#008D0E',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#EFEFEF',
                opacity: 1,
                border: 0,
            },

            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },

        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

export default function UserManager() {
    const [valeDropdown, setValeDropdown] = useState()

    const handleChange = (e) => {
        setValeDropdown(e.target.value)
    }
    return (
        <>
            <Box mt={8}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container>
                        <Grid item md={12}>
                            <PaperWraper>
                                <Grid container p={1} spacing={2}>
                                    <Grid item md={4} className='userManagertext'>
                                        User Manager Report
                                    </Grid>
                                    <Grid item md={5}>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <h6>Select Date</h6>
                                                <FormControl sx={{ minWidth: 120 }} >
                                                    <Select
                                                        size='small'
                                                        value={valeDropdown}
                                                        onChange={handleChange}
                                                        style={{ borderRadius: '5.86877px' }}
                                                    >
                                                        <MenuItem value='All'>All</MenuItem>
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DemoContainer components={['DatePicker']}>
                                                            <DatePicker
                                                                slotProps={{ textField: { size: 'small' } }}
                                                            />
                                                        </DemoContainer>
                                                    </LocalizationProvider> */}
                                                </FormControl>
                                            </Grid>
                                            <Grid item>
                                                <h6>Status</h6>
                                                <FormControl sx={{ minWidth: 120 }} >
                                                    <Select
                                                        size='small'
                                                        value={valeDropdown}
                                                        onChange={handleChange}
                                                        style={{ borderRadius: '5.86877px' }}
                                                    >
                                                        <MenuItem value='All'>All</MenuItem>
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item>
                                                <h6>Location</h6>
                                                <FormControl sx={{ minWidth: 120 }} >
                                                    <Select
                                                        size='small'
                                                        value={valeDropdown}
                                                        onChange={handleChange}
                                                        style={{ borderRadius: '5.86877px' }}
                                                    >
                                                        <MenuItem value='All'>All</MenuItem>
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                    <Grid item md={3} mt={3}>
                                        <TextField
                                            size='small'
                                            fullWidth
                                            // sx={{
                                            //   "& fieldset": { border: 'none' },
                                            // }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <SearchIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            placeholder='Search your Booking details'>
                                        </TextField>
                                    </Grid>
                                </Grid>
                                {/*------------------------table------------ */}
                                <Box mt={3}>
                                    <TableContainer fullWidth>
                                        <Table>
                                            <TableHead sx={{ backgroundColor: "#FBFAFA", borderBottom: "0.978128px solid #F0F0F0", textAlign: "right" }}>
                                                <TableRow>
                                                    <TableCellWraper><Checkbox /></TableCellWraper>
                                                    <TableCellWraper component='th' align="right">No</TableCellWraper>
                                                    <TableCellWraper>Partner name</TableCellWraper>
                                                    <TableCellWraper>Email ID</TableCellWraper>
                                                    <TableCellWraper>Activate & Deactivate</TableCellWraper>
                                                    <TableCellWraper>Action</TableCellWraper>
                                                    <TableCellWraper className='delcolor'><DeleteForeverIcon /></TableCellWraper>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <BodyTableCellWraper><Checkbox /></BodyTableCellWraper>
                                                    <BodyTableCellWraper>1</BodyTableCellWraper>
                                                    <BodyTableCellWraper>Omar George</BodyTableCellWraper>
                                                    <BodyTableCellWraper>xthompson@outlook.com</BodyTableCellWraper>
                                                    <BodyTableCellWraper><IOSSwitch sx={{ m: 1 }} defaultChecked /></BodyTableCellWraper>
                                                    <BodyTableCellWraper className='viewblue'>View</BodyTableCellWraper>
                                                    <BodyTableCellWraper ><IconButton className='delcolor'><DeleteForeverIcon /></IconButton></BodyTableCellWraper>

                                                </TableRow>
                                                <TableRow>
                                                    <BodyTableCellWraper><Checkbox /></BodyTableCellWraper>
                                                    <BodyTableCellWraper>1</BodyTableCellWraper>
                                                    <BodyTableCellWraper>Omar George</BodyTableCellWraper>
                                                    <BodyTableCellWraper>xthompson@outlook.com</BodyTableCellWraper>
                                                    <BodyTableCellWraper><IOSSwitch sx={{ m: 1 }} defaultChecked /></BodyTableCellWraper>
                                                    <BodyTableCellWraper className='viewblue'>View</BodyTableCellWraper>
                                                    <BodyTableCellWraper ><IconButton className='delcolor'><DeleteForeverIcon /></IconButton></BodyTableCellWraper>

                                                </TableRow>
                                                <TableRow>
                                                    <BodyTableCellWraper><Checkbox /></BodyTableCellWraper>
                                                    <BodyTableCellWraper>1</BodyTableCellWraper>
                                                    <BodyTableCellWraper>Omar George</BodyTableCellWraper>
                                                    <BodyTableCellWraper>xthompson@outlook.com</BodyTableCellWraper>
                                                    <BodyTableCellWraper><IOSSwitch sx={{ m: 1 }} defaultChecked /></BodyTableCellWraper>
                                                    <BodyTableCellWraper className='viewblue'>View</BodyTableCellWraper>
                                                    <BodyTableCellWraper ><IconButton className='delcolor'><DeleteForeverIcon /></IconButton></BodyTableCellWraper>

                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                        <Stack m={2}>
                                            <Pagination count={10} />
                                        </Stack>
                                    </TableContainer>
                                </Box>
                            </PaperWraper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    )
}
