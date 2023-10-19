import { Dispatch } from "redux";
import http from "../api/apiService";

type GetWeatherType = (city: string, dispatch: Dispatch<any>) => void;

const apiKey = "d244d791468b695fba75f555b065a4fa";

export const getWeather: GetWeatherType = async (city, dispatch) => {
  const controller = new AbortController()
  try {
    const params = {
      q: city,
      appId: apiKey,
      "&units": "metric" 
    }
    const res = await http.weather.getWeather(params, controller?.signal);
    
    dispatch({
      type: "getDefault",
      data: res,
    });
  
  } catch (e) {
    console.log(e);
  }
};

export const getWeathersList: GetWeatherType = async (
  city,
  dispatch
) => {
  const controller = new AbortController()
  try {
    const params = {
      q: city,
      appId: apiKey,
    }
    const res = await http.weather.getWeatherList(params, controller?.signal)

    dispatch({
      type: "getDailyData",
      data: res,
    });
  } catch (e) {
    console.error(e);
  }
};

export const getTemperatureTypeSymbol = (type: "metric" | "imperial") => type === "imperial" ? "°F" : "°C";
