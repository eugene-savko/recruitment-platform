import styled from 'styled-components';

const TextArea = styled.textarea`
	padding: 15px;
	margin: 12px 23px;
	width: 100%;
	max-width: 986px;
	height: 120px;

	font-family: Open Sans, sans-serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 16px;
	color: #4e4e4e;

	background: #ffffff;
	border: 1px solid #e3e3e3;
	box-sizing: border-box;
	border-radius: 5px;

	resize: none;
	outline: none;

	&:focus {
		border: 1px solid #4e4e4e;
	}

	@media (max-width: 1047px) {
		max-width: 470px;
	}
`;

export default TextArea;
