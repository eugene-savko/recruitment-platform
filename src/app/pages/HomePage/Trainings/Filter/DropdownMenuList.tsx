import React from 'react';
import styled from 'styled-components';

interface ITrainingMenu {
	children: React.ReactNode;
	menuState: boolean;
}

const List = styled.ul`
	position: absolute;
	margin: 0;
	display: ${(props: { menuState: boolean }) =>
		props.menuState ? 'flex' : 'none'};
	justify-content: space-between;
	flex-direction: column;
	width: 365px;
	top: 100px;
	left: 0;
	z-index: 20;
	background: #fff;
	border: 1px solid #e1e1e1;
	padding: 10px 20px 30px 40px;
	border-radius: 24px;
`;

export const DropdownMenuList: React.FunctionComponent<ITrainingMenu> = ({
	children,
	menuState,
}) => <List menuState={menuState}>{children}</List>;
