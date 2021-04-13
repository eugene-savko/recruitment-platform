import styled from 'styled-components';

const Input = styled.input`
	&[type='text'],
	&[type='email'],
	&[type='tel'] {
		width: 100%;
		max-width: 280px;

		padding: 15px;
		margin: 12px 23px;

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

	&[type='checkbox'] {
		margin: 0;
		padding: 0;

		width: 16px;
		height: 16px;

		vertical-align: top;

		border: 1px solid #e3e3e3;
		box-sizing: border-box;
		border-radius: 3px;
		cursor: inherit;

		transition: ease-in-out 0.2s;

		&:hover {
			border: 1px solid #4e4e4e;
			transition: 0.2s ease-in-out;
		}

		&:focus {
			border: 1px solid #4e4e4e;
		}
	}

	&[type='file'] {
		display: none;
	}
`;

export default Input;
