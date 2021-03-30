import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { uid } from 'react-uid';
import { IFilterMenuProps } from './types';
import { SelectOption } from './SelectedOptions';
import { FilterMenuWrapper } from './components/FilterMenuWrapper';
import { FilterDropdown } from './components/FilterDropdown';
import { DropdownWrapper } from './components/DropdownWrapper';
import { FormControled } from './components/FormControled';
import { SearchButton } from './components/SearchButton';
import { DropdownIcon } from './components/DropdowIcon';
import { Label } from './components/Label';

export const FilterMenu: React.FunctionComponent<IFilterMenuProps> = ({
	dataOptions,
	change,
	click,
	state,
}) => {
	const { destination, specialization } = dataOptions;
	return (
		<FilterMenuWrapper>
			<>
				<DropdownWrapper>
					<FormControled>
						<Label htmlFor="specialization-native-simple">Специальности</Label>
						<FilterDropdown
							native
							value={state.specialization}
							onChange={(event) => change(event)}
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
						<Label htmlFor="destination-native-simple">Местоположение</Label>
						<FilterDropdown
							native
							value={state.destination}
							onChange={(event) => change(event)}
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
				<SearchButton aria-label="search" onClick={() => click()}>
					<SearchIcon />
				</SearchButton>
			</>
		</FilterMenuWrapper>
	);
};
