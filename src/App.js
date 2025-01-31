import './App.css';
import SearchBar from "./components/searchBar/SearchBar";
import {useDispatch, useSelector} from "react-redux";
import {setError, setWeather} from "./store";
import fetchWeather from "./service/apiService";
import ListNextDayInfo from "./components/nextDaysInfo/ListNextDayInfo";
import icons from "./icon/icon.svg"
import React from "react";
import CurrentDay from "./components/currentDay/CurrentDay";
import InfoCity from "./components/infoCity/InfoCity";

function App() {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather.data) || {};
    const error = useSelector((state) => state.weather.error);

    const makeRequest = (city) => {
        fetchWeather(city)
            .then((response) => {
                if(!response || Object.keys(response).length === 0) {
                    messageError();
                    return;
                }
                dispatch(setWeather(response.data));
                dispatch(setError(""));
            })
            .catch((error) => dispatch(setError(error.message)))
    }

    const messageError = () => {
        dispatch(setError("oops something went wrong!!!!!!!!!!!"))
    };

    const currentWeather = weather.current || {
        feelslike_c: "",
        condition: { text: "", icon: "" },
        wind_kph: "",
        temp_c: "",
    };

  return (
    <div className="App">
        <div className="current_day_info_border">
            <div className="current_day_info">
                <div className="current_day_info_box">
                    <div className="current_day_info_humidity">
                        <svg className="current_day_info_icon" height="17" width="17">
                            <use href={icons + "#droplet"}></use>
                        </svg>
                        <p className="current_day_info_title">Вологість:</p>
                        <p className="current_day_info_value">{currentWeather.humidity} %</p>
                    </div>
                    <div className="current_day_info_cloud">
                        <svg className="current_day_info_icon" height="17" width="17">
                            <use href={icons + "#cloud"}></use>
                        </svg>
                        <p className="current_day_info_title">Хмарність:</p>
                        <p className="current_day_info_value">{currentWeather.cloud} %</p>
                    </div>
                </div>
                <div className="current_day_info_wind_kph">
                    <svg className="current_day_info_icon-wind" height="17" width="17">
                        <use href={icons + "#wind"}></use>
                    </svg>
                    <p className="current_day_info_title">Швидкість вітру: </p>
                    <p className="current_day_info_title">{currentWeather.wind_kph}</p>
                </div>
            </div>
        </div>
        <div className="title_box">
            <svg className="title_icon" height="40" width="40">
                <use href={icons + "#umbrella"}></use>
            </svg>
            <h1 className="title">weather</h1>
        </div>
        <div className="temp_info_border">
            <div className="temp_info">
                <div className="temp_info_box">
                    {Object.keys(weather).length && <img src={currentWeather.condition.icon} alt="icon" width="120" height="120"/>}
                    <p>{currentWeather.temp_c}</p>
                </div>
                <div className="temp_info_second_box">
                    <p>Відчувається як: </p>
                    <p>{currentWeather.feelslike_c}</p>
                </div>
            </div>
        </div>

        <ListNextDayInfo />
        <CurrentDay />
        <SearchBar onSearch={makeRequest} />
        <div className="info_time">
            {error ? <div>введіть вірну назву міста</div> : <InfoCity />}
        </div>
    </div>
  );
}

export default App;
