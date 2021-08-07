import { makeStyles } from '@material-ui/core';

const useGlobalStyle = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        "& header": {
          color: "#9c27b0",
          fontSize: "18px",
          marginBottom: "30px"
      },
    },

    navigationButtons: {
      display: "flex",
      "& button":{
        margin: "20px 15px"
      }
    },
    nextButton: {
      color: "orange"
    },
    backButton: {
      color: "blue"
    }
  }));

export {useGlobalStyle};