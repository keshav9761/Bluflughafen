import * as React from 'react';
import AdminTable from './AdminTable';
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CallMadeIcon from '@mui/icons-material/CallMade'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';
import { Button, FormControl, Grid, InputAdornment, InputLabel, Link, MenuItem, Paper, Select, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PaperWrapper = styled(Paper)((props) => ({
  'p': {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "15px",
    color: "#97ADBE",
    backgroundColor: "#FFFFFF",
    padding: "8px 0px 0px 9px",
  },
  borderBottom: props?.borderBottom,
  '.number': {
    fontSize: "40px",
    lineHeight: "52px",
    color: "#1F3648",
    padding: "4px 8px",
  },

  '.smallNumber': {
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#2FA804"
  },
  '.circle': {
    background: "#FFFFFF",
    border: "1px solid #F8F8F8",
    boxShadow: "0px 4px 4px - 3px rgba(0, 0, 0, 0.25)",
    borderRadius: "50%",
    padding: "10px",
    margin: "0px 29px 15px 1px"
  },
}));

const FilterWrapper = styled(Grid)({
  '@media (min-width: 1200px)': {
    '.filter-box': {
      maxWidth: '12.50%',
      textAlign: 'center'
    }
  }
});

export default function Dashboard() {

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box mt={8}>
      <Box component="main" sx={{ flexGrow:1, p: 3 }}>
        <Grid container>
          <Grid item md={12} >
            <Grid container spacing={2} >
              {/* ---------------------------------------------- */}

              <Grid item lg={4} md={4} sm={6} xs={12}>
                <PaperWrapper borderBottom="3px solid #FD9009">
                  <p>Total Vehicle Booking</p>
                  <Box display="flex" justifyContent="space-between">
                    <Box display="flex">
                      <Box className="number">904+</Box>
                      <Box className="smallNumber" mt={3} pb={1}>
                        35% <ArrowUpwardIcon width="smallNumber" />
                      </Box>
                    </Box>
                    <Paper className='circle'>
                      <CallMadeIcon />
                    </Paper>
                  </Box>
                </PaperWrapper>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <PaperWrapper borderBottom="3px solid #904CFF" >
                  <p>Total People Booking</p>
                  <Box display="flex" justifyContent="space-between">
                    <Box display="flex">
                      <Box className="number">904+</Box>
                      <Box className="smallNumber" mt={3} pb={1}>
                        35% <ArrowUpwardIcon width="smallNumber" />
                      </Box>
                    </Box>
                    <Paper className='circle'>
                      <CallMadeIcon />
                    </Paper>
                  </Box>
                </PaperWrapper>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <PaperWrapper borderBottom="3px solid #00B2D9" >
                  <p>Total payment</p>
                  <Box display="flex" justifyContent="space-between">
                    <Box display="flex">
                      <Box className="number">904+</Box>
                      <Box className="smallNumber" mt={3} pb={1}>
                        35% <ArrowUpwardIcon width="smallNumber" />
                      </Box>
                    </Box>
                    <Paper className='circle'>
                      <CallMadeIcon />
                    </Paper>
                  </Box>
                </PaperWrapper>
              </Grid>


              <Grid item lg={4} md={4} sm={6} xs={12}>
                <PaperWrapper borderBottom="3px solid #0072CB"  >
                  <p>New rides</p>
                  <Box display="flex" justifyContent="space-between">
                    <Box display="flex">
                      <Box className="number">904+</Box>
                      <Box className="smallNumber" mt={3} pb={1}>
                        35% <ArrowUpwardIcon width="smallNumber" />
                      </Box>
                    </Box>
                    <Paper className='circle'>
                      <CallMadeIcon />
                    </Paper>
                  </Box>
                </PaperWrapper>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <PaperWrapper borderBottom="3px solid #2FA804" >
                  <p>Accepted rides</p>
                  <Box display="flex" justifyContent="space-between">
                    <Box display="flex">
                      <Box className="number">904+</Box>
                      <Box className="smallNumber" mt={3} pb={1}>
                        35% <ArrowUpwardIcon width="smallNumber" />
                      </Box>
                    </Box>
                    <Paper className='circle'>
                      <CallMadeIcon />
                    </Paper>
                  </Box>
                </PaperWrapper>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <PaperWrapper borderBottom="3px solid #E44A4A" >
                  <p>Completed ride</p>
                  <Box display="flex" justifyContent="space-between">
                    <Box display="flex">
                      <Box className="number">904+</Box>
                      <Box className="smallNumber" mt={3} pb={1}>
                        35% <ArrowUpwardIcon width="smallNumber" />
                      </Box>
                    </Box>
                    <Paper className='circle'>
                      <CallMadeIcon />
                    </Paper>
                  </Box>
                </PaperWrapper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* ----------------Details Reports------------------ */}
        <Box mt={5}>
          <Paper >
            <Grid container p={2} >
              <Grid item md={12}>
                <Grid container spacing={5}>
                  <Grid item md={5}>
                    <h3>Detailed Report</h3>
                    <p>These Booking have been confirm during Period date.</p>
                  </Grid>
                  <Grid item md={7} >
                    <Grid container spacing={2}>
                      <Grid item>
                        <Button variant='contained'>Export to xlsx</Button>
                      </Grid>
                      <Grid item>
                        <Button variant='contained'>Export to xlsx</Button>
                      </Grid>
                      <Grid item>
                        <Button variant='contained'>Export to xlsx</Button>
                      </Grid>
                      <Grid item flex={1} >
                        {/* <FormControl fullWidth size='small'> */}
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
                        {/* </FormControl> */}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* ------------DropDwons----------------- */}
            <FilterWrapper container spacing={2} px={2}>
              <Grid item md={12}>
                <Grid container spacing={1}>
                  <Grid item md={2} sm={4} xs={12} className='filter-box' >
                    <h6>Select Date</h6>
                    <FormControl  mx={1}  fullWidth >
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                          <DatePicker
                            slotProps={{ textField: { size: 'small' } }}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </FormControl>
                  </Grid>
                  <Grid item md={2} sm={4} xs={12} className='filter-box' >
                    <h6>Booking Status</h6>
                    <FormControl fullWidth size='small'>
                      <InputLabel id="demo-simple-select-label">All</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        size='small'
                        onChange={handleChange}
                        style={{ borderRadius: '5.86877px' }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={2} sm={4} xs={12} className='filter-box' >
                    <h6>Payment Status</h6>
                    <FormControl fullWidth size='small'>
                      <InputLabel id="demo-simple-select-label">All</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        size='small'
                        onChange={handleChange}
                        style={{ borderRadius: '5.86877px' }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={2} sm={4} xs={12} className='filter-box' >
                    <h6>Country</h6>
                    <FormControl fullWidth size='small'>
                      <InputLabel id="demo-simple-select-label">All</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        size='small'
                        onChange={handleChange}
                        style={{ borderRadius: '5.86877px' }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={2} sm={4} xs={12} className='filter-box' >
                    <h6>State</h6>
                    <FormControl fullWidth size='small'>
                      <InputLabel id="demo-simple-select-label">All</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        size='small'
                        onChange={handleChange}
                        style={{ borderRadius: '5.86877px' }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={2} sm={4} xs={12} className='filter-box' >
                    <h6>Location</h6>
                    <FormControl fullWidth size='small'>
                      <InputLabel id="demo-simple-select-label">All</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        size='small'
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={2} sm={4} xs={12} className='filter-box' mt={3.4}>
                    <Button variant='contained' size='small' sx={{ height: '2.4rem' }} fullWidth>Filter</Button>
                  </Grid>
                  <Grid item md={2} sm={4} xs={12} style={{ paddingTop: '15px' }} className='filter-box' mt={3.4}>
                    <Link fontWeight={700} size='small'>Reset</Link>
                  </Grid>
                </Grid>
              </Grid>

            </FilterWrapper>
            {/* --------------Table------------------ */}
            <Grid container p={2}>
              <AdminTable />
            </Grid>
          </Paper>
        </Box>

      </Box>
    </Box >
  );
}