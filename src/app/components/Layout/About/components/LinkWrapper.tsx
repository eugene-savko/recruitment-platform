import styled from 'styled-components';

type LinkWrapperProps = {
	arrow: boolean,
};

export const LinkWrapper = styled.a`
	.arrow {
		display: (
			${(props: LinkWrapperProps) => (props.arrow ? 'inline' : 'none')}
		);
	}
	.arrow {
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 150%;
		cursor: pointer;
		text-align: left;
		border: none;
		display: inline-block;
		color: #0082ca;
		margin-top: 40px;
	}

	.arrow .anim-arrow {
		top: 2px;
	}

	.arrow.arrow--white {
		color: #fff;
	}

	.arrow.arrow--white:hover {
		color: #fff;
	}

	.arrow.arrow--white:hover .anim-arrow__shaft {
		background-color: #fff;
	}

	.arrow.arrow--white:hover .anim-arrow__shaft:before,
	.arrow.arrow--white:hover .anim-arrow__shaft:after {
		background-color: #fff;
	}

	.arrow--lseagreen {
		color: #40bfef;
		margin-top: 0;
	}

	.arrow--black {
		color: #222;
		margin-top: 0;
	}

	.row__blue .et_pb_column:last-child .arrow--white {
		justify-content: flex-end;
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
		top: 4px;
		overflow: hidden;
	}

	.anim-arrow--left {
		transform: rotate(180deg);
	}

	.anim-arrow--white .anim-arrow__shaft {
		background-color: #fff;
	}

	.anim-arrow--white .anim-arrow__shaft:before,
	.anim-arrow--white .anim-arrow__shaft:after {
		background-color: #fff;
	}

	.anim-arrow--lseagreen .anim-arrow__shaft {
		background-color: #40bfef;
	}

	.anim-arrow--lseagreen .anim-arrow__shaft:before,
	.anim-arrow--lseagreen .anim-arrow__shaft:after {
		background-color: #40bfef;
	}

	.anim-arrow--black .anim-arrow__shaft {
		background-color: #222;
	}

	.anim-arrow--black .anim-arrow__shaft:before,
	.anim-arrow--black .anim-arrow__shaft:after {
		background-color: #222;
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

	.arrow:hover .anim-arrow__shaft,
	.anim-arrow__in-viewport .anim-arrow__shaft {
		animation-name: aaFramesShaft;
		animation-duration: 0.9s;
		animation-timing-function: linear;
		animation-delay: 0.2s;
	}

	.arrow:hover .anim-arrow__shaft:before,
	.anim-arrow__in-viewport .anim-arrow__shaft:before,
	.arrow:hover .anim-arrow__shaft:after,
	.anim-arrow__in-viewport .anim-arrow__shaft:after {
		width: 8px;
		animation-duration: calc(0.9s + 0.9s);
		animation-timing-function: linear;
		animation-delay: 0.2s;
	}

	.arrow:hover .anim-arrow__shaft:before,
	.anim-arrow__in-viewport .anim-arrow__shaft:before {
		animation-name: aaFramesHeadTop;
	}

	.arrow:hover .anim-arrow__shaft:after,
	.anim-arrow__in-viewport .anim-arrow__shaft:after {
		animation-name: aaFramesHeadBottom;
	}

	.arrow:hover {
		color: #40bfef;
	}

	.arrow:hover .anim-arrow__shaft {
		background-color: #40bfef;
	}

	.arrow:hover .anim-arrow__shaft:before {
		background-color: #40bfef;
	}

	.arrow:hover .anim-arrow__shaft:after {
		background-color: #40bfef;
	}

	.link__standard {
		color: #0082ca;
		border-bottom: 2px solid #0082ca;
	}

	.link__standard:hover {
		color: #40bfef;
		border-bottom: 2px solid #40bfef;
	}
`;
