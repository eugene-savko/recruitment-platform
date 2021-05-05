import styled from 'styled-components';
import { TableRow as MaterialTableRow } from '@material-ui/core';

const TableRow = styled(MaterialTableRow)`
	border-bottom: 1px solid lightgray;
	&:last-child {
		border-bottom: none;
	}
	&:hover {
		background-color: #9fa8da;
	}
`;
export default TableRow;
