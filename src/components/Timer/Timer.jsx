import React, {useState, useEffect, useCallback} from "react";
import textToSpeech from "../speech.helper"
import "./timer.styles.scss"

export default function Timer(props){
    const { runTime, alternate, isResting, precount, setPrecount, nextExercise, currentExercise, resetWorkout } = props;
    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const timeRemaining = runTime - seconds;

    const timer = useCallback(() => {

        if(precount > 0) {

            if(precount > 3){
                textToSpeech('three');
            } else if(precount === 3){
                textToSpeech('two');
            } else if(precount === 2){
                textToSpeech('one');
            } else {
                textToSpeech(`Go. ${currentExercise}`);
            }

            setPrecount(precount - 1)
            return
        } 

        if(runTime === "stop"){
            stop();
            return
        }

        if(timeRemaining === 0){
            if(isResting){
                textToSpeech(nextExercise)
            } else {
                textToSpeech(`Next up, ${nextExercise}`)
            }

            alternate();
            setSeconds(0);
            return
        }

        setSeconds(seconds + 1)

        if(timeRemaining > 6){
            return
        } else if (timeRemaining === 6 && !isResting){
            textToSpeech('five');
        } else if(timeRemaining === 5 && !isResting){
            textToSpeech('four');
        } else if(timeRemaining === 4){
            textToSpeech('three');
        } else if(timeRemaining === 3){
            textToSpeech('two');
        } else if(timeRemaining === 2){
            textToSpeech('one');
        } else if (timeRemaining === 1 && isResting){
            textToSpeech('go');
        }
    }, [seconds, runTime, alternate, timeRemaining, precount, isResting, setPrecount, nextExercise, currentExercise])
    
    useEffect(
        () => {
            if(isRunning){
                const id = setInterval(timer, 1000);
                return () => clearInterval(id);
            }
        },
        [isRunning, timer]
    );

    const start = () => {
        setIsRunning(true);
    }

    const stop = () => {
        setIsRunning(false)
    }

    const reset = () => {
        setIsRunning(false)
        setSeconds(0);
    }

    const handleReset = () => {
        resetWorkout();
        reset();
    }

    return (
        <div className="timer-container">
            <div className="timer-clock">
                {precount > 0 && isRunning ? 
                    <div>
                        {precount > 3 ? "START" : precount}
                    </div>
                :
                    <div>
                        {!isNaN(runTime) ? timeRemaining : 0}
                    </div>
                }    
                <div className="timer-buttons">
                    <button onClick={start}>Start</button>
                    <button onClick={stop}>Stop</button>
                    <button onClick={reset}>Reset Timer</button>
                    <button onClick={handleReset}>Restart Workout</button>

                </div>
            </div>
        </div>
    )
}

