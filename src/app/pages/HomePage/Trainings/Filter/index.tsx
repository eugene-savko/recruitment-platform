import React from 'react';
import { uid } from 'react-uid';
import { Search as SearchIcon } from '@material-ui/icons';

import { SelectItem } from './SelectItem';

import {
	FilterMenuWrapper,
	FilterDropdown,
	DropdownWrapper,
	FormControled,
	SearchButton,
	DropdownIcon,
	Label,
} from './components';

import { IDestinationItem, IFilterState, ISpecializationItem } from '../types';

// TODO: Fix Function type - eslint rule: @typescript-eslint/ban-types
interface IFilterMenuProps {
	change: Function;
	click: Function;
	state: IFilterState;
	specializationItems: Array<ISpecializationItem>;
	destinationItems: Array<IDestinationItem>;
}

export const Filter: React.FunctionComponent<IFilterMenuProps> = ({
	change,
	click,
	state,
	specializationItems,
	destinationItems,
}) => (
	<FilterMenuWrapper>
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
					{specializationItems.map((specializationItem) => (
						<SelectItem
							value={specializationItem.profession}
							id={specializationItem.id}
							key={uid(specializationItem.id)}
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
					{destinationItems.map((destinationItem) => (
						<SelectItem
							value={destinationItem.country}
							id={destinationItem.id}
							key={uid(destinationItem.id)}
						/>
					))}
				</FilterDropdown>
			</FormControled>
		</DropdownWrapper>
		<SearchButton aria-label="search" onClick={() => click()}>
			<SearchIcon />
		</SearchButton>
	</FilterMenuWrapper>
);
