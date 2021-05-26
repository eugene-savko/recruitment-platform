import styled from 'styled-components';

const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1210;
	width: inherit;
	outline: 0;

	animation: 1s ease-in fadeIn;
	visibility: visible !important;

	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translate(-50%, -50%);
		}
		50% {
			opacity: 0.5;
			transform: translate(-50%, -50%);
		}
		100% {
			opacity: 1;
			transform: translate(-50%, -50%);
		}
	}
`;

export default Wrapper;
