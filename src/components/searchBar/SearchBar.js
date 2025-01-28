import React from "react";
import {SearchBarStyled} from "./SearchBarStyled";

const SearchBar = ({onSearch}) => {
	return (
		<SearchBarStyled onClick={onSearch}>search</SearchBarStyled>
	)
};

export default SearchBar;