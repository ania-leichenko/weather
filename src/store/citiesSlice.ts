import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchCityByName = createAsyncThunk(
  'cities/fetchCityByNameStatus',
  async (city: string) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f847b24e7d8adac7b410a9f557f6a6b3`
    )
      .then((response) => response.json());
  }
)

type Weather = {
  main: string;
  icon: string;
  description: string
};

export type CityInformation = {
  humidity: string;
  temp_max: number;
  temp_min: number;
  name: string;
  weather: Array<Weather>;
  main: { temp_min: number; temp_max: number, humidity: string };
  wind: {speed: number};
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
  },
   extraReducers(builder) {
    builder
      .addCase(fetchCityByName.fulfilled, (state, action) => {
        state.citiesInformation[action.payload.name] = action.payload; 
      });
  },
});

export const { setCity } = citiesSlice.actions;

export default citiesSlice.reducer;
