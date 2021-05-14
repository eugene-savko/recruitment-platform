import styled from 'styled-components';
import { Table as MaterialTable } from '@material-ui/core';

const Table = styled(MaterialTable)`
	grid-column: 1 / span 2;
	background: #ffffff;
	box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
	border-spacing: 0;
	overflow: hidden;
	border-collapse: collapse;
	border-radius: 10px;
`;
export default Table;
