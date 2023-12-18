import React from 'react';
import './HomePage.css';

function HomePage({
    words,
    setText
}) {
    const handleButtonClick = () => {
        setText(true);
    }

    let result = words.join(' ');
    return (
        <div className='app'>
            <h1>welcome to fastR</h1>
            <h2>your highlighted text:</h2>
            <div className="info-box">{result}</div>
            <button className='start-button' onClick={handleButtonClick}>Start Reading</button>
        </div>
    )
}

export default HomePage;
