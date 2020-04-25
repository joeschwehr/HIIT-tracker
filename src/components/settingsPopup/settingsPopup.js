import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './settingsPopus.styles';

export default function FormDialog(props) {
    const workoutInterval = props.intervals.w;
    const restInterval = props.intervals.r;
    const classes = useStyles();
    const [newWorkoutInterval, setWorkoutInterval] = React.useState(workoutInterval);
    const [newRestInterval, setRestInterval] = React.useState(restInterval);

    const open = true;

    const handleClose = () => {
        props.closePopup();
    };

    const handleSubmit = () => {
        handleClose();
        if (workoutInterval !== newWorkoutInterval || restInterval !== newRestInterval) {
            props.updateIntervals({
                workoutInterval: newWorkoutInterval,
                restInterval: newRestInterval
            });
        }
    };

    const handleChange = e => {
        if (e.target.id === 'Workout Interval') {
            setWorkoutInterval(Number(e.target.value));
            return;
        }

        setRestInterval(Number(e.target.value));
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>SET INTERVALS</DialogTitle>
                <DialogContent className={classes.root}>
                    <div className={classes.inputHolder}>
                        <TextField
                            className={classes.formInput}
                            onChange={handleChange}
                            id='Workout Interval'
                            label='EXERCISING'
                            type='number'
                            InputProps={{ inputProps: { min: 5, max: 10000 } }}
                            defaultValue={newWorkoutInterval}
                        />
                        <TextField
                            className={classes.formInput}
                            onChange={handleChange}
                            id='Rest Interval'
                            label='RESTING'
                            type='number'
                            InputProps={{ inputProps: { min: 1, max: 1000 } }}
                            defaultValue={newRestInterval}
                            onKeyDown={() => false}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleClose} color='primary'></Button> */}
                    <Button
                        onClick={handleSubmit}
                        color='primary'
                        disabled={
                            Number(newWorkoutInterval) <= 0 ||
                            Number(newRestInterval) <= 0 ||
                            newWorkoutInterval === '' ||
                            newRestInterval === ''
                        }
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
