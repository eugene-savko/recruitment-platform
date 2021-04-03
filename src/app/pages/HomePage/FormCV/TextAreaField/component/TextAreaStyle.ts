import styled from 'styled-components';

export const TextAreaField = styled.textarea`
	box-sizing: border-box;
	width: 87.5%;
	min-height: 50px;
	height: 120px;
	margin: 0 auto 25px;
	padding: 16px 15px;
	border: 1px solid #e3e3e3;
	border-radius: 5px;
	font-size: 16px;
	line-height: 16px;
	resize: none;
	color: #4e4e4e;
	background: inherit;
	:focus {
		outline: none;
	}
	::-webkit-input-placeholder {
		color: #4e4e4e;
	}
	:-moz-placeholder {
		color: #4e4e4e;
	}
`;
