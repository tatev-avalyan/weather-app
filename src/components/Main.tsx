import { useSelector } from "../redux";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import DayList from "./DayList";

const Main = () => {
  const isDataFound = useSelector((state) => state.currentWeatherData);

  if (!isDataFound) return <div>Loading...</div>;

  return (
    <main>
      <div className="selected-day">
        <CurrentWeather />
        <DailyWeather />
      </div>
      <DayList />
    </main>
  );
};

export default Main;
