import React, { Fragment, useState } from "react";
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

import "../App.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    [theme.breakpoints.down("md")]: {
      maxWidth: 470,
    },
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
  const [imgState, setImgState] = useState({
    open: false,
    currentImg: "",
  });
  const classes = useStyles();
  const theme = useTheme();

  const handleOpen = (img) => {
    setImgState({ open: true, currentImg: img });
  };

  const handleClose = (img) => {
    setImgState({ open: false, currentImg: "" });
  };

  const bull = <span className={classes.bullet}>•</span>;
  let image = props.location.dataProps.data;
  console.log(image); 
  let labels = props.location.dataProps.labels;
  console.log(props.location.dataProps.labels);
  let i = -1;
  // return <img alt="" src={srcValue} />;
  return (
    <Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        {image.map((row) => {
          let normalSizedgraph = "data:image/svg+xml;base64," + row[0];
          let bigGraph = "data:image/svg+xml;base64," + row[1];
          i++;
          return (
            <Grid key={row} item xs={12}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={normalSizedgraph}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {labels[i]}
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
