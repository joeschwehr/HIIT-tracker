import React, {useState} from "react";
import Timer from "../Timer/Timer";
import "./clock.styles.scss";

export default function Watch(props){
    const { exerciseList, workoutInterval, restInterval } = props;
    const [isResting, setIsResting] = useState(false);
    const [index, setIndex] = useState(0);
    const [precount, setPrecount] = useState(4);
    const [reset, setReset] = useState(false);

    let currentExercise = "";
    let nextExercise = "";
    let time = isResting ? restInterval : workoutInterval;

    const alternateBetweenResting = () => {
        
        if(!isResting){
            setIsResting(true)
            time = restInterval;
        } else {
            setIndex(index + 1);
            setIsResting(false)
            time = workoutInterval;
        }
    }

    const resetWorkout = () => {
        setIndex(0);
        setPrecount(4);
        setIsResting(false);
        setReset(true);
        setTimeout(() => setReset(false), 250)
    }

    if(index < exerciseList.length){
        currentExercise = exerciseList[index].name;

        if(exerciseList.length === 1 || index + 1 === exerciseList.length){
            nextExercise = null
        } else {
            nextExercise = exerciseList[index + 1].name
        }
    } else {
        time = "stop"
    }


    let exerciseIndexMsg = `${index + 1}/${exerciseList.length}`
    let currentExerciseMsg = <div className="clock-exercise">
                                {isResting ? "Rest" : currentExercise}
                            </div>

    if(index >= exerciseList.length){
        exerciseIndexMsg = `${index}/${exerciseList.length}`;
        currentExerciseMsg = ""
    }
    
    return (
        <div>
            <div className="clock-container">
                <div>{exerciseIndexMsg}</div>
                <div className="clock-current-exercise">
                    {currentExerciseMsg}
                </div>
                <Timer 
                    runTime={time} 
                    alternate={alternateBetweenResting} 
                    precount={precount} 
                    setPrecount={setPrecount} 
                    isResting={isResting}
                    currentExercise={currentExercise}
                    nextExercise={nextExercise}
                    reset={reset}
                />
                <div className="clock-up-next">
                    {nextExercise === null ? " " : 
                        <div>
                            Next Up
                            <div className="clock-next-exercise">{nextExercise}</div>
                        </div>
                    }
                </div>
            </div>
            <div className="clock-start-over-container">
                <button className="clock-button" onClick={resetWorkout}>Restart Workout</button>
            </div>
        </div> 
    )
}