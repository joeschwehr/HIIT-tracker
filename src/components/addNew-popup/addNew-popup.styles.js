import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    errorSuppresion: {

    },

    '@global': {
        // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.MuiDialog-paper': {
          color: "var(--popup-title)",
          backgroundColor: "var(--popup-bg)",
          minWidth: "360px",
        },
        '.MuiInputBase-input': {
            color: "var(--popup-title)"
        },
        '.MuiDialogContentText-root': {
            color: "var(--popup-text)"
        },
        '.MuiInputLabel-root.Mui-focused': {
            color: "var(--popup-text)"
        },
        '.MuiFormLabel-root': {
            color: "var(--popup-text)"
        },
        '.MuiInput-underline': {
            '&:after': {
                borderBottom: "1px solid var(--popup-underline)",
            }
        },
        '.MuiButton-root': {
            color: "var(--popup-btn-text) ",
        },
    },

})