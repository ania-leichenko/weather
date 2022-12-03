import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchCityByName } from "../../store/citiesSlice";
import FullWeatherInformationLayout from "./FullInformationLayout";

export default function FullWeatherInformation() {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();

  const citiesInformation = useSelector(
    (state: RootState) => state.citiesSlice.citiesInformation
  );
  useEffect(() => {
    if (!params.id) {
      return;
    }
    dispatch(fetchCityByName(params.id));
  }, []);
  if (!params.id) {
    return null;
  }
  const cityInformation = citiesInformation[params.id];
  if (!cityInformation) {
    return null;
  }

  return <FullWeatherInformationLayout cityInformation={cityInformation} />;
}
