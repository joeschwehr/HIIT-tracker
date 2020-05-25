import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import AddNewPopup from './components/addNew-popup/addNewPopup';
import SettingsPopup from './components/settingsPopup/settingsPopup';
import ConfirmPopup from './components/confirmPopup/confirmPopup';
import VoxPopup from './components/voxPopup/voxPopup';

import { iosVoices } from './components/speech.helper';

import Clock from './components/Clock/Clock.component.jsx';

import exerciseList from './exerciseList';
import { v4 as uuidv4 } from 'uuid';

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
            isVoxDialogOpen: false,
            voxItem: null,
            isMuted: false,
            isRestarting: false,
        };
    }

    componentDidMount() {
        if (window.orientation >= -90) {
            iosVoices();
        }
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            window.speechSynthesis.speak(new SpeechSynthesisUtterance(' '));
        }, 200);
    }

    onListChange = (newList) => {
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

    openVoxPopup = (item) => {
        this.setState({ voxItem: item });
        this.setState({ isVoxDialogOpen: true });
    };
    closeVoxPopup = () => {
        this.setState({ isVoxDialogOpen: false });
    };
    updatePrompt = (id, newPrompt) => {
        const updatedList = this.state.exerciseList.map((exercise) => {
            if (exercise.id === id) {
                return { alert: newPrompt, id: exercise.id, name: exercise.name };
            } else {
                return exercise;
            }
        });

        this.setState({ exerciseList: updatedList });
        window.localStorage.setItem('exerciseList', JSON.stringify(updatedList));
    };

    addNewExercise = (newExercise) => {
        const updatedList = [
            ...this.state.exerciseList,
            { alert: false, id: uuidv4(), name: newExercise },
        ];
        this.setState({ exerciseList: updatedList });
        window.localStorage.setItem('exerciseList', JSON.stringify(updatedList));

        // sorry ;(
        if (!window.navigator.userAgent.includes('Edge')) {
            document.querySelector('.MuiPaper-root').scroll({
                top: document.querySelector('#exercise-list').clientHeight,
                behavior: 'smooth',
            });
        } else {
            document.querySelector('.MuiPaper-root').scrollTop += 50;
        }
    };
    removeExercise = (exerciseToRemove) => {
        const updatedList = this.state.exerciseList.filter(
            (exercise) => exercise.id !== exerciseToRemove.id
        );
        this.setState({ exerciseList: updatedList });
        window.localStorage.setItem('exerciseList', JSON.stringify(updatedList));
    };
    editExercise = (updatedExercise) => {
        const existingList = this.state.exerciseList;
        const updatedList = existingList.map((exercise) => {
            if (exercise.id === updatedExercise.id) {
                return updatedExercise;
            } else {
                return exercise;
            }
        });
        this.setState({ exerciseList: updatedList });
        window.localStorage.setItem('exerciseList', JSON.stringify(updatedList));
    };

    updateIntervals = (newTimes) => {
        const { workoutInterval, restInterval } = newTimes;
        this.setState({ workoutInterval: workoutInterval, restInterval: restInterval });
        window.localStorage.setItem('workoutInterval', JSON.stringify(workoutInterval));
        window.localStorage.setItem('restInterval', JSON.stringify(restInterval));
    };

    resetExercises = () => {
        this.setState({ exerciseList: exerciseList });
        window.localStorage.setItem('exerciseList', JSON.stringify(exerciseList));
        this.setState({ isRestarting: true });
    };

    updateRestarting = () => {
        this.setState({ isRestarting: false });
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
            isVoxDialogOpen,
            voxItem,
            workoutInterval,
            restInterval,
            isMuted,
            isRestarting,
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
            openVoxPopup,
            closeVoxPopup,
            updatePrompt,
            updateIntervals,
            removeExercise,
            resetExercises,
            editExercise,
            toggleMute,
            updateRestarting,
        } = this;

        const isSafariMobile =
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && window.orientation > -90;
        return (
            <div className='App' style={isSafariMobile ? { justifyContent: 'flex-start' } : null}>
                <Sidebar
                    exerciseList={exerciseList}
                    onListChange={onListChange}
                    addNew={openAddNew}
                    openSettingsWindow={openSettingsWindow}
                    openConfirmPopup={openConfirmPopup}
                    openVoxPopup={openVoxPopup}
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
                {isVoxDialogOpen && (
                    <VoxPopup
                        closePopup={closeVoxPopup}
                        resetExercises={resetExercises}
                        item={voxItem}
                        updatePrompt={updatePrompt}
                    />
                )}
                <Clock
                    style={{ zIndex: 1 }}
                    exerciseList={exerciseList}
                    workoutInterval={workoutInterval}
                    restInterval={restInterval}
                    isMuted={isMuted}
                    toggleMute={toggleMute}
                    isRestarting={isRestarting}
                    updateRestarting={updateRestarting}
                />
            </div>
        );
    }
}

export default App;
