import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import top from "../images/unranked-top.png";
import jg from "../images/unranked-jungle.png";
import mid from "../images/unranked-mid.png";
import bot from "../images/unranked-bot.png";
import support from "../images/unranked-support.png";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
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
  const [role, setRole] = useState("top");

  const handleChange = (event, value) => {
    const role1 = event.target.value;
    setRole(role1);
  };

  useEffect(() => {
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
          // value={role}
          defaultValue={role}
          onChange={handleChange}
          label="role"
        >
          <MenuItem value="top">
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <ListItemIcon>
                <img alt="" width="32px" height="32px" border="0" src={top} />
              </ListItemIcon> */}
              <ListItemText>Top</ListItemText>
            </div>
          </MenuItem>
          <MenuItem value="jg">
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <ListItemIcon>
                <img alt="" width="32px" height="32px" border="0" src={jg} />
              </ListItemIcon> */}
              <ListItemText>Jungle</ListItemText>
            </div>
          </MenuItem>
          <MenuItem value="mid">
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <ListItemIcon>
                <img alt="" width="32px" height="32px" border="0" src={mid} />
              </ListItemIcon> */}
              <ListItemText>Mid</ListItemText>
            </div>
          </MenuItem>
          <MenuItem value="adc">
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <ListItemIcon>
                <img alt="" width="32px" height="32px" border="0" src={bot} />
              </ListItemIcon> */}
              <ListItemText>Bot</ListItemText>
            </div>
          </MenuItem>
          <MenuItem value="supp">
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <ListItemIcon>
                <img
                  alt=""
                  width="32px"
                  height="32px"
                  border="0"
                  src={support}
                />
              </ListItemIcon> */}
              <ListItemText>Support</ListItemText>
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
