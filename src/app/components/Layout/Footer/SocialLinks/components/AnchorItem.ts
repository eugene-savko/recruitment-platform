import styled from 'styled-components';

const AnchorItem = styled.a`
	display: block;
	width: 100%;
	height: 100%;

	fill: #000;

	&:hover {
		border-radius: 100%;

		fill: #fff;
		transform: scale(1.25);

		background-color: #0082ca;

		transition: background-color 0.5s, transform 0.5s ease-out, fill 0.5s;
		transition: background-color 0.5s, transform 0.5s ease-out, fill 0.5s;
	}
`;

export default AnchorItem;
