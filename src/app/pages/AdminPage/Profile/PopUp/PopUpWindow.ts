import styled from 'styled-components';

const PopUpWindow = styled.div`
	position: absolute;
	top: 70px;
	right: 20px;
	width: 360px;
	height: 60px;
	background-color: white;
	border: 1px solid #3f51b5;
	border-radius: 5px;
	text-align: center;
	z-index: 10;
	animation: 3s ease-in-out slideLeft;
	visibility: visible !important;

	@keyframes slideLeft {
		0% {
			transform: translateX(100%);
		}
		10% {
			transform: translateX(0%);
		}
		20% {
			transform: translateX(0%);
		}
		30% {
			transform: translateX(0%);
		}
		40% {
			transform: translateX(0%);
		}
		50% {
			transform: translateX(0%);
		}
		60% {
			transform: translateX(0%);
		}
		70% {
			transform: translateX(-3%);
		}
		80% {
			transform: translateX(-2%);
		}
		90% {
			transform: translateX(-1%);
		}
		100% {
			transform: translateX(100%);
		}
	}
`;

export default PopUpWindow;
