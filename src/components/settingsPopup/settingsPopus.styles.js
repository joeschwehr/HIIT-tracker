import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    inputHolder: {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly"
    },
    formInput: {
        margin: "20px 10px 0px 0",
        padding: "25px 0",
        width: "33%",
    },
    '@global': {
        // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.MuiDialog-paper': {
          color: "var(--popup-title)",
          backgroundColor: "var(--popup-bg)"
        },
        '.MuiInputBase-input': {
            color: "var(--popup-title)"
        },
        '.MuiButton-root': {
            color: "var(--popup-btn-text)",
        },
        '.MuiDialogContentText-root': {
            color: "var(--popup-text)",
        },
        '.MuiInputLabel-root.Mui-focused': {
            color: "var(--popup-text)"
        },
        '.MuiFormLabel-root': {
            color: "var(--popup-text)",
        },
        '.MuiInput-underline': {
            '&:after': {
                borderBottom: "1px solid var(--popup-underline)",
            }
        }
      },

})