import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function BestTime({handler,answers}) {
  const [value, setValue] =useState(null);
  const clickHandler =() =>{
    const newValues = {
      ...answers,
      3 : value,
    };
    handler(newValues);
  };
  return (
    <FormControl className='form-control'>
      <FormLabel id="favourite-color" className='form-question'>Qual'è il tuo momento preferito dell'anno?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(event,newValue)=>setValue(newValue)}
      >
        <FormControlLabel value="piscine" control={<Radio />} label="L'estate" />
        <FormControlLabel value="palestra" control={<Radio />} label="Primavera" />
        <FormControlLabel value="smalti" control={<Radio />} label="Tutto l'anno" />
        <FormControlLabel value="altro" control={<Radio />} label="Inverno" />
      </RadioGroup>
      
      <Button className='next-step-button' onClick={clickHandler}>Vai alla prossima domanda</Button>
    </FormControl>
  );
}