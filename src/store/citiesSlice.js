import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
};

export const citiesSlice = createSlice({
  name: "citiesSlice",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.cities = action.payload;
    },
  },
});

export const { setCity } = citiesSlice.actions;

export default citiesSlice.reducer;
