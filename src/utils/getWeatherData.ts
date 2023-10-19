import { Dispatch } from "redux";
import http from "../api/apiService";

type TypeGetWeatherData = (city: string, dispatch: Dispatch<any>) => void;

const apiKey = "d244d791468b695fba75f555b065a4fa";

export const getWeatherData: TypeGetWeatherData = async (city, dispatch) => {
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
