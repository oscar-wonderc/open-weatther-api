import { useEffect, useState } from "react";

import PopUp from "../PopUp";
import WeatherDetail from "./WeatherDetail";

type City = {
  id: number;
  name: string;
  main: { temp: number };
};

interface IProps {
  cities: City[];
}

export default function WheatherList(props: IProps): JSX.Element {
  const data = localStorage.getItem("cities");
  const favoriteCitiesFromLocalStorage = data && JSON.parse(data);

  const [popUp, setPopUp] = useState<boolean>(false);

  useEffect(() => {
    if (popUp) {
      setTimeout(() => {
        setPopUp(false);
      }, 2000);
    }
  }, [popUp]);

  const { cities } = props;

  const newCities = favoriteCitiesFromLocalStorage || [];

  const addFavorite = (id: number): void => {
    const singleCity: any = cities.find((citie) => citie.id === id);

    if (newCities.some((city: City) => city.id === singleCity.id)) {
      return;
    }

    newCities.push(singleCity);
    localStorage.setItem("cities", JSON.stringify(newCities));
  };

  return (
    <>
      <div className="general_container">
        {cities.map((citie: City) => (
          <WeatherDetail
            id={citie.id}
            key={citie.id}
            name={citie.name}
            temperature={citie.main.temp}
            addFavorite={addFavorite}
            setPopUp={setPopUp}
          />
        ))}
      </div>
      {popUp && <PopUp title="Copied" type="success" />}
    </>
  );
}
