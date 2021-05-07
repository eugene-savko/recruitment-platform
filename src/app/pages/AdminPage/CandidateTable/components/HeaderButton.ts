import styled from 'styled-components';
import { Button } from '@material-ui/core';

const HeaderButton = styled(Button)`
	padding-left: 24px;
	font-family: Inter, sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #3f51b5;
	&:hover {
		background-color: transparent;
	}
`;
export default HeaderButton;
