import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 92,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NumberSelect(props) {
  const classes = useStyles();
  const [numberOfGames, setNumberOfGames] = useState(10);

  const handleChange = (event, value) => {
    const number_games = event.target.value;
    setNumberOfGames(number_games);
  };

  useEffect(() => {
    props.selectNgames(numberOfGames);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfGames]);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Games</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          defaultValue={10}
          // value={numberOfGames}
          onChange={handleChange}
          label="games"
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
