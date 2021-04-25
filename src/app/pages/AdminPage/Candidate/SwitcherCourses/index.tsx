import React, { useState, useContext } from 'react';
import { MenuItem } from '@material-ui/core';
import { dataCommonCourses } from 'app/db/dataCommonCourses';
import { dataQA } from 'app/db/dataQA';
import { dataJavaScripAndJava } from 'app/db/dataJavaScripAndJava';
import { StateMainContext } from 'app/context/StateMainContext';
import { IDataCommonCourses } from 'app/types';
import {
	unstable_createMuiStrictModeTheme,
	ThemeProvider,
} from '@material-ui/core/styles';
import SwitcherFormControl from './components/SwitcherFormControl';
import SwitcherFormControlWrapper from './components/SwitcherFormControlWrapper';
import SwitcherSelect from './components/SwitcherSelect';

export const SwitcherCourses: React.FunctionComponent = () => {
	const theme = unstable_createMuiStrictModeTheme();
	const [course, setCourse] = useState('');
	const { setDataFromServer } = useContext(StateMainContext);

	const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
		setCourse(e.target.value as string);
		const idCourse = e.target.value;
		return idCourse === 1
			? setDataFromServer?.(dataJavaScripAndJava)
			: setDataFromServer?.(dataQA);
	};

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<SwitcherFormControlWrapper>
					<SwitcherFormControl variant="outlined">
						<SwitcherSelect value={course} onChange={handleChange} displayEmpty>
							<MenuItem value="">Chose course</MenuItem>
							{dataCommonCourses.map((a: IDataCommonCourses) => (
								<MenuItem key={a.nameCourses} value={a.idCourse}>
									{a.nameCourses}
								</MenuItem>
							))}
						</SwitcherSelect>
					</SwitcherFormControl>
				</SwitcherFormControlWrapper>
			</ThemeProvider>
		</React.Fragment>
	);
};
