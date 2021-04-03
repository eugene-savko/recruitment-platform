import React, { createContext } from 'react';

import { ITrainingItem } from 'app/pages/HomePage/Trainings/types';

const initialStateContext = [
	{ id: '', course: '', profession: '', status: '', country: '', info: '' },
];

interface IFilterContextState extends ITrainingItem {}

export const FilterContext: React.Context<
	Array<IFilterContextState>
> = createContext(initialStateContext);
