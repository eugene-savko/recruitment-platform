import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IFormFields } from './types';

// style components
import { Form, Note, Title, FormWrapper, Submit } from './components';

// components
import { TraineeForm } from './TraineeForm';
import { FileLoader } from './FileLoader';
import { Agreements } from './Agreements';

// data
import { listEnglishLevel } from './data/listEnglishLevel';
import { listPrimarySkill } from './data/listPrimarySkill';

export const SendForm: React.FunctionComponent = () => {
	const [fileName, setFileName] = useState('');

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormFields>();

	const onSubmit = async ({
		englishLevel,
		firstName,
		lastName,
		email,
		country,
		city,
		phone,
		textArea,
	}: {
		englishLevel: string;
		firstName: string;
		lastName: string;
		email: string;
		country: string;
		city: string;
		phone: string;
		textArea: string;
	}) => {
		const objectDto = {
			specialityId: '1',
			englishLevel,
			cv: 'this is a link to CV',
			internshipId: '1',
			userDto: {
				firstName,
				lastName,
				email,
				country,
				city,
				phone,
				otherInformation: textArea,
			},
		};

		const url = 'https://recruitment-platform.herokuapp.com/internship-request';

		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(objectDto),
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
				},
			});
			const json = await response.json();
			console.log('Response:', json);
			reset();
			setFileName('');
		} catch (exception) {
			console.error('Exception:', exception);
		}
	};

	return (
		<FormWrapper>
			<Title>Submit your application</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<TraineeForm
					register={register}
					englishLevel={listEnglishLevel}
					primarySkill={listPrimarySkill}
					errorMessage={errors}
				/>
				<Note size={12}>* Fields marked with * are required.</Note>
				<FileLoader
					register={register}
					errors={errors}
					setFileName={setFileName}
					fileName={fileName}
				/>
				<Agreements register={register} errors={errors} />
				<Submit>Submit</Submit>
			</Form>
		</FormWrapper>
	);
};
