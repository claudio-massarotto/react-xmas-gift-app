import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function BestActor({handler}) {
  return (
    <FormControl className='form-control'>
      <FormLabel id="favourite-color" className='form-question'>Qual'è il tuo attore preferito?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="piscine" control={<Radio />} label="Jason Momoa" />
        <FormControlLabel value="palestra" control={<Radio />} label="Jason Statham" />
        <FormControlLabel value="smalti" control={<Radio />} label='Dwain "The Rock" Johnson' />
        <FormControlLabel value="altro" control={<Radio />} label="Vin Diesel" />
      </RadioGroup>
      
      <Button className='next-step-button' onClick={handler}>Scopri il tuo regalo</Button>
    </FormControl>
  );
}