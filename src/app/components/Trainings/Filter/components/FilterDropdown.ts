import { Select } from '@material-ui/core';
import styled from 'styled-components';

const FilterDropdown = styled(Select)`
	&& {
		border: 1px solid #e1e1e1;
		padding: 7px 20px 7px 23px;
		box-sizing: border-box;
		border-radius: 25px;
		height: 48px;
		font-size: 14px;
		color: #0082ca;
		&:hover {
			border: 1px solid #0082ca;
		}
	}
`;

export default FilterDropdown;
