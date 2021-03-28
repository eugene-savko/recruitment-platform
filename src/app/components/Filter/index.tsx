import React, { useState } from 'react';
import { dataInternshipList } from './dataInternshipList';
import { dataSelectedOptions } from './dataSelecledOptions';
import { FilterMenu } from './FilterMenu';
import { InternshipList } from './InternshipList';
import { IFilterState } from './types';

export const Filter: React.FunctionComponent = () => {
	const [filterState, setFilterState] = useState<IFilterState>({
		specialization: '',
		destination: '',
	});
	const handleClickSearch = (dataSelect: IFilterState) => {
		const { specialization, destination } = dataSelect;
		setFilterState((prev) => ({
			...prev,
			specialization,
			destination,
		}));
	};
	const dataOption = { ...filterState };
	return (
		<>
			<FilterMenu
				dataOptions={dataSelectedOptions}
				search={handleClickSearch}
			/>
			<InternshipList dataList={dataInternshipList} dataOption={dataOption} />
		</>
	);
};
