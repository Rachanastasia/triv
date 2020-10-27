import React, { useState } from 'react';
import Question from './components/Question';
import Start from './components/Start';
import Data from './Apprentice_TandemFor400_Data.json';
import './styles/global.css';
import './styles/main.css';


function App() {
  const [i, seti] = useState(0)
  const [question, setQuestion] = useState(0)
  const [playing, setPlaying] = useState(false)

  const onStart = () => {
    seti(0)
    setPlaying(true)
  }

  const onNext = () => {
    setQuestion(Math.floor(Math.random() * 22));
    seti(i + 1)

  }

  if (i >= 10) {
    if (playing)
      setPlaying(false)
  }

  return (
    <main className="App">
      {playing
        ? <Question question={Data[question]} next={onNext} />
        : <Start start={onStart} />

      }
    </main>
  );
}

export default App;
