import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function BestActivity({handler}) {
  return (
    <FormControl className='form-control'>
      <FormLabel id="favourite-color" className='form-question'>Cosa preferisci fare?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="smalti" control={<Radio />} label='Stare sul divano' />
        <FormControlLabel value="palestra" control={<Radio />} label="Andare a fare attività all'aria aperta" />
        <FormControlLabel value="altro" control={<Radio />} label="Stirare" />
        <FormControlLabel value="piscine" control={<Radio />} label="Fare immersioni" />
      </RadioGroup>
      
      <Button className='next-step-button' onClick={handler}>Vai alla prossima domanda</Button>
    </FormControl>
  );
}