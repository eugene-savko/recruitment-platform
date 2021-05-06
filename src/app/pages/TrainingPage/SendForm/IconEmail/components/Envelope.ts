import styled from 'styled-components';

const Envelope = styled.g`
	animation: envelope 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

	-webkit-animation-delay: 1s;
	-moz-animation-delay: 1s;
	-o-animation-delay: 1s;
	animation-delay: 1s;

	transform: translate(0, -100%);
	-moz-transform: translate(0, -100%);
	-ms-transform: translate(0, -100%);
	-webkit-transform: translate(0, -100%);
	-o-transform: translate(0, -100%);

	@keyframes envelope {
		from {
			transform: translate(0, -100%);
			-moz-transform: translate(0, -100%);
			-ms-transform: translate(0, -100%);
			-webkit-transform: translate(0, -100%);
			-o-transform: translate(0, -100%);
		}
		to {
			transform: translate(0, 80px);
			-moz-transform: translate(0, 80px);
			-ms-transform: translate(0, 80px);
			-webkit-transform: translate(0, 80px);
			-o-transform: translate(0, 80px);
		}
	}
`;

export default Envelope;
