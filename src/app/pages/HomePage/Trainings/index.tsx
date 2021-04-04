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
import {
	IDestinationItem,
	IFilterState,
	ISpecializationItem,
	ITrainingItem,
} from './types';

const initialState: IFilterState = {
	specialization: 'Any Speciallization',
	destination: 'All Countries',
};

export const Training: React.FunctionComponent = () => {
	// FilterState
	const [filterState, setFilterState] = useState<IFilterState>(initialState);

	const [trainingList, setTrainingList] = useState<Array<ITrainingItem>>(
		TrainingItemsData
	);
	// Speciallization
	const [specializationItems, setSpecializationItems] = useState<
		Array<ISpecializationItem>
	>(SpecializationItemsData);
	const [
		specializationMenuState,
		setSpecializationMenuState,
	] = useState<boolean>(false);
	// Click Menu Specialization Item
	const handleClickMenuSpecializationItem = (value: string) => {
		const specializationsToUnchecked = SpecializationItemsData.map((item) => {
			const itemCopy = { ...item };
			itemCopy.checked = false;
			return itemCopy;
		});
		const specializationToChecked = specializationsToUnchecked.map((item) => {
			if (item.profession === value) {
				const itemCopy = { ...item };
				itemCopy.checked = true;
				return itemCopy;
			}
			return item;
		});
		setSpecializationItems(specializationToChecked);
	};
	// Toogle Menu
	const toogleMenuSpecialization = () => {
		setSpecializationMenuState(!specializationMenuState);
	};
	// Input Checkbox Specialization Change
	const inputCheckboxSpecializationChange = (
		event: React.ChangeEvent<{
			value: string;
		}>
	) =>
		setFilterState({
			...filterState,
			specialization: event.target.value,
		});
	// Destination
	const [destinationItems, setDestinationItems] = useState<
		Array<IDestinationItem>
	>(DestinationItemsData);
	const [destinationMenuState, setDestinationMenuState] = useState<boolean>(
		false
	);
	// Toogle Menu
	const toogleMenuDestination = () => {
		setDestinationMenuState(!destinationMenuState);
	};
	// Click Menu Destination Item
	const handleClickMenuDestinationItem = (value: string) => {
		const destinationsToUnchecked = DestinationItemsData.map((item) => {
			const itemCopy = { ...item };
			itemCopy.checked = false;
			return itemCopy;
		});
		const destinationToChecked = destinationsToUnchecked.map((item) => {
			if (item.country === value) {
				const itemCopy = { ...item };
				itemCopy.checked = true;
				return itemCopy;
			}
			return item;
		});
		setDestinationItems(destinationToChecked);
	};
	// Input Checkbox Destination Change
	const inputCheckboxDestinationChange = (
		event: React.ChangeEvent<{
			value: string;
		}>
	) =>
		setFilterState({
			...filterState,
			destination: event.target.value,
		});
	// Click Search
	const handleClickSearch = () => {
		const filteredBySpecialization = TrainingItemsData.filter(
			(trainingItem) => {
				if (filterState.specialization === 'Any Speciallization') {
					return true;
				}
				return trainingItem.profession === filterState.specialization;
			}
		);

		const filteredByDestination = filteredBySpecialization.filter(
			(trainingItem) => {
				if (filterState.destination === 'All Countries') {
					return true;
				}
				return trainingItem.country === filterState.destination;
			}
		);

		setTrainingList(filteredByDestination);
	};

	const handleChange = (
		event: React.ChangeEvent<{
			value: string;
			name: string;
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
				clickSearch={handleClickSearch}
				state={filterState}
				specializationItems={specializationItems}
				specializationMenuState={specializationMenuState}
				toogleMenuSpecialization={toogleMenuSpecialization}
				clickMenuSpecializationItem={handleClickMenuSpecializationItem}
				inputCheckboxSpecializationChange={inputCheckboxSpecializationChange}
				destinationItems={destinationItems}
				destinationMenuState={destinationMenuState}
				toogleMenuDestination={toogleMenuDestination}
				clickMenuDestinationItem={handleClickMenuDestinationItem}
				inputCheckboxDestinationChange={inputCheckboxDestinationChange}
			/>
			<TrainingList />
		</FilterContext.Provider>
	);
};
