import React from "react";
import {InfoCityStyled} from "./InfoCityStyled";
import InfoTime from "../infoTime/InfoTime";
import {useSelector} from "react-redux";

const InfoCity = ()  => {

	const weather = useSelector((state) => state.weather.data)
	const getCurrentDate = () => {
		return new Intl.DateTimeFormat("uk-UA").format(new Date());
	}
	return(
		<InfoCityStyled>
			<p>{getCurrentDate()}</p>
			<InfoTime />
			{weather && <p>{weather.location.country}</p>}
			{weather && <p>{weather.location.name}</p>}
		</InfoCityStyled>
	)
};

export default InfoCity;