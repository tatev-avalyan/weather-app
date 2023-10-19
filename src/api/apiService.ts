import { instance } from "./http/authInterceptor";

const BASE_URL = "data/2.5";

const http = {
    weather: {
        getWeather(params: { q: string, appId: string  }, signal?: AbortSignal) {
            return instance<any>({
              url: `${BASE_URL}/weather`,
              method: "get",
              params,
              signal
            })
        },
        getWeatherList(params: { q: string, appId: string }, signal?: AbortSignal) {
            return instance<any>({
                url: `${BASE_URL}/forecast`,
                method: "get",
                params,
                signal
              })
        }
    }

}
export default http