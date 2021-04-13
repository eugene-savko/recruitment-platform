import React from 'react';
import { useForm } from 'react-hook-form';

// style components
import { Form, Note, Title, Wrapper, Submit } from './components';

// components
import { Body } from './Body';
import { FileLoader } from './FileLoader';
import { Agreements } from './Agreements';

// types
import { IFormInputs } from './types';

// data
import { listEnglishLevel } from './data/listEnglishLevel';
import { listPrimarySkill } from './data/listPrimarySkill';

export const SendForm: React.FunctionComponent = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IFormInputs>();

	// eslint-disable-next-line no-alert
	const onSubmit = (data: IFormInputs) => alert(JSON.stringify(data));

	return (
		<Wrapper>
			<Title>Submit your application</Title>
			<Form onSubmit={handleSubmit(onSubmit)} noValidate>
				<Body
					register={register}
					englishLevel={listEnglishLevel}
					primarySkill={listPrimarySkill}
					errorMessage={errors}
				/>
				<Note>* Поля отмеченные * обязательны.</Note>
				<FileLoader />
				<Agreements />
				<Submit type="submit">Submit</Submit>
			</Form>
		</Wrapper>
	);
};
