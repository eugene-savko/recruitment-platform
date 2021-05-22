import { Button as MaterialButton, Typography, Input } from '@material-ui/core';
import styled from 'styled-components';
import Select from 'react-select';

const TablePaginationButton = styled(MaterialButton)`
	padding: 0;
	color: #3f51b5;
	min-width: 30px;
`;

const TablePaginationList = styled.ul`
	margin: 20px 0;
	grid-column: 1 / span 2;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	list-style-type: none;
	width: inherit;
`;

const TablePaginationItem = styled.li`
	display: flex;
	align-items: center;
	margin-right: 10px;
	list-style: none;
`;

const TablePaginationSelectLabel = styled.label`
	padding-right: 10px;
	font-family: Inter, sans-serif;
	font-style: normal;
	font-weight: 800;
	font-size: 14px;
	line-height: 15px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #3f51b5;
`;

const TablePaginationSelect = styled(Select)`
	font-family: Inter, sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	width: 100px;
	color: #6e6893;
	& .select__placeholder {
		color: #3f51b5;
	}
	& .select__control {
		border-color: #7986cb;
	}
	& .select__menu {
		top: -6px;
		right: 0px;
	}
	& .select__indicator {
		border-color: #7986cb;
	}
	& .select__menu {
		width: 36px;
	}
	& .select__option {
		padding: 3px 10px;
	}
`;

const NumberPageInput = styled(Input)`
	border: 1px solid lightgray;
	padding-left: 5px;
	width: 40px;
	border-radius: 4px;
	font-weight: 500;
	color: #3f51b5;
`;
const NumberPageTextField = styled(Typography)`
	font-family: Inter, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 15px;
	letter-spacing: 0.05em;
	color: #3f51b5;
`;
export {
	TablePaginationSelectLabel,
	TablePaginationButton,
	TablePaginationItem,
	TablePaginationList,
	TablePaginationSelect,
	NumberPageTextField,
	NumberPageInput,
};
