import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CityInformation } from "../../store/citiesSlice";

type Props = {
  cityInformation: CityInformation;
};

export default function FullInformationLayout({ cityInformation }: Props) {
  let weatherDescription;
  let minTemparature;
  let maxTemparature;
  let weatherIconId;
  let humidity;
  let wind;

  if (cityInformation.weather) {
    minTemparature = Math.floor(cityInformation.main.temp_min - 273);
    maxTemparature = Math.floor(cityInformation.main.temp_max - 273);
    humidity = cityInformation.main.humidity;
    wind = cityInformation.wind.speed;
    cityInformation.weather.forEach((weather) => {
      weatherDescription = weather.description;
      weatherIconId = weather.icon;
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
          <Typography variant="h5" component="div" data-testid="city-name">
            {cityInformation.name}
          </Typography>
          <Typography variant="body2">
            <br />
            {new Date().toLocaleDateString("ua-UA", options)}
          </Typography>
          <Typography variant="body2" data-testid="city-temparature">
            <br />
            The high will be {maxTemparature}ºC, the low will be{" "}
            {minTemparature}ºC.
            <br />
          </Typography>
          <Grid container alignItems="center">
            <img
              data-testid="city-img"
              src={`http://openweathermap.org/img/w/${weatherIconId}.png`}
              alt="Weather Icon"
            ></img>
            <Typography
              variant="body2"
              className="weather-title"
              data-testid="weather-title"
            >
              {weatherDescription}
            </Typography>
          </Grid>
          <Typography
            variant="body2"
            className="humidity"
            data-testid="humidity"
          >
            Humidity: {humidity}%
          </Typography>
          <Typography variant="body2" className="wind" data-testid="wind">
            Wind speed: {wind}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
