import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';




export function ResponsiveDatePickers({ label }) {
  // const [value, setValue] = React.useState(dayjs('2022-04-07'));
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <Stack spacing={3}>

    //     <DatePicker
    //       disableFuture
    //       label={label}
    //       openTo="year"
    //       views={['year', 'month', 'day']}
    //       value={value}
    //       onChange={(newValue) => {
    //         setValue(newValue);
    //       }}
    //       renderInput={(params) => <TextField   variant='standard' {...params} />}
    //     />
    //   </Stack>
    // </LocalizationProvider>



    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField variant='standard' {...params} />}
        />
    </LocalizationProvider>
  );
}