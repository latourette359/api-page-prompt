import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Select,
  MenuItem,
  Button,
  TextField,
  Typography,
  Grid,
  Box
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import { getTableObj } from "./server_client"


const useStyles = makeStyles(theme => ({
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    width: 316
  },
  actionButton: {
    width: 92,
    marginRight: 20,
    textTransform: "capitalize"
  },
  saveButton: {
    background: "#2C98F0",
    color: "#ffffff"
  },
  titleLabel: {
    textAlign: "center",
    margin: "10px 20px 0 0",
    fontSize: "18px",
    lineHeight: "inherit"
  },
  form: {
    padding: "0 9px"
  },
  selectType: {
    width: 180,
    maxHeight: 46
  },
  displayFlex: {
    display: "flex"
  },
  tableContainer: {
    background: "#ffffff",
    width: "100%",
    minHeight: 286,
    marginTop: 20,
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  tableHeader: {
    borderBottom: "1px solid #E0E0E0",
    height: 55,
    fontSize: 12,
    fontWeight: "normal",
    color: "rgba(0, 0, 0, 0.56)",

    "& > div": {
      paddingLeft: 24,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    },

    "& > div:last-child": {
      width: "10%"
    }
  },
  casesRow: {
    "& > div:not(:last-child)": {
      width: "45% !important"
    }
  },
  tableFooter: {
    display: "flex",
    justifyContent: "flex-end"
  },
  tableAddIcon: {
    color: "#2C98F0",
    fontSize: 28
  },
  tableRow: {
    borderBottom: "1px solid #E0E0E0",
    padding: "6px 0",

    "& > div": {
      paddingLeft: 24,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    },

    "& > div:last-child": {
      width: "10%",
      paddingLeft: 0
    }
  },
  formInout: {
    border: "1px solid rgba(0, 0, 0, 0.36)",
    borderRadius: 4,
    height: 38,
    width: "85%",
    fontSize: 16,
    padding: 10
  }
}));

export default function DecisionTable(props) {
  const {
    row,
    rows,
    index,
    onDelete,
    onSave,
    onRuleChange,
    ruleSet,
    lastChecked,
    errorMessage,
    syntaxCheckFunc,
    handleActivate,
    ruleVersions
  } = props;

  const classes = useStyles();
  const _defaultAction = { case: "", action: "" };

  const [name, setName] = useState("New Title");
  const [field, setField] = useState("");
  const [actions, setActions] = useState([]);

  React.useEffect(() => {
    getTableObj().then(value => {
      setActions(value.actions);
      setField(value.field);
    })
  }, []);

  const handleTextChange = (type, value) => {
    if (type === "name") setName(value);
    if (type === "field") setField(value);
  };

  const onChangeTableText = (i, type, value) => {
    const _tempActions = [...actions];
    _tempActions[i][type] = value;
    setActions(_tempActions);
    let newRule = {
      ...row
    };
  };

  const onAddTableRow = () => {
    setActions(prevActions => [
      ...prevActions,
      _defaultAction
    ]);
  };

  const onDeleteTableRow = i => () => {
    const _tempActions = [...actions];
    _tempActions.splice(i, 1);
    setActions(_tempActions);
  };

  const generateRow = () => {
    return actions.map((item, i) => (
      <Grid
        key={i}
        container
        className={`${classes.tableRow} ${classes.casesRow}`}
      >
        
        
          <Grid item xs={6}>
            <input
              className={classes.formInout}
              value={item.case}
              onChange={event =>
                onChangeTableText(i, "case", event.target.value)
              }
            />
          </Grid>
        
        <Grid item xs={5}>
          <input
            onChange={event =>
              onChangeTableText(i, "action", event.target.value)
            }
            value={item.action}
            className={classes.formInout}

          />
        </Grid>
        <Grid item xs={1}>
          <IconButton aria-label="delete" onClick={onDeleteTableRow(i)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    ));
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} style={{ paddingRight: 40 }}>
          <form className={classes.form}>
            <Grid container>
              <Grid item xs={6} className={classes.displayFlex}>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  className={classes.titleLabel}
                >
                  Field
                </Typography>
                <input
                  onChange={event =>
                    handleTextChange("field", event.target.value)
                  }
                  value={field}
                  style={{ maxWidth: 400, marginRight: 10 }}
                />
              </Grid>
            </Grid>
            <div className={classes.tableContainer}>
              <div>
                
                  <Grid
                    container
                    className={`${classes.tableHeader} ${classes.casesRow}`}
                  >
                    <Grid item xs={6}>Case</Grid>
                    <Grid item xs={5}>Action</Grid>
                    <Grid item xs={1}></Grid>
                  </Grid>
                
                <div>{generateRow()}</div>
              </div>
              <div className={classes.tableFooter}>
                <IconButton onClick={onAddTableRow}>
                  <AddCircleIcon className={classes.tableAddIcon} />
                </IconButton>
              </div>
            </div>
          </form>

          <Box style={{ marginTop: 20, padding: "0 9px" }}>
            <Button
              variant="contained"
              color="secondary"
              float="right"
              className={classes.actionButton}
              onClick={() => false}
            >
              Delete
            </Button>

            <Button
              variant="contained"
              color="primary"
              float="right"
              className={`${classes.actionButton} ${classes.saveButton}`}
              onClick={() => false}
            >
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
