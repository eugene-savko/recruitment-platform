import styled from 'styled-components';
import Select from 'react-select';

const FormSelect = styled(Select)`
	margin-top: 10px;
	font-family: Inter;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #3f51b5;
	outline: 0;
	& .Select__control {
		border-color: #7986cb;
		box-shadow: none;
		&:hover {
			border-color: #7986cb;
		}
	}
`;
export default FormSelect;
