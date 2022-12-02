import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchCityByName } from "../../store/citiesSlice";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function FullWeatherInformation() {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  let weatherDescription;
  let minTemparature;
  let maxTemparature;
  let weatherIconId;
  let humidity;
  let wind;
  const citiesInformation = useSelector(
    (state: RootState) => state.citiesSlice.citiesInformation
  );
  useEffect(() => {
    if (!params.id) {
      return;
    }
    dispatch(fetchCityByName(params.id));
  }, []);
  if (!params.id) {
    return null;
  }
  const cityInformation = citiesInformation[params.id];
  if (!cityInformation) {
    return null;
  }

  if (cityInformation.weather) {
    minTemparature = Math.floor(cityInformation.main.temp_min - 273);
    maxTemparature = Math.floor(cityInformation.main.temp_max - 273);
    humidity = cityInformation.main.humidity;
    wind = cityInformation.wind.speed;
    cityInformation.weather.map((weather) => {
      weatherDescription = weather.description;
      return (weatherIconId = weather.icon);
    });
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className="paper" sx={{ p: 2 }}>
          <Typography variant="h5" component="div">
            {cityInformation.name}
          </Typography>
          <Typography variant="body2">
            <br />
            {new Date().toLocaleDateString("ua-UA", options)}
          </Typography>
          <Typography variant="body2">
            <br />
            The high will be {maxTemparature}ºC, the low will be{" "}
            {minTemparature}ºC.
            <br />
          </Typography>
          <Grid container alignItems="center">
            <img
              src={`http://openweathermap.org/img/w/${weatherIconId}.png`}
              alt="Weather Icon"
            ></img>
            <Typography variant="body2" className="weather-title">
              {weatherDescription}
            </Typography>
          </Grid>
          <Typography variant="body2" className="humidity">
            Humidity: {humidity}%
          </Typography>
          <Typography variant="body2" className="wind">
            Wind speed: {wind}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
