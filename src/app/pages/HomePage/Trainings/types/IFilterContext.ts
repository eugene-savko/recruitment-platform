import React from 'react';
import ITrainingItem from './ITrainingItem';

interface IFilterContext {
	trainings: Array<ITrainingItem>;
	setTrainings?: React.Dispatch<React.SetStateAction<Array<ITrainingItem>>>;
	currentPage: number;
	setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
}
export type { IFilterContext };
