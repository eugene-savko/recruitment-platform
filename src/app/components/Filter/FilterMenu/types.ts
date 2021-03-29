import { IdataSelectedOptions } from '../types';

export interface IFilterMenuState {
	specialization: string;
	destination: string;
	name: string;
}
export interface IChangeEvent {
	name?: string;
	value: unknown;
}

export interface IFilterMenuProps {
	dataOptions: IdataSelectedOptions;
	search: Function;
}
