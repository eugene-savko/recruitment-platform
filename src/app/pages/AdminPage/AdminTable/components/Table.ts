import { Table as MaterialTable } from '@material-ui/core';
import styled from 'styled-components';

const Table = styled(MaterialTable)`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	margin: 20px 20px;
	border: 1px solid #000;
	border-collapse: collapse;
`;
export default Table;
