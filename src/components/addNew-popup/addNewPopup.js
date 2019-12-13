import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from "./addNew-popup.styles"

export default function FormDialog(props) {
    const classes = useStyles();
    const [newExercise, setNewExercise] = React.useState("");
    const open = true;

  const handleClose = () => {
    props.closePopup();
  };

  const handleSubmit = () => {
      handleClose();
      props.addNewExercise(newExercise);
      setNewExercise("");
  }

  const handleChange = (e) => {
      setNewExercise(e.target.value)
  }

  return (
    <div className={classes.errorSuppresion}>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Reorder exercises by dragging.
            </DialogContentText>
            <TextField
              onChange={handleChange}
              autoFocus
              margin="dense"
              id="name"
              label="EXERCISE NAME"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary" disabled={newExercise.length === 0}>
              Add
            </Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}
