import { CountryDropdown } from 'react-country-region-selector';
import styled from 'styled-components';

const SelectCountry = styled(CountryDropdown)`
	width: 100%;

	padding: 15px;

	outline: none;
	box-sizing: border-box;
	background-color: #ffffff;

	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	line-height: 21px;
	font-weight: 400;

	border: 1px solid #e3e3e3;
	border-radius: 5px;

	transition: ease-in-out 0.2s;
	padding-right: 25px;

	appearance: none;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACXSURBVHgBfY/RDYIwFEVP6QKOwAh+mfjpJOoExgVEYRB1Azfw0wRNWIE9sNbXNCi0wE2a3Oadm/cuOBWvNVPKHilFuXNWkT8zsEfxFw6LbQxXM3RTiUvhs08w76t8ankb8vIcwUlz97Awxt7Ub6XW7cBvamHF3MNmxWlZq96d3ZAVMIB9h7DcP0QIx4F+iBAelwu5DgP6AipOP+ELHeuEAAAAAElFTkSuQmCC);
	background-position: 95%;
	background-repeat: no-repeat;
	&:hover {
		border: 1px solid #4e4e4e;
		transition: 0.2s ease-in-out;
	}

	&:focus {
		border: 1px solid #4e4e4e;
	}
`;

export default SelectCountry;
