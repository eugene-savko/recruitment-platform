import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { v4 as uuidv4 } from 'uuid';

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

	const handleChange = useAsyncDebounce((v) => {
		setFilter(v || undefined);
	}, 500);
	return (
		<form>
			<label htmlFor="filterColumn">
				<input
					name={filterValue}
					id={uuidv4()}
					value={value || ''}
					onChange={(e) => {
						setValue(e.target.value);
						handleChange(e.target.value);
					}}
					placeholder="Search..."
				/>
				{children}
			</label>
		</form>
	);
};

export default ColumnFilter;
