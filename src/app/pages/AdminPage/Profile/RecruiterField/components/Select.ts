import styled from 'styled-components';

import ArrowDown from '../../assets/select-arrow-down 4.png';

const Select = styled.select`
	display: block;
	max-width: 80%;
	min-width: 175px;
	height: 42px;
	padding-left: 14px;
	margin: 16px auto;
	color: #6b77a8;
	outline: none;
	box-sizing: border-box;
	background-color: #ffffff;
	font-weight: bold;
	font-size: 14px;
	font-family: 'Open Sans', 'Arial', sans-serif;
	border: 1px solid #e3e3e3;
	border-radius: 5px;
	transition: ease-in-out 0.2s;
	appearance: none;
	background: url(${ArrowDown}) 95% no-repeat;
	&:hover {
		border: 1px solid #4e4e4e;
		transition: 0.2s ease-in-out;
	}
	&:focus {
		border: 1px solid #4e4e4e;
	}
`;

export default Select;
