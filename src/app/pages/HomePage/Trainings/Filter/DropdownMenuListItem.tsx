import React from 'react';

import { MenuListInput, MenuListLabel } from './components';

interface ITrainingsMenuItem {
	value: string;
	id: number;
	check: boolean;
	click: Function;
	inputCheckboxChange: Function;
}

export const DropdownMenuListItem: React.FunctionComponent<ITrainingsMenuItem> = ({
	value,
	id,
	check,
	inputCheckboxChange,
	click,
}) => (
	<MenuListLabel htmlFor={`way-${value}-${id}`} check={check}>
		<MenuListInput
			type="checkbox"
			value={value}
			id={`way-${value}-${id}`}
			onChange={(event) => inputCheckboxChange(event)}
			onClick={() => click(value)}
			checked={check}
		/>
		{value}
	</MenuListLabel>
);
