import styled from 'styled-components';

import ArrowDown from 'app/assets/img/Profile/select-arrow-down 4.png';

const Select = styled.select`
	display: block;
	height: 42px;
	max-width: 80%;
	min-width: 160px;
	padding-left: 14px;
	margin: 6px auto;
	text-transform: uppercase;
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-size: 13px;
	font-weight: 700;
	line-height: 1.75;
	color: #6b778c;
	background-color: #ffffff;
	border: 1px solid #3f51b5;
	border-radius: 5px;
	outline: none;
	appearance: none;
	cursor: pointer;
	transition: ease-in-out 0.2s;
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
