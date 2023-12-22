import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function Results({answers, handler}) {
  const clickHandler =() =>{
    const newValues = {
    };
    handler(newValues, true);
  };
  const getResult = (object) => {
    let res = 0;
    for(let i= 1; i<=4; i++){
      if(object[i] === 'piscine') res+= 3;
      if(object[i] === 'palestra') res+= 2;
      if(object[i] === 'smalti') res+= 1;
      if(object[i] === 'altro') res+= 0;
    }
    return res;
  };

  const result = getResult(answers);
  return (
    <FormControl className='form-control'>
      <FormLabel id="favourite-color" className='form-question'>Congratulazioni! Il tuo regalo è...</FormLabel>
      <div style={{height:"5vh"}}></div>
      {result <= 12 && result > 6 && <FormLabel className="results">Un abbonamento alla piscina per 10 ingressi!</FormLabel>}
      {result <= 6 && result > 3 && <FormLabel className="results">Un corso professionale sugli smalti!</FormLabel>}
      {result <= 3 && result > 0 && <FormLabel className="results">Un abbonamento di un mese ai corsi presso Fisico Fitness Club!</FormLabel>}
      <div style={{height:"5vh"}}></div>
      <Button className='next-step-button' onClick={clickHandler}>Inizia da capo</Button>
    </FormControl>
  );
}