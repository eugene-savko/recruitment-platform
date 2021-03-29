import React, { createContext } from 'react';

import { IFilterContext } from '../types';

export const FilterContext: React.Context<IFilterContext> = createContext({
	specialization: '',
	destination: '',
	internshipList: [
		{ id: '', course: '', profession: '', country: '', info: '' },
	],
});
