import styled from 'styled-components';

const Input = styled.input`
	&[type='text'] {
		width: 100%;
		max-width: 470px;

		padding: 15px;

		outline: none;
		box-sizing: border-box;
		background-color: #ffffff;

		font-family: 'Open Sans', sans-serif;
		font-size: 16px;
		line-height: 16px;
		font-weight: 400;

		border: 1px solid #e3e3e3;
		border-radius: 5px;

		transition: ease-in-out 0.2s;

		&:hover {
			border: 1px solid #4e4e4e;
			transition: 0.2s ease-in-out;
		}

		&:focus {
			border: 1px solid #4e4e4e;
		}

		// Enabled when there is a placeholder in the input field and there is no user-entered text.
		&:placeholder-shown {
			font-weight: 300;
			color: #4e4e4e;
		}
	}
`;

export default Input;
