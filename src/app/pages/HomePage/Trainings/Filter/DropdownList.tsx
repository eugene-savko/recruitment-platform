import React from 'react';
import styled, { css } from 'styled-components';
import {
	closeMenu,
	openMenu,
} from 'app/pages/HomePage/Trainings/assets/animations';

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
	max-height: 350px;

	animation: ${(props: { menuState: boolean | null }) => {
		if (props.menuState) {
			return css`
				${openMenu} .5s ease-in
			`;
		}
		if (props.menuState === false) {
			return css`
				${closeMenu} .5s ease-out
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
