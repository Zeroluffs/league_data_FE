import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 90,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function RegionSelect(props) {
  const classes = useStyles();
  const [region, setRegion] = useState("na1");

  const handleChange = (event, value) => {
    // console.log(value.props.value);
    // setRegion(value.props.value);
    // console.log(region);
    // props.selectRegion(region);
    // console.log("region added", region)
    const region1 = event.target.value;
    setRegion(region1);
  };

  useEffect(() => {
    console.log("region is", region);
    props.selectRegion(region);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          defaultValue={region}
          value={region}
          onChange={handleChange}
          label="region"
        >
          <MenuItem value="na1">NA</MenuItem>
          <MenuItem value="euw1">EUW</MenuItem>
          <MenuItem value="kr">KR</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
