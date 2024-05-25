import styled from '@emotion/styled'
import { Box, FormControl, Grid, InputAdornment, MenuItem, Pagination, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'

const PaperWrapper = styled(Paper)(() => ({
    '.partnertext': {
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '42px',
        color: '#1F3648;'
    },
    '.drowpdown': {
        borderRadius: '5.86877px'
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

export default function PartnerList() {
    const [valeDropdown, setValeDropdown] = useState()

    const handleChange = (e) => {
        setValeDropdown(e.target.value)
    }
    return (
        <Box mt={8}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Grid container>
                    <Grid item md={12}>
                        <PaperWrapper>
                            <Grid container p={1} spacing={2}>
                                <Grid item md={4} className='partnertext'>
                                    Partner Detailed  Report
                                </Grid>
                                <Grid item md={5}>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <h6>Country</h6>
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
                                            <h6>State</h6>
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
                            <Box mt={3}>
                                <TableContainer>
                                    <Table>
                                        <TableHead sx={{ backgroundColor: "#FBFAFA", borderBottom: "0.978128px solid #F0F0F0",textAlign:"right" }}>
                                            <TableRow>
                                                <TableCellWraper component='th' align="right">No</TableCellWraper>
                                                <TableCellWraper>Partner name</TableCellWraper>
                                                <TableCellWraper>Email ID</TableCellWraper>
                                                <TableCellWraper>Phone Number</TableCellWraper>
                                                <TableCellWraper>Address</TableCellWraper>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>1</TableCell>
                                                <BodyTableCellWraper>Omar George</BodyTableCellWraper>
                                                <BodyTableCellWraper>xthompson@outlook.com</BodyTableCellWraper>
                                                <BodyTableCellWraper>75776242574</BodyTableCellWraper>
                                                <BodyTableCellWraper>123 Main Street Suite 200 Anytown, CA 12345 United States</BodyTableCellWraper>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>2</TableCell>
                                                <BodyTableCellWraper>Omar George</BodyTableCellWraper>
                                                <BodyTableCellWraper>xthompson@outlook.com</BodyTableCellWraper>
                                                <BodyTableCellWraper>75776242574</BodyTableCellWraper>
                                                <BodyTableCellWraper>123 Main Street Suite 200 Anytown, CA 12345 United States</BodyTableCellWraper>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>3</TableCell>
                                                <BodyTableCellWraper>Omar George</BodyTableCellWraper>
                                                <BodyTableCellWraper>xthompson@outlook.com</BodyTableCellWraper>
                                                <BodyTableCellWraper>75776242574</BodyTableCellWraper>
                                                <BodyTableCellWraper>123 Main Street Suite 200 Anytown, CA 12345 United States</BodyTableCellWraper>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>4</TableCell>
                                                <BodyTableCellWraper>Omar George</BodyTableCellWraper>
                                                <BodyTableCellWraper>xthompson@outlook.com</BodyTableCellWraper>
                                                <BodyTableCellWraper>75776242574</BodyTableCellWraper>
                                                <BodyTableCellWraper>123 Main Street Suite 200 Anytown, CA 12345 United States</BodyTableCellWraper>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>5</TableCell>
                                                <BodyTableCellWraper>Omar George</BodyTableCellWraper>
                                                <BodyTableCellWraper>xthompson@outlook.com</BodyTableCellWraper>
                                                <BodyTableCellWraper>75776242574</BodyTableCellWraper>
                                                <BodyTableCellWraper>123 Main Street Suite 200 Anytown, CA 12345 United States</BodyTableCellWraper>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                    <Pagination count={10} />
                                </TableContainer>
                            </Box>
                        </PaperWrapper>

                    </Grid>

                </Grid>

            </Box>
        </Box>
    )
}
