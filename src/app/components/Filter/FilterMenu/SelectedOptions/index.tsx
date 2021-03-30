import React from 'react';

interface ISelectOptionProps {
	id: number;
	value: string;
}
export const SelectOption: React.FunctionComponent<ISelectOptionProps> = ({
	value,
	id,
}) => (
	<>
		<option id={`${id}`} value={value}>
			{value}
		</option>
	</>
);
