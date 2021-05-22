import { Button as MaterialButton } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderButton = styled(MaterialButton)`
	padding-left: 24px;
	font-family: Inter, sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #fff;
	&:hover {
		background-color: transparent;
	}
`;
const ColumnProfileButton = styled(MaterialButton)`
	text-decoration: none;
	color: #3f51b5;
	button {
		&:hover {
			background-color: #fff;
		}
	}
`;

const ProfileLink = styled(Link)`
	text-decoration: none;
	button {
		&:hover {
			background-color: #fff;
		}
	}
`;
export { ColumnProfileButton, HeaderButton, ProfileLink };
