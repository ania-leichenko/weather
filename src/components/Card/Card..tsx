import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//import { useState, useEffect } from "react";
import "./Card.css";

export default function BasicCard() {
  // const [getCity, setGetCity] = useState([]);
  // let weatherDescription;
  // let minTemparature;
  // let maxTemparature;
  // let weatherIconId;
  // function getCityInformation() {
  //   fetch(
  //     `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f847b24e7d8adac7b410a9f557f6a6b3`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setGetCity(data))
  //     .catch((error) => error);
  // }
  // useEffect(() => {
  //   getCityInformation();
  // }, []);

  // if (getCity.weather) {
  //   minTemparature = Math.floor(getCity.main.temp_min - 273);
  //   maxTemparature = Math.floor(getCity.main.temp_max - 273);
  //   getCity.weather.map((weather) => {
  //     weatherDescription = weather.main;
  //     return (weatherIconId = weather.icon);
  //   });
  // }

  // const getDate = function () {
  //   var now = new Date();
  //   return new Date(
  //     now.getFullYear(),
  //     now.getMonth(),
  //     now.getDate(),
  //     now.getHours(),
  //     now.getMinutes(),
  //     now.getSeconds()
  //   );
  // };

  // const date = getDate();
  // const options = {
  //   weekday: "long",
  //   month: "long",
  //   day: "numeric",
  // };

  // function updateBtn(e) {
  //   e.preventDefault();
  //   getCityInformation();
  // }
  // function goToFullInformation(e) {
  //   e.preventDefault();
  // }

  return (
      <Card className="root">
        <CardContent>
          <Typography variant="h5" component="div">
            {/* {getCity.name} */}
          </Typography>
          <Typography variant="body2">
            <br />
            {/* {date.toLocaleDateString("ua-UA", options)} */}
          </Typography>
          <Typography variant="body2">
            <br />
            {/* {maxTemparature} / {minTemparature} ºC */}
            <br />
          </Typography>
          {/* <img
            src={`http://openweathermap.org/img/w/${weatherIconId}.png`}
            alt="Weather Icon"
          ></img> */}
          <Typography variant="body2" className="weather-title">
            {/* {weatherDescription} */}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small" onClick={updateBtn}>
            <Link to="/full-information">Learn more</Link>
          </Button>
          <Button size="small" onClick={updateBtn}>
            Update
          </Button> */}
        </CardActions>
      </Card>
  );
};
