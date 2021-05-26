import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const TextFieldEnglishLevel = styled(TextField)`
	display: block;
	margin: 6px auto;
	background-color: #ffffff;
	color: #6b778c;
	height: 42px;
	max-width: 80%;
	min-width: 160px;
	font-weight: bold;
	padding: 0;
	border-color: #3f51b5;

	& div > fieldset {
		border-color: #3f51b5;
	}

	& div > input {
		text-transform: uppercase;
		font-size: 13px;
		font-weight: 700;
		color: #9b778c;
		height: 42px;
		padding: 0;
		margin: 0;
		text-align: center;
		border-color: #3f51b5;
	}
`;

export default TextFieldEnglishLevel;
