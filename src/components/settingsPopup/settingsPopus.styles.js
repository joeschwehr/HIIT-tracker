import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    inputHolder: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '300px'
    },
    formInput: {
        margin: '20px 10px 0px 0',
        padding: '25px 0'
    },
    '@global': {
        // You should target [class*="MuiButton-root"] instead if you nest themes.

        '.MuiTypography-root': {
            textAlign: 'center',
            fontSize: '14px',
            color: 'var(--popup-text)',
            letterSpacing: '1px',
            fontFamily:
                '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
        },
        '.MuiDialog-paper': {
            color: 'var(--popup-title)',
            backgroundColor: 'var(--popup-bg)'
        },
        '.MuiDialogContent-root > div': {
            paddingTop: '15px',
            paddingBottom: '0px',
            paddingLeft: '5px',

            '@media (max-width: 400px)': {
                paddingLeft: '0px',
                paddingBottom: '10px',
                transform: 'scale(0.85)'
            }
        },
        '.MuiDialogContent-root': {
            padding: '0px',
            overflow: 'hidden'
        },
        '.MuiInputBase-input': {
            fontSize: '70px',
            fontFamily:
                '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            fontWeight: '700',
            textAlign: 'center',
            color: 'var(--popup-title)',
            padding: '0px'

            // '@media (max-width: 400px)': {
            //     fontSize: '55px'
            // },

            // '@media (max-width: 345px)': {
            //     fontSize: '35px'
            // }
        },
        '.MuiButton-root': {
            fontFamily:
                '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            fontSize: '12px',
            letterSpacing: '1.3px',
            opacity: '.7',
            transition: '.4s all',
            color: 'var(--popup-btn-text)',

            '&:hover': {
                transform: 'scale(1.05)',
                opacity: '1',
                color: 'var(--popup-btn-text)'
            }
        },
        '.MuiDialogContentText-root': {
            color: 'var(--popup-text)'
        },
        '.MuiFormLabel-root, .MuiInputLabel-root.Mui-focused': {
            top: '57px',
            left: '9px',
            paddingLeft: '5px',
            fontFamily:
                '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',

            fontSize: '18px',
            letterSpacing: '1.2px',
            textAlign: 'center',
            width: '100%',
            color: 'var(--popup-text)'

            // '@media (max-width: 345px)': {
            //     top: '30px',
            //     left: '0px'
            // }
        },
        '.MuiInput-root': {
            top: '-15px'
        },
        '.MuiInput-underline': {
            '&:hover': {
                '&:not(.Mui-disabled)': {
                    '&:before': {
                        borderBottom: '1px solid rgba(60, 60, 60, 0)'
                    }
                }
            },

            '&:before': {
                borderBottom: '1px solid rgba(60, 60, 60, 0)'
            },
            '&:after': {
                // borderBottom: '1px solid var(--popup-underline)'
                borderBottom: '1px solid rgba(60, 60, 60, 0)'
            }
        },

        'label + .MuiInput-formControl': {
            marginTop: '0px',
            marginLeft: '0px',
            caretColor: 'var(--popup-underline)'
        },

        '.MuiFormControl-root': {
            margin: '0px',
            padding: '0 0',
            width: '40%',
            paddingBottom: '10px'

            // '@media (max-width: 345px)': {
            //     paddingRight: '30px'
            // }
        },

        '.MuiInputBase-root input': {
            height: '68px',
            width: '110px',
            paddingLeft: '10px',
            borderBottom: '1px solid var(--popup-underline)'

            // '@media (max-width: 345px)': {
            //     transform: 'scale(.75)',
            //     height: '75px',
            //     height: 'unset'
            // }
        }
    }
});
