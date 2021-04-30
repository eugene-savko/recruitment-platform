import React from 'react';

import { ProfileLink, TablePaginationButton } from './components';

export const TableCellButton: React.FunctionComponent = ({ children }) => {
	return (
		<ProfileLink to="/profile">
			<TablePaginationButton>{children}</TablePaginationButton>
		</ProfileLink>
	);
};
