import ghirlanda from './ghirlanda.svg';
import santa from './santa-2.svg';
import './App.css';
import FavColor from './pages/favColor';
import BestActivity from './pages/bestActivity';
import BestTime from './pages/bestTime';
import BestActor from './pages/bestActor';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';


function App() {
  const [toggleSanta, setToggleSanta] = useState(false);
  const [question2answer, setQuestion2answer] = useState(4);
  const goSantaFn = () => {
    setToggleSanta(state=>!state);

    setTimeout(()=>{
      setToggleSanta(state=>!state);
    },4000)
  };

  const nextStep = () => {
    console.log('next step');
    setQuestion2answer(state=>state-1);
  };

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
          <img src={santa} className={toggleSanta ? "walking-claus go-santa": "walking-claus"} alt="xmas-decoration" />
        </header>
    </div>
  );
}

export default App;
