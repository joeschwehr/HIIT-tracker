import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    errorSuppresion: {},

    '@global': {
        // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.MuiDialog-paper': {
            color: 'var(--popup-title)',
            backgroundColor: 'var(--popup-bg)',
            minWidth: '360px'
        },
        '.MuiTypography-h6': {
            lineHeight: '1rem',
            letterSpacing: '-.3px',
            fontFamily:
                '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
        },
        '.MuiDialogTitle-root': {
            paddingTop: '25px',
            paddingBottom: '0px'
        },
        '.MuiDialogContentText-root': {
            color: 'var(--popup-text)',
            marginTop: '-6px',
            marginBottom: '30px',
            letterSpacing: '.3px',
            fontSize: '12px',
            textTransform: 'uppercase'
        },
        '.MuiInputBase-input': {
            color: 'var(--popup-title)',
            caretColor: 'var(--popup-underline)',

            letterSpacing: '.3px'
        },
        '.MuiInputLabel-root.Mui-focused': {
            color: 'var(--popup-text)'
        },
        '.MuiFormLabel-root': {
            color: 'var(--popup-text)'
        },
        '.MuiInput-underline': {
            '&:after': {
                borderBottom: '1px solid var(--popup-underline)'
            }
        },
        '.MuiButton-root': {
            color: 'var(--popup-btn-text) '
        }
    }
});
