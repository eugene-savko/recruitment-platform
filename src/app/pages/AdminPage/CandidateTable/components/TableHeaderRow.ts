import styled from 'styled-components';
import { TableRow as MaterialTableRow } from '@material-ui/core';

const TableHeaderRow = styled(MaterialTableRow)`
	border: 1px solid #9fa8da;
	height: 50px;
	background-color: #9fa8da;
	font-family: Inter;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #3f51b5;
	border-radius: 8px;
`;
export default TableHeaderRow;
