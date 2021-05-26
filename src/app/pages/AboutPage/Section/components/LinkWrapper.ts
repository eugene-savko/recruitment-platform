import styled from 'styled-components';

export const LinkWrapper = styled.a`
	display: inline-block;
	padding-top: 5px;
	color: #0082ca;
	font-weight: 600;
	font-size: 1.25rem;
	line-height: 150%;
	text-decoration: none;
	&:hover {
		color: #40bfef;
	}
	.arrow {
		font-size: 1.25rem;
		line-height: 150%;
		cursor: pointer;
		text-align: left;
		border: none;
		display: inline-block;
		margin-top: 40px;
	}

	.arrow .anim-arrow {
		top: 2px;
	}

	.anim-arrow {
		display: inline-block;
		width: 44px;
		min-width: 44px;
		height: 8px;
		padding-top: calc(8px + 2px);
		padding-bottom: 8px;
		margin-left: 15px;
		position: relative;
		top: 2px;
		overflow: hidden;
	}

	.anim-arrow__shaft {
		background-color: #0082ca;
		display: block;
		height: 2px;
		width: 44px;
		top: 0;
		position: relative;
		will-change: transform, width;
	}

	.anim-arrow__shaft:before,
	.anim-arrow__shaft:after {
		content: '';
		display: block;
		height: 2px;
		position: absolute;
		top: 0;
		right: 0;
		width: 8px;
		background-color: #0082ca;
		transform: rotate(0);
	}

	.anim-arrow__shaft:before {
		transform-origin: top right;
		transform: rotate(40deg);
	}

	.anim-arrow__shaft:after {
		transform-origin: bottom right;
		transform: rotate(-40deg);
	}

	@keyframes aaFramesShaft {
		15% {
			width: 0;
		}
		100% {
			width: 44px;
		}
	}

	@keyframes aaFramesHeadTop {
		15% {
			width: 0;
			transform: rotate(0deg);
		}
		50% {
			width: 0;
			transform: rotate(0deg);
		}
		51% {
			width: 8px;
			transform: rotate(0deg);
		}
		100% {
			width: 8px;
			transform: rotate(40deg);
		}
	}

	@keyframes aaFramesHeadBottom {
		15% {
			width: 0;
			transform: rotate(0deg);
		}
		50% {
			width: 0;
			transform: rotate(0deg);
		}
		51% {
			width: 8px;
			transform: rotate(0deg);
		}
		100% {
			width: 8px;
			transform: rotate(-40deg);
		}
	}

	&:hover .anim-arrow__shaft {
		animation-name: aaFramesShaft;
		animation-duration: 0.9s;
		animation-timing-function: linear;
		animation-delay: 0.2s;
	}

	&:hover .anim-arrow__shaft:before,
	.anim-arrow__in-viewport .anim-arrow__shaft:before,
	&:hover .anim-arrow__shaft:after,
	.anim-arrow__in-viewport .anim-arrow__shaft:after {
		width: 8px;
		animation-duration: calc(0.9s + 0.9s);
		animation-timing-function: linear;
		animation-delay: 0.2s;
	}

	&:hover .anim-arrow__shaft:before,
	.anim-arrow__in-viewport .anim-arrow__shaft:before {
		animation-name: aaFramesHeadTop;
	}

	&:hover .anim-arrow__shaft:after,
	.anim-arrow__in-viewport .anim-arrow__shaft:after {
		animation-name: aaFramesHeadBottom;
	}

	&:hover {
		color: #40bfef;
	}

	&:hover .anim-arrow__shaft {
		background-color: #40bfef;
	}

	&:hover .anim-arrow__shaft:before {
		background-color: #40bfef;
	}

	&:hover .anim-arrow__shaft:after {
		background-color: #40bfef;
	}
`;
