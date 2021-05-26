import { AdminPanelContext } from 'app/contexts/AdminPanelContext';
import React, { useContext } from 'react';
import { AdminRoutePath } from '../routes';

import { ColumnProfileButton, ProfileLink } from './components';

interface ITableCellButtonProps {
	text: string;
	id: number;
}
export const TableCellButton: React.FunctionComponent<ITableCellButtonProps> = ({
	text,
	id,
}) => {
	const { setUserId } = useContext(AdminPanelContext);
	return (
		<ProfileLink to={AdminRoutePath.PROFILE}>
			<ColumnProfileButton type="button" onClick={() => setUserId?.(id)}>
				{text}
			</ColumnProfileButton>
		</ProfileLink>
	);
};
