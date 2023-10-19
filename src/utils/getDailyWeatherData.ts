import { Dispatch } from "redux";
import http from "../api/apiService";

type GetDailyWeatherDataType = (city: string, dispatch: Dispatch<any>) => void;

const apiKey = "d244d791468b695fba75f555b065a4fa";
export const getDailyWeatherData: GetDailyWeatherDataType = async (
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
