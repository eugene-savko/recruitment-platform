import React, { useContext } from 'react';
import { StateMainContext } from 'app/context/StateMainContext';
import { SwitcherCourses } from './SwitcherCourses';

export const Candidate: React.FunctionComponent = () => {
	const { dataFromServer } = useContext(StateMainContext);
	return (
		<React.Fragment>
			<SwitcherCourses />
			<p>{JSON.stringify(dataFromServer)}</p>;
		</React.Fragment>
	);
};
