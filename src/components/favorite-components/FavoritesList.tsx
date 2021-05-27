import { useEffect, useState } from "react";

import FavoriteItem from "./FavoriteItem";
import PopUp from "../PopUp";

type City = {
  id: number;
  name: string;
  main: { temp: number };
};

interface IProps {
  cities: City[];
}

export default function FavoritesList(props: IProps): JSX.Element {
  const { cities } = props;

  const [allCities, setAllCities] = useState<City[]>(cities);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [popUp, setPopUp] = useState<boolean>(false);

  useEffect(() => {
    if (popUp) {
      setTimeout(() => {
        setPopUp(false);
      }, 2000);
    }
  }, [popUp]);

  const removeFavorite = (id: number): void => {
    const localStorageCities = allCities.filter(
      (citie: City) => citie.id !== id
    );
    localStorage.setItem("cities", JSON.stringify(localStorageCities));
    setAllCities(localStorageCities);
  };

  return (
    <div>
      {allCities.length === 0 ? (
        <div className="not_found_container">
          <p>There is no content to show</p>
        </div>
      ) : (
        <>
          <div className="search_container">
            <input
              placeholder="search"
              type="text"
              className="search_input"
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>
          <div className="general_container">
            {allCities
              .filter((element: City) => {
                if (!searchValue) {
                  return element;
                }
                return (
                  element.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) && element
                );
              })
              .map((citie: City) => (
                <FavoriteItem
                  id={citie.id}
                  key={citie.id}
                  name={citie.name}
                  temperature={citie.main.temp}
                  removeFavorite={removeFavorite}
                  setPopUp={setPopUp}
                />
              ))}
          </div>
          {popUp && <PopUp title="Deleted" type="error" />}
        </>
      )}
    </div>
  );
}
