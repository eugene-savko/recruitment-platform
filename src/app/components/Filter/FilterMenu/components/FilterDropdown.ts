import { Select } from '@material-ui/core';
import styled from 'styled-components';

export const FilterDropdown = styled(Select)`
	font-size: 14px;
	color: #0082ca;
	border: 1px solid #e1e1e1;
	box-sizing: border-box;
	border-radius: 25px;
	height: 48px;
	padding: 7px 20px 7px 23px;
	&:last-of-type {
		margin-right: 34px;
	}
	&:hover {
		border: 1px solid #0082ca;
	}
`;
