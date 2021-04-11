import React, { useState } from 'react';

import { Select, SelectedItem, Wrapper } from './components';

import { DropdownList } from './DropdownList';

export const SelectionBox: React.FunctionComponent = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Wrapper onClick={() => setIsOpen(!isOpen)}>
			<Select>
				<SelectedItem>Choose your level of English *</SelectedItem>
				{isOpen && <DropdownList />}
			</Select>
		</Wrapper>
	);
};
