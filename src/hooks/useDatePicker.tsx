import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

 const  useDatePicker=(tittle:any,tittle2:any) =>{
  const [since, setSince] = React.useState<Dayjs | any>(null);
  const [until, setUntil] = React.useState<Dayjs | any>(null);
  const [dateFrom, setDateFrom] = React.useState<Dayjs | any>(null);
  const [dateTop, setDateTo] = React.useState<Dayjs | any>(null);
  
  const PickerCalendary=()=>{
   return (
     <>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker
            maxDate={until}
           label={tittle}
           value={since}
           onChange={(newValue) => {
             setSince(newValue);
             setDateFrom(`${newValue.$y}-${newValue.$M}-${newValue.$D}`);
           }}
           renderInput={(params) => <TextField margin='dense'{...params} />}
         />
       </LocalizationProvider>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker
            minDate={since}
           label={tittle}
           value={until}
           onChange={(newValue) => {
             setUntil(newValue);
             setDateTo(`${newValue.$y}-${newValue.$M}-${newValue.$D}`);
           }}
           renderInput={(params) => <TextField margin='dense'{...params} />}
         />
       </LocalizationProvider>
     </>
   )  
}

  return[dateFrom,dateTop,PickerCalendary]
}
export default useDatePicker