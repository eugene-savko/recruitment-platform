import React, { useState } from 'react';
import { FilterContext } from 'app/context/FilterContext';
import { dataInternshipList } from './dataInternshipList';
import { dataSelectedOptions } from './dataSelecledOptions';
import { FilterMenu } from './FilterMenu';
import { IChangeEvent, IFilterState } from './types';
import { InternshipList } from './InternshipList';

export const Filter: React.FunctionComponent = () => {
	const [filterState, setFilterState] = useState<IFilterState>({
		specialization: 'Любая специальность',
		destination: 'Беларусь',
	});
	const [internshipList, setInternshipList] = useState(dataInternshipList);
	const handleClickSearch = () => {
		const filteredInternshipList = dataInternshipList.filter((internship) => {
			switch (true) {
				case filterState.specialization === 'Любая специальность':
					if (internship.country === filterState.destination) {
						return true;
					}
					if (filterState.destination === 'Все') {
						return true;
					}
					if (!filterState.destination && !filterState.specialization) {
						return true;
					}
					return false;

				case filterState.destination === 'Все':
					if (internship.profession === filterState.specialization) {
						return true;
					}
					return false;
				case internship.country === filterState.destination &&
					internship.profession === filterState.specialization:
					return true;
				case !filterState.destination && !filterState.specialization:
					return true;
				case internship.country !== filterState.destination &&
					internship.profession !== filterState.specialization:
					return false;
				case internship.country !== filterState.destination ||
					internship.profession !== filterState.specialization:
					return false;
				default:
					return true;
			}
		});
		setInternshipList(filteredInternshipList);
	};
	const handleChange = (event: React.ChangeEvent<IChangeEvent>) => {
		setFilterState({
			...filterState,
			[`${event.target.name}`]: event.target.value,
		});
	};

	return (
		<>
			<FilterContext.Provider
				value={{
					internshipList,
				}}
			>
				<FilterMenu
					dataOptions={dataSelectedOptions}
					click={handleClickSearch}
					change={handleChange}
					state={filterState}
				/>
				<InternshipList />
			</FilterContext.Provider>
		</>
	);
};
