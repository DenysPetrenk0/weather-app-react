import React from "react";
import {CurrentWeekStyled} from "./CurrentWeekStyled";

const CurrentWeek = ({weather}) => {

	function getTimeMap(hour) {
		const currentHour = new Date().getHours();

		return {
			time: hour.toString().padStart(2, '0') + ":00",
			current: hour === currentHour
		};
	}

console.log()
	return(
		<CurrentWeekStyled>
			<ul>
				{Object.keys(weather).length && weather.forecast.forecastday[0].hour.map((hour, idx) => (
						<li key={hour.time_epoch} className={getTimeMap(idx).current && "current"}>
							<div>{getTimeMap(idx).time}</div>
							<div>{hour.temp_c}</div>
							<img src={hour.condition.icon} alt="icon"/>
						</li>
					)
				)}
			</ul>
		</CurrentWeekStyled>
	)
}

export default CurrentWeek;