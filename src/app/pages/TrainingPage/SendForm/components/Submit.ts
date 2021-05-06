import styled from 'styled-components';

const Submit = styled.button`
	padding: 10px 20px;
	margin: 35px 0 35px 98%;
	transform: translate(-100%, 0);

	text-align: center;

	background-color: #0082ca;
	outline: none;

	border-radius: 18px;
	border: none;

	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	font-weight: 600;
	line-height: 16px;
	color: #fff;

	cursor: pointer;

	transition: ease-in-out 0.2s;

	&:hover {
		background-color: #40bfef;
		transition: 0.2s ease-in-out;
	}

	@media (max-width: 1047px) {
		margin: 35px 0 35px 50%;
		transform: translate(-50%, 0);
	}
`;

export default Submit;
