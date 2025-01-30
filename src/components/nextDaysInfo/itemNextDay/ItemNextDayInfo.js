import React from "react";
import {ItemNextDayInfoStyled} from "./ItemNextDayInfoStyled";

const ItemNextDayInfo = ({forecastday}) => {
	const {mintemp_c, maxtemp_c, condition} = forecastday.day;

	function getWeekday(dateString) {
		const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота"];
		const date = new Date(dateString);
		return days[date.getDay()];
	}

	return(
		<ItemNextDayInfoStyled>
			<p>{getWeekday(forecastday.date)}</p>
			<img src={condition.icon} alt="icon"/>
			<p>{mintemp_c} - {maxtemp_c}</p>
		</ItemNextDayInfoStyled>
	)
};

export default ItemNextDayInfo;