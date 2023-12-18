import HomePage from './pages/HomePage';
import TextPage from './pages/TextPage';
import React, { useState} from 'react';
import './App.css';

function App({words}) {
  const [text, setText] = useState(false);

  if (text) {
    return (
      <div className='App'>
        <TextPage words={words} />
      </div>
    )
  }

  return (
    <div className="App">
      <HomePage words={words} setText={setText} />
    </div>
  );
}

export default App;
