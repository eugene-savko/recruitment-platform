import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Avatar, Button, Paper } from '@material-ui/core';

export const SPaper = styled(Paper)`
	padding: 20px;
	height: 450px;
	width: 280px;
	margin: 70px auto;
`;

export const SAvatar = styled(Avatar)`
	background-color: #3f51b5;
	margin-bottom: 12px;
`;

export const SButton = styled(Button)`
	margin: 8px 0;
`;

export const SNavLink = styled(NavLink)`
	color: #3f51b5;
	text-decoration: none;
	:hover {
		color: #000;
	}
`;

export const SError = styled.p`
	color: red;
	font-size: 12px;
`;
