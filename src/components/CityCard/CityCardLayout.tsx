import React, { Children, ReactNode, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CityInformation } from "../../store/citiesSlice";

type Props = {
  cityInformation: CityInformation;
  children?: ReactNode;
};

export default function CityCardLayout({ cityInformation, children }: Props) {
  let weatherDescription;
  let minTemparature;
  let maxTemparature;
  let weatherIconId;

  if (cityInformation.weather) {
    minTemparature = Math.floor(cityInformation.main.temp_min - 273);
    maxTemparature = Math.floor(cityInformation.main.temp_max - 273);
    cityInformation.weather.forEach((weather) => {
      weatherDescription = weather.main;
      weatherIconId = weather.icon;
    });
  }

  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  return (
    <Card className="card">
      <CardContent sx={{ width: 300 }}>
        <Typography variant="h5" component="div" data-testid="city-name">
          {cityInformation.name}
        </Typography>
        <Typography variant="body2">
          <br />
          {date.toLocaleDateString("ua-UA", options)}
        </Typography>
        <Typography variant="body2" data-testid="city-temparature">
          <br />
          {maxTemparature} / {minTemparature} ºC
          <br />
        </Typography>
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
      </CardContent>
      {children && (
        <CardActions data-testid="card-action">{children}</CardActions>
      )}
    </Card>
  );
}
