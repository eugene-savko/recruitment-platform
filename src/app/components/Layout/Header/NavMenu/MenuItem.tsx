import React from 'react';

import IMenuItemData from '../types/IMenuItemData';

import { Link } from '../components/Link';

import { MenuItemWrapper as Wrapper } from './components/MenuItemWrapper';

interface IMenuItemProps extends IMenuItemData {}

export const MenuItem: React.FunctionComponent<IMenuItemProps> = ({
	label,
	isSelected,
	path,
}) => (
	<Wrapper>
		<Link href={path}>{label}</Link>
	</Wrapper>
);
