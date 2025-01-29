import './App.css';
import SearchBar from "./components/searchBar/SearchBar";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";
import {useDispatch, useSelector} from "react-redux";
import {setError, setWeather} from "./store";
import fetchWeather from "./service/apiService";
import ListDayInfo from "./components/dayInfo/ListDayInfo";

function App() {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather.data);
    const error = useSelector((state) => state.weather.error);

    const makeRequest = (city) => {
        fetchWeather(city)
            .then((response) => {
                if(response.length === 0) {
                    messageError()
                }
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
        {weather &&
            <div>
                <WeatherInfo current={weather.current}/>
                <ListDayInfo forecastdays={weather.forecast.forecastday}/>
            </div>

        }
    </div>
  );
}

export default App;
