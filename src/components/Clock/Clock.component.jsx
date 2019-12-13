import React, {useState} from "react";
import Timer from "../Timer/Timer";
import "./clock.styles.scss";

export default function Watch(props){
    const { exerciseList, workoutInterval, restInterval } = props;
    const [isResting, setIsResting] = useState(false);
    const [index, setIndex] = useState(0);
    const [precount, setPrecount] = useState(4);

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
    }

    if(index < exerciseList.length){
        currentExercise = exerciseList[index].name;

        if(exerciseList.length === 1 || index + 1 === exerciseList.length){
            nextExercise = "Celebrate"
        } else {
            nextExercise = exerciseList[index + 1].name
        }
    } else {
        time = "stop"
    }
    
    return (
        index < exerciseList.length ? 
            <div className="clock-container">
                <div> {index + 1}/{exerciseList.length}</div>
                <div>Current: {isResting ? "Rest" : currentExercise}</div>
                <Timer 
                    runTime={time} 
                    alternate={alternateBetweenResting} 
                    precount={precount} 
                    setPrecount={setPrecount} 
                    isResting={isResting}
                    currentExercise={currentExercise}
                    nextExercise={nextExercise}
                    resetWorkout={resetWorkout}
                />
                <div>Next: {nextExercise}</div>
            </div> 
        :
            <div className="clock-container">
                <div> {index}/{exerciseList.length}</div>
                <div>Done</div>
                <Timer 
                    runTime={time} 
                    alternate={alternateBetweenResting} 
                    precount={precount} 
                    setPrecount={setPrecount} 
                    isResting={isResting}
                    currentExercise={currentExercise}
                    nextExercise={nextExercise}
                    resetWorkout={resetWorkout}
                />
            </div> 
    )
}