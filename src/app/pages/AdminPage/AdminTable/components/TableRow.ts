import styled from 'styled-components';
import { TableRow as MaterialTableRow } from '@material-ui/core';

const TableRow = styled(MaterialTableRow)`
	border: 1px solid #0082ca;
	background-color: #f1f1f1;
	&:nth-child(odd) {
		background-color: #40bfef;
	}
	&:nth-child(even):hover {
		background-color: #fff;
	}
`;
export default TableRow;
