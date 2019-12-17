import React, {useState, useEffect, useCallback} from "react";
import PauseIcon from '@material-ui/icons/PauseCircleFilled';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
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
            setSeconds(seconds + 1) //timeremaining should be 0 after this. Triggers "great job"
            textToSpeech("Great job", "Samantha")
        } else {
            if(isResting) {
                textToSpeech(`Go. ${nextExercise}`)
            } else {
                textToSpeech(`Rest. Next up, ${nextExercise}`, "Samantha")
            }

            alternate();
            setSeconds(0);
        }

    }, [isResting, nextExercise, alternate, seconds])


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

        if (timeRemaining <= 6) {    
            if(!isResting)
                textToSpeech(timeRemaining - 1, "Samantha");
            else if (timeRemaining <= 4)
                textToSpeech(timeRemaining - 1);
        } 

        setSeconds(seconds + 1)
        
    }, [seconds, runTime, timeRemaining, precount, isResting, goPrecount, timeZero ])
    
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

    const timerButtons =  <div className="icon-button">
                                {!isRunning ? 
                                    <PlayCircleFilledIcon fontSize="large" onClick={start}/> 
                                    :
                                    <PauseIcon fontSize="large" onClick={stop}/>
                                }
                            </div>
                        
    
    const isWorkingOut = (timeRemaining === 0 && nextExercise !== null && isResting) || (isRunning && !isResting && precount <=0 && timeRemaining >= 1);

    return (
        <div 
            className="timer-gradient-wrapper"
            style={isWorkingOut ? {background: "linear-gradient(200deg, var(--highlight-color), var(--deeper-color))"} : null} 
        >
            <div className="timer-container">
                    {precount >= 0 && isRunning ? 
                            precount === 0 ? <div className="timer-font">GO{timerButtons}</div>
                                    : precount <= 3 ? <div className="timer-font">{precount}{timerButtons}</div>
                                        : reset ? <div className="timer-font">{timeRemaining}{timerButtons}</div>
                                            : <div className="timer-fancy">Let's go!</div> //prevents flicker upon reset
                                            
                    : isNaN(runTime) ? <div className="timer-font">0 {timerButtons}</div>
                        : timeRemaining !== 0 ? <div className="timer-font">{timeRemaining}{timerButtons}</div>
                            : nextExercise === null ? <div className="timer-fancy">GREAT JOB!</div>
                                : isResting ? <div className="timer-font">GO{timerButtons}</div> 
                                    : <div className="timer-font">0{timerButtons}</div>
                    }    
            </div>
        </div>
    )
}

