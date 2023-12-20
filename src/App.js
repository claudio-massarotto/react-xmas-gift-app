import ghirlanda from './ghirlanda.svg';
import santa from './santa-2.svg';
import './App.css';
import FavColor from './pages/favColor';
import BestActivity from './pages/bestActivity';
import BestTime from './pages/bestTime';
import BestActor from './pages/bestActor';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import {useAnimate} from 'framer-motion';



function App() {
  const [toggleSanta, setToggleSanta] = useState(false);
  const [question2answer, setQuestion2answer] = useState(4);
  const goSantaFn = () => {
    setToggleSanta(state=>!state);

    setTimeout(()=>{
      setToggleSanta(state=>!state);
    },4000)

    animate('img',{scale:[1, 3,3,1]},{duration: 2, transition:{times:[0,0.4,0.6,1]}})
  };

  const nextStep = () => {
    console.log('next step');
    setQuestion2answer(state=>state-1);
  };

  
  const [scope, animate] = useAnimate();

  return (
    <div className="App">
        <header className="App-header">
          <img src={ghirlanda} className="ghirlanda" alt="xmas-decoration" />
          <label className='app-title'>Cosa riceverai per regalo?</label>
          <>
            {question2answer === 0 && <BestActor handler={nextStep} />}
            {question2answer === 1 && <BestActor handler={nextStep} />}
            {question2answer === 2 && <BestActivity handler={nextStep} />}
            {question2answer === 3 && <BestTime handler={nextStep} />}
            {question2answer === 4 && <FavColor handler={nextStep} />}
          </>
          <Button onClick={goSantaFn}>Test</Button>
          <div ref={scope}>
          <img src={santa} className="walking-claus" alt="xmas-decoration" />
          </div>
        </header>
    </div>
  );
}

export default App;
