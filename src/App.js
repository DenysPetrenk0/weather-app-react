import './App.css';
import SearchBar from "./components/searchBar/SearchBar";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";
import {useDispatch, useSelector} from "react-redux";
import {setError, setWeather} from "./store";
import fetchWeather from "./service/apiService";

function App() {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather.data);
    const error = useSelector((state) => state.weather.error);

    // const fetchWeather = async (city) => {
    //     try {
    //         const apiKey = "87bad73e18d0c32ee48cd8e436f5a077";
    //         const apiKey1 = "T64KL3UJR2YSAWRZDR3VYHV7Q";

            // const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`);
            // const geoData = await geoResponse.json();
            // console.log(geoData)

            // const {lat, lon} = geoData[0];
            // const weatherResponse = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey1}&contentType=json`);
            // const weatherData = await weatherResponse.json();
            // if (geoData.length === 0) {
            //     throw new Error("місто не знайдено");
            // }
    //         console.log(weatherData)
    //
    //         dispatch(setWeather(weatherData));
    //     } catch (error) {
    //         dispatch(setError(error.message))
    //     }
    // }

    const makeRequest = (city) => {
        fetchWeather(city)
            .then((response) => {
                if(response.length === 0) {
                    messageError()
                }
                console.log(response)
                dispatch(setWeather(response.data));
            })
            .catch((error) => dispatch(setError(error.message)))
    }

    const messageError = () => {
        dispatch(setError("oops something went wrong!!!!!!!!!!!"))
    };

  return (
    <div className="App">
      <SearchBar onSearch={makeRequest} />
        {error && <p>{error}</p>}
        {weather && <WeatherInfo weather={weather}/>}
    </div>
  );
}

export default App;
