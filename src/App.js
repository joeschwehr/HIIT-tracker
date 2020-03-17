import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import AddNewPopup from './components/addNew-popup/addNewPopup';
import SettingsPopup from './components/settingsPopup/settingsPopup';
import Clock from './components/Clock/Clock.component.jsx';

import exerciseList from './exerciseList';
import uuid from 'uuid/v4';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exerciseList: JSON.parse(window.localStorage.getItem('exerciseList')) || exerciseList,
            workoutInterval: JSON.parse(window.localStorage.getItem('workoutInterval')) || 30,
            restInterval: JSON.parse(window.localStorage.getItem('restInterval')) || 10,
            isIntervalDialogOpen: false,
            isAddNewDialogOpen: false
        };
    }

    onListChange = newList => {
        this.setState({ exerciseList: newList });
        window.localStorage.setItem('exerciseList', JSON.stringify(newList));
    };

    openAddNew = () => {
        this.setState({ isAddNewDialogOpen: true });
    };

    openSettingsWindow = () => {
        this.setState({ isIntervalDialogOpen: true });
    };

    closeAddNewPopup = () => {
        this.setState({ isAddNewDialogOpen: false });
    };

    closeSettingsWindow = () => {
        this.setState({ isIntervalDialogOpen: false });
    };

    addNewExercise = newExercise => {
        const updatedList = [...this.state.exerciseList, { id: uuid(), name: newExercise }];
        this.setState({ exerciseList: updatedList });
        window.localStorage.setItem('exerciseList', JSON.stringify(updatedList));
    };

    removeExercise = exerciseToRemove => {
        const updatedList = this.state.exerciseList.filter(
            exercise => exercise.id !== exerciseToRemove.id
        );
        this.setState({ exerciseList: updatedList });
        window.localStorage.setItem('exerciseList', JSON.stringify(updatedList));
    };

    editExercise = updatedExercise => {
        const existingList = this.state.exerciseList;
        const updatedList = existingList.map(exercise => {
            if (exercise.id === updatedExercise.id) {
                return updatedExercise;
            } else {
                return exercise;
            }
        });
        this.setState({ exerciseList: updatedList });
        window.localStorage.setItem('exerciseList', JSON.stringify(updatedList));
    };

    updateIntervals = newTimes => {
        const { workoutInterval, restInterval } = newTimes;
        this.setState({ workoutInterval: workoutInterval, restInterval: restInterval });
        window.localStorage.setItem('workoutInterval', JSON.stringify(workoutInterval));
        window.localStorage.setItem('restInterval', JSON.stringify(restInterval));
    };

    reset = () => {
        this.setState({ exerciseList: exerciseList });
        window.localStorage.setItem('exerciseList', JSON.stringify(exerciseList));
    };

    resetAll = () => {
        this.setState({ exerciseList: exerciseList });
        window.localStorage.setItem('exerciseList', JSON.stringify(exerciseList));

        this.setState({ workoutInterval: 30, restInterval: 10 });
        window.localStorage.setItem('workoutInterval', JSON.stringify(30));
        window.localStorage.setItem('restInterval', JSON.stringify(10));
    };

    render() {
        const {
            exerciseList,
            isAddNewDialogOpen,
            isIntervalDialogOpen,
            workoutInterval,
            restInterval
        } = this.state;
        const {
            onListChange,
            openAddNew,
            closeAddNewPopup,
            addNewExercise,
            openSettingsWindow,
            closeSettingsWindow,
            updateIntervals,
            removeExercise,
            reset,
            resetAll,
            editExercise
        } = this;
        return (
            <div className='App'>
                <Sidebar
                    exerciseList={exerciseList}
                    onListChange={onListChange}
                    addNew={openAddNew}
                    openSettingsWindow={openSettingsWindow}
                    removeExercise={removeExercise}
                    reset={reset}
                    resetAll={resetAll}
                    editExercise={editExercise}
                />
                {isAddNewDialogOpen && (
                    <AddNewPopup closePopup={closeAddNewPopup} addNewExercise={addNewExercise} />
                )}
                {isIntervalDialogOpen && (
                    <SettingsPopup
                        closePopup={closeSettingsWindow}
                        intervals={{ w: workoutInterval, r: restInterval }}
                        updateIntervals={updateIntervals}
                    />
                )}
                <Clock
                    exerciseList={exerciseList}
                    workoutInterval={workoutInterval}
                    restInterval={restInterval}
                />
            </div>
        );
    }
}

export default App;
