import Select from 'react-select';
import styled from 'styled-components';

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
	& .select__control {
		border-color: #7986cb;
	}
	& .select__menu {
		top: 0;
		left: 20px;
	}
	& .select__indicator {
		border-color: #7986cb;
	}
	& .select__option {
		padding: 2px 2px;
	}
`;
export default TablePaginationSelect;
