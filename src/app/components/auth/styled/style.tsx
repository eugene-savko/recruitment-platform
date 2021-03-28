import styled from 'styled-components';
import { Button, Paper, TextField, Avatar } from '@material-ui/core';

export const SPaper = styled(Paper)`
	padding: 20px;
	min-height: 350px;
	width: 280px;
	margin: 70px auto;
	transition: all 0.5s ease-in;
`;

export const SButton = styled(Button)`
	margin: 8px 0;
`;

export const SError = styled.p`
	margin: 2px;
	color: red;
	font-size: 12px;
`;
export const STextField = styled(TextField)`
	margin: 0;
`;
export const SAvatar = styled(Avatar)`
	background-color: #3f51b5;
	margin-bottom: 12px;
`;
