import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const Input = styled(TextField)`
	grid-column: 1 / span 2;
	margin-top: 10px;
	padding: 0;
	color: #3f51b5;
	input {
		background-color: white;
		padding: 10px 10px;
		border-radius: 2px;
		color: #3f51b5;
	}
`;
export default Input;
