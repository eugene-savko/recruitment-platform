import React, { useState, useContext, useEffect, useRef } from 'react';
import { uid } from 'react-uid';
import { Search as SearchIcon } from '@material-ui/icons';

import { FilterContext } from 'app/contexts/FilterContext';

import {
	DropdownList,
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuTitle,
	DropdownWrapper,
	SearchButton,
} from './components';
import { IFilterState, ISpecializationItem } from './types';
import { SpecializationItemsData } from './data';
import { TrainingItemsData } from '../data';
import { DropdownListItem } from './DropdownListItem';

import FilterDropdownWrapper from './components/FilterMenuWrapper';
import ControledForm from './components/FormControled';

const initialState: IFilterState = {
	specialization: 'Any Speciallization',
	destination: 'All Countries',
};

export const Filter: React.FunctionComponent = () => {
	const { setTrainings } = useContext(FilterContext);

	const [filterState, setFilterState] = useState<IFilterState>(initialState);

	const [specializationItems, setSpecializationItems] = useState<
		Array<ISpecializationItem>
	>(SpecializationItemsData);

	const [specializationMenuState, setSpecializationMenuState] = useState<
		boolean | null
	>(null);

	const ref = useRef<HTMLUListElement | null>(null);

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

	const toogleMenuSpecialization = () =>
		!specializationMenuState
			? setSpecializationMenuState(true)
			: setSpecializationMenuState(false);

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

		setSpecializationMenuState(null);
	};
	const handleClickOutside = (event: MouseEvent) => {
		if (!ref?.current?.contains(event.target as Node)) {
			setSpecializationMenuState(null);
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});
	return (
		<FilterDropdownWrapper>
			<DropdownWrapper>
				<ControledForm>
					<DropdownMenu>
						<DropdownMenuTitle>Specialization</DropdownMenuTitle>
						<DropdownMenuButton
							type="button"
							menuState={specializationMenuState}
							onClick={toogleMenuSpecialization}
						>
							{filterState.specialization}
						</DropdownMenuButton>
					</DropdownMenu>
					<DropdownList menuState={specializationMenuState} ref={ref}>
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
