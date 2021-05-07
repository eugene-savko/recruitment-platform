import React from 'react';

import { ColumnProfileButton, ProfileLink } from './components';

interface ITableCellButtonProps {
	text: string;
}
export const TableCellButton: React.FunctionComponent<ITableCellButtonProps> = ({
	text,
}) => {
	return (
		<ProfileLink to="/profile">
			<ColumnProfileButton type="button">{text}</ColumnProfileButton>
		</ProfileLink>
	);
};
