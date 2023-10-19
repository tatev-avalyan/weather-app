import { getTemperatureTypeSymbol } from "../helpers";
import { useDispatch, useSelector } from "../redux";

const DayList = () => {
  const dailyWeatherData = useSelector((state) => state.dailyWeatherData);
  const temperatureType = useSelector((state) => state.temperatureType);
  const currSymbol = getTemperatureTypeSymbol(temperatureType)
  const tempByType = temperatureType === "metric" ? 1 : 0;
  const dispatch = useDispatch();

  const selectDay = (date: number) => dispatch({ type: "setDay", selectedDay: new Date(date * 1000).getDay() });

  return (
    <div className="days">
      {dailyWeatherData?.list
        .filter((_, i) => i % 8 === 0)
        .map((item) => (
          <div
            className="day-box"
            key={item.dt}
            onClick={() => selectDay(item.dt)}>
            <h3>{item.dt_txt.split(" ")[0].slice(5)}</h3>
            <div className="day">
              <p>
                {tempByType
                  ? item.main.temp
                  :  (Number(item.main.temp).toFixed(2))}
                {currSymbol}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt="weather"
                title="weather-icon"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default DayList;
