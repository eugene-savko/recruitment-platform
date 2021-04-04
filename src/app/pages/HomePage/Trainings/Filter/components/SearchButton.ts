import { IconButton } from '@material-ui/core';
import styled from 'styled-components';

const SearchButton = styled(IconButton)`
	padding: 0;
	height: 48px;
	width: 48px;
	border-radius: 50%;
	background-color: #0082ca;
	color: #fff;
	margin-left: 34px;
	cursor: pointer;
	border: none;
	outline: 0;
	svg {
		width: 32px;
		height: 32px;
	}
`;

export default SearchButton;
