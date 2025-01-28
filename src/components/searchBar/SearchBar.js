import React, {useState} from "react";
import {SearchBarStyled} from "./SearchBarStyled";

const SearchBar = ({onSearch}) => {
	const [city, setCity] = useState();

	const handleSearch = () => {
		if (city.trim()) {
			onSearch(city)
		}
	}

	return (
		<SearchBarStyled>
			<input type="text" onChange={(event) => setCity(event.target.value)}/>
			<button onClick={handleSearch}>search</button>
		</SearchBarStyled>
	)
};

export default SearchBar;