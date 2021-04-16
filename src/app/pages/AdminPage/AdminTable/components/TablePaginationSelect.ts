import styled from 'styled-components';

const TablePaginationSelect = styled.select`
	appearance: none;
	background-color: transparent;
	border: none;
	padding: 0 1em 0 0;
	margin: 0;
	width: 100%;
	font-family: inherit;
	font-size: 20px;
	cursor: inherit;
	line-height: inherit;
	outline: none;
	grid-area: select;
	&::-ms-expand {
		display: none;
	}
`;
export default TablePaginationSelect;
