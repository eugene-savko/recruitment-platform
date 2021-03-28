import React, { useState } from 'react';
import { Select, FormControl, InputLabel, IconButton } from '@material-ui/core/';

import SearchIcon from '@material-ui/icons/Search';
import { uid } from 'react-uid';
import { SelectOption } from './SelectedOptions';
import { FilterMenuWrapper } from './components/FilterMenuWrapper';
import { IChangeEvent, IFilterMenuProps, IFilterMenuState } from './types';

export const FilterMenu: React.FunctionComponent<IFilterMenuProps> = ({ dataOptions, search }) => {

	const [filterMenuState, setFilterMenuState] = useState<IFilterMenuState>({
		specialization: 'Любая специальность',
		destination: 'Беларусь',
		name: '',
	});
	const { destination, specialization } = dataOptions;

	const handleChange = (event: React.ChangeEvent<IChangeEvent>) => {

		// eslint-disable-next-line prettier/prettier
		const name = event.target.name as keyof typeof filterMenuState;
		setFilterMenuState({
			...filterMenuState,
			[name]: event.target.value,
		});
	};

	const menuState = { ...filterMenuState }
	return (
		<FilterMenuWrapper>
			<>
				<FormControl>
					<InputLabel htmlFor="specialization-native-simple">Специальности</InputLabel>
					<Select
						native
						value={filterMenuState.specialization}
						onChange={handleChange}
						inputProps={{
							name: 'specialization',
							id: 'specialization-native-simple',
						}}
					>{specialization.map((option) => <SelectOption value={option.profession} id={option.id} key={uid(option.id)} />)}</Select>

				</FormControl>


				<FormControl>
					<InputLabel htmlFor="destination-native-simple">Местоположение</InputLabel>
					<Select
						native
						value={filterMenuState.destination}
						onChange={handleChange}
						inputProps={{
							name: 'destination',
							id: 'destination-native-simple',
						}}
					>{destination.map((option) => <SelectOption value={option.country} id={option.id} key={uid(option.id)} />)}</Select>
				</FormControl>
				<IconButton color="secondary" aria-label="search" onClick={() => search(menuState)}>
					<SearchIcon />
				</IconButton>
			</>
		</FilterMenuWrapper>
	)
}
