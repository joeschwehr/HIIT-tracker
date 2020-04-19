import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import AddNewPopup from './components/addNew-popup/addNewPopup';
import SettingsPopup from './components/settingsPopup/settingsPopup';
import ConfirmPopup from './components/confirmPopup/confirmPopup';

import Clock from './components/Clock/Clock.component.jsx';
import { voiceInit, iosVoices } from './components/speech.helper';

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
            isAddNewDialogOpen: false,
            isConfirmDialogOpen: false,
            isMuted: false
        };
    }

    componentDidMount() {
        voiceInit(); // preload voices

        if (window.orientation >= -1) {
            iosVoices();
        }
    }

    onListChange = newList => {
        this.setState({ exerciseList: newList });
        window.localStorage.setItem('exerciseList', JSON.stringify(newList));
    };

    openAddNew = () => {
        this.setState({ isAddNewDialogOpen: true });
    };
    closeAddNewPopup = () => {
        this.setState({ isAddNewDialogOpen: false });
    };

    openSettingsWindow = () => {
        this.setState({ isIntervalDialogOpen: true });
    };
    closeSettingsWindow = () => {
        this.setState({ isIntervalDialogOpen: false });
    };

    openConfirmPopup = () => {
        this.setState({ isConfirmDialogOpen: true });
    };
    closeConfirmPopup = () => {
        this.setState({ isConfirmDialogOpen: false });
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

    resetExercises = () => {
        this.setState({ exerciseList: exerciseList });
        window.localStorage.setItem('exerciseList', JSON.stringify(exerciseList));
    };

    toggleMute = () => {
        const mute = this.state.isMuted;
        this.setState({ isMuted: !mute });
    };

    // resetAll = () => {
    //     this.setState({ exerciseList: exerciseList });
    //     window.localStorage.setItem('exerciseList', JSON.stringify(exerciseList));

    //     this.setState({ workoutInterval: 30, restInterval: 10 });
    //     window.localStorage.setItem('workoutInterval', JSON.stringify(30));
    //     window.localStorage.setItem('restInterval', JSON.stringify(10));
    // };

    render() {
        const {
            exerciseList,
            isAddNewDialogOpen,
            isIntervalDialogOpen,
            isConfirmDialogOpen,
            workoutInterval,
            restInterval,
            isMuted
        } = this.state;
        const {
            onListChange,
            openAddNew,
            closeAddNewPopup,
            addNewExercise,
            openSettingsWindow,
            closeSettingsWindow,
            openConfirmPopup,
            closeConfirmPopup,
            updateIntervals,
            removeExercise,
            resetExercises,
            editExercise,
            toggleMute
        } = this;

        const isSafariMobile =
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && window.orientation > -1;
        return (
            <div className='App' style={isSafariMobile ? { justifyContent: 'flex-start' } : null}>
                <Sidebar
                    exerciseList={exerciseList}
                    onListChange={onListChange}
                    addNew={openAddNew}
                    openSettingsWindow={openSettingsWindow}
                    openConfirmPopup={openConfirmPopup}
                    removeExercise={removeExercise}
                    resetExercises={resetExercises}
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
                {isConfirmDialogOpen && (
                    <ConfirmPopup closePopup={closeConfirmPopup} resetExercises={resetExercises} />
                )}
                <Clock
                    exerciseList={exerciseList}
                    workoutInterval={workoutInterval}
                    restInterval={restInterval}
                    isMuted={isMuted}
                    toggleMute={toggleMute}
                />
            </div>
        );
    }
}

export default App;
