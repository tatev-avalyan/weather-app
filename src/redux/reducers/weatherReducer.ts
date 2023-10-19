import { WeatherData } from "../../types";

const initialState: WeatherData = {
  defaultCity: "Abovyan",
  currentWeatherData: null,
  dailyWeatherData: null,
  temperatureType: "metric",
  isFound: true,
  selectedDay: new Date().getDay(),
};

export const weatherReducer = (
  state = initialState,
  action: any
): WeatherData => {
  switch (action.type) {
    case "getDefault":
      return {
        ...state,
        currentWeatherData: action.data,
      };
    case "setTemperatureType":
      return {
        ...state,
        temperatureType: action.temperatureType,
      };
    case "getDailyData":
      return {
        ...state,
        dailyWeatherData: action.data,
      };
    case "setDay":
      return {
        ...state,
        selectedDay: action.selectedDay,
      };
    default:
      return state;
  }
};
