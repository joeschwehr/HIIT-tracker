
export default {
  '@global': {
    "::-webkit-scrollbar": {
      "-webkit-appearance": "none",
      width: "7px",

    },
    
    "::-webkit-scrollbar-thumb": {
      borderRadius: "4px",
      backgroundColor: "rgba(255, 255, 255, .4)",
      "-webkit-box-shadow": "0 0 1px rgba(255, 255, 255, .5)",
      boxShadow: "0 0 1px rgba(255, 255, 255, .5)",
    },
  },

  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all .3s",
    
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .15)",
    }
  },
  
  itemDragged: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, .35)",
    border: "1px solid rgba(255, 255, 255, 0.363)",
  },
  
  title: {
    fontWeight: 500,
    padding: "0 20px",
    height: "46px",
    display: "flex",
    alignItems: "center",
  },

  iconContainer: {
      justifyContent: "flex-end",
  },

  editIcon: {
      color: "rgba(255, 255, 255, 0.301)",
      marginRight: "20px",
      zIndex: "20",
      transition: "all .3s",
  
      "&:hover": {
          color: "white",
      },
  },

  form: {
    display: "flex",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px 0px",
    margin: "2px, 0",
    height: "46px",

  },

  input: {
    width: "320px",
    fontWeight: 400,
    padding: "0 20px",
    fontSize: "1.1rem",
    color: "black",
    border: "none",

    "&:focus": {
      outline: "none"
    }
  },

  updateBtn: {
    height: "46px",
    width: "46px",
    borderRadius: 0,
    color: "green",
    border: "none",
    transition: "all .3s",
    backgroundColor: "rgba(255, 255, 255, .5)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.8)"
    }

  },

  dragHandle: {
      left: 0,
      opacity: 0,
      width: "100%",
      zIndex: 10,
      position: "absolute",
      
      "&:hover": {
          cursor: "all-scroll",
        },
  },
  
}




