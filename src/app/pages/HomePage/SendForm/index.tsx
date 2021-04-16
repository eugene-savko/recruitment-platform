import React from 'react';
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
			cv:
				'https://drive.google.com/file/d/1nUKSLwq5zh_GhVKQg6o1FalLrG2Bwuvc/view?usp=sharing',
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
		console.log(JSON.stringify(objectDto, null, '\t'));
		const url = 'https://recruitment-platform.herokuapp.com/internship-request';

		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(objectDto),
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					Accept: 'application/json',
				},
			});
			const json = await response;
			console.log('ответ:', json);
			reset();
		} catch (error) {
			console.error('Ошибка:', error);
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
				<FileLoader register={register} errors={errors} />
				<Agreements register={register} errors={errors} />
				<Submit>Submit</Submit>
			</Form>
		</FormWrapper>
	);
};
