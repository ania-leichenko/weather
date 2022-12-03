import React, { useEffect }from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { fetchCityByName } from "../../store/citiesSlice";
import CityCardLayout from "./CityCardLayout";

type Props = {
  city: string;
};

export default function CityCard({ city }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const citiesInformation = useSelector(
    (state: RootState) => state.citiesSlice.citiesInformation
  );

  const cityInformation = citiesInformation[city];

  function getCityInformation() {
    dispatch(fetchCityByName(city));
  }
  useEffect(() => {
    getCityInformation();
  }, []);

  function updateBtn(e: { preventDefault: () => void; }) {
    e.preventDefault();
    getCityInformation();
  }

  if (!cityInformation) {
    return null;
  }

  return (
    <CityCardLayout cityInformation={cityInformation}>
      <>
        <Button size="small" href={`/full-information/${cityInformation.name}`} >Learn more</Button>
        <Button size="small" onClick={updateBtn}>
          Update
        </Button>
      </>
    </CityCardLayout>
  );
}
