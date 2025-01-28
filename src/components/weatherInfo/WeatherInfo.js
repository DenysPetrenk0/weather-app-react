import React from "react";
import {WeatherInfoStyled} from "./WeatherInfoStyled";

const WeatherInfo = ({weather}) => {
	console.log(weather)
	const {name, main} = weather;
	return (
		<WeatherInfoStyled>
			<p>{name}</p>
			<p></p>
		</WeatherInfoStyled>
		)
};

export default WeatherInfo;