import './App.css';
import SearchBar from "./components/searchBar/SearchBar";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";
import {useDispatch, useSelector} from "react-redux";
import {clearError, setError, setWeather} from "./store";

function App() {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather.data);
    const error = useSelector((state) => state.weather.error);

    const fetchWeather = async (city) => {
        try {
            const apiKey = "87bad73e18d0c32ee48cd8e436f5a077";
            const city2 = "Dnipro"

            const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city2}&appid=${apiKey}`);
            const geoData = await geoResponse.json();
            console.log(geoData)

            if (geoData.length === 0) {
                throw new Error("місто не знайдено");
            }

            const {lat, lon} = geoData[0];
            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
            const weatherData = await weatherResponse.json();
            console.log(weatherData)

            dispatch(setWeather(weatherData));
        } catch (error) {
            dispatch(setError(error.message))
        }
    }
  return (
    <div className="App">
      <SearchBar onSearch={fetchWeather} />
        {error && <p>{error}</p>}
        {weather && <WeatherInfo weather={weather}/>}
    </div>
  );
}

export default App;
