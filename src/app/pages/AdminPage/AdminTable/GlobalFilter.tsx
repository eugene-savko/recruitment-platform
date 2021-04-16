import { Grid } from '@material-ui/core';
import React, { useMemo } from 'react';
import { Row } from 'react-table';
import { v4 as uuidv4 } from 'uuid';
import { GlobalFilterSelect } from './components/GlobalFilterSelect';
import { GlobalFilterWrapper } from './components/GlobalFilterSelectWrapper';
import { GLOBAL_FILTER } from './data';

import { IBodyRow } from './data/COLUMNS_TABLE';

interface IGlobalFilter {
	preGlobalFilteredRows: Row<IBodyRow>[];
	filter: string;
	setFilter: (filter?: string) => void;
	children?: React.ReactNode;
}

const GlobalFilter: React.FunctionComponent<IGlobalFilter> = ({
	preGlobalFilteredRows,
	filter,
	setFilter,
	children,
}) => {
	const opt = useMemo(() => {
		const opts = new Set();
		GLOBAL_FILTER.forEach((row) => {
			opts.add(row.internship);
		});
		return [...opts.values()];
	}, [GLOBAL_FILTER]);
	return (
		<Grid container justify="center">
			<GlobalFilterWrapper>
				<GlobalFilterSelect
					value={filter}
					onChange={(e) => {
						setFilter(e.target.value);
					}}
				>
					<option value="">All</option>
					{opt.map((option) => (
						<option key={uuidv4()} value={String(option)}>
							{`${option}`}
						</option>
					))}
				</GlobalFilterSelect>
			</GlobalFilterWrapper>
			{children}
		</Grid>
	);
};
export default GlobalFilter;
