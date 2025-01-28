import axios from "axios";

const API_KEY = "T64KL3UJR2YSAWRZDR3VYHV7Q";
const BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const fetchWeather = (city) => {
	return axios.get(
	`${BASE_URL}${city}?unitGroup=metric&key=${API_KEY}&contentType=json`
	);
};

export default fetchWeather;