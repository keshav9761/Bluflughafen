import * as React from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styled from '@mui/styled-engine-sc';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const steps = [
  'Booking Details',
  'Vehicle Option',
  'Contacts-Information',
  'Summary',
];

const StepperWrapper = styled('div')(() => ({
  '& .MuiStepConnector-root': {
    top: '1.5rem',
  },

  '& .MuiStepLabel-iconContainer': {
    zIndex: 1
  },
  '& .Mui-active': {
    color: '#0E4672 !important'
  },
  '& .MuiStepConnector-line': {
    borderColor: '#061e66',
    borderTopWidth: '3px'
  }
}));

export default function Stapper({ activeStep }) {
  // const { } = active;
  const navigate = useNavigate();
  const handleClick = (step) => {
    switch (step) {
      case 'Booking Details':
        navigate('/');
        break;
      case 'Vehicle Option':
        navigate('/vehicle');
        break;
      case 'Contacts-Information':
        navigate('/contact');
        break;
      case 'Summary':
        navigate('/summary');
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ width: '100%', marginTop: "18px", display: "flex" ,}}>
      <div className='ms-2'>
        <div>
          <Button style={{ borderRadius: "47.7209px" }} variant="contained"><ArrowBackIcon />Back</Button>
        </div>
        <div className='mt-3'>
          <p className='ride-booking'>Ride Booking</p>
        </div>
      </div>
      <div style={{flex: "1",}}>
        <StepperWrapper>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label} sx={{ zIndex: 1 }} active >
                <StepLabel className="pointer" onClick={() => handleClick(label)}><b>{label}</b></StepLabel>
              </Step>
            ))}
          </Stepper>
        </StepperWrapper>
      </div>
    </div>
  );
}