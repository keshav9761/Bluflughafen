import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [dropValue, setDropValue] = React.useState('Become Partner');

  const handleChange = (event) => {
    setDropValue(event.target.value);
  };

  return (
    <Box >
      <FormControl fullWidth>
        <Select
          size='small'
          onChange={handleChange}
          value={dropValue}
        >
          <MenuItem value='Become Partner' >Become Partner</MenuItem>
          <MenuItem value='Business Agent'>Business/ Agent</MenuItem>
          <MenuItem value='Driver Carrier'>Driver/ Carrier</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}