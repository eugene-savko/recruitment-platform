import React, { useState, useContext, useEffect, useRef } from 'react';

import { Search as SearchIcon } from '@material-ui/icons';

import { FilterContext } from 'app/contexts/FilterContext';

import { INTERNSHIPS_DATA } from 'app/data/INTERNSHIPS_DATA';
import { fetchSpecialities } from 'app/API/getSpecialitiesWithAny';
import { fetchInternshipsData } from 'app/API/getInternshipsData';

import {
	DropdownList,
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuTitle,
	DropdownWrapper,
	SearchButton,
} from './components';
import { IFilterState, ISpecializationItem } from './types';

import { DropdownListItem } from './DropdownListItem';

import FilterDropdownWrapper from './components/FilterMenuWrapper';
import ControledForm from './components/FormControled';

const initialState: IFilterState = {
	specialization: 'Any Speciality',
	destination: 'All Countries',
};

export const Filter: React.FunctionComponent = () => {
	const { setTrainings, setCurrentPage, currentPage } = useContext(
		FilterContext
	);

	const [filterState, setFilterState] = useState<IFilterState>(initialState);

	const [specializationItems, setSpecializationItems] = useState<
		Array<ISpecializationItem>
	>([]);

	const [specializationMenuState, setSpecializationMenuState] = useState<
		boolean | null
	>(null);

	const ref = useRef<HTMLDivElement | null>(null);

	const handleClickMenuSpecializationItem = (value: string) => {
		const specializationsCheckToggle = specializationItems.map((item) => {
			if (item.checked === true) {
				const itemCopy = { ...item };
				itemCopy.checked = false;
				return itemCopy;
			}
			if (item.name === value) {
				const itemCopy = { ...item };
				itemCopy.checked = true;
				return itemCopy;
			}
			return item;
		});
		setSpecializationItems(specializationsCheckToggle);
	};

	const toggleMenuSpecialization = () =>
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
	const [getId, setGetId] = useState<number | undefined>(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const specialities = await fetchSpecialities();
				setSpecializationItems(specialities);
			} catch (e) {
				console.log('Not speciallities');
			}
		};
		fetchData();
	}, []);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchInternshipsData(getId);
				setTrainings?.(data);
			} catch (e) {
				setTrainings?.(INTERNSHIPS_DATA);
			}
		};
		fetchData();
	}, [getId]);
	const handleClickSearch = () => {
		const specialization = specializationItems.find((elem) => elem.checked);
		setGetId(specialization?.id);
		if (currentPage > 1) {
			setCurrentPage?.(1);
		}
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
				<ControledForm ref={ref}>
					<DropdownMenu>
						<DropdownMenuTitle>Specialization</DropdownMenuTitle>
						<DropdownMenuButton
							type="button"
							menuState={specializationMenuState}
							onClick={toggleMenuSpecialization}
						>
							{filterState.specialization}
						</DropdownMenuButton>
					</DropdownMenu>
					<DropdownList menuState={specializationMenuState}>
						{specializationItems.map((item) => (
							<DropdownListItem
								value={item.name}
								id={item.id}
								key={item.id}
								check={item.checked}
								inputCheckboxChange={inputCheckboxSpecializationChange}
								click={handleClickMenuSpecializationItem}
							/>
						))}
					</DropdownList>
				</ControledForm>
			</DropdownWrapper>
			<SearchButton aria-label="search" onClick={handleClickSearch}>
				<SearchIcon />
			</SearchButton>
		</FilterDropdownWrapper>
	);
};
