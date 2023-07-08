import logo from './logo.svg';
import './App.css';
import Board from './Board';
import {motemen} from './motemen';

function App() {
  const motemenRandomized = motemen.slice().sort(() => Math.random() > 0.5 ? 1 : -1);

  return (
    <div className="App">
      <main>
        <Board motemenRandomized={motemenRandomized}/>
      </main>
    </div>
  );
}

export default App;
