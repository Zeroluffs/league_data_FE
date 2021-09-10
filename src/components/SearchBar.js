import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import RegionSelect from "./RegionSelect";
import NumberSelect from "./NumberSelect";
import RoleSelect from "./RoleSelect";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import DataCheckbox from "./DataCheckbox";
import "../styles/DataSearch.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGraphs } from "../features/graphs/graphsSlice";
import CircularLoading from "./CircularLoading";
import { reset } from "../features/graphs/graphsSlice";
import { Typography } from "@material-ui/core";
const api = axios.create({
  baseURL: `http://127.0.0.1:8000/`,
});
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    margin: "auto",
    width: "60",
    borderRadius: "15px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [region, setRegion] = useState("");
  const [nGames, setNgames] = useState(0);
  const [role, setRole] = useState("");
  const [data, setData] = useState([]);
  const [summonerName, setSummonerName] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const apiStatus = useSelector((state) => state.graphs.status);
  const handleSubmit = (e) => {
    let ign = summonerName.split(" ").join("").toLowerCase();
    console.log("Summoner:", ign, "from", region);
    apiCall(summonerName, nGames);
    e.preventDefault();
  };

  const canSearch =
    addRequestStatus === "idle" || addRequestStatus === "failed";

  async function apiCall(summoner_name, nGames) {
    if (canSearch) {
      try {
        setAddRequestStatus("pending");

        let body = {
          summoner_name: summoner_name,
          nGames: nGames,
          region: region,
          role: role,
          data: data,
        };
        console.log(body);
        const response = await dispatch(fetchGraphs(body)).unwrap();
        console.log(response);
        setAddRequestStatus("idle");
        history.push({
          pathname: `/data`,
          dataProps: {
            data: response,
            labels: data,
          },
        });
      } catch (error) {
        setAddRequestStatus("failed");
        console.error(error);
      }
    }
  }
  let content;
  if (apiStatus === "loading") {
    content = (
      <div className="spinningCircle">
        <CircularLoading />
        <div className="wordsPosition">
          <Typography variant="h6">
            Please stand by. Your data is being processed
          </Typography>
        </div>
      </div>
    );
  } else if (apiStatus === "idle" || apiStatus === "failed") {
    content = (
      <div className="dataCheckBox">
        <DataCheckbox checkData={(data) => setData(data)}></DataCheckbox>
      </div>
    );
  }
  useEffect(() => {
    dispatch(reset());
  }, []);

  return (
    <Fragment>
      <div className="searchDataContainer">
        <Paper component="form" className={classes.root}>
          <div className="selectorDiv">
            <RegionSelect
              selectRegion={(region) => setRegion(region)}
            ></RegionSelect>
            <RoleSelect selectRole={(role) => setRole(role)}></RoleSelect>
            <NumberSelect
              selectNgames={(ngames) => setNgames(ngames)}
            ></NumberSelect>
          </div>
          <Divider className={classes.divider} orientation="vertical" />
          <InputBase
            className={classes.input}
            placeholder="Search Summoner"
            value={summonerName}
            onChange={(event) => setSummonerName(event.target.value)}
          />
          <IconButton
            type="submit"
            onClick={handleSubmit}
            className={classes.iconButton}
            aria-label="search"
            disabled={!canSearch}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        {/* <div className="dataCheckBox">
          <DataCheckbox checkData={(data) => setData(data)}></DataCheckbox>
        </div> */}
        {content}
      </div>
    </Fragment>
  );
}
