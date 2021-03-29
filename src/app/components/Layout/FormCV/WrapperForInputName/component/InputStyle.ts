import styled from 'styled-components';

import { Input as MaterialInput } from '@material-ui/core';

export const InputText = styled(MaterialInput)`
	background: #ffffff;
	border: 1px solid #e3e3e3;
	box-sizing: border-box;
	border-radius: 5px;
	width: 470px;
	height: 48px;
	margin-bottom: 25px;
	padding: 16px 15px;
	font-size: 16px;
	line-height: 16px;
	color: #4e4e4e;

	&.MuiInput-underline:hover:not(.Mui-disabled):before {
		color: #40bfef;
	}
`;
