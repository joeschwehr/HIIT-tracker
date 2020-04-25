import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './confirmPopus.styles';

export default function FormDialog(props) {
    const classes = useStyles();
    const open = true;

    const handleClose = () => {
        props.closePopup();
    };

    const handleSubmit = () => {
        handleClose();
        props.resetExercises();
    };

    return (
        <div className={classes.confirmRoot}>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>
                    REVERT ALL EXERCISES TO <br></br>7-MINUTE-WORKOUT?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color='primary'>
                        Reset Exercises
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
