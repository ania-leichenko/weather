import React, { useEffect }from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CityCard.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { setCityInformation } from "../../store/citiesSlice";

type Props = {
  city: string;
};

export default function CityCard({ city }: Props) {
  const dispatch = useDispatch();
  const citiesInformation = useSelector(
    (state: RootState) => state.citiesSlice.citiesInformation
  );
  const cityInformation = citiesInformation[city];
  let weatherDescription;
  let minTemparature;
  let maxTemparature;
  let weatherIconId;

  function getCityInformation() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f847b24e7d8adac7b410a9f557f6a6b3`
    )
      .then((response) => response.json())
      .then((data) => dispatch(setCityInformation(data)))
      .catch((error) => error);
  }
  useEffect(() => {
    getCityInformation();
  }, []);

  if (!cityInformation) {
    return null;
  }
  if (cityInformation.weather) {
    minTemparature = Math.floor(cityInformation.main.temp_min - 273);
    maxTemparature = Math.floor(cityInformation.main.temp_max - 273);
    cityInformation.weather.map((weather) => {
      weatherDescription = weather.main;
      return (weatherIconId = weather.icon);
    });
  }

  const getDate = function () {
    var now = new Date();
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      now.getMinutes(),
      now.getSeconds()
    );
  };

  const date = getDate();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  function updateBtn(e: { preventDefault: () => void; }) {
    e.preventDefault();
    getCityInformation();
  }
  function goToFullInformation(e: { preventDefault: () => void; }) {
    e.preventDefault();
  }

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h5" component="div">
          {cityInformation.name}
        </Typography>
        <Typography variant="body2">
          <br />
          {date.toLocaleDateString("ua-UA", options)}
        </Typography>
        <Typography variant="body2">
          <br />
          {maxTemparature} / {minTemparature} ºC
          <br />
        </Typography>
        <img
          src={`http://openweathermap.org/img/w/${weatherIconId}.png`}
          alt="Weather Icon"
        ></img>
        <Typography variant="body2" className="weather-title">
          {weatherDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/full-information" className="link">
          <Button size="small">Learn more</Button>
        </Link>
        <Button size="small" onClick={updateBtn}>
          Update
        </Button>
      </CardActions>
    </Card>
  );
}