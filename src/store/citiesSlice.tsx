import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CitiesState {
  cities: Array<string>;
} 
const initialState: CitiesState = {
  cities: [],
};

export const citiesSlice = createSlice({
  name: "citiesSlice",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<Array<string>>) => {
      state.cities = action.payload;
    },
  },
});

export const { setCity } = citiesSlice.actions;

export default citiesSlice.reducer;
