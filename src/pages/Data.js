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

import { selectAllGraphs } from "../features/graphs/graphsSlice";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../features/graphs/graphsSlice";
import { useHistory } from "react-router-dom";
import "../styles/Datapage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    direction: "column",
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  rootD: {
    width: 1000,
    [theme.breakpoints.down("md")]: {
      maxWidth: 900,
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  media: {
    overflow: "auto",
    height: 0,
    paddingTop: "73%", // 16:9
  },
  mediaD: {
    height: 0,
    paddingTop: "60%", // 16:9
  },
  pos: {
    marginBottom: 12,
  },
}));
function Data(props) {
  const history = useHistory();
  const [locationKeys, setLocationKeys] = useState([]);
  const dispatch = useDispatch();
  const graphs = useSelector(selectAllGraphs);
  const [imgState, setImgState] = useState({
    open: false,
    currentImg: "",
  });
  const [images, setImages] = useState([]);
  const [labels, setLabels] = useState([]);
  const classes = useStyles();
  const theme = useTheme();

  const handleOpen = (img) => {
    setImgState({ open: true, currentImg: img });
  };

  const handleClose = (img) => {
    setImgState({ open: false, currentImg: "" });
  };

  const bull = <span className={classes.bullet}>•</span>;
  // let image = props.location.dataProps.data;
  // console.log(image);
  // let labels = props.location.dataProps.labels;
  // console.log(props.location.dataProps.labels);
  let i = -1;
  // return <img alt="" src={srcValue} />;

  // useEffect(() => {
  //   if (props.location.dataProps === undefined) {
  //     props.history.push("/");
  //   } else {
  //     // // setImages(props.location.dataProps.data);
  //     setImages(posts);
  //     console.log(posts);
  //     setLabels(props.location.dataProps.labels);
  //   }
  // }, [props]);
  useEffect(() => {
    return () => {
      if (history.action === "POP") {
        // Code here will run when back button fires. Note that it's after the `return` for useEffect's callback; code before the return will fire after the page mounts, code after when it is about to unmount.
        dispatch(reset());
      }
    };
  }, []);

  return (
    <Fragment>
      <Fab
        onClick={() => {
          props.history.push("/");
          dispatch(reset());
        }}
        color="primary"
        aria-label="add"
        className={classes.fab}
      >
        <ArrowBackIcon />
      </Fab>
      <div className="graphGrid">
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          spacing={1}
        >
          {graphs?.map((row) => {
            // let normalSizedgraph = "data:image/svg+xml;base64," + row[0];
            // let bigGraph = "data:image/svg+xml;base64," + row[1];
            let normalSizedgraph =
              "data:image/svg+xml;base64," + row.normalGraph;
            let bigGraph = "data:image/svg+xml;base64," + row.bigGraph;
            i++;
            return (
              <Grid item xs={12} sm={12} md={6} key={i}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image={normalSizedgraph}
                    title="graph"
                  />
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {row.label}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton
                      onClick={() => handleOpen(bigGraph)}
                      size="medium"
                    >
                      <ZoomInIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>

      {/* <div>
        <img alt="" className="imgTest" src={bigDamage}></img>
      </div> */}
      <div>
        <Dialog
          fullWidth={true}
          maxWidth={"md"}
          modal={false}
          open={imgState.open}
          onClose={handleClose}
        >
          <DialogContent>
            <img
              alt=""
              style={{ width: 2600, overflow: "auto" }}
              src={imgState.currentImg}
            ></img>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Fragment>
  );
}

export default Data;
