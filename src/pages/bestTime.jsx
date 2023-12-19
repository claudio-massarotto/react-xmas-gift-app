import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function BestTime() {
  return (
    <FormControl className='form-control'>
      <FormLabel id="favourite-color" className='form-question'>Qual'è il tuo momento preferito dell'anno?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="piscine" control={<Radio />} label="L'estate" />
        <FormControlLabel value="palestra" control={<Radio />} label="Primavera" />
        <FormControlLabel value="smalti" control={<Radio />} label="Tutto l'anno" />
        <FormControlLabel value="altro" control={<Radio />} label="Inverno" />
      </RadioGroup>
      
      <Button className='next-step-button'>Vai alla prossima domanda</Button>
    </FormControl>
  );
}