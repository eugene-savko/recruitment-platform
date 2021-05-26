import styled from 'styled-components';
import {
	Table as MaterialTable,
	Grid as MaterialGrid,
	Paper,
	TableRow as MaterialTableRow,
} from '@material-ui/core';
import Select from 'react-select';

const WrapperCandidateTable = styled(MaterialGrid)`
	width: 100%;
`;

const ContainerTable = styled(MaterialGrid)`
	justify-content: space-between;
	box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
		0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const PaperTable = styled(Paper)`
	padding: 10px 20px 0 20px;
	box-sizing: border-box;
	display: grid;
	grid-template: repeat(3, auto) / 95% 5%;
	justify-items: center;
	width: 100%;
`;

const InternshipFilterSelect = styled(Select)`
	margin: 8px 0;
	width: 500px;
	font-family: Inter, serif;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #3f51b5;
	& .select__menu {
		top: 30px;
		left: 0;
	}
	& .select__control {
		border-color: #7986cb;
		box-shadow: none;
		&:hover {
			border-color: #7986cb;
		}
	}
	& .select__indicator-separator {
		display: none;
	}

	& .select__indicator,
	.select__placeholder,
	.select__single-value,
	.select__indicator:hover,
	.select__placeholder:hover {
		color: #3f51b5;
	}

	& .select__indicator-separator,
	.select__indicator-separator:hover {
		background-color: #3f51b5;
	}
`;

const Table = styled(MaterialTable)`
	border-spacing: 0;
	border-collapse: collapse;
	border-radius: 10px;
	grid-column: 1 / span 2;
	box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
	overflow: hidden;
`;

const TableHeaderRow = styled(MaterialTableRow)`
	border: 1px solid #9fa8da;
	border-radius: 8px;
	height: 50px;
	background-color: #3f51b5;
	font-family: Inter, sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #fff;
`;

const TableRow = styled(MaterialTableRow)`
	border-bottom: 1px solid lightgray;
	&:last-child {
		border-bottom: none;
	}
	&:hover {
		color: #fff;
		background-color: rgba(63, 81, 181, 0.2);
		border: none;
		box-shadow: 0px 8px 7px -3px rgba(40, 53, 147, 0.8);
	}
`;

const TableCell = styled.td`
	border: none;
	padding-top: 12px;
	padding-bottom: 12px;
	text-align: center;
	font-family: Inter, serif;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: rgba(0, 0, 0, 0.7);
`;

export {
	Table,
	ContainerTable,
	InternshipFilterSelect,
	PaperTable,
	TableCell,
	TableHeaderRow,
	TableRow,
	WrapperCandidateTable,
};
