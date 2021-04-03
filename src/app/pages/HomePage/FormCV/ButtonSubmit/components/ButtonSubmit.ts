import styled from 'styled-components';

import { Button as MaterialButton } from '@material-ui/core';

export const Button = styled(MaterialButton)`
	width: 119px;
	height: 36px;
	margin: 0 0 30px 0;
	border-radius: 18px;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 16px;
	background: #0082ca;
	color: white;

	&:hover {
		background: #40bfef;
	}
	text-transform: none;
`;
