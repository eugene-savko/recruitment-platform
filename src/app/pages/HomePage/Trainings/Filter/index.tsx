import React, { useState, useContext } from 'react';
import { uid } from 'react-uid';
import { Search as SearchIcon } from '@material-ui/icons';

import { FilterContext } from 'app/contexts/FilterContext';
import { DropdownWrapper, SearchButton } from './components';
import { IFilterState, ISpecializationItem } from './types';

import { DropdownList } from './DropdownList';
import { DropdownMenu } from './DropdownMenu';
import { SpecializationItemsData } from './data';
import { TrainingItemsData } from '../data';
import { DropdownListItem } from './DropdownListItem';
import DropdownMenuLabel from './DropdownMenuLabel';
import FilterDropdownWrapper from './components/FilterMenuWrapper';
import ControledForm from './components/FormControled';

const initialState: IFilterState = {
	specialization: 'Any Speciallization',
	destination: 'All Countries',
};

export const Filter: React.FunctionComponent = () => {
	const open: boolean | null = null;
	const { setTrainings } = useContext(FilterContext);

	// FilterState
	const [filterState, setFilterState] = useState<IFilterState>(initialState);

	// Speciallization
	const [specializationItems, setSpecializationItems] = useState<
		Array<ISpecializationItem>
	>(SpecializationItemsData);

	const [specializationMenuState, setSpecializationMenuState] = useState<
		boolean | null
	>(open);

	// Click Menu Specialization Item
	const handleClickMenuSpecializationItem = (value: string) => {
		const specializationsCheckToogle = SpecializationItemsData.map((item) => {
			if (item.checked === true) {
				const itemCopy = { ...item };
				itemCopy.checked = false;
				return itemCopy;
			}
			if (item.profession === value) {
				const itemCopy = { ...item };
				itemCopy.checked = true;
				return itemCopy;
			}
			return item;
		});
		setSpecializationItems(specializationsCheckToogle);
	};

	// Toogle Menu
	const toogleMenuSpecialization = () => {
		if (specializationMenuState === null) {
			setSpecializationMenuState(true);
		}
		if (specializationMenuState === true) {
			setSpecializationMenuState(false);
		}
		if (specializationMenuState === false) {
			setSpecializationMenuState(true);
		}
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

		setTrainings?.(filteredBySpecialization);
		setSpecializationMenuState(false);
	};

	return (
		<FilterDropdownWrapper>
			<DropdownWrapper>
				<ControledForm>
					<DropdownMenuLabel stateFilter="Speciallization">
						<DropdownMenu
							toogleMenu={toogleMenuSpecialization}
							menuState={specializationMenuState}
						>
							{filterState.specialization}
						</DropdownMenu>
					</DropdownMenuLabel>
					<DropdownList menuState={specializationMenuState}>
						{specializationItems.map((item) => (
							<DropdownListItem
								value={item.profession}
								id={item.id}
								key={uid(item.id)}
								check={item.checked}
								inputCheckboxChange={inputCheckboxSpecializationChange}
								click={handleClickMenuSpecializationItem}
							/>
						))}
					</DropdownList>
				</ControledForm>
			</DropdownWrapper>
			<SearchButton aria-label="search" onClick={() => handleClickSearch()}>
				<SearchIcon />
			</SearchButton>
		</FilterDropdownWrapper>
	);
};
