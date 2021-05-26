import styled from 'styled-components';

const CopyrightText = styled.p`
	font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
	font-size: 10px;
	font-weight: 400;
	color: #222;

	&::after {
		content: '|';
		font-size: 10px;

		margin: 0 10px;
	}
`;

export default CopyrightText;
