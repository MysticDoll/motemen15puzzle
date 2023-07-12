import logo from './logo.svg';
import './App.css';
import Board from './Board';
import {white, motemen} from './motemen';

const randomize = (motemen) => {
  let m = motemen.slice();
  Array(Math.floor(Math.random() * 10000)).fill().map(() => 
    [-1, 1, 4, -4][Math.floor(Math.random() * 10000) % 4]
  ).forEach(i => {
    const w = m.findIndex(c => c === white);
    if((w + i) >= 0 && (w + i) < 16) {
      let wc = m[w];
      m[w] = m[w + i];
      m[w + i] = wc;
    }
  });

  return m;
}

function App() {
  const motemenRandomized = randomize(motemen);

  return (
    <div className="App">
      <main>
        <Board motemenRandomized={motemenRandomized}/>
      </main>
    </div>
  );
}

export default App;
