const API_KEY = '016e914e169df06fa0d045287a239ef3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
  return {
    type: FETCH_WEATHER
  }

}
