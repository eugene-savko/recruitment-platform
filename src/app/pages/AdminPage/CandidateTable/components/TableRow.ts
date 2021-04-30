import styled from 'styled-components';
import { TableRow as MaterialTableRow } from '@material-ui/core';

const TableRow = styled(MaterialTableRow)`
	border-bottom: 0.2px solid #7986cb;
	background-color: #fff;
	&:hover {
		background-color: #7986cb;
	}
	border-radius: 8px;
`;
export default TableRow;
