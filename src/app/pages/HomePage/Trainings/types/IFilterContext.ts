import React from 'react';
import ITrainingItem from './ITrainingItem';

interface IFilterContext {
	trainings: Array<ITrainingItem>;
	setTrainings?: React.Dispatch<React.SetStateAction<Array<ITrainingItem>>>;
}
export type { IFilterContext };
