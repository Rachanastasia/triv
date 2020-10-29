import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Start from './components/Start';
import Header from './components/Header';
import './styles/global.css';
import './styles/main.css';


function App() {

  const [playing, setPlaying] = useState(false);



  return (
    <main className="App">
      <Header />
      {playing === true
        ? <Quiz playing={setPlaying} />
        : <Start playing={setPlaying} />
      }
    </main>
  );
}

export default App;
