import styled from 'styled-components';

const CustomSvg = styled.svg`
	position: absolute;
	top: 0;
	left: 0;
	width: 70px;
	height: 70px;

	animation: loading 2s ease-in infinite;
	@keyframes loading {
		0% {
			opacity: 1;
			transform: scale(1.1);
		}
		90% {
			opacity: 1;
			transform: scale(1);
		}

		100% {
			opacity: 0;
			transform: scale(0.5);
		}
	}
`;

export default CustomSvg;
