/* global chrome */

import HomePage from './pages/HomePage';
import TextPage from './pages/TextPage';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState(false);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let activeTab = tabs[0];

      chrome.scripting.executeScript({ target: { tabId: activeTab.id }, files: ["content.js"] })
        .then(() => {
          console.log("script injected");
          chrome.tabs.sendMessage(activeTab.id, { action: 'text' }, (response) => {
            setSelection(response.data.split(" "));
          });
        }
        )
    })
  }, []);

  if (text) {
    return (
      <div className='App'>
        <TextPage words={selection} />
      </div>
    )
  }

  return (
    <div className="App">
      <HomePage words={selection} setText={setText} />
    </div>
  );
}

export default App;
