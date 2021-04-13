import React from 'react';
import { useForm } from 'react-hook-form';

// style
import { Form, Note, Title, Wrapper, Submit } from './components';

// components
import { Body } from './Body';
import { FileLoader } from './FileLoader';
import { Agreements } from './Agreements';

// interface
import { IFormInputs } from './types';

// data
import { listEnglishLevel } from './data/listEnglishLevel';
import { listCourses } from './data/listCourses';
import { listPrimarySkill } from './data/listPrimarySkill';
import { listCity } from './data/listCity';
import { listCountry } from './data/listCountry';

export const SendForm: React.FunctionComponent = () => {
	const { handleSubmit, register } = useForm<IFormInputs>();

	// eslint-disable-next-line no-alert
	const onSubmit = (data: IFormInputs) => alert(JSON.stringify(data));

	return (
		<Wrapper>
			<Title>Submit your application</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Body
					register={register}
					englishLevel={listEnglishLevel}
					internship={listCourses}
					primarySkill={listPrimarySkill}
					city={listCity}
					country={listCountry}
				/>
				<Note>* Поля отмеченные * обязательны.</Note>
				<FileLoader />
				<Agreements />
				<Submit type="submit">Submit</Submit>
			</Form>
		</Wrapper>
	);
};
