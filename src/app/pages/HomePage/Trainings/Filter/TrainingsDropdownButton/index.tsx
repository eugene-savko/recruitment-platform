import * as React from 'react';
import styled from 'styled-components';
import arrowIcon from 'app/assets/img/dropdown-arrow.png';

interface ITrainingDropdownButton {
	toogleMenu: Function;
	children: React.ReactNode;
	menuState: boolean;
}
const down = '180deg';
const Button = styled.button`
	border: 1px solid #e1e1e1;
	position: relative;
	font-size: 0.875rem;
	line-height: 150%;
	width: 354px;
	color: #0082ca;
	height: 48px;
	background: #fff;
	box-sizing: border-box;
	border-radius: 36px;
	cursor: pointer;
	text-align: start;
	text-transform: capitalize;
	padding-left: 23px;
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
			${(props: { menuState: boolean }) => (props.menuState ? down : '0deg')}
		);

		transition: all 0.5s ease;
		transform-origin: 50% 30%;
	}
	&:focus {
		border: 1px solid #e1e1e1;
		outline: none;
	}
`;
export const TrainingsDropdownButton: React.FunctionComponent<ITrainingDropdownButton> = ({
	toogleMenu,
	children,
	menuState,
}) => (
	<React.Fragment>
		<Button type="button" menuState={menuState} onClick={() => toogleMenu()}>
			{children}
		</Button>
	</React.Fragment>
);
