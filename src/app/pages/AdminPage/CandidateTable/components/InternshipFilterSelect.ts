import Select from 'react-select';
import styled from 'styled-components';

const InternshipFilterSelect = styled(Select)`
	margin: 8px 0;
	font-family: Inter, serif;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	width: 500px;
	color: #6e6893;
	& .select__control {
		border-color: #7986cb;
	}
	& .select__menu {
		top: -10px;
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
`;
export default InternshipFilterSelect;
