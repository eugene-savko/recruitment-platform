import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IRow {
	Number: number;
	email: string;
	fullName: string;
	primarySkill: string;
	registration: string;
	status: string;
}
interface IRows {
	values: IRow;
}

interface IColumnFilter {
	children?: React.ReactNode;
	column: {
		filterValue: string;
		setFilter: (filterValue?: string) => void;
		preFilteredRows: Array<IRows>;
		id: number;
	};
}
const SelectColumnFilters: React.FunctionComponent<IColumnFilter> = ({
	column: { filterValue, setFilter, preFilteredRows, id },
}) => {
	const options = React.useMemo(() => {
		const opt = new Set();
		preFilteredRows.forEach((row) => {
			opt.add(row.values.primarySkill);
		});
		return [...opt.values()];
	}, [id, preFilteredRows]);

	// Render a multi-select box
	return (
		<select
			value={filterValue}
			onChange={(e) => {
				setFilter(e.target.value || undefined);
			}}
		>
			<option value="">All</option>
			{options.map((option) => (
				<option key={uuidv4()} value={String(option)}>
					{`${option}`}
				</option>
			))}
		</select>
	);
};
export default SelectColumnFilters;
