import styled from 'styled-components';

const Button = styled.span`
	margin: 0;
	padding: 5px;
	display: inline-block;
	user-select: none;
	font-family: 'Open Sans', sans-serif;
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	outline: none;
	border: none;
	border-bottom: 3px solid #0082ca;
	color: #0082ca;
	background-color: inherit;
	cursor: pointer;

	transition: ease-in-out 0.2s;

	&:hover {
		color: #40bfef;
		border-color: #40bfef;
		transition: 0.2s ease-in-out;
	}
`;

export default Button;
