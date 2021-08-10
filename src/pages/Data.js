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
  let base64ImageString = Buffer.from(image, "binary").toString("base64");
  // console.log(base64ImageString);
  // console.log(typeof image);
  let damageGraph = "data:image/svg+xml;base64," + image[0][0];
  let goldGraph = "data:image/svg+xml;base64," + image[1][0];
  let bigDamage = "data:image/svg+xml;base64," + image[0][1];
  let bigGold = "data:image/svg+xml;base64," + image[1][1];



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
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={damageGraph}
              title="Paella dish"
            />
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Damage Graph
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => handleOpen(bigDamage)} size="large">
                <ZoomInIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={goldGraph}
              title="Paella dish"
            />
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Gold graph
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => handleOpen(bigGold)} size="small">
                <ZoomInIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
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
            {/* <Card className={classes.rootD}>
              <CardMedia
                className={classes.mediaD}
                image={goldGraph}
              ></CardMedia>
            </Card> */}
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
