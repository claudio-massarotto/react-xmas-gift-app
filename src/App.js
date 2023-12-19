import ghirlanda from './ghirlanda.svg';
import santa from './santa-2.svg';
import './App.css';
import FavColor from './pages/favColor';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <img src={ghirlanda} className="ghirlanda" alt="xmas-decoration" />
          <label className='app-title'>Cosa riceverai per regalo?</label>

          <FavColor />
          <img src={santa} className="walking-claus go-santa" alt="xmas-decoration" />
        </header>
    </div>
  );
}

export default App;
