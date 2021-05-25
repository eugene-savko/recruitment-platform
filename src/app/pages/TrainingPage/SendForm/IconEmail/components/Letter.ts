import styled from 'styled-components';

const Letter = styled.g`
	animation: letter 1.5s linear forwards;

	@keyframes letter {
		from {
			transform: translate(0, -100%);
			-moz-transform: translate(0, -100%);
			-ms-transform: translate(0, -100%);
			-webkit-transform: translate(0, -100%);
			-o-transform: translate(0, -100%);
		}
		to {
			transform: translate(0, 100%);
			-moz-transform: translate(0, 100%);
			-ms-transform: translate(0, 100%);
			-webkit-transform: translate(0, 100%);
			-o-transform: translate(0, 100%);
		}
	}
`;

export default Letter;
