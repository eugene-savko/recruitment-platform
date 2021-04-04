import React from 'react';
import { uid } from 'react-uid';
import { Search as SearchIcon } from '@material-ui/icons';

import {
	FilterMenuWrapper,
	DropdownWrapper,
	FormControled,
	SearchButton,
} from './components';

import { IDestinationItem, IFilterState, ISpecializationItem } from '../types';
import { TrainingsMenuItem } from './TrainingsMenuItem';
import { TrainingsMenu } from './TrainingsMenu';
import { TrainingsDropdownButton } from './TrainingsDropdownButton';
import { TrainingsDropdownLabel } from './TrainingsDropdownLabel';

// TODO: Fix Function type - eslint rule: @typescript-eslint/ban-types
interface IFilterMenuProps {
	clickSearch: Function;
	state: IFilterState;
	clickMenuSpecializationItem: Function;
	specializationItems: Array<ISpecializationItem>;
	inputCheckboxSpecializationChange: Function;
	toogleMenuSpecialization: Function;
	specializationMenuState: boolean;
	destinationItems: Array<IDestinationItem>;
	toogleMenuDestination: Function;
	destinationMenuState: boolean;
	clickMenuDestinationItem: Function;
	inputCheckboxDestinationChange: Function;
}

export const Filter: React.FunctionComponent<IFilterMenuProps> = ({
	clickSearch,
	state,
	specializationItems,
	clickMenuSpecializationItem,
	toogleMenuSpecialization,
	specializationMenuState,
	inputCheckboxSpecializationChange,
	destinationItems,
	toogleMenuDestination,
	destinationMenuState,
	clickMenuDestinationItem,
	inputCheckboxDestinationChange,
}) => (
	<FilterMenuWrapper>
		<DropdownWrapper>
			<FormControled>
				<TrainingsDropdownLabel stateFilter="Speciallization">
					<TrainingsDropdownButton
						toogleMenu={toogleMenuSpecialization}
						menuState={specializationMenuState}
					>
						{state.specialization}
					</TrainingsDropdownButton>
				</TrainingsDropdownLabel>
				<TrainingsMenu menuState={specializationMenuState}>
					{specializationItems.map((item) => (
						<TrainingsMenuItem
							value={item.profession}
							id={item.id}
							key={uid(item.id)}
							check={item.checked}
							inputCheckboxChange={inputCheckboxSpecializationChange}
							click={clickMenuSpecializationItem}
						/>
					))}
				</TrainingsMenu>
			</FormControled>

			<FormControled>
				<TrainingsDropdownLabel stateFilter="Destination">
					<TrainingsDropdownButton
						toogleMenu={toogleMenuDestination}
						menuState={destinationMenuState}
					>
						{state.destination}
					</TrainingsDropdownButton>
				</TrainingsDropdownLabel>
				<TrainingsMenu menuState={destinationMenuState}>
					{destinationItems.map((item) => (
						<TrainingsMenuItem
							value={item.country}
							id={item.id}
							key={uid(item.id)}
							check={item.checked}
							inputCheckboxChange={inputCheckboxDestinationChange}
							click={clickMenuDestinationItem}
						/>
					))}
				</TrainingsMenu>
			</FormControled>
		</DropdownWrapper>
		<SearchButton aria-label="search" onClick={() => clickSearch()}>
			<SearchIcon />
		</SearchButton>
	</FilterMenuWrapper>
);
