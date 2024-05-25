import React, { useState } from 'react'
import styled from '@emotion/styled'
import Switch from '@mui/material/Switch';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Pagination, Paper, Select, } from '@mui/material'

const PaperWrapper = styled(Paper)(() => ({
  '.label': {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16.9714px',
    lineHeight: '22px',
    color: '#455E72',
  }
}))

const BoxWrapper = styled(Box)(() => ({
  background: '#F1F9FF',
  borderBottom: '1px solid #7CC5FF',
  '.text': {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16.9714px',
    lineHeight: ' 22px'
  },
  '.num-text': {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: ' 27px',
    color: "#1F3648"
  }
}))

const PaperWrapper1 = styled(Paper)(() => ({
  '.heading': {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: ' 29px',
    color: ' #1F3648'
  },

  '.label': {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16.9714px',
    lineHeight: '22px',
    color: '#455E72',
  },

  '.text-Field': {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '27px',
    color: '#1F3648',
  }

}))

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

const DocumentPaperWrapper = styled(Paper)(() => ({
  '.Document': {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: ' 29px',
    color: ' #1F3648'
  },
  '.approv-btn': {
    background: '#008D0E',
    border: '1px solid #008D0E',
    borderRadius: ' 4px',
    color: 'white',
    width: "135px"
  },
  '.reject-btn': {
    backgroundColor: "#FFF6F6",
    border: '1px solid #F14C48',
    borderRadius: ' 4px',
    color: 'red',
    width: "135px"
  }
}))
export default function PartnerSetup() {
  const [valeDropdown, setValeDropdown] = useState('All')

  const handleChange = (e) => {
    setValeDropdown(e.target.value)
  }
  return (
    <Box mt={9}>
      <Grid container p={2}>
        <Grid item md={12}>
          <Grid container spacing={1}>
            <Grid item md={6}>
              <PaperWrapper>
                <BoxWrapper component="div" p={2}>
                  <Grid item className='text'>commission</Grid>
                  <Grid className='num-text'>10</Grid>
                </BoxWrapper>
                <Box p={2}>
                  <Grid container >
                    <Grid item md={6} sx={{ borderBottom: '1px solid #F2F2F2' }}>
                      <InputLabel className='label'>Country</InputLabel>
                      <FormControl sx={{ minWidth: 200 }} >
                        <Select
                          variant='outlined'
                          size='small'
                          value={valeDropdown}
                          onChange={handleChange}

                        >
                          <MenuItem value='All'>All</MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item md={6} >
                      <InputLabel className='label'>State</InputLabel>
                      <FormControl sx={{ minWidth: 200 }} >
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
                  <Grid container mt={2}>
                    <Grid item md={6}>
                      <InputLabel className='label'>Base Location</InputLabel>
                      <FormControl sx={{ minWidth: 200 }} >
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
                    <Grid item md={6}>
                      <InputLabel className='label'>Other Location</InputLabel>
                      <FormControl sx={{ minWidth: 200 }} >
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
                  <Grid container mt={2}>
                    <Grid item md={6}>
                      <InputLabel className='label'>Steuernummer</InputLabel>
                      jhkjhkjhjkhjk
                    </Grid>
                    <Grid item md={6}>
                      <InputLabel className='label'>Steuernummer</InputLabel>
                      jbjhbjhbjh
                    </Grid>
                  </Grid>
                </Box>
              </PaperWrapper>
            </Grid>
            {/* ------------------------------------- */}
            <Grid item md={6}>
              <PaperWrapper1>
                <Grid container p={2}>
                  <Grid item md={6} className='heading'>
                    Vehicle Settings
                  </Grid>
                  <Grid item md={6} textAlign='end'>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    // label="iOS style"
                    />
                  </Grid>
                </Grid>

                <Grid container p={1}>
                  <Grid item p={2}>
                    <InputLabel className='label'>Make</InputLabel>
                    <Box className='text-Field'>MARCEDES</Box>
                  </Grid>
                  <Grid item p={2}>
                    <InputLabel className='label'>Make</InputLabel>
                    <Box className='text-Field'>MARCEDES</Box>
                  </Grid>
                  <Grid item p={2}>
                    <InputLabel className='label'>Make</InputLabel>
                    <Box className='text-Field'>MARCEDES</Box>
                  </Grid>
                  <Grid item p={2}>
                    <InputLabel className='label'>Make</InputLabel>
                    <Box className='text-Field'>MARCEDES</Box>
                  </Grid>

                </Grid>

                <Grid container p={2} spacing={3}>
                  <Grid item>
                    <Button variant='contained' size='large'>Gewerbenmeldung</Button>
                  </Grid>
                  <Grid item>
                    <Button variant='contained' size='large'>Gewerbenmeldung</Button>
                  </Grid>
                  <Grid item>
                    <Button variant='contained' size='large'>Gewerbenmeldung</Button>
                  </Grid>
                </Grid>
                <Grid container p={2}>
                  <Grid item md={12} textAlign='end'>
                    <Button variant='contained'> Save</Button>
                  </Grid>
                </Grid>
              </PaperWrapper1>
            </Grid>
          </Grid>
          <Box mt={4}>
            <DocumentPaperWrapper>
              <Grid container p={2}>
                <Grid item md={6} className='Document'>
                  Documents
                </Grid>
                <Grid item md={6} textAlign='end'>
                  <FormControlLabel control={<Checkbox />} label="Select All" />
                </Grid>
              </Grid>

              <Grid container p={1} spacing={1}>
                <Grid item>
                  <Grid container p={1} sx={{ backgroundColor: "#F3F3F3" }}>
                    <Grid item>
                      <Checkbox />
                    </Grid>
                    <Grid item mt={.8}>
                      jhjkjjhafhfkshfkahfkfgfddffgfhfh<br />
                      jhjkjjhafhfkshfkahfkfgfddffgfhfh<br />
                      jhjkjjhafhfkshfkahfkfgfddffgfhfh<br />
                      <Grid container spacing={1} mt={1}>
                        <Grid item><h5>Tracking Live Location </h5> </Grid>
                        <Grid item><SaveAltIcon /></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container p={1} sx={{ backgroundColor: "#F3F3F3" }}>
                    <Grid item>
                      <Checkbox />
                    </Grid>
                    <Grid item mt={.8}>
                      jhjkjjhafhfkshfkahfkfgfddffgfhfh<br />
                      jhjkjjhafhfkshfkahfkfgfddffgfhfh<br />
                      jhjkjjhafhfkshfkahfkfgfddffgfhfh<br />
                      <Grid container spacing={1} mt={1}>
                        <Grid item><h5>Tracking Live Location </h5> </Grid>
                        <Grid item><SaveAltIcon /></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container p={1} sx={{ backgroundColor: "#F3F3F3" }}>
                    <Grid item>
                      <Checkbox />
                    </Grid>
                    <Grid item mt={.8}>
                      jhjkjjhafhfkshfkahfkfgfddffgfhfh<br />
                      jhjkjjhafhfkshfkahfkfgfddffgfhfh<br />
                      jhjkjjhafhfkshfkahfkfgfddffgfhfh<br />
                      <Grid container spacing={1} mt={1}>
                        <Grid item><h5>Tracking Live Location </h5> </Grid>
                        <Grid item><SaveAltIcon /></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container p={1} sx={{ backgroundColor: "#F3F3F3" }}>
                    <Grid item>
                      <Checkbox />
                    </Grid>
                    <Grid item mt={.8}>
                      jhjkjjhafhfkshfkahfkfgfddffgfhfh<br />
                      jhjkjjhafhfkshfkahfkfgfddffgfhfh<br />
                      jhjkjjhafhfkshfkahfkfgfddffgfhfh<br />
                      <Grid container spacing={1} mt={1}>
                        <Grid item><h5>Tracking Live Location </h5> </Grid>
                        <Grid item><SaveAltIcon /></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Box component='div' display='flex' justifyContent='space-between' flexWrap={'wrap'} mt={1} p={2}>
                <Box component='div'> <Pagination count={10} /></Box>
                <Box component='div' >
                  <Box component='div' display='flex' gap={1} mt={1}>
                    <Box>
                      <Button variant='outlined' textAlign='end' className='reject-btn'>Rejected</Button>
                    </Box>
                    <Box>
                      <Button variant='contained' textAlign='end' className='approv-btn' >Approved</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </DocumentPaperWrapper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
