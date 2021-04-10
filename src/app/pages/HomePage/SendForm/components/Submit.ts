import styled from 'styled-components';

const Submit = styled.button`
	width: 119px;
	height: 36px;
	padding: 10px 15px;

	background: #0082ca;
	border-radius: 18px;
	border: none;
	color: #fff;

	font-family: Open Sans, sans-serif;
	font-size: 16px;
	font-weight: 600;
	font-style: normal;
	line-height: 16px;
	text-align: center;

	cursor: pointer;
	outline-style: none;

	&:hover {
		background-color: #40bfef;
		border: none;
		box-shadow: 0 5px 10px rgb(37 37 37 / 10%);
	}
	&:focus {
		border: 1px solid #fafafa;
	}
`;

export default Submit;
