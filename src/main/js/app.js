import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Container
} from "@material-ui/core";

import LogoImage from "./assets/images/logo.png";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    background: "#fff"
  },
  content: {
    position: "relative",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    padding: 0,
    maxWidth: "100%",
    minHeight: "100%"
  },
  side: {
    paddingTop: theme.spacing(4),
    backgroundColor: "black",
    color: "#f5f5f5",
    display: "flex",
    flexDirection: "column"
  },

  logoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1
  },

  bottomPush: {
    textAlign: "left",
    paddingBottom: 10,
    paddingLeft: 20,
    marginTop: 10,
    paddingRight: 20,

    "& img": {
      maxWidth: 160
    }
  }
}));



export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
          <CssBaseline />
          <div component="nav" className={classes.side} >

            <div className={classes.logoContainer}>
              <div className={classes.bottomPush}>
                <img src={LogoImage} />
              </div>
            </div>    
          </div>
                
          <main className={classes.content}>

            <Container
              maxWidth="lg"
              className={classes.container}
              id="central_window"
            >
              <div/>
            </Container>
          </main>
     
    </div>
  );
}

ReactDOM.render(
  <div>
        <Dashboard />
  </div>,
  document.getElementById("react")
);
