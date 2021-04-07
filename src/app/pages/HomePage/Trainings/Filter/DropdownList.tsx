import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const openMenu = keyframes`
  0% {
		height: 50%;
    opacity: 0;
  }

	50% {
		height: 100%;
    opacity: 50%;
  }
	100% {
		height: 200%;
    opacity: 1;
  }
`;
const closeMenu = keyframes`
	0% {
		height: 200%;
    opacity: 1;
  }
  50% {
		height: 100%;
    opacity: 0.5;
  }

	100% {
		height: 50%;
    opacity: 0;
  }
`;
const List = styled.ul`
	position: absolute;
	top: 100px;
	left: 0;
	z-index: 20;
	margin: 0;
	border: 1px solid #e1e1e1;
	padding: 10px 20px 30px 40px;
	display: flex;
	opacity: 0;
	justify-content: space-between;
	flex-direction: column;
	width: 365px;

	animation: ${(props: { menuState: boolean | null }) => {
		if (props.menuState) {
			return css`
				${openMenu} 1s ease-in
			`;
		}
		if (props.menuState === false) {
			return css`
				${closeMenu} 1s ease-out
			`;
		}
		return '';
	}};
	animation-fill-mode: forwards;
	overflow: hidden;
	background: #fff;
	border-radius: 24px;
`;

interface IDropdownList {
	children: React.ReactNode;
	menuState: boolean | null;
}

export const DropdownList: React.FunctionComponent<IDropdownList> = ({
	children,
	menuState,
}) => <List menuState={menuState}>{children}</List>;
