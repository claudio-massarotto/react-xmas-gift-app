import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function BestActor({handler
,answers}) {
  const [value, setValue] =useState(null);
  const clickHandler =() =>{
    const newValues = {
      ...answers,
      1 : value,
    };
    handler(newValues);
  };
  return (
    <FormControl className='form-control'>
      <FormLabel id="favourite-color" className='form-question'>Qual'è il tuo attore preferito?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        onChange={(event,newValue)=>setValue(newValue)}
        name="radio-buttons-group"
      >
        <FormControlLabel value="altro" control={<Radio />} label="Vin Diesel" />
        <FormControlLabel value="smalti" control={<Radio />} label='Dwain "The Rock" Johnson' />
        <FormControlLabel value="palestra" control={<Radio />} label="Jason Statham" />
        <FormControlLabel value="piscine" control={<Radio />} label="Jason Momoa" />
      </RadioGroup>
      
      <Button className='next-step-button' onClick={clickHandler}>Scopri il tuo regalo</Button>
    </FormControl>
  );
}