import React, {useState, useEffect} from 'react';
//import {createIconsArray, duplicateArray, shuffle} from '../js/utils';

import Exit from '../components/ExitBtn';
import Pause from '../components/PauseBtn';
import GameTable from '../components/GameTable';

//props currentLevel, seconds
const Game = ({secund, setSecund, currentLevel, setCurrentLevel}) =>{

    let timerInterval;
    const [totalCount, setTotalCount] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [min, setMin] = useState(0);
    const [clickable, setClickable] = useState(true);
   

    useEffect(() => {
        timerInterval = setInterval(() => {
          if (!isPaused) {
            //updateTimer();
            setSecund((prevSecund) => {
              let newSecund = prevSecund - 1;
              if (newSecund < 0) {
                setMin((prevMin) => prevMin - 1);
                return 59;
              }
              return newSecund;
            });
    
            if (min === 0 && secund === 0) {
              //windowGameOver(totalCount);
              alert('Game Over');
              clearInterval(timerInterval);
            }
          }
        }, 1000);
    
        return () => clearInterval(timerInterval);
      }, [isPaused, secund, min, setSecund]);

    return(
        <div className="game">
            <div className="game-interface">
                <div className="timer">Timer: {`${min}:${secund < 10 ? '0' + secund : secund}`}</div>
                <div className="counter">Scores: 20</div>

                <div className="gif-btn">
                    <Pause 
                        isPaused={isPaused} 
                        setIsPaused={setIsPaused}
                        clickable = {clickable} 
                        setClickable={setClickable} 
                    />
                    <Exit setTotalCount={setTotalCount} timerInterval={timerInterval} />
                </div>
            </div>

            <section className="game-section">
                <div className="container game-section__container">
                    <GameTable currentLevel={currentLevel} />
                </div>
            </section>
        </div>
    )
}
export default Game;

//timer.innerHTML = `${min}:${seconds < 10 ? '0' + seconds : seconds}`;

//timer.innerHTML += `${min}:${seconds}`;
//timer.classList.add('timer');