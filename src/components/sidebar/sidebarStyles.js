import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({

    list: {
      width: 360,
      color: 'white',
      padding: '0 30px',
    }, 
    btn: {
      height: "4vh",
      padding: "10px 20px",
      textTransform: "uppercase",
      fontSize: ".7rem",
      letterSpacing: ".1rem",
      color: "var(--highlight-dim)",
      transition: "all .4s ease-in-out",
  
      '&:hover': {
        backgroundColor: "rgba(0, 0, 0, 0)",
        color: "var(--highlight-color)",
        letterSpacing: ".15rem",
      }
    },
    sidebarHeader: {
      display: "flex",
      alignItems: "center",
      paddingTop: "20px",
    },
    sidebarChevron: {
      display: "flex",
      alignContent: "center",
      marginTop: "3px",
      borderRadius: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.10)",
      marginLeft: "auto",
      transition: "all .6s",
      
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        transform: "scale(1.2)",
      }
    },
    sidebarTitle: {
        cursor: "default",
        margin: 0,

    },
    sidebarSubitle: {
      textTransform: "uppercase",
      fontWeight: 500,
      marginTop: "0px",
      padding: "0px 0px 10px 0px",
      display: "flex",
      alignItems: "center",
      fontSize: ".7rem",
      letterSpacing: ".1rem",
      cursor: "default",
    },

    sidebarSettings: {
      width: "45%",
      textTransform: "uppercase",
      fontSize: ".7rem",
      letterSpacing: ".1rem",
      display: "flex",
      alignItems: "center",
      padding: "5px 0 5px 0",
      borderRadius: 1,
      color: "rgba(255, 255, 255, 0.5)",
      transition: "all .3s",

      "&:hover": {
        color: "white",
        cursor: "pointer"
      }
      
    },
    
    settingsText: {
      paddingLeft: "10px",
      paddingBottom: "5px"
    },

    sidebarAddNew: {
        marginTop: "10px",
        marginBottom: "-6px",
        height: "46px",
        fontWeight: 500,
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",
        textTransform: "uppercase",
        fontSize: ".7rem",
        letterSpacing: ".1rem",
        color: "rgba(255, 255, 255, 0.527)",
        justifyContent: "center",
        transition: "all .3s",
        
        "&:hover": {
            color: "white",
            backgroundColor: "rgba(255, 255, 255, .15)",
            cursor: "pointer",
        }
    },

    sidebarReset: {
      marginTop: "40px",
      height: "46px",
      fontWeight: 500,
      padding: "0 20px",
      display: "flex",
      alignItems: "center",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",
      textTransform: "uppercase",
      fontSize: ".7rem",
      letterSpacing: ".1rem",
      color: "rgba(0, 0, 0, 0.7)",
      justifyContent: "center",
      backgroundColor: "rgba(255, 255, 255, .3)",
      transition: "all .3s",
      
      "&:hover": {
          color: "rgba(0, 0, 0, 0.9)",
          backgroundColor: "rgba(255, 255, 255, .7)",
          cursor: "pointer",
      }
  }
  });





