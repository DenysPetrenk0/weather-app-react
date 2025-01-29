import React from "react";
import {WeatherInfoStyled} from "./WeatherInfoStyled";

const WeatherInfo = ({current}) => {
	const {temp_c, feelslike_c, condition, wind_kph} = current;
	return (
		<WeatherInfoStyled>
			<p>температура{temp_c}</p>
			<p>Відчувається як температура{feelslike_c}</p>
			<p>Текст про погодні умови{condition.text}</p>
			<img src={condition.icon} alt="icon"/>
			<p>Швидкість вітру в{wind_kph}</p>
		</WeatherInfoStyled>
		)
};

export default WeatherInfo;