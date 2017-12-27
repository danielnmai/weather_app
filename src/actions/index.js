import axios from 'axios';

const API_KEY = '016e914e169df06fa0d045287a239ef3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
