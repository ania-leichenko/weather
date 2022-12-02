import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Weather = {
  main: string;
  icon: string;
};

type CityInformation = {
  map(arg0: (weather: { main: string; icon: string; }) => string): unknown;
  temp_max: number;
  temp_min: number;
  name: string;
  weather: Array<Weather>;
  main: { temp_min: number; temp_max: number };
};
export interface CitiesState {
  cities: Array<string>;
  citiesInformation: {
    [key: string]: CityInformation;
  } 
};

const initialState: CitiesState = {
  cities: [],
  citiesInformation: {},
};

export const citiesSlice = createSlice({
  name: "citiesSlice",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<Array<string>>) => {
      state.cities = action.payload;
    },
    setCityInformation: (state, action: PayloadAction<CityInformation>) => {
      state.citiesInformation[action.payload.name] = action.payload;
    },
  }
});

export const { setCity, setCityInformation } = citiesSlice.actions;

export default citiesSlice.reducer;
