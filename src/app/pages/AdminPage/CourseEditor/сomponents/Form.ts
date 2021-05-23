import Select from 'react-select';
import styled from 'styled-components';
import {
	Input as MaterialInput,
	Button as MaterialButton,
} from '@material-ui/core';

const Form = styled.form`
	margin-bottom: 10px;
	padding: 16px;
	box-sizing: content-box;
	width: 600px;
	background: #fff;
	border-radius: 10px;
	z-index: 1000;
	outline: 0;
`;

const FormTitle = styled.h2`
	justify-self: center;
	font-size: 30px;
	line-height: 1;
	color: #3f51b5;
`;

const FormInput = styled(MaterialInput)`
	margin: 10px 0 0 0;
	border: 1px solid #3f51b5;
	border-radius: 2px;
	width: 300px;
	background-color: #fff;
	color: #3f51b5;
	input {
		height: 25px;
		text-indent: 10px;
	}
`;

const FormLabel = styled.label`
	font-family: Inter, sans-serif;
	font-style: normal;
	font-weight: 800;
	font-size: 14px;
	line-height: 15px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #3f51b5;
	padding: 5px;
`;

const FormSelect = styled(Select)`
	margin: 10px 0px;
	display: grid;
	font-family: Inter, sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	color: #3f51b5;
	outline: 0;
	& .select__control {
		border-color: #7986cb;
		box-shadow: none;
		&:hover {
			border-color: #7986cb;
		}
	}
	& .select__indicator,
	.select__placeholder {
		color: #3f51b5;
	}
`;

const FormButton = styled(MaterialButton)`
	width: 50px;
	color: #3f51b5;
	&:hover {
		background-color: #3f51b5;
		color: #fff;
	}
`;
export { Form, FormTitle, FormButton, FormSelect, FormLabel, FormInput };
