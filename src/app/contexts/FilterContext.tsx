import { IFilterContext } from 'app/pages/HomePage/Trainings/types';
import React, { createContext } from 'react';

// const initialStateContext = [
// 	{ id: '', course: '', profession: '', status: '', country: '', info: '' },
// ];

export const FilterContext = createContext<IFilterContext>({ trainings: [] });
