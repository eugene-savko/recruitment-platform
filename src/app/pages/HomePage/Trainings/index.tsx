import React, { useState } from 'react';

// Context
import { FilterContext } from 'app/contexts/FilterContext';

// Smart components
import { Filter } from './Filter';
import { TrainingList } from './TrainingList';

// Data
import {
	DestinationItemsData,
	SpecializationItemsData,
	TrainingItemsData,
} from './data';

// Interfaces
import { IFilterState, ITrainingItem } from './types';

const initialState: IFilterState = {
	specialization: 'Любая специальность',
	destination: 'Беларусь',
};

export const Training: React.FunctionComponent = () => {
	const [filterState, setFilterState] = useState<IFilterState>(initialState);

	const [trainingList, setTrainingList] = useState<Array<ITrainingItem>>(
		TrainingItemsData
	);

	const handleClickSearch = () => {
		const filteredBySpecialization = TrainingItemsData.filter(
			(trainingItem) => {
				if (filterState.specialization === 'Любая специальность') {
					return true;
				}
				return trainingItem.profession === filterState.specialization;
			}
		);

		const filteredByDestination = filteredBySpecialization.filter(
			(trainingItem) => {
				if (filterState.destination === 'Все') {
					return true;
				}
				return trainingItem.country === filterState.destination;
			}
		);

		setTrainingList(filteredByDestination);
	};

	const handleChange = (
		event: React.ChangeEvent<{
			value: string,
			name: string,
		}>
	) => {
		setFilterState({
			...filterState,
			[`${event.target.name}`]: event.target.value,
		});
	};

	return (
		<FilterContext.Provider value={trainingList}>
			<Filter
				click={handleClickSearch}
				change={handleChange}
				state={filterState}
				specializationItems={SpecializationItemsData}
				destinationItems={DestinationItemsData}
			/>
			<TrainingList />
		</FilterContext.Provider>
	);
};
