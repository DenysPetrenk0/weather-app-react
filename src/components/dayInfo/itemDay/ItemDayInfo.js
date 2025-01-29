import React from "react";
import {ItemDayInfoStyled} from "./ItemDayInfoStyled";

const ItemDayInfo = ({forecastday}) => {
	const {mintemp_c, maxtemp_c, condition} = forecastday.day;
	return(
		<ItemDayInfoStyled>
			<p>{forecastday.date}</p>
			<p>Мінімальна температура {mintemp_c} Максимальна температура {maxtemp_c}</p>
			<p>Текст про погодні умови{condition.text}</p>
			<img src={condition.icon} alt="icon"/>
		</ItemDayInfoStyled>
	)
};

export default ItemDayInfo;