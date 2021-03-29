import React from 'react';

interface ISelectOptionProps {
	id: number;
	value: string;
}
export const SelectOption: React.FunctionComponent<ISelectOptionProps> = ({
	id,
	value,
}) => (
	<>
		<option value={value}>{value}</option>
	</>
);
