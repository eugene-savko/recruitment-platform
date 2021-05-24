import { IconButton } from '@material-ui/core';
import styled from 'styled-components';

const SearchButton = styled(IconButton)`
	margin-left: 34px;
	border: none;
	padding: 0;
	height: 48px;
	width: 48px;
	border-radius: 50%;
	background-color: #0082ca;
	color: #fff;
	cursor: pointer;
	outline: 0;
	svg {
		width: 32px;
		height: 32px;
	}
	&:hover {
		color: #0082ca;
	}
`;

export default SearchButton;
