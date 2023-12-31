export type TypeTmp = "metric" | "imperial";

interface DailyData {
  list: {
    main: { temp: string };
    dt_txt: string;
    dt: number;
    weather: Weather[];
  }[];
}

export interface WeatherData {
  defaultCity: "Abovyan";
  currentWeatherData: IData | null;
  temperatureType: TypeTmp;
  dailyWeatherData: DailyData | null;
  isFound: boolean;
  selectedDay: number;
}

type Weather = {
  icon: string;
  main: string;
};

export interface IData {
  name: string;
  main: {
    temp: string;
  };
  weather: Weather[];
  cod: number;
}
