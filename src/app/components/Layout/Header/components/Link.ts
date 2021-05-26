import styled from 'styled-components';
import { Link as MaterialLink } from '@material-ui/core';

const Link = styled(MaterialLink)`
	padding: 10px;
	font-size: 16px;
	line-height: 16px;
	color: #222222;

	&:hover {
		color: #0082ca;
		text-decoration: none;
	}
`;

export default Link;
