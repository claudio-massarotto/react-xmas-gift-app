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
  const [currentPage, setCurrentPage] = useState(null);
  const goSantaFn = () => {
    setToggleSanta(!toggleSanta);
  };
  const handleQuestionsLogic = () => {
    let toReturn;
    switch(question2answer){
      case 0: toReturn = <BestActor handler={nextStep} />; break;
      case 1: toReturn = <BestActor handler={nextStep} />; break;
      case 2: toReturn = <BestActivity handler={nextStep} />; break;
      case 3: toReturn = <BestTime handler={nextStep} />; break;
      case 4: toReturn = <FavColor handler={nextStep} />; break;
      default: toReturn = <FavColor handler={nextStep} />;
    }
    let number = question2answer;
    return { page: toReturn, number: --number };
  };

  const nextStep = () => {
    console.log('next step');
    const {page, number} = handleQuestionsLogic();
    console.log(page, number);
    setCurrentPage(page);
    setQuestion2answer(number);
  };

  useEffect(() => {
    const {page, number} = handleQuestionsLogic();
    setCurrentPage(page);
    setQuestion2answer(number);
  }, []);

  return (
    <div className="App">
        <header className="App-header">
          <img src={ghirlanda} className="ghirlanda" alt="xmas-decoration" />
          <label className='app-title'>Cosa riceverai per regalo?</label>

          {currentPage}
          <Button onClick={goSantaFn}>Test</Button>
          <img src={santa} className={toggleSanta ? "walking-claus go-santa": "walking-claus"} alt="xmas-decoration" />
        </header>
    </div>
  );
}

export default App;
