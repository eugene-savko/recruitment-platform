import styled from 'styled-components';

const Select = styled.div`
	position: relative;

	display: inline-flex;
	flex-direction: column;

	width: inherit;

	outline: none;
	box-sizing: border-box;
	background-color: #ffffff;

	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	line-height: 16px;
	font-weight: 400;
	color: #4e4e4e;

	border: 1px solid #e3e3e3;
	border-radius: 5px;

	transition: ease-in-out 0.2s;

	&:hover {
		border: 1px solid #4e4e4e;
		transition: 0.2s ease-in-out;
	}
`;

export default Select;
