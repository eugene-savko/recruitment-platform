import { IconButton } from '@material-ui/core';
import styled from 'styled-components';

const SearchButton = styled(IconButton)`
	margin-top: 16px;
	margin-left: 34px;
	padding: 0;
	width: 48px;
	height: 48px;
	background-color: #0082ca;
	border-radius: 50px;
	color: #fff;
	svg {
		width: 24px;
		height: 24px;
	}
`;

export default SearchButton;
