import type { RootState } from "../../store/store";
import BasicCard from "../CityCard/CityCard";
import { cities } from "../../entities/cities";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../../store/citiesSlice";
import Grid  from "@mui/material/Grid";

const LOCALSTORAGE_CITIES_KEY = "cities";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function MainComponent() {
  const selectedCities = useSelector((state: RootState) => state.citiesSlice.cities);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const str = localStorage.getItem(LOCALSTORAGE_CITIES_KEY);
    if (str) {
      dispatch(setCity(str.split(",")));
    }
  }, [dispatch]);

  const handleChange = (event: { target: { value: any } }) => {
    const {
      target: { value },
    } = event;

    const list = typeof value === "string" ? value.split(",") : value;
    dispatch(setCity(list));
    localStorage.setItem(LOCALSTORAGE_CITIES_KEY, list);
  };

  return (
    <Grid container direction="column" textAlign="center">
      <h1>Choose City:</h1>
      <Grid container direction="column" justifyContent="center">
        <FormControl sx={{ m: 1, margin: 2 }}>
          <InputLabel id="demo-multiple-checkbox-label">Cities</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedCities}
            onChange={handleChange}
            input={<OutlinedInput label="Cities" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                <Checkbox checked={selectedCities.indexOf(city) > -1} />
                <ListItemText primary={city} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid container textAlign="center" spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {selectedCities.map((city) => (
              <Grid key={city} item>
                <BasicCard city={city}></BasicCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MainComponent;
