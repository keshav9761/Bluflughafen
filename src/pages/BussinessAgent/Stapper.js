import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styled from '@mui/styled-engine-sc';
import { useNavigate } from 'react-router-dom';

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
        navigate('/business');
        break;
      case 'Vehicle Option':
        navigate('/business/vehicle');
        break;
      case 'Contacts-Information':
        navigate('/business/contact');
        break;
      case 'Summary':
        navigate('/business/summary');
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: '100%', my: 4 }}>
      <StepperWrapper>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label} sx={{ zIndex: 1 }} active >
              <StepLabel className="pointer" onClick={() => handleClick(label)}><b>{label}</b></StepLabel>
            </Step>
          ))}
        </Stepper>
      </StepperWrapper>
    </Box>
  );
}