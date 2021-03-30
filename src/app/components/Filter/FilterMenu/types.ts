import { IdataSelectedOptions, IFilterState } from '../types';

export interface IFilterMenuState {
	specialization: string;
	destination: string;
}

export interface IFilterMenuProps {
	dataOptions: IdataSelectedOptions;
	change: Function;
	click: Function;
	state: IFilterState;
}
