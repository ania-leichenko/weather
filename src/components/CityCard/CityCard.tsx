import React, { useEffect }from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { fetchCityByName } from "../../store/citiesSlice";

type Props = {
  city: string;
};

export default function CityCard({ city }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const citiesInformation = useSelector(
    (state: RootState) => state.citiesSlice.citiesInformation
  );

  const cityInformation = citiesInformation[city];
  let weatherDescription;
  let minTemparature;
  let maxTemparature;
  let weatherIconId;

  function getCityInformation() {
    dispatch(fetchCityByName(city));
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
    cityInformation.weather.forEach((weather) => {
      weatherDescription = weather.main;
      weatherIconId = weather.icon;
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

  return (
    <Card className="card" >
      <CardContent sx={{  width: 300 }}>
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
        <Button size="small" href={`/full-information/${cityInformation.name}`} >Learn more</Button>
        <Button size="small" onClick={updateBtn}>
          Update
        </Button>
      </CardActions>
    </Card>
  );
}
