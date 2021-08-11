import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function DataCheckbox(props) {
  const classes = useStyles();

  const [test, setTest] = useState([
    {
      name: "goldEarned",
      status: false,
    },
    {
      name: "totalDamageDealtToChampions",
      status: false,
    },
    {
      name: "kills",
      status: false,
    },
    {
      name: "deaths",
      status: false,
    },
    {
      name: "assists",
      status: false,
    },
    {
      name: "totalDamageTaken",
      status: false,
    },
    {
      name: "damageSelfMitigated",
      status: false,
    },
    {
      name: "totalMinionsKilled",
      status: false,
    },
    {
      name: "wardsPlaced",
      status: false,
    },
    {
      name: "wardsKilled",
      status: false,
    },
    {
      name: "visionScore",
      status: false,
    },
    {
      name: "visionWardsBoughtInGame",
      status: false,
    },
    {
      name: "totalHealsOnTeammates",
      status: false,
    },
    {
      name: "totalDamageShieldedOnTeammates",
      status: false,
    },
    {
      name: "damageDealtToObjectives",
      status: false,
    },
    {
      name: "damageDealtToTurrets",
      status: false,
    },
    {
      name: "dragonKills",
      status: false,
    },
    {
      name: "objectivesStolen",
      status: false,
    },
    {
      name: "turretKills",
      status: false,
    },
    {
      name: "turretsLost",
      status: false,
    },
    {
      name: "turretTakedowns",
      status: false,
    },
    {
      name: "totalTimeSpentDead",
      status: false,
    },
  ]);
  const [state, setState] = React.useState({
    goldEarned: false,
    totalDamageDealtToChampions: false,
    kills: false,
    deaths: false,
    assists: false,
    totalDamageTaken: false,
    damageSelfMitigated: false,
    totalMinionsKilled: false,
    wardsPlaced: false,
    wardsKilled: false,
    visionScore: false,
    visionWardsBoughtInGame: false,
    totalHealsOnTeammates: false,
    totalDamageShieldedOnTeammates: false,
    damageDealtToObjectives: false,
    damageDealtToTurrets: false,
    dragonKills: false,
    objectivesStolen: false,
    turretKills: false,
    turretsLost: false,
    turretTakedowns: false,
    totalTimeSpentDead: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    // console.log(state);
    // console.log(event.target.value);
    // console.log(event.target.name);
    // setName([...name, event.target.value]);
    // setData({ ...data, [event.target.value]: event.target.checked });

    // //run this code so you dont add duplicates to the names of the data fields you wanna look for
    // if (name.length > 1) {
    //   var unique = name.filter(function (elem, index, self) {
    //     return index === self.indexOf(elem);
    //   });
    //   setName(unique);
    // }
    let updatedList = test.map((item) => {
      if (item.name === event.target.value) {
        return { ...item, status: event.target.checked };
      }
      return item;
    });

    setTest(updatedList);
    // console.log(data.damageDone);
    // console.log(name);
  };

  useEffect(() => {
    console.log("data is", test);
    let newArray = [];
    newArray = test.filter((item) => {
      return item.status === true;
    });

    let arr = newArray.map((item) => {
      return item.name;
    });

    console.log("these are the names");
    console.log(arr);
    props.checkData(arr);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [test]);
  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.goldEarned}
              onChange={handleChange}
              name="goldEarned"
              color="primary"
              value="goldEarned"
            />
          }
          label="Gold Earned"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.totalDamageDealtToChampions}
              onChange={handleChange}
              name="totalDamageDealtToChampions"
              color="primary"
              value="totalDamageDealtToChampions"
            />
          }
          label="Damage Done"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.kills}
              onChange={handleChange}
              name="kills"
              color="primary"
              value="kills"
            />
          }
          label="Kills"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.deaths}
              onChange={handleChange}
              name="deaths"
              color="primary"
              value="deaths"
            />
          }
          label="Deaths"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.assists}
              onChange={handleChange}
              name="assists"
              color="primary"
              value="assists"
            />
          }
          label="Assists"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.totalDamageTaken}
              onChange={handleChange}
              name="totalDamageTaken"
              color="primary"
              value="totalDamageTaken"
            />
          }
          label="Damage Taken"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.damageSelfMitigated}
              onChange={handleChange}
              name="damageSelfMitigated"
              color="primary"
              value="Self Mitigated Damage"
            />
          }
          label="Self Mitigated Damage"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.totalMinionsKilled}
              onChange={handleChange}
              name="totalMinionsKilled"
              color="primary"
              value="totalMinionsKilled"
            />
          }
          label="Minions Killed"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.wardsPlaced}
              onChange={handleChange}
              name="wardsPlaced"
              color="primary"
              value="wardsPlaced"
            />
          }
          label="Wards Placed"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.wardsKilled}
              onChange={handleChange}
              name="wardsKilled"
              color="primary"
              value="wardsKilled"
            />
          }
          label="Wards Killed"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.visionScore}
              onChange={handleChange}
              name="visionScore"
              color="primary"
              value="visionScore"
            />
          }
          label="Vision Score"
        />
      </FormGroup>

      <FormGroup >
        <FormControlLabel
          control={
            <Checkbox
              checked={state.visionWardsBoughtInGame}
              onChange={handleChange}
              name="visionWardsBoughtInGame"
              color="primary"
              value="visionWardsBoughtInGame"
            />
          }
          label="Vision Wards Bought"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.totalHealsOnTeammates}
              onChange={handleChange}
              name="totalHealsOnTeammates"
              color="primary"
              value="totalHealsOnTeammates"
            />
          }
          label="Heals on Teammates"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.totalDamageShieldedOnTeammates}
              onChange={handleChange}
              name="totalDamageShieldedOnTeammates"
              color="primary"
              value="totalDamageShieldedOnTeammates"
            />
          }
          label="Damage Shielded on Teammates"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.damageDealtToObjectives}
              onChange={handleChange}
              name="damageDealtToObjectives"
              color="primary"
              value="damageDealtToObjectives"
            />
          }
          label="Damage Dealt to Objectives"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.damageDealtToTurrets}
              onChange={handleChange}
              name="damageDealtToTurrets"
              color="primary"
              value="damageDealtToTurrets"
            />
          }
          label="Damage Dealt to Turrets"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.dragonKills}
              onChange={handleChange}
              name="dragonKills"
              color="primary"
              value="dragonKills"
            />
          }
          label="Dragon Kills"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.objectivesStolen}
              onChange={handleChange}
              name="objectivesStolen"
              color="primary"
              value="objectivesStolen"
            />
          }
          label="Objectives Stolen"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.turretKills}
              onChange={handleChange}
              name="turretKills"
              color="primary"
              value="turretKills"
            />
          }
          label="Turret Kills"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.turretsLost}
              onChange={handleChange}
              name="turretsLost"
              color="primary"
              value="turretsLost"
            />
          }
          label="Turrets Lost"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.turretTakedowns}
              onChange={handleChange}
              name="turretTakedowns"
              color="primary"
              value="turretTakedowns"
            />
          }
          label="Turret Takedowns"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.totalTimeSpentDead}
              onChange={handleChange}
              name="totalTimeSpentDead"
              color="primary"
              value="totalTimeSpentDead"
            />
          }
          label="Total Time Spent Dead"
        />
      </FormGroup>
    </div>
  );
}
