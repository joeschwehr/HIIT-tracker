import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './vox-popup.styles';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import { useState, useEffect } from 'react';

export default function FormDialog(props) {
    const classes = useStyles();
    const [newPrompt, setnewPrompt] = useState('');
    const open = true;

    const handleClose = () => {
        props.closePopup();
    };

    const handleSubmit = () => {
        handleClose();
        props.updatePrompt(item.id, newPrompt);
    };

    const handleOff = () => {
        handleClose();
        props.updatePrompt(item.id, false);
    };

    const handleChange = (e) => {
        setnewPrompt(e.target.value);
    };

    const { item } = props;

    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: 3,
            top: 3,
            color: theme.palette.grey[500],
            transition: '.3s all ease-in-out',
            padding: 7,

            '&:hover': {
                backgroundColor: theme.palette.grey[700],
            },
        },
    });

    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root}>
                <Typography variant='h6'>{children}</Typography>
                {onClose ? (
                    <IconButton
                        aria-label='close'
                        className={classes.closeButton}
                        onClick={onClose}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });

    // component did mount hook
    useEffect(() => {
        setnewPrompt(
            !item.alert ? 'Switch Sides' : item.alert === false ? 'Switch Sides' : item.alert
        );
    }, [item]);

    return (
        <div className={classes.errorSuppresion}>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                {/* <DialogTitle id='form-dialog-title'>{item.name.toUpperCase()}</DialogTitle> */}
                <DialogTitle id='customized-dialog-title' onClose={handleClose}>
                    {item.name.toUpperCase()}
                    <DialogContentText>Halfway Prompt</DialogContentText>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={handleChange}
                        autoFocus
                        margin='dense'
                        id='name'
                        label='VOICE OUTPUT'
                        value={newPrompt}
                        type='text'
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOff} color='primary'>
                        {item.alert ? 'Deactivate Prompt' : 'Cancel'}
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        color='primary'
                        disabled={newPrompt.length ? false : true}
                    >
                        {item.alert ? 'Update PROMPT' : 'Turn ON Prompt'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
