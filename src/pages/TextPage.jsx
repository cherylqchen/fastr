import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./TextPage.css";

function TextPage({
    words
}) {
    const [end, setEnd] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayWord, setDisplayWord] = useState(words[0]);
    const [intervalDuration, setIntervalDuration] = useState(500);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!paused) {
                if (currentIndex < words.length - 1) {
                    setCurrentIndex(prevIndex => prevIndex + 1);
                    setDisplayWord(words[currentIndex + 1]);
                    setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + intervalDuration);
                } else {
                    setEnd(true);
                    clearInterval(intervalId);
                }
            }
        }, intervalDuration);

        return () => {
            clearInterval(intervalId);
        }
    }, [currentIndex, words, intervalDuration, paused]);

    const handleIntervalChange = (event) => {
        const newIntervalDuration = 2000 - parseInt(event.target.value, 10);
        setIntervalDuration(newIntervalDuration);
    }

    const handleButtonClick = () => {
        setCurrentIndex(0);
        setDisplayWord(words[0]);
        setIntervalDuration(500);
        setTimeElapsed(0);
        setEnd(false);
    }

    const handlePause = () => {
        setPaused(prevPaused => !prevPaused);
    }

    if (end) {
        let totalTime = timeElapsed;
        totalTime = totalTime / 1000;
        return (
            <div className='container'>
                <h2 className='h2'>you read {words.length} words in {totalTime} seconds!</h2>
                <p className='instructions'>to reread this paragraph, click below!</p>
                <button className='button' onClick={handleButtonClick}>reread</button>
                <p className='instructions'>to read different text, highlight new text on the webpage</p>
            </div>
        )
    }
    return (
        <div className='container'>
            <h2 className='single-word'>{displayWord}</h2>
            <p className='instructions'>adjust speed here</p>
            <IconButton onClick={handlePause}>
                {paused ? <PlayArrowIcon /> : <PauseIcon />}
            </IconButton>
            <Slider
                min={1000}
                max={2000}
                defaultValue={2000 - intervalDuration}
                onChange={handleIntervalChange}
                sx={{
                    width: "50%",
                }}
            /> 
        </div >
    )
}

export default TextPage;
