import React, { useContext, useState } from 'react';
import {
	Select,
	FormControl,
	InputLabel,
	IconButton,
} from '@material-ui/core/';

import SearchIcon from '@material-ui/icons/Search';
import { uid } from 'react-uid';
import { FilterContext } from 'app/context/FilterContext';
import { SelectOption } from './SelectedOptions';
import { FilterMenuWrapper } from './components/FilterMenuWrapper';
import { FilterDropdown } from './components/FilterDropdown';
import { IChangeEvent, IFilterMenuProps, IFilterMenuState } from './types';
import { DropdownWrapper } from './components/DropdownWrapper';
import { FormControled } from './components/FormControled';
import { SearchButton } from './components/SearchButton';
import { DropdownIcon } from './components/DropdowIcon';

export const FilterMenu: React.FunctionComponent<IFilterMenuProps> = ({
	dataOptions,
}) => {
	const filterContext = useContext(FilterContext);
	const [filterMenuState, setFilterMenuState] = useState<IFilterMenuState>({
		specialization: 'Любая специальность',
		destination: 'Беларусь',
	});
	const handleClickSearch = () => {
		filterContext.specialization = filterMenuState.specialization;
		filterContext.destination = filterMenuState.destination;
		console.log(filterMenuState);
		console.log(filterContext);
	};
	const handleChange = (event: React.ChangeEvent<IChangeEvent>) => {
		setFilterMenuState({
			...filterMenuState,
			[`${event.target.name}`]: event.target.value,
		});
	};
	const { destination, specialization } = dataOptions;

	return (
		<FilterMenuWrapper>
			<>
				<DropdownWrapper>
					<FormControled>
						<InputLabel htmlFor="specialization-native-simple">
							Специальности
						</InputLabel>
						<FilterDropdown
							native
							value={filterMenuState.specialization}
							onChange={handleChange}
							inputProps={{
								name: 'specialization',
								id: 'specialization-native-simple',
							}}
							IconComponent={DropdownIcon}
							disableUnderline
						>
							{specialization.map((option) => (
								<SelectOption
									value={option.profession}
									id={option.id}
									key={uid(option.id)}
								/>
							))}
						</FilterDropdown>
					</FormControled>
					<FormControled>
						<InputLabel htmlFor="destination-native-simple">
							Местоположение
						</InputLabel>
						<FilterDropdown
							native
							value={filterMenuState.destination}
							onChange={handleChange}
							inputProps={{
								name: 'destination',
								id: 'destination-native-simple',
							}}
							IconComponent={DropdownIcon}
							disableUnderline
						>
							{destination.map((option) => (
								<SelectOption
									value={option.country}
									id={option.id}
									key={uid(option.id)}
								/>
							))}
						</FilterDropdown>
					</FormControled>
				</DropdownWrapper>
				<SearchButton aria-label="search" onClick={handleClickSearch}>
					<SearchIcon />
				</SearchButton>
			</>
		</FilterMenuWrapper>
	);
};
