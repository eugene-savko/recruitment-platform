import React, { createContext } from 'react';

import { IFilterContext } from '../types';

export const FilterContext: React.Context<IFilterContext> = createContext({
	internshipList: [
		{ id: '', course: '', profession: '', status: '', country: '', info: '' },
	],
});
