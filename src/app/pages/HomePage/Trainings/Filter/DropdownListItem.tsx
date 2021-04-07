import React from 'react';
import styled from 'styled-components';

import { DropdownListInput, DropdownListLabel } from './components';

const ListItem = styled.li`
	padding: 5px 0px;
	list-style-type: none;
`;
interface IDropdownListItem {
	value: string;
	id: number;
	check: boolean;
	click: Function;
	inputCheckboxChange: Function;
}

export const DropdownListItem: React.FunctionComponent<IDropdownListItem> = ({
	value,
	id,
	check,
	inputCheckboxChange,
	click,
}) => (
	<ListItem>
		<DropdownListLabel htmlFor={`way-${value}-${id}`} check={check}>
			<DropdownListInput
				type="checkbox"
				value={value}
				id={`way-${value}-${id}`}
				onChange={(event) => inputCheckboxChange(event)}
				onClick={() => click(value)}
				checked={check}
			/>
			{value}
		</DropdownListLabel>
	</ListItem>
);
