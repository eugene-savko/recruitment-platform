import React from 'react';

import { List, ListItem, DropdownListWrapper as Wrapper } from './components';

export const DropdownList: React.FunctionComponent = () => {
	return (
		<Wrapper>
			<List>
				<ListItem selected>First</ListItem>
				<ListItem>Second</ListItem>
				<ListItem>Third</ListItem>
				<ListItem>Fourth</ListItem>
				<ListItem>Fifth</ListItem>
				<ListItem>Sixth</ListItem>
			</List>
		</Wrapper>
	);
};
