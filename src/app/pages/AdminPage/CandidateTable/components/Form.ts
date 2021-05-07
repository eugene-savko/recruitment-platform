import styled from 'styled-components';

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
	background: #7986cb;
	width: 300px;
	border-radius: 10px;
	z-index: 1000;
	outline: 0;
`;
export default Form;
