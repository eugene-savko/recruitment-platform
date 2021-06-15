import React, { useState, createContext } from 'react';
import { IDefaultCourseInput } from '../pages/AdminPage/CourseEditor/index';

interface ISelectCourseContext {
	defaultValues: IDefaultCourseInput;
	setDefaultValues: React.Dispatch<React.SetStateAction<IDefaultCourseInput>>;
}

export const initValues: ISelectCourseContext = {
	defaultValues: {
		id: 3,
		courseId: 3,
		nameCourse: 'DevOps+ NodeJS',
		country: { id: 7, name: 'Angola', iso2: 'AO' },
		cities: [
			{ id: 589, name: 'Belas' },
			{ id: 591, name: 'Cabinda' },
		],
		endDate: 1624547340000,
		startDate: 1624633740000,
		stopRecruitmentDate: 1624633740000,
		listRecruiters: [
			{ recruiter: 'Black Panther', idRecruiter: 3 },
			{ recruiter: 'Luck Cage', idRecruiter: 2 },
			{ recruiter: 'Capitan Marvel', idRecruiter: 1 },
		],
		courseDescription:
			'3-5 years of experience in technical program management, preferably in a related industry. Senior only, expert in Jira, certified (PMP and /or CSM/PSM) or equivalent TPM experience.',
	},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setDefaultValues: (): void => {},
};

export const SelectCourseContext = createContext<ISelectCourseContext>(
	initValues
);

export const SelectCourseProvider: React.FC<React.ReactNode> = ({
	children,
}) => {
	const [defaultValues, setDefaultValues] = useState<IDefaultCourseInput>(
		initValues.defaultValues
	);

	return (
		<SelectCourseContext.Provider value={{ defaultValues, setDefaultValues }}>
			{children}
		</SelectCourseContext.Provider>
	);
};
