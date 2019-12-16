import React, {useState, useEffect, useCallback} from "react";
import PauseIcon from '@material-ui/icons/PauseCircleFilled';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import textToSpeech from "../speech.helper"
import "./timer.styles.scss"

export default function Timer(props){
    const { runTime, alternate, isResting, precount, setPrecount, nextExercise, currentExercise, reset } = props;
    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const timeRemaining = runTime - seconds;

    const goPrecount = useCallback(() => {

        if(precount === 1)
            textToSpeech(`Go. ${currentExercise}`);
        else if (precount > 0)
            textToSpeech(precount - 1);

        setPrecount(precount - 1);
        
    }, [currentExercise, precount, setPrecount])


    const timeZero = useCallback(() => {

        if(nextExercise === null){
            setIsRunning(false)
        } else {
            if(isResting) {
                textToSpeech(`Go. ${nextExercise}`)
            } else {
                textToSpeech(`Rest. Next up, ${nextExercise}`, "Samantha")
            }

            alternate();
            setSeconds(0);
        }

    }, [isResting, nextExercise, alternate])


    const timer = useCallback(() => {

        if(precount >= 0) {
            goPrecount();
            return
        } 

        if(runTime === "stop") {
            stop();
            return
        }

        if(timeRemaining <= 1) {
            timeZero();
            return
        }

        if (timeRemaining === 1 && nextExercise === null) {
            textToSpeech("Great job", "Samantha")
        // } else if (timeRemaining === 1) {
        //     isResting ? textToSpeech("go") : textToSpeech("Rest", "Samantha");
        } else if (timeRemaining <= 6) {
            
            if(!isResting)
                textToSpeech(timeRemaining - 1, "Samantha");
            else if (timeRemaining <= 4)
                textToSpeech(timeRemaining - 1);
        } 

        setSeconds(seconds + 1)
        
    }, [seconds, runTime, timeRemaining, precount, isResting, nextExercise, goPrecount, timeZero ])
    
    useEffect(
        () => {
            if(reset) {
                resetWorkout();
                return
            }

            if(isRunning){
                const id = setInterval(timer, 1000);
                return () => clearInterval(id);
            }
        }, [isRunning, timer, reset]
    );

    const start = () => {
        setIsRunning(true);
    }

    const stop = () => {
        setIsRunning(false)
    }

    const resetWorkout = () => {
        setIsRunning(false)
        setSeconds(0);
    }

    const timerButtons =  <div className="timer-buttons">
                            <div className="icon-button">
                                {!isRunning ? 
                                    <PlayArrowIcon fontSize="large" onClick={start}/> 
                                    :
                                    <PauseIcon fontSize="large" onClick={stop}/>
                                }
                            </div>
                            
                            <button className="timer-button" onClick={resetWorkout}>RESET CLOCK</button>
                         </div>
    
    const isWorkingOut = (timeRemaining === 0 && nextExercise !== null && isResting) || (isRunning && !isResting && precount <=0 && timeRemaining >= 1);

    return (
        <div className="timer-container" style={isWorkingOut ? {border: "5px solid var(--highlight-color"} : null}>
                {precount >= 0 && isRunning ? 
                        <div className="timer-font">
                            {precount === 0 ? "GO"
                                : precount <= 3 ? precount
                                    : reset ? timeRemaining : "READY" //prevents flicker upon reset
                            }
                            {timerButtons}
                        </div>
                :
                    isNaN(runTime) ? <div className="timer-font">0 {timerButtons}</div>
                    : 
                        timeRemaining !== 0 ? <div className="timer-font">{timeRemaining}{timerButtons}</div>
                        :
                            nextExercise === null ? <div className="timer-font">GREAT JOB!</div>
                            :
                                isResting ? <div className="timer-font">GO{timerButtons}</div> 
                                            : 
                                            <div className="timer-font">0{timerButtons}</div>

                }    
        </div>
    )
}

