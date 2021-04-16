import styled from 'styled-components';
import { Container as MaterialContainer } from '@material-ui/core';

const TablePagination = styled(MaterialContainer)`
	margin: 20px 20px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	border-collapse: collapse;
	width: 1000px;
`;
export default TablePagination;
