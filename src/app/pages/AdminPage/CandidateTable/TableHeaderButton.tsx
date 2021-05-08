import React from 'react';
import { UnfoldMore as UnfoldMoreIcon } from '@material-ui/icons';
import { HeaderButton } from './components';

interface ITableHeaderButton {
	text: string;
}
export const TableHeaderButton: React.FunctionComponent<ITableHeaderButton> = ({
	text,
}) => {
	return (
		<HeaderButton>
			{text} <UnfoldMoreIcon />
		</HeaderButton>
	);
};
