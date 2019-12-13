import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar"
import AddNewPopup from "./components/addNew-popup/addNewPopup"
import SettingsPopup from "./components/settingsPopup/settingsPopup"
import Clock from './components/Clock/Clock.component.jsx';

import exerciseList from "./exerciseList"
import uuid from "uuid/v4"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      exerciseList: exerciseList,
      workoutInterval: 30,
      restInterval: 10,
      isIntervalDialogOpen: false,
      isAddNewDialogOpen: false,
    }
  }

  onListChange = (newList) => {
    this.setState({exerciseList: newList});
  }

  openAddNew = () => {
    this.setState({ isAddNewDialogOpen: true});
  }

  openSettingsWindow = () => {
    this.setState({ isIntervalDialogOpen: true})
  }

  closeAddNewPopup = () => {
    this.setState({ isAddNewDialogOpen: false})
  }

  closeSettingsWindow = () => {
    this.setState({ isIntervalDialogOpen: false})
  }

  addNewExercise = (newExercise) => {
    const updatedList = [...this.state.exerciseList, {id: uuid(), name: newExercise}]
    this.setState({exerciseList: updatedList})
  }

  removeExercise = (exerciseToRemove) => {
    const updatedList = this.state.exerciseList.filter(exercise => exercise.id !== exerciseToRemove.id)
    this.setState({exerciseList: updatedList})
  }

  editExercise = (updatedExercise) => {
    console.log("editing:", updatedExercise)
    const existingList = this.state.exerciseList;
    const updatedList = existingList.map(exercise => {
      if(exercise.id === updatedExercise.id){
        return updatedExercise;
      } else {
        return exercise;
      }
    })
    this.setState({exerciseList: updatedList})
  }

  updateIntervals = (newTimes) => {
    const {workoutInterval, restInterval} = newTimes;
    this.setState({workoutInterval: workoutInterval, restInterval: restInterval})
  }

  reset = () => {
    this.setState({exerciseList: exerciseList})
  }

  render(){
    const { exerciseList, isAddNewDialogOpen, isIntervalDialogOpen, workoutInterval, restInterval} = this.state;
    const { onListChange, openAddNew, closeAddNewPopup, addNewExercise, openSettingsWindow, closeSettingsWindow, 
            updateIntervals, removeExercise, reset, editExercise} = this;
    return (
      <div className="App">
          <Sidebar 
            exerciseList={exerciseList} 
            onListChange={onListChange} 
            addNew={openAddNew} 
            openSettingsWindow={openSettingsWindow}
            removeExercise={removeExercise}
            reset={reset}
            editExercise={editExercise}
          />
          {isAddNewDialogOpen && <AddNewPopup closePopup={closeAddNewPopup} addNewExercise={addNewExercise} />}
          {isIntervalDialogOpen && 
            <SettingsPopup closePopup={closeSettingsWindow} intervals={{w: workoutInterval, r: restInterval}} updateIntervals={updateIntervals} />
          }
          <Clock exerciseList={exerciseList} workoutInterval={workoutInterval} restInterval={restInterval} />
      </div>
    );
  }
}

export default App;
