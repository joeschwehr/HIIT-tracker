import React from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SettingsIcon from '@material-ui/icons/Settings';

import DraggableList from "react-draggable-list";
import SidebarListElement from "./Sidebar-list-element"

import useStyles from './sidebarStyles';

export default function SwipeableTemporaryDrawer(props) {
  const { exerciseList, onListChange, addNew, openSettingsWindow, removeExercise, reset, editExercise } = props;
  const len = exerciseList.length;
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  return (
    <div>
      <Button className={classes.btn} onClick={toggleDrawer(true)}>Customize Your Workout</Button>

      <SwipeableDrawer
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          className={classes.list}
          role="presentation"
        >
          <div className={classes.sidebarHeader}>
            <h1 className={classes.sidebarTitle}>Your Workout</h1>
            <ChevronLeftIcon className={classes.sidebarChevron} onClick={toggleDrawer(false)} fontSize="large" />
          </div>

          <div className={classes.sidebarSubitle}>
            {len} {len === 1 ? "Exercise" : "Exercises"}
          </div>

          <div className={classes.sidebarSettings} onClick={openSettingsWindow}>
            <div className={classes.settingsIcon} fontSize="small"><SettingsIcon /></div>
            <div className={classes.settingsText}>Set Intervals</div>
          </div>

          <Divider />

          <div className={classes.sidebarAddNew} onClick={addNew}>
              Add New Exercise
            </div>

          <List >
            <DraggableList 
              list={exerciseList} 
              itemKey="id"
              template={SidebarListElement} 
              onMoveEnd={newList => onListChange(newList)}
              padding={0}
              constrainDrag={true}
              commonProps={{removeExercise: removeExercise, editExercise: editExercise}}
            />
          </List>

          {exerciseList.length === 0 && 
            <div className={classes.sidebarReset} onClick={reset}>
              RESET EXERCISES
            </div>
          }

        </div>
      </SwipeableDrawer>

    </div>
  );
}
