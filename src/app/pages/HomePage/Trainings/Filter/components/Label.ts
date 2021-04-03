import { InputLabel } from '@material-ui/core';
import styled from 'styled-components';

const Label = styled(InputLabel)`
	position: absolute;
	top: -3px;
	left: 20%;
	font-size: 12px;
	transform: translateX(-50%);
	text-align: center;
	color: #000000;
`;

export default Label;
