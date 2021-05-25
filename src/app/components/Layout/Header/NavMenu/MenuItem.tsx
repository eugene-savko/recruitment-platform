import React from 'react';

import IMenuItemData from '../types/IMenuItemData';

// styles
import { Link } from '../components';
import { MenuItemWrapper } from './components/MenuItemWrapper';

type IMenuItemProps = IMenuItemData;

const MenuItem: React.FunctionComponent<IMenuItemProps> = ({ label, path }) => (
	<MenuItemWrapper>
		<Link href={path}>{label}</Link>
	</MenuItemWrapper>
);

export default MenuItem;
