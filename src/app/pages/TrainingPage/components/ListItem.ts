import styled from 'styled-components';

import ListIcon from '../assets/list-icon.svg';

const ListItem = styled.li`
	margin: 10px 0;
	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	line-height: 180%;
	color: #222222;

	&::before {
		content: url(${ListIcon});
		margin-right: 15px;
		vertical-align: top;
	}
`;

export default ListItem;
