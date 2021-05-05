import styled from 'styled-components';

const SvgIconEnvelope = styled.svg`
	animation: svgIconEnvelope 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

	-webkit-animation-delay: 1.3s;
	-moz-animation-delay: 1.3s;
	-o-animation-delay: 1.3s;
	animation-delay: 1.3s;

	@keyframes svgIconEnvelope {
		0% {
			transform: translate(0, 0);
			-moz-transform: translate(0, 0);
			-ms-transform: translate(0, 0);
			-webkit-transform: translate(0, 0);
			-o-transform: translate(0, 0);
		}
		50% {
			-moz-transform: translate(0, 5px);
			-ms-transform: translate(0, 5px);
			-webkit-transform: translate(0, 5px);
			-o-transform: translate(0, 5px);
			transform: translate(0, 5px);
		}
		100% {
			transform: translate(0, 0);
			-moz-transform: translate(0, 0);
			-ms-transform: translate(0, 0);
			-webkit-transform: translate(0, 0);
			-o-transform: translate(0, 0);
		}
	}
`;

export default SvgIconEnvelope;
