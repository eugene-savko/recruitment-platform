import styled from 'styled-components';

const TablePaginationSelectWrapper = styled.div`
	padding: 0.25em 0.5em;
	display: grid;
	align-items: center;
	grid-template-areas: 'select';
	width: 100%;
	width: 9ch;
	border-radius: 0.25em;
	font-size: 12px;
	cursor: pointer;
	line-height: 1.1;
	background-color: #fff;
	background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
	&:focus-within {
		border: 2px solid #40bfef;
	}
	&::after {
		content: '';
		width: 0.8em;
		height: 0.5em;
		background-color: #777;
		clip-path: polygon(100% 0%, 0 0%, 50% 100%);
		grid-area: select;
		justify-self: end;
	}
`;
export default TablePaginationSelectWrapper;
