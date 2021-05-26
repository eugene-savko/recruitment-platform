import styled from 'styled-components';

import Button from '@material-ui/core/Button';

const ButtonMaterial = styled(Button)`
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
	&:hover {
		color: #ffffff;
		border: 1px solid #3f51b5;
		background-color: #3f51b5;
	}
`;

export default ButtonMaterial;
