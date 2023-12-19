import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function FavColor() {
  return (
    <FormControl className='form-control'>
      <FormLabel id="favourite-color" className='form-question'>Qual'è il tuo colore preferito?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="smalti" control={<Radio />} label="Rosso" />
        <FormControlLabel value="piscine" control={<Radio />} label="Blu" />
        <FormControlLabel value="palestra" control={<Radio />} label="Giallo" />
        <FormControlLabel value="altro" control={<Radio />} label="Nero" />
      </RadioGroup>
      
      <Button className='next-step-button'>Vai alla prossima domanda</Button>
    </FormControl>
  );
}