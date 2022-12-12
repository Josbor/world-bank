import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

 const  useDatePicker=(tittle:any) =>{
  const [state, setstate] = React.useState<Dayjs | any>(null);
  
  const PickerCalendary=()=>{
   return (
     <>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker
          
           label={tittle}
           value={state}
           onChange={(newValue) => {
             console.log(newValue)
             setstate(newValue);
           }}
           renderInput={(params) => <TextField margin='dense'{...params} />}
         />
       </LocalizationProvider>
     </>
   )  
}

  return[state,PickerCalendary]
}
export default useDatePicker