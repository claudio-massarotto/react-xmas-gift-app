import ghirlanda from './ghirlanda.svg';
import santa from './santa-2.svg';
import './App.css';
import FavColor from './pages/favColor';
import BestActivity from './pages/bestActivity';
import BestTime from './pages/bestTime';
import BestActor from './pages/bestActor';
import { Button } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';


function App() {
  const [toggleSanta, setToggleSanta] = useState(false);
  const [question2answer, setQuestion2answer] = useState(4);
  const [currentPage, setCurrentPage] = useState(null);
  const goSantaFn = () => {
    setToggleSanta(!toggleSanta);
  };
  const handleQuestionsLogic = useCallback(() => {
    let toReturn;
    switch(question2answer){
      case 0: toReturn = <BestActor />; break;
      case 1: toReturn = <BestActor />; break;
      case 2: toReturn = <BestActivity />; break;
      case 3: toReturn = <BestTime />; break;
      case 4: toReturn = <FavColor />; break;
      default: toReturn = <FavColor />;
    }
    let number = question2answer;
    return { page: toReturn, number: number-- };
  });

  useEffect(() => {handleQuestionsLogic()},[]);
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
