import styled from 'styled-components';
import { Input as MaterialInput } from '@material-ui/core';

const FormInput = styled(MaterialInput)`
	margin: 10px 0 0 0;
	width: 300px;
	background-color: #fff;
	border-radius: 2px;
	color: #3f51b5;
	input {
		text-indent: 10px;
	}
`;
export default FormInput;
