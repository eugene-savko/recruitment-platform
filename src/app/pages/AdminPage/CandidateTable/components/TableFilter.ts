import {
	Input as MaterialInput,
	Button as MaterialButton,
	Grid as MaterialGrid,
} from '@material-ui/core';

import styled from 'styled-components';
import Select from 'react-select';

const ModalFilterButton = styled(MaterialButton)`
	margin: 20px 0 10px 0px;
	min-width: 30px;
`;

const Backdrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	z-index: 1200;
`;

const ModalWrapper = styled(MaterialGrid)`
	position: absolute;
	top: 320px;
	right: 220px;
	transform: translate(-50%, -50%);
	z-index: 2000;
	width: inherit;
	outline: 0;
`;
const Form = styled.form`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin: 16px;
	padding: 16px;
	box-sizing: content-box;
	display: grid;
	grid-template: 50px auto repeat(3, auto) / repeat(2, 150px);
	grid-row-gap: 15px;
	width: 300px;
	background: #fff;
	border-radius: 10px;
	z-index: 1000;
	outline: 0;
`;

const FormTitle = styled.h2`
	grid-column: 1 / span 2;
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
	grid-column: 1 / span 2;
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

const SelectFieldWrapper = styled.div`
	grid-column: 1 / span 2;
`;
const FormSelect = styled(Select)`
	margin-top: 10px;
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
	color: #3f51b5;
	&:hover {
		background-color: #3f51b5;
		color: #fff;
	}
`;

export {
	ModalWrapper,
	SelectFieldWrapper,
	Backdrop,
	ModalFilterButton,
	Form,
	FormButton,
	FormInput,
	FormLabel,
	FormSelect,
	FormTitle,
};
