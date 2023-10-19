import { useState } from "react";
import { useDispatch, useSelector } from "../redux";
import { TypeTmp } from "../types";
import { getWeather, getWeathersList } from "../helpers";

const Header = () => {
  const temperatureType = useSelector((state) => state.temperatureType);
  const dispatch = useDispatch();
  const [cityValue, setCityValue] = useState("");

  const toggleChange = (temperatureType: TypeTmp) => dispatch({ type: "setTemperatureType", temperatureType });

  const handleSearch = () => {
    if (!cityValue) return;
    getWeather(cityValue, dispatch);
    getWeathersList(cityValue, dispatch);
  };

  return (
    <header>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          value={cityValue}
          onChange={(e) => setCityValue(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search City
        </button>
      </div>
      <div className="temperature-types">
        <div>
          <input
            type="radio"
            value="F"
            checked={temperatureType === "imperial"}
            onChange={() => toggleChange("imperial")}
          />
          <label htmlFor="F">°F</label>
        </div>
        <div>
          <input
            type="radio"
            value="C"
            checked={temperatureType === "metric"}
            onChange={() => toggleChange("metric")}
          />
          <label htmlFor="C">°C</label>
        </div>
      </div>
    </header>
  );
};

export default Header;
