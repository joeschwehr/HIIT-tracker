import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    confirmRoot: {
        display: 'flex',
    },
    '@global': {
        '.MuiTypography-root': {
            lineHeight: '20px',
            textAlign: 'center',
            fontSize: '14px',
            color: 'white',
            letterSpacing: '.4px',
            fontFamily:
                '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        },
        '.MuiDialogTitle-root': {
            padding: '6px 0 10px 0',
        },
        '.MuiDialog-paper': {
            color: 'var(--popup-title)',
            backgroundColor: 'var(--popup-bg)',
            width: '240px',
            padding: '20px',
            overflow: 'hidden',
        },
        '.MuiDialogActions-root': {
            padding: '0',
            justifyContent: 'center',
        },
        '.MuiButton-root': {
            fontFamily:
                '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            opacity: '.7',
            transition: '.4s all',
            color: 'var(--popup-btn-text)',

            '&:hover': {
                transform: 'scale(1.05)',
                opacity: '1',
                color: 'var(--popup-btn-text)',
            },
        },
    },
});
