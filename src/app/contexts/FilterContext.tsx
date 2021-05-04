import { IFilterContext } from 'app/pages/HomePage/Trainings/types';
import { createContext } from 'react';

export const FilterContext = createContext<IFilterContext>({
	trainings: [],
	currentPage: 1,
});
