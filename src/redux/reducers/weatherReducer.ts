import { WeatherData } from "../../types/types";

const initialState: WeatherData = {
  defaultCity: "Yerevan",
  currWeatherData: null,
  dailyWeatherData: null,
  tmpType: "metric",
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
        currWeatherData: action.data,
      };
    case "setTemperatureType":
      return {
        ...state,
        tmpType: action.tmpType,
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
