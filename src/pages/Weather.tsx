import { useState, useEffect } from "react";
import axios from "axios";

import { alternativeCities } from "../cities";
import WheatherList from "../components/weather-components/WheatherList";

export default function Weather() {
  const [data, setData] = useState([]);

  const url =
    "https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10";
  const key = "4f703f3173fd34a0cde54c6fe6f2be49";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url, {
        params: { appid: key },
      });
      setData(result.data.list);
    };
    fetchData();
  }, []);

  const cities = data.length > 0 ? data : alternativeCities[0].list;

  return (
    <div className="container">
      {cities ? (
        <WheatherList cities={cities} />
      ) : (
        <p>There is no content to show</p>
      )}
    </div>
  );
}
