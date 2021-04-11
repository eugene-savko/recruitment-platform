import styled from 'styled-components';

const Button = styled.span`
	margin: 0;
	padding: 5px;

	display: inline-block;

	margin-right: 15px;

	outline: none;
	background-color: inherit;

	border: none;

	cursor: pointer;
	user-select: none;

	font-family: 'Open Sans', sans-serif;
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	color: #0082ca;

	border-bottom: 3px solid #0082ca;

	transition: ease-in-out 0.2s;

	&:hover {
		color: #40bfef;
		border-color: #40bfef;
		transition: 0.2s ease-in-out;
	}

	&:focus {
	}
`;

export default Button;
