import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let s = "A hackathon is, as others have said, an often competitive event where teams of hackers of the kind you see on Hackaday get together to build something cool in a limited time, usually with some kind of theme. For example, smartphone app hackathons, wearable electronics hackathons, big data hackathons, California water crisis solutions hackathons, etc.";
let words = s.split(" ");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App words={words}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
