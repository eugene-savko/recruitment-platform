import React, { useState, useContext } from 'react';
import { uid } from 'react-uid';
import { Search as SearchIcon } from '@material-ui/icons';

import { FilterContext } from 'app/contexts/FilterContext';
import {
	FilterMenuWrapper,
	DropdownWrapper,
	FormControled,
	SearchButton,
} from './components';
import { IFilterState, ISpecializationItem } from './types';

import { DropdownMenuList } from './DropdownMenuList';
import { TrainingsDropdownLabel } from './TrainingsDropdownLabel';
import { DropdownMenu } from './DropdownMenu';
import { SpecializationItemsData } from './data';
import { TrainingItemsData } from '../data';
import { DropdownMenuListItem } from './DropdownMenuListItem';

const initialState: IFilterState = {
	specialization: 'Any Speciallization',
	destination: 'All Countries',
};

export const Filter: React.FunctionComponent = () => {
	const { setTrainings } = useContext(FilterContext);

	// FilterState
	const [filterState, setFilterState] = useState<IFilterState>(initialState);

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
		<FilterMenuWrapper>
			<DropdownWrapper>
				<FormControled>
					<TrainingsDropdownLabel stateFilter="Speciallization">
						<DropdownMenu
							toogleMenu={toogleMenuSpecialization}
							menuState={specializationMenuState}
						>
							{filterState.specialization}
						</DropdownMenu>
					</TrainingsDropdownLabel>
					<DropdownMenuList menuState={specializationMenuState}>
						{specializationItems.map((item) => (
							<DropdownMenuListItem
								value={item.profession}
								id={item.id}
								key={uid(item.id)}
								check={item.checked}
								inputCheckboxChange={inputCheckboxSpecializationChange}
								click={handleClickMenuSpecializationItem}
							/>
						))}
					</DropdownMenuList>
				</FormControled>
			</DropdownWrapper>
			<SearchButton aria-label="search" onClick={() => handleClickSearch()}>
				<SearchIcon />
			</SearchButton>
		</FilterMenuWrapper>
	);
};
