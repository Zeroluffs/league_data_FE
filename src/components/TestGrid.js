import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import SearchBar from "../components/SearchBar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "../App.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Paper from "@material-ui/core/Paper";
import { selectAllGraphs } from "../features/graphs/graphsSlice";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/graphs/graphsSlice";
import { useHistory } from "react-router-dom";
import "../styles/Datapage.css";
import captura from "../images/Captura1.PNG";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
//   cardRoot: {
//     width: "60%",
//     [theme.breakpoints.down("md")]: {
//       maxWidth: 470,
//     },
//   },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  media: {
    overflow: "auto",
    height: 0,
    paddingTop: "73%", // 16:9
  },
}));
function TestGrid() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.cardRoot}>
              <CardMedia
                className={classes.media}
                image={captura}
                title="graph"
              />
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  sup
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton size="medium">
                  <ZoomInIcon />
                </IconButton>
              </CardActions>
            </Card>{" "}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.cardRoot}>
              <CardMedia
                className={classes.media}
                image={captura}
                title="graph"
              />
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  sup
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton size="medium">
                  <ZoomInIcon />
                </IconButton>
              </CardActions>
            </Card>{" "}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.cardRoot}>
              <CardMedia
                className={classes.media}
                image={captura}
                title="graph"
              />
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  sup
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton size="medium">
                  <ZoomInIcon />
                </IconButton>
              </CardActions>
            </Card>{" "}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.cardRoot}>
              <CardMedia
                className={classes.media}
                image={captura}
                title="graph"
              />
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  sup
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton size="medium">
                  <ZoomInIcon />
                </IconButton>
              </CardActions>
            </Card>{" "}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default TestGrid;
