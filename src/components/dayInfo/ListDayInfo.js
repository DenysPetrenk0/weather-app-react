import React from "react";
import {ListDayInfoStyled} from "./ListDayInfoStyled";
import ItemDayInfo from "./itemDay/ItemDayInfo";

const ListDayInfo = ({forecastdays}) => {
	console.log(forecastdays)
	return(
		<ListDayInfoStyled>
			{forecastdays.map((forecastday) => (
				<ItemDayInfo key={forecastday.date} forecastday={forecastday} />
				)
			)}
		</ListDayInfoStyled>
	)
};

export default ListDayInfo;