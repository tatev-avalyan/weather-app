import { useEffect } from "react";
import { getTemperatureTypeSymbol, getWeathersList } from "../helpers";
import { useDispatch, useSelector } from "../redux";

const DailyWeather = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.currentWeatherData?.name);
  const type = useSelector((state) => state.temperatureType);
  const dailyWeatherData = useSelector((state) => state.dailyWeatherData);
  const selectedDay = useSelector((state) => state.selectedDay);
  const currSymbol = getTemperatureTypeSymbol(type)
  const tempByType = type === "metric" ? 1 : 0;

  useEffect(() => {
    if(!city) return

    getWeathersList(city, dispatch);
  }, []);

  return (
    <div className="weather-by-time">
      <ul>
        {dailyWeatherData?.list
            .filter((item) => new Date(item.dt * 1000).getDay() === selectedDay)
            .slice(1, 6)
            .map((item, i) => {
              return (
                <li key={i}>
                  {item.dt_txt.split(" ")[1]}{" "}
                  {tempByType
                    ? item.main.temp
                    : (Number(item.main.temp)).toFixed(2)}
                  {currSymbol}
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    alt="weather"
                    title="weather-icon"
                  />
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default DailyWeather;
