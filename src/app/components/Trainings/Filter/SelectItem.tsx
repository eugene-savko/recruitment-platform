import React from 'react';

interface ISelectItemProps {
	id: number;
	value: string;
}

export const SelectItem: React.FunctionComponent<ISelectItemProps> = ({
	value,
	id,
}) => (
	<option id={`${id}`} value={value}>
		{value}
	</option>
);
