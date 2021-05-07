import React, { useState, useCallback } from 'react';

import { useAsyncDebounce } from 'react-table';

interface IColumnFilter {
	children?: React.ReactNode;
	column: {
		filterValue: string;
		setFilter: (filterValue: string) => void;
	};
}
const ColumnFilter: React.FunctionComponent<IColumnFilter> = ({
	column,
	children,
}) => {
	const { filterValue, setFilter } = column;
	const [value, setValue] = useState(filterValue);
	const onInputChange = useCallback(
		(e) => {
			setValue(e.target.value);
			useAsyncDebounce((v) => {
				setFilter(v || undefined);
			}, 500);
		},
		[value]
	);
	return (
		<form>
			<label htmlFor="filterColumn">
				<input
					name={filterValue}
					id="filterColumn"
					value={value || ''}
					onChange={onInputChange}
					placeholder="Search..."
				/>
				{children}
			</label>
		</form>
	);
};

export default ColumnFilter;
