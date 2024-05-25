import React, { useState } from 'react'
import logo from '../Assets/Images/logo.png'
import home1 from '../Assets/Images/home1.png'
import home2 from '../Assets/Images/home2.png'
import message1 from '../Assets/Images/message1.png'
import message2 from '../Assets/Images/message2.png'
import message3 from '../Assets/Images/message3.png'
import group1 from '../Assets/Images/Group62.png'
import group2 from '../Assets/Images/Group63.png'
import group3 from '../Assets/Images/Group64.png'
import group4 from '../Assets/Images/Group64(1).png'
import group5 from '../Assets/Images/Group64(2).png'
import couple from '../Assets/Images/couple.png'
import SvgImages from '../Assets/Images/svgImages';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Autocomplete, styled, Button } from '@mui/material';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
const { Location } = SvgImages;




const DriveRegisWrapper = styled('form')({
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
  // '.Button': {
  //   backgroundColor: "#0E4672",
  //   color: 'white'
  // },
  // '.Button:hover': {
  //   backgroundColor: "#0E4672",
  //   color: 'white'
  // }
});


export default function Home() {
  const [journey, setJourney] = useState('');
  const [extraTime, setExtraTime] = useState('');

  const [show, setShow] = useState(false);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const { t } = useTranslation();
  const nav = useNavigate()
  const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };


  const handleJourney = (event) => {
    setJourney(event.target.value);
  };
  const handleExtraTime = (event) => {
    setExtraTime(event.target.value);
  };
  const handleLocation = (event) => {
    const { name, value } = event.target;
    if(name === 'fromLocation') {
      setFromLocation(value);
    }
    if(name === 'toLocation') {
      setToLocation(value);
    }
  }
  const handleHomepage = (e) => {
    e.preventDefault();
    console.log(fromLocation);
    console.log(toLocation);
    nav('/vehicle')
  }
  return (<>

    <div className='container-fluid bg-light px-0'>
      <div className='bg-white mb-5'>
        <div className='row homeBackImg justify-content-center mb-5 bg-white d-flex align-items-end' style={{ height: "24rem" }}>
          <div className='col-md-11 col-sm-10 rounded shadow px-0 mx-0' style={{ marginBottom: "-120px" }}>
            <form className='p-2 bg-white rounded-3 '>
              <DriveRegisWrapper>
                <div className='d-flex gap-1 '>
                  <div className='col-md-6 col-sm-12 content-fields rounded-2' >
                    <Autocomplete
                      id="country-select-demo"
                      fullWidth
                      options={countries}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt=""
                          />
                          {option.label} ({option.code}) +{option.phone}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="From"
                          variant='outlined'
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                          }}
                          name='fromLocation'
                          onChange={handleLocation}
                          value={fromLocation}
                        />
                      )}
                    />
                  </div>
                  
                  <div className='col-md-6 col-sm-12 border p-2 rounded-2' >
                    <Autocomplete
                      id="country-select-demo"
                      fullWidth
                      options={countries}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt=""
                          />
                          {option.label} ({option.code}) +{option.phone}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          sx={{ backgroundColor: "white" }}
                          {...params}
                          label="To"
                          variant='outlined'
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                          }}
                          name='toLocation'
                          onChange={handleLocation}
                          value={toLocation}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className='row my-2 px-0 mx-0 mt-3'>
                  {/* <div className='col-md-3 col-sm-12 border p-2 rounded-2'> */}
                  {/* <ResponsiveDatePickers label="Date"/> */}

                  {/* <Box>
                      <FormControl fullWidth >
                        <InputLabel id="JOURNEY TYPE">PASSANGER</InputLabel>
                        <Select
                          variant='outlined'
                          value={extraTime}
                          label="EXTRA TIME"
                          onChange={handleExtraTime}
                        >
                          <MenuItem value={10}>1</MenuItem>
                          <MenuItem value={20}>2</MenuItem>
                          <MenuItem value={30}>3</MenuItem>
                          <MenuItem value={30}>3</MenuItem>
                        </Select>
                      </FormControl>
                    </Box> */}
                  {/* </div> */}


                  {/* <div className='col-md-3 col-sm-12 border p-2 rounded-2'> */}
                  {/* <BasicTimePicker label="Time" /> */}
                  {/* <ResponsiveDatePickers label="Date" /> */}
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        label="DATE AND TIME"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField variant='outlined'  {...params} />}
                      />
                    </LocalizationProvider> */}
                  {/* </div> */}
                  {/* <div className='col-md-1 text-primary text-center fs-5 my-3 d-flex align-items-center'>
                    <span className='pointer fs-5' onClick={(e) => setShow(true)}>More</span>
                    <span><ArrowForwardIosIcon sx={{ fontSize: 20 }} /></span>
                  </div> */}
                  {/* <details>
              <summary className='span'>More Details</summary> */}
                  {/* {show && <> */}
                  {/* <div className='col-md-3 col-sm-12 border p-2 rounded-2'> */}
                  {/* <Box spacing={4}>
                      <FormControl fullWidth >
                        <InputLabel id="JOURNEY TYPE">JOURNEY TYPE</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          variant='outlined'
                          value={journey}
                          label="JOURNEY TYPE"
                          onChange={handleJourney}
                        >
                          <MenuItem value={"One-Way"}>One Way </MenuItem>
                          <MenuItem value={"Return"}>Return</MenuItem>
                        </Select>
                      </FormControl>
                    </Box> */}
                  {/* </div> */}

                  {/* <div className='col col-md-3 col-sm-12 border p-2 rounded-2'> */}
                  {/* <Box>
                      <FormControl fullWidth >
                        <InputLabel id="JOURNEY TYPE">EXTRA TIME</InputLabel>
                        <Select
                          variant='outlined'
                          value={extraTime}
                          label="EXTRA TIME"
                          onChange={handleExtraTime}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box> */}
                  {/* </div> */}
                  {/* </>} */}
                </div>

                {journey === "Return" &&
                  <>
                    <div className='row my-3 px-0 mx-0'>
                      <div className='col-md-6 col-sm-12 border p-2 rounded-2'>
                        <Autocomplete
                          fullWidth
                          options={countries}
                          autoHighlight
                          getOptionLabel={(option) => option.label}
                          renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                              <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt=""
                              />
                              {option.label} ({option.code}) +{option.phone}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="From"
                              variant='outlined'
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                              }}
                              name='fromLocation'
                              onChange={handleLocation}
                              value={fromLocation}
                            />
                          )}
                        />
                      </div>
                      <div className='col-md-6 col-sm-12 border p-2 rounded-2' >
                        <Autocomplete
                          id="country-select-demo"
                          fullWidth
                          options={countries}
                          autoHighlight
                          getOptionLabel={(option) => option.label}
                          renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                              <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt=""
                              />
                              {option.label} ({option.code}) +{option.phone}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              sx={{ backgroundColor: "white" }}
                              {...params}
                              label="To"
                              variant='outlined'
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                              }}
                              name='toLocation'
                              onChange={handleLocation}
                              value={toLocation}
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className='row my-2 px-0 mx-0 mt-3'>
                      {/* <div className='col-md-2 col-sm-12 border p-2 rounded-2'>
                        <Box>
                          <FormControl fullWidth >
                            <InputLabel id="JOURNEY TYPE">PASSANGER</InputLabel>
                            <Select
                              variant='outlined'
                              value={extraTime}
                              label="EXTRA TIME"
                              onChange={handleExtraTime}
                            >
                              <MenuItem value={10}>1</MenuItem>
                              <MenuItem value={20}>2</MenuItem>
                              <MenuItem value={30}>3</MenuItem>
                              <MenuItem value={30}>3</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div> */}


                      {/* <div className='col-md-3 col-sm-12 border p-2 rounded-2'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DateTimePicker
                            label="RETURN DATE AND TIME"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField variant='outlined'  {...params} />}
                          />
                        </LocalizationProvider>
                      </div> */}
                    </div>
                  </>
                }
                {/* </details> */}
                <div className='pb-2 mb-2 text-end'>
                  <Button variant="contained" size="large" className='px-5' onClick={handleHomepage}>Book Now</Button>
                </div>
              </DriveRegisWrapper>

            </form>
          </div>
          {/* <div className='col-md-5 col-sm-12 my-4 white-card'>
          <img src={home1} height="auto" width="100%" id="image-section" />
        </div> */}
        </div>
      </div>

      <div className="mt-5 pt-5">
        <div className=' mt-5 row justify-content-center' style={{ backgroundColor: "#EEF9FF" }}>
          <div className='col-md-10 '>
            <div className='p-5' >
              <center> <img src={logo} height="auto" width="auto" id="image-section" />
                <h3 style={{ color: "#0E4672" }}>Blu Airport Transfer</h3>
              </center>
              <center><p className='span-text'>
                Blu Airport Transfer is an online transfer service for planning, arranging and booking airport transfers. Based on current transfer prices, we calculate the route and time dependent transfer costs. Furthermore, we search for you in real time for an available, reliable and cheap transfer service for your airport transfer. Simply enter your starting point and destination in the form above and you will receive an overview of the available offers. A few more clicks and you can easily order your transfer online.</p></center>
            </div>
          </div>
        </div>
      </div>


      < div className='container '>

        <div className='row mx-5 text-white d-flex flex-wrap rounded shadow22' style={{ backgroundColor: "#0E4672" }}>
          <div className='col-md-6 col-sm-12 px-3'>
            <div>
              <h2>General information</h2>
              <small className='span-text'>You can book your transfers directly online through our online forms, we are also available for you by phone and WhatsApp.</small>
            </div>
            <div>
              <h2>Payment options</h2>
              <small className='span-text'>You can pay via Paypal, credit card, cash or prepayment via invoice.</small>
            </div>
          </div>
          <div className='col-md-1 vertical-line '></div>
          <div className='col-md-5  text-center mb-3 '>
            <div>
              <h2>Call now</h2>
              <h4 className='my-4'>+49 178 8404957</h4>
            </div>
            <div >
              <button className='btn btn-primary'>Book now</button>
            </div>

          </div>
        </div>

      </div>


      {/* ---------------pending---------- */}
      <div className='container'>
        <div className='row mt-5'>
          <center>
            <div>
              <h2 className=''> How it works?</h2>
              <p className="span text-dark">The easiest way to book and arrive to your  desired<br /> destination from/to the airport.</p>
            </div>
          </center>
          <div className='row ml-2 mt-2 '>
            <div className='col-md-4 position-relative my-2'>
              <img src={group1} height="auto" width="60%" id="image-section" />
              <small className='position-absolute text-position'>Book online easily<br /> through our website</small>
            </div>
            <div className='col-md-4 position-relative my-2'>
              <img src={group2} height="auto" width="60%" id="image-section" />
              <small className='position-absolute text-position'>Book online easily<br /> through our website</small>
            </div>
            <div className='col-md-4 position-relative my-2'>
              <img src={group3} height="auto" width="60%" id="image-section" />
              <small className='position-absolute text-position'>Book online easily<br /> through our website</small>
            </div>

            <div className='col-md-4 position-relative my-2'>
              <img src={group4} height="auto" width="60%" id="image-section" />
              <small className='position-absolute text-position'>Book online easily<br /> through our website</small>
            </div>
            <div className='col-md-4 position-relative'>
              <img src={group5} height="auto" width="60%" id="image-section" />
              <small className='position-absolute text-position' id="image-section">Book online easily<br /> through our website</small>
            </div>

          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-7 col-sm-12 col-xs-6 bg-white px-5'>
          <div>
            <h2>Advantages of using Blu <br /><span className='span' style={{ fontSize: "inherit" }} > Airport Transfer</span></h2>
          </div>
          <div>
            <p className='p'>You are the <span className='span'>only passenger booked in the cab</span>, so we will find the <span>fastest way to your destination</span>.</p>
            <p className='p'>Pay either in advance or on the spot to<span className='span'> the driver with no unexpected costs or surprises</span>.</p>
            <p className='p'>You will <span className='span'>receive an invoice afterwards by email or from the driver</span>.</p>
            <p className='p'>Alternatively, you can use our <span className='span'>simple chat service via WhatsApp +49(0)174 8790930</span>.</p>
            <p className='p'>We are <span className='span'>up to 40% cheaper than other local cab services</span>.</p>
          </div>
        </div>
        <div className='col-md-5 col-sm-12'>
          <img src={home2} height="auto" width="100%" id="image-section" />

        </div>
      </div>

      <div className='container'>
        <div className='row my-5'>
          <div className='col text-white rounded shadow2' style={{ backgroundColor: "#0E4672" }}>
            <div className='col col-md-12 p-3'>
              <div>
                <center><h2>Confirmation of booking in a few minutes</h2></center>
              </div>
            </div>
            <div className='row'>

              <div className='col-md-4 col-xs-12'>
                <img src={message1} width="50" height="50" className='message-img' />
                <p className='span-text'>Receive a booking confirmation by e-mail in a few minutes after placing your order.</p>
              </div>
              <div className='col-md-4 col-xs-12'>
                <img src={message2} width="50" height="50" className='message-img' />
                <p className='span-text'>You will definitely receive an invoice by e-mail<br /> or from the driver.</p>
              </div>
              <div className='col-md-4 col-xs-12'>
                <img src={message3} width="50" height="50" className='message-img' />
                <p className='span-text'>Alternatively, you can use our simple chat service via WhatsApp +49 174 8790930</p>
              </div>



            </div>
          </div>
        </div>
      </div>
      <div className='row py-3 mx-3'>
        <div className='col-md-6'>
          <img src={couple} height="auto" width="100%" id="image-section" />
        </div>
        <div className='col-md-6'>
          <h2> Advantage of using airport <br /> transfer </h2> <br />
          <p className=' p'>You are the only booked passenger in the Shuttle, so that we can find the fastest way to your destination.</p>
          <p className=' p'>Pay either in advance or on the spot to the driver with no unexpected costs or surprises.</p>
          <p className=' p'>Transfer services 24/7 customer service</p>
          <p className=' p'>We are up to 40% cheaper than other local taxi services.</p>
        </div>
      </div>
    </div>
  </>)
}



const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' },
  {
    code: 'AU',
    label: 'Australia',
    phone: '61',
    suggested: true,
  },
  { code: 'AW', label: 'Aruba', phone: '297' },
  { code: 'AX', label: 'Alland Islands', phone: '358' },
  { code: 'AZ', label: 'Azerbaijan', phone: '994' },
  {
    code: 'BA',
    label: 'Bosnia and Herzegovina',
    phone: '387',
  },
  { code: 'BB', label: 'Barbados', phone: '1-246' },
  { code: 'BD', label: 'Bangladesh', phone: '880' },
  { code: 'BE', label: 'Belgium', phone: '32' },
  { code: 'BF', label: 'Burkina Faso', phone: '226' },
  { code: 'BG', label: 'Bulgaria', phone: '359' },
  { code: 'BH', label: 'Bahrain', phone: '973' },
  { code: 'BI', label: 'Burundi', phone: '257' },
  { code: 'BJ', label: 'Benin', phone: '229' },
  { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
  { code: 'BM', label: 'Bermuda', phone: '1-441' },
  { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
  { code: 'BO', label: 'Bolivia', phone: '591' },
  { code: 'BR', label: 'Brazil', phone: '55' },
  { code: 'BS', label: 'Bahamas', phone: '1-242' },
  { code: 'BT', label: 'Bhutan', phone: '975' },
  { code: 'BV', label: 'Bouvet Island', phone: '47' },
  { code: 'BW', label: 'Botswana', phone: '267' },
  { code: 'BY', label: 'Belarus', phone: '375' },
  { code: 'BZ', label: 'Belize', phone: '501' },
  {
    code: 'CA',
    label: 'Canada',
    phone: '1',
    suggested: true,
  },
  {
    code: 'CC',
    label: 'Cocos (Keeling) Islands',
    phone: '61',
  },
  {
    code: 'CD',
    label: 'Congo, Democratic Republic of the',
    phone: '243',
  },
  {
    code: 'CF',
    label: 'Central African Republic',
    phone: '236',
  },
  {
    code: 'CG',
    label: 'Congo, Republic of the',
    phone: '242',
  },
  { code: 'CH', label: 'Switzerland', phone: '41' },
  { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
  { code: 'CK', label: 'Cook Islands', phone: '682' },
  { code: 'CL', label: 'Chile', phone: '56' },
  { code: 'CM', label: 'Cameroon', phone: '237' },
  { code: 'CN', label: 'China', phone: '86' },
  { code: 'CO', label: 'Colombia', phone: '57' },
  { code: 'CR', label: 'Costa Rica', phone: '506' },
  { code: 'CU', label: 'Cuba', phone: '53' },
  { code: 'CV', label: 'Cape Verde', phone: '238' },
  { code: 'CW', label: 'Curacao', phone: '599' },
  { code: 'CX', label: 'Christmas Island', phone: '61' },
  { code: 'CY', label: 'Cyprus', phone: '357' },
  { code: 'CZ', label: 'Czech Republic', phone: '420' },
  {
    code: 'DE',
    label: 'Germany',
    phone: '49',
    suggested: true,
  },
  { code: 'DJ', label: 'Djibouti', phone: '253' },
  { code: 'DK', label: 'Denmark', phone: '45' },
  { code: 'DM', label: 'Dominica', phone: '1-767' },
  {
    code: 'DO',
    label: 'Dominican Republic',
    phone: '1-809',
  },
  { code: 'DZ', label: 'Algeria', phone: '213' },
  { code: 'EC', label: 'Ecuador', phone: '593' },
  { code: 'EE', label: 'Estonia', phone: '372' },
  { code: 'EG', label: 'Egypt', phone: '20' },
  { code: 'EH', label: 'Western Sahara', phone: '212' },
  { code: 'ER', label: 'Eritrea', phone: '291' },
  { code: 'ES', label: 'Spain', phone: '34' },
  { code: 'ET', label: 'Ethiopia', phone: '251' },
  { code: 'FI', label: 'Finland', phone: '358' },
  { code: 'FJ', label: 'Fiji', phone: '679' },
  {
    code: 'FK',
    label: 'Falkland Islands (Malvinas)',
    phone: '500',
  },
  {
    code: 'FM',
    label: 'Micronesia, Federated States of',
    phone: '691',
  },
  { code: 'FO', label: 'Faroe Islands', phone: '298' },
  {
    code: 'FR',
    label: 'France',
    phone: '33',
    suggested: true,
  },
  { code: 'GA', label: 'Gabon', phone: '241' },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'GD', label: 'Grenada', phone: '1-473' },
  { code: 'GE', label: 'Georgia', phone: '995' },
  { code: 'GF', label: 'French Guiana', phone: '594' },
  { code: 'GG', label: 'Guernsey', phone: '44' },
  { code: 'GH', label: 'Ghana', phone: '233' },
  { code: 'GI', label: 'Gibraltar', phone: '350' },
  { code: 'GL', label: 'Greenland', phone: '299' },
  { code: 'GM', label: 'Gambia', phone: '220' },
  { code: 'GN', label: 'Guinea', phone: '224' },
  { code: 'GP', label: 'Guadeloupe', phone: '590' },
  { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
  { code: 'GR', label: 'Greece', phone: '30' },
  {
    code: 'GS',
    label: 'South Georgia and the South Sandwich Islands',
    phone: '500',
  },
  { code: 'GT', label: 'Guatemala', phone: '502' },
  { code: 'GU', label: 'Guam', phone: '1-671' },
  { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
  { code: 'GY', label: 'Guyana', phone: '592' },
  { code: 'HK', label: 'Hong Kong', phone: '852' },
  {
    code: 'HM',
    label: 'Heard Island and McDonald Islands',
    phone: '672',
  },
  { code: 'HN', label: 'Honduras', phone: '504' },
  { code: 'HR', label: 'Croatia', phone: '385' },
  { code: 'HT', label: 'Haiti', phone: '509' },
  { code: 'HU', label: 'Hungary', phone: '36' },
  { code: 'ID', label: 'Indonesia', phone: '62' },
  { code: 'IE', label: 'Ireland', phone: '353' },
  { code: 'IL', label: 'Israel', phone: '972' },
  { code: 'IM', label: 'Isle of Man', phone: '44' },
  { code: 'IN', label: 'India', phone: '91' },
  {
    code: 'IO',
    label: 'British Indian Ocean Territory',
    phone: '246',
  },
  { code: 'IQ', label: 'Iraq', phone: '964' },
  {
    code: 'IR',
    label: 'Iran, Islamic Republic of',
    phone: '98',
  },
  { code: 'IS', label: 'Iceland', phone: '354' },
  { code: 'IT', label: 'Italy', phone: '39' },
  { code: 'JE', label: 'Jersey', phone: '44' },
  { code: 'JM', label: 'Jamaica', phone: '1-876' },
  { code: 'JO', label: 'Jordan', phone: '962' },
  {
    code: 'JP',
    label: 'Japan',
    phone: '81',
    suggested: true,
  },
  { code: 'KE', label: 'Kenya', phone: '254' },
  { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
  { code: 'KH', label: 'Cambodia', phone: '855' },
  { code: 'KI', label: 'Kiribati', phone: '686' },
  { code: 'KM', label: 'Comoros', phone: '269' },
  {
    code: 'KN',
    label: 'Saint Kitts and Nevis',
    phone: '1-869',
  },
  {
    code: 'KP',
    label: "Korea, Democratic People's Republic of",
    phone: '850',
  },
  { code: 'KR', label: 'Korea, Republic of', phone: '82' },
  { code: 'KW', label: 'Kuwait', phone: '965' },
  { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
  { code: 'KZ', label: 'Kazakhstan', phone: '7' },
  {
    code: 'LA',
    label: "Lao People's Democratic Republic",
    phone: '856',
  },
  { code: 'LB', label: 'Lebanon', phone: '961' },
  { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
  { code: 'LI', label: 'Liechtenstein', phone: '423' },
  { code: 'LK', label: 'Sri Lanka', phone: '94' },
  { code: 'LR', label: 'Liberia', phone: '231' },
  { code: 'LS', label: 'Lesotho', phone: '266' },
  { code: 'LT', label: 'Lithuania', phone: '370' },
  { code: 'LU', label: 'Luxembourg', phone: '352' },
  { code: 'LV', label: 'Latvia', phone: '371' },
  { code: 'LY', label: 'Libya', phone: '218' },
  { code: 'MA', label: 'Morocco', phone: '212' },
  { code: 'MC', label: 'Monaco', phone: '377' },
  {
    code: 'MD',
    label: 'Moldova, Republic of',
    phone: '373',
  },
  { code: 'ME', label: 'Montenegro', phone: '382' },
  {
    code: 'MF',
    label: 'Saint Martin (French part)',
    phone: '590',
  },
  { code: 'MG', label: 'Madagascar', phone: '261' },
  { code: 'MH', label: 'Marshall Islands', phone: '692' },
  {
    code: 'MK',
    label: 'Macedonia, the Former Yugoslav Republic of',
    phone: '389',
  },
  { code: 'ML', label: 'Mali', phone: '223' },
  { code: 'MM', label: 'Myanmar', phone: '95' },
  { code: 'MN', label: 'Mongolia', phone: '976' },
  { code: 'MO', label: 'Macao', phone: '853' },
  {
    code: 'MP',
    label: 'Northern Mariana Islands',
    phone: '1-670',
  },
  { code: 'MQ', label: 'Martinique', phone: '596' },
  { code: 'MR', label: 'Mauritania', phone: '222' },
  { code: 'MS', label: 'Montserrat', phone: '1-664' },
  { code: 'MT', label: 'Malta', phone: '356' },
  { code: 'MU', label: 'Mauritius', phone: '230' },
  { code: 'MV', label: 'Maldives', phone: '960' },
  { code: 'MW', label: 'Malawi', phone: '265' },
  { code: 'MX', label: 'Mexico', phone: '52' },
  { code: 'MY', label: 'Malaysia', phone: '60' },
  { code: 'MZ', label: 'Mozambique', phone: '258' },
  { code: 'NA', label: 'Namibia', phone: '264' },
  { code: 'NC', label: 'New Caledonia', phone: '687' },
  { code: 'NE', label: 'Niger', phone: '227' },
  { code: 'NF', label: 'Norfolk Island', phone: '672' },
  { code: 'NG', label: 'Nigeria', phone: '234' },
  { code: 'NI', label: 'Nicaragua', phone: '505' },
  { code: 'NL', label: 'Netherlands', phone: '31' },
  { code: 'NO', label: 'Norway', phone: '47' },
  { code: 'NP', label: 'Nepal', phone: '977' },
  { code: 'NR', label: 'Nauru', phone: '674' },
  { code: 'NU', label: 'Niue', phone: '683' },
  { code: 'NZ', label: 'New Zealand', phone: '64' },
  { code: 'OM', label: 'Oman', phone: '968' },
  { code: 'PA', label: 'Panama', phone: '507' },
  { code: 'PE', label: 'Peru', phone: '51' },
  { code: 'PF', label: 'French Polynesia', phone: '689' },
  { code: 'PG', label: 'Papua New Guinea', phone: '675' },
  { code: 'PH', label: 'Philippines', phone: '63' },
  { code: 'PK', label: 'Pakistan', phone: '92' },
  { code: 'PL', label: 'Poland', phone: '48' },
  {
    code: 'PM',
    label: 'Saint Pierre and Miquelon',
    phone: '508',
  },
  { code: 'PN', label: 'Pitcairn', phone: '870' },
  { code: 'PR', label: 'Puerto Rico', phone: '1' },
  {
    code: 'PS',
    label: 'Palestine, State of',
    phone: '970',
  },
  { code: 'PT', label: 'Portugal', phone: '351' },
  { code: 'PW', label: 'Palau', phone: '680' },
  { code: 'PY', label: 'Paraguay', phone: '595' },
  { code: 'QA', label: 'Qatar', phone: '974' },
  { code: 'RE', label: 'Reunion', phone: '262' },
  { code: 'RO', label: 'Romania', phone: '40' },
  { code: 'RS', label: 'Serbia', phone: '381' },
  { code: 'RU', label: 'Russian Federation', phone: '7' },
  { code: 'RW', label: 'Rwanda', phone: '250' },
  { code: 'SA', label: 'Saudi Arabia', phone: '966' },
  { code: 'SB', label: 'Solomon Islands', phone: '677' },
  { code: 'SC', label: 'Seychelles', phone: '248' },
  { code: 'SD', label: 'Sudan', phone: '249' },
  { code: 'SE', label: 'Sweden', phone: '46' },
  { code: 'SG', label: 'Singapore', phone: '65' },
  { code: 'SH', label: 'Saint Helena', phone: '290' },
  { code: 'SI', label: 'Slovenia', phone: '386' },
  {
    code: 'SJ',
    label: 'Svalbard and Jan Mayen',
    phone: '47',
  },
  { code: 'SK', label: 'Slovakia', phone: '421' },
  { code: 'SL', label: 'Sierra Leone', phone: '232' },
  { code: 'SM', label: 'San Marino', phone: '378' },
  { code: 'SN', label: 'Senegal', phone: '221' },
  { code: 'SO', label: 'Somalia', phone: '252' },
  { code: 'SR', label: 'Suriname', phone: '597' },
  { code: 'SS', label: 'South Sudan', phone: '211' },
  {
    code: 'ST',
    label: 'Sao Tome and Principe',
    phone: '239',
  },
  { code: 'SV', label: 'El Salvador', phone: '503' },
  {
    code: 'SX',
    label: 'Sint Maarten (Dutch part)',
    phone: '1-721',
  },
  {
    code: 'SY',
    label: 'Syrian Arab Republic',
    phone: '963',
  },
  { code: 'SZ', label: 'Swaziland', phone: '268' },
  {
    code: 'TC',
    label: 'Turks and Caicos Islands',
    phone: '1-649',
  },
  { code: 'TD', label: 'Chad', phone: '235' },
  {
    code: 'TF',
    label: 'French Southern Territories',
    phone: '262',
  },
  { code: 'TG', label: 'Togo', phone: '228' },
  { code: 'TH', label: 'Thailand', phone: '66' },
  { code: 'TJ', label: 'Tajikistan', phone: '992' },
  { code: 'TK', label: 'Tokelau', phone: '690' },
  { code: 'TL', label: 'Timor-Leste', phone: '670' },
  { code: 'TM', label: 'Turkmenistan', phone: '993' },
  { code: 'TN', label: 'Tunisia', phone: '216' },
  { code: 'TO', label: 'Tonga', phone: '676' },
  { code: 'TR', label: 'Turkey', phone: '90' },
  {
    code: 'TT',
    label: 'Trinidad and Tobago',
    phone: '1-868',
  },
  { code: 'TV', label: 'Tuvalu', phone: '688' },
  {
    code: 'TW',
    label: 'Taiwan, Province of China',
    phone: '886',
  },
  {
    code: 'TZ',
    label: 'United Republic of Tanzania',
    phone: '255',
  },
  { code: 'UA', label: 'Ukraine', phone: '380' },
  { code: 'UG', label: 'Uganda', phone: '256' },
  {
    code: 'US',
    label: 'United States',
    phone: '1',
    suggested: true,
  },
  { code: 'UY', label: 'Uruguay', phone: '598' },
  { code: 'UZ', label: 'Uzbekistan', phone: '998' },
  {
    code: 'VA',
    label: 'Holy See (Vatican City State)',
    phone: '379',
  },
  {
    code: 'VC',
    label: 'Saint Vincent and the Grenadines',
    phone: '1-784',
  },
  { code: 'VE', label: 'Venezuela', phone: '58' },
  {
    code: 'VG',
    label: 'British Virgin Islands',
    phone: '1-284',
  },
  {
    code: 'VI',
    label: 'US Virgin Islands',
    phone: '1-340',
  },
  { code: 'VN', label: 'Vietnam', phone: '84' },
  { code: 'VU', label: 'Vanuatu', phone: '678' },
  { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
  { code: 'WS', label: 'Samoa', phone: '685' },
  { code: 'XK', label: 'Kosovo', phone: '383' },
  { code: 'YE', label: 'Yemen', phone: '967' },
  { code: 'YT', label: 'Mayotte', phone: '262' },
  { code: 'ZA', label: 'South Africa', phone: '27' },
  { code: 'ZM', label: 'Zambia', phone: '260' },
  { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];
