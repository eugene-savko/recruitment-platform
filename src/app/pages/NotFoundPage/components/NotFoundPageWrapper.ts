import styled from 'styled-components';

export const NotFoundPageWrapper = styled.section`
	margin: 0 auto;
	width: 100%;
	height: calc(100vh - 400px);
	font-family: 'Raleway', sans-serif;
	font-weight: 300;
	padding: 0;
	overflow: visible;
	margin-top: 94px;

	.circles {
		background-color: #fafafa;
		text-align: center;
		position: relative;
	}

	.circles p,
	.circles small {
		font-size: 200px;
		color: #fafafa;
		padding-top: 60px;
		position: relative;
		z-index: 9;
		line-height: 100%;
		margin-bottom: 0;
	}

	.circles p + small {
		font-size: 40px;
		line-height: 100%;
		vertical-align: top;
		margin-top: 0;
	}

	.circles .circle.small {
		width: 140px;
		height: 140px;
		border-radius: 50%;
		background: #0082ca;
		position: absolute;
		z-index: 1;
		top: 80px;
		left: 50%;
		animation: 7s smallmove infinite cubic-bezier(1, 0.22, 0.71, 0.98);
		-webkit-animation: 7s smallmove infinite cubic-bezier(1, 0.22, 0.71, 0.98);
		animation-delay: 1.2s;
		-webkit-animation-delay: 1.2s;
	}

	.circles .circle.med {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: #0082ca;
		position: absolute;
		z-index: 1;
		top: 0;
		left: 10%;
		animation: 7s medmove infinite cubic-bezier(0.32, 0.04, 0.15, 0.75);
		-webkit-animation: 7s medmove infinite cubic-bezier(0.32, 0.04, 0.15, 0.75);
		animation-delay: 0.4s;
		-webkit-animation-delay: 0.4s;
	}

	.circles .circle.big {
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background: #0082ca;
		position: absolute;
		z-index: 1;
		top: 200px;
		right: 0;
		animation: 8s bigmove infinite;
		-webkit-animation: 8s bigmove infinite;
		animation-delay: 3s;
		-webkit-animation-delay: 1s;
	}

	@-webkit-keyframes smallmove {
		0% {
			top: 10px;
			left: 45%;
			opacity: 1;
		}
		25% {
			top: 300px;
			left: 40%;
			opacity: 0.7;
		}
		50% {
			top: 240px;
			left: 55%;
			opacity: 0.4;
		}
		75% {
			top: 100px;
			left: 40%;
			opacity: 0.6;
		}
		100% {
			top: 10px;
			left: 45%;
			opacity: 1;
		}
	}
	@keyframes smallmove {
		0% {
			top: 10px;
			left: 45%;
			opacity: 1;
		}
		25% {
			top: 300px;
			left: 40%;
			opacity: 0.7;
		}
		50% {
			top: 240px;
			left: 55%;
			opacity: 0.4;
		}
		75% {
			top: 100px;
			left: 40%;
			opacity: 0.6;
		}
		100% {
			top: 10px;
			left: 45%;
			opacity: 1;
		}
	}

	@-webkit-keyframes medmove {
		0% {
			top: 0px;
			left: 20%;
			opacity: 1;
		}
		25% {
			top: 300px;
			left: 80%;
			opacity: 0.7;
		}
		50% {
			top: 240px;
			left: 55%;
			opacity: 0.4;
		}
		75% {
			top: 100px;
			left: 40%;
			opacity: 0.6;
		}
		100% {
			top: 0px;
			left: 20%;
			opacity: 1;
		}
	}

	@keyframes medmove {
		0% {
			top: 0px;
			left: 20%;
			opacity: 1;
		}
		25% {
			top: 300px;
			left: 80%;
			opacity: 0.7;
		}
		50% {
			top: 240px;
			left: 55%;
			opacity: 0.4;
		}
		75% {
			top: 100px;
			left: 40%;
			opacity: 0.6;
		}
		100% {
			top: 0px;
			left: 20%;
			opacity: 1;
		}
	}

	@-webkit-keyframes bigmove {
		0% {
			top: 0px;
			right: 4%;
			opacity: 0.5;
		}
		25% {
			top: 100px;
			right: 40%;
			opacity: 0.4;
		}
		50% {
			top: 240px;
			right: 45%;
			opacity: 0.8;
		}
		75% {
			top: 100px;
			right: 35%;
			opacity: 0.6;
		}
		100% {
			top: 0px;
			right: 4%;
			opacity: 0.5;
		}
	}
	@keyframes bigmove {
		0% {
			top: 0px;
			right: 4%;
			opacity: 0.5;
		}
		25% {
			top: 100px;
			right: 40%;
			opacity: 0.4;
		}
		50% {
			top: 240px;
			right: 45%;
			opacity: 0.8;
		}
		75% {
			top: 100px;
			right: 35%;
			opacity: 0.6;
		}
		100% {
			top: 0px;
			right: 4%;
			opacity: 0.5;
		}
	}
`;
