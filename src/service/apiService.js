import axios from "axios";

const API_KEY = "ed9e305d4c9a4065a72103952252901";
const BASE_URL = "http://api.weatherapi.com/v1/forecast.json?";

const fetchWeather = (city) => {
	return axios.get(
	`${BASE_URL}key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
	);
};

export default fetchWeather;