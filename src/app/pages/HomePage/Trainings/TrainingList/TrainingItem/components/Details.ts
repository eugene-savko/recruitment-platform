import { Button } from '@material-ui/core';
import styled from 'styled-components';

const Details = styled(Button)`
	width: 100px;
	height: 36px;
	font-weight: 600;
	font-size: 16px;
	text-transform: capitalize;
	background: #0082ca;
	border-radius: 18px;
	color: #fff;
	&:hover {
		color: #0082ca;
	}
`;

export default Details;
