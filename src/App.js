import ghirlanda from './ghirlanda.svg';
import santa from './santa-2.svg';
import './App.css';
import FavColor from './pages/favColor';
import BestActivity from './pages/bestActivity';
import BestTime from './pages/bestTime';
import BestActor from './pages/bestActor';
import { useState } from 'react';
import {useAnimate} from 'framer-motion';
import Results from './pages/Results';



function App() {
  const [question2answer, setQuestion2answer] = useState(4);
  const [pagesData, setPagesData] = useState({});

  const nextStep = (valuesObject, reset) => {
    setPagesData(valuesObject);
    if(valuesObject[question2answer] || reset){
      animate('img.walking-claus',{scale:[1, 6,6,1]},{duration: 2, transition:{times:[0,0.4,0.6,1]}})
      setTimeout(() =>{
        setQuestion2answer(state=> reset ? 4 : state-1);
      },900)
  }
  };
  
  const [scope, animate] = useAnimate();

  return (
    <div className="App"  ref={scope}>
        <header className="App-header">
          <img src={ghirlanda} className="ghirlanda" alt="xmas-decoration" />
          <label className='app-title'>Cosa riceverai per regalo?</label>
          <>
            {question2answer === 0 && !!pagesData[1] && <Results handler={nextStep} answers={pagesData} />}
            {question2answer === 1 && !!pagesData[2] && <BestActor handler={nextStep} answers={pagesData} />}
            {question2answer === 2 && !!pagesData[3] && <BestActivity handler={nextStep} answers={pagesData} />}
            {question2answer === 3 && !!pagesData[4] && <BestTime handler={nextStep} answers={pagesData} />}
            {question2answer === 4 && <FavColor handler={nextStep} />}
          </>
          <img src={santa} className="walking-claus" alt="xmas-decoration" />
        </header>
    </div>
  );
}

export default App;
