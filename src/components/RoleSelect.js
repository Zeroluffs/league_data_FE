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

export default function RoleSelect(props) {
  const classes = useStyles();
  const [role, setRole] = useState("");

  const handleChange = (event, value) => {
    // console.log(value.props.value);
    // setRegion(value.props.value);
    // console.log(region);
    // props.selectRegion(region);
    // console.log("region added", region)
    const role1 = event.target.value;
    setRole(role1);
  };

  useEffect(() => {
    console.log("role is", role);
    props.selectRole(role);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={role}
          onChange={handleChange}
          label="role"
        >
          <MenuItem value="top">Toplane</MenuItem>
          <MenuItem value="jg">Jungle</MenuItem>
          <MenuItem value="mid">Midlane</MenuItem>
          <MenuItem value="adc">ADC</MenuItem>
          <MenuItem value="supp">Support</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
