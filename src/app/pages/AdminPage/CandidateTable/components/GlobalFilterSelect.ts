import Select from 'react-select';
import styled from 'styled-components';

const GlobalFilterSelect = styled(Select)`
	margin: 20px 0px 0px 20px;
	font-family: Inter;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	width: 500px;
	color: #6e6893;
	& .Select__control {
		border-color: #7986cb;
	}
	& .Select__menu {
		top: -10px;
		left: 0px;
	}
`;
export default GlobalFilterSelect;
