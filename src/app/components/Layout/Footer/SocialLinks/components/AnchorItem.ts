import styled from 'styled-components';

const AnchorItem = styled.a`
	/* color: #d94a26;
	fill: #d94a26;

	&:hover {
		background: #d94a26;
	} */
	display: block;
	width: 100%;
	height: 100%;

	&:hover {
		border-radius: 100%;

		transform: scale(1.25);

		background-color: #0082ca;

		transition: background-color 0.5s, transform 0.5s ease-out;
		transition: background-color 0.5s, transform 0.5s ease-out;
	}
`;

export default AnchorItem;
