import React from "react";
import { render, screen } from "@testing-library/react";
import CityCardLayout from "../CityCardLayout";

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

test("Should success render CityCardLayout component", () => {
  render(<CityCardLayout cityInformation={cityInformation} />);
});

test("Should render city name", () => {
  render(<CityCardLayout cityInformation={cityInformation} />);
  expect(screen.getByTestId("city-name")).toHaveTextContent(
    cityInformation.name
  );
});

test("Should render city children", () => {
  const testText = "Hello world";
  render(
    <CityCardLayout cityInformation={cityInformation}>
      {testText}
    </CityCardLayout>
  );
  expect(screen.getByTestId("card-action")).toHaveTextContent(testText);
});

test("Should render city temparature", () => {
  const testTemparature = 0 + " / " + 0 + " ºC";
  render(<CityCardLayout cityInformation={cityInformation}></CityCardLayout>);
  expect(screen.getByTestId("city-temparature")).toHaveTextContent(
    testTemparature
  );
});

test("Should render city img", () => {
  const testIcon = `http://openweathermap.org/img/w/${cityInformation.weather[0].icon}.png`;
  render(<CityCardLayout cityInformation={cityInformation}></CityCardLayout>);
  expect(screen.getByTestId("city-img")).toHaveAttribute("src", testIcon);
});

test("Should render city weather title", () => {
  render(<CityCardLayout cityInformation={cityInformation}></CityCardLayout>);
  expect(screen.getByTestId("weather-title")).toHaveTextContent(
    cityInformation.weather[0].main
  );
});
