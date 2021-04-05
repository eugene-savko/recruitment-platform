import styled from 'styled-components';

import arrowIcon from '../../assets/img/dropdown-arrow.png';

const DropdownMenuButton = styled.button`
	box-sizing: border-box;
	position: relative;
	padding-left: 23px;
	border: 1px solid #e1e1e1;
	border-radius: 36px;
	background: #fff;

	height: 48px;
	width: 354px;

	text-align: start;
	font-size: 0.875rem;
	line-height: 150%;
	color: #0082ca;
	text-transform: capitalize;

	cursor: pointer;

	&:before {
		position: absolute;
		top: 50%;
		content: '';
		background-image: url(${arrowIcon});
		background-repeat: no-repeat;
		right: 18px;
		top: 50%;
		width: 12px;
		height: 8px;
		transform: rotate(
			${(props: { menuState: boolean }) =>
				props.menuState ? '180deg' : '0deg'}
		);

		transition: all 0.5s ease;
		transform-origin: 50% 30%;
	}

	&:focus {
		border: 1px solid #e1e1e1;
		outline: none;
	}
`;

export default DropdownMenuButton;
