import React from "react";
import {ListNextDayInfoStyled} from "./ListNextDayInfoStyled";
import ItemNextDayInfo from "./itemNextDay/ItemNextDayInfo";

const ListNextDayInfo = ({weather}) => {
	return(
		<ListNextDayInfoStyled>
			<ul>
				{Object.keys(weather).length && (weather.forecast.forecastday.map((forecastday) => (
					<ItemNextDayInfo key={forecastday.date} forecastday={forecastday} />
				)))}
			</ul>
		</ListNextDayInfoStyled>
	)
};

export default ListNextDayInfo;