import React, { useState, Fragment } from "react";
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
const api = axios.create({
  baseURL: `http://127.0.0.1:8000/`,
});
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    margin: "auto",
    width: 600,
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

  const classes = useStyles();
  const [region, setRegion] = useState("");
  const [nGames, setNgames] = useState(0);
  const [role, setRole] = useState("");
  const [data, setData] = useState([]);
  const [summonerName, setSummonerName] = useState("");
  const handleSubmit = (e) => {
    let ign = summonerName.split(" ").join("").toLowerCase();
    console.log("Summoner:", ign, "from", region);
    apiCall(summonerName, nGames);
    e.preventDefault();
  };

  async function apiCall(summoner_name, nGames) {
    try {
      let body = {
        summoner_name: summoner_name,
        nGames: nGames,
        region: region,
        role: role,
        data: data,
      };
      // let newArray = [];
      // newArray = data.filter((item) => {
      //   return item.status === true;
      // });
      const response = await api.post("summoner-data/", body);
      history.push({
        pathname: `/data`,
        dataProps: {
          data: response.data,
          labels: data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
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
            placeholder="Search Summoner Name"
            value={summonerName}
            onChange={(event) => setSummonerName(event.target.value)}
          />
          <IconButton
            type="submit"
            onClick={handleSubmit}
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <DataCheckbox checkData={(data) => setData(data)}></DataCheckbox>
      </div>
    </Fragment>
  );
}
