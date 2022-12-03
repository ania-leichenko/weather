import React from "react";
import { render, screen } from "@testing-library/react";
import FullInformationLayout from "../FullInformationLayout";

const cityInformation = {
  humidity: "30",
  temp_max: 273,
  temp_min: 273,
  name: "Lviv",
  weather: [
    {
      main: "clouds",
      icon: "4n20",
      description: "overcoast clouds",
    },
  ],
  main: { temp_min: 273, temp_max: 273, humidity: "30" },
  wind: { speed: 2.7 },
};

test("Should success render FullWeatherInformationLayout component", () => {
  render(<FullInformationLayout cityInformation={cityInformation} />);
});

test("Should render city name", () => {
  render(<FullInformationLayout cityInformation={cityInformation} />);
  expect(screen.getByTestId("city-name")).toHaveTextContent(
    cityInformation.name
  );
});

test("Should render city temparature", () => {
  const testTemparature = `The high will be ${0}ºC, the low will be ${0}ºC.`;
  render(
    <FullInformationLayout
      cityInformation={cityInformation}
    ></FullInformationLayout>
  );
  expect(screen.getByTestId("city-temparature")).toHaveTextContent(
    testTemparature
  );
});

test("Should render city img", () => {
  const testIcon = `http://openweathermap.org/img/w/${cityInformation.weather[0].icon}.png`;
  render(
    <FullInformationLayout
      cityInformation={cityInformation}
    ></FullInformationLayout>
  );
  expect(screen.getByTestId("city-img")).toHaveAttribute("src", testIcon);
});

test("Should render city weather title", () => {
  render(
    <FullInformationLayout
      cityInformation={cityInformation}
    ></FullInformationLayout>
  );
  expect(screen.getByTestId("weather-title")).toHaveTextContent(
    cityInformation.weather[0].description
  );
});

test("Should render humidity", () => {
  render(
    <FullInformationLayout
      cityInformation={cityInformation}
    ></FullInformationLayout>
  );
  expect(screen.getByTestId("humidity")).toHaveTextContent(
    cityInformation.humidity
  );
});

test("Should render wind", () => {
  render(
    <FullInformationLayout
      cityInformation={cityInformation}
    ></FullInformationLayout>
  );
  expect(screen.getByTestId("wind")).toHaveTextContent(
    `Wind speed: ${cityInformation.wind.speed}`
  );
});
