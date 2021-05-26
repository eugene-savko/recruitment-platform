import styled from 'styled-components';

import arrowIcon from 'app/assets/img/HomePage/Trainings/dropdown-arrow.png';

interface IDropdownMenuButton {
	menuState: boolean | null;
}

const DropdownMenuButton = styled.button`
	position: relative;

	border: 1px solid #e1e1e1;
	padding-left: 23px;
	box-sizing: border-box;
	height: 48px;
	width: 354px;

	text-align: start;
	font-size: 0.875rem;
	line-height: 150%;
	text-transform: capitalize;

	transition: all 2s ease-in;
	background: #fff;
	border-radius: 36px;
	color: #0082ca;
	cursor: pointer;

	&:before {
		position: absolute;
		top: 50%;
		content: '';
		right: 18px;
		top: 50%;

		width: 12px;
		height: 8px;

		transition: all 0.5s ease;
		transform: rotate(
			${(props: IDropdownMenuButton) => (props.menuState ? '180deg' : '0deg')}
		);
		transform-origin: 50% 30%;
		background-image: url(${arrowIcon});
		background-repeat: no-repeat;
	}

	&:focus {
		border: 1px solid #e1e1e1;
		outline: none;
	}
`;

export default DropdownMenuButton;
