import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Results({answers}) {
  const [value, setValue] =useState(null);
  const clickHandler =(valuesObject) =>{
    const newValues = {
    };
    handler(newValues);
  };
  const result = Math.floor(Math.random() * 2);
  return (
    <FormControl className='form-control'>
      <FormLabel id="favourite-color" className='form-question'>Congratulazioni! Il tuo regalo è...</FormLabel>
      {result === 2 && <FormLabel>Un abbonamento alla piscina per 10 ingressi!</FormLabel>}
      {result === 1 && <FormLabel>Un corso professionale sugli smalti!</FormLabel>}
      {result === 0 && <FormLabel>Un abbonamento di un mese ai corsi presso Fisico Fitness Club!</FormLabel>}
      <div style={{height:"50px"}}></div>
      <Button className='next-step-button' onClick={clickHandler}>Inizia da capo</Button>
    </FormControl>
  );
}