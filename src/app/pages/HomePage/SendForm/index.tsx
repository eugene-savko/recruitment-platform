import React from 'react';
import { useForm } from 'react-hook-form';
import { IFormFields } from './types';

// style components
import { Form, Note, Title, Wrapper, Submit } from './components';

// components
import { Body } from './Body';
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

	const onSubmit = (data: IFormFields) => {
		console.log(
			JSON.stringify(
				data,
				(key, value) => {
					if (key === '0') {
						return value.name;
					}
					return value;
				},
				'\t'
			)
		);
		reset();
	};

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
				<Note size={12}>* Fields marked with * are required.</Note>
				<FileLoader register={register} errors={errors} />
				<Agreements register={register} errors={errors} />
				<Submit type="submit">Submit</Submit>
			</Form>
		</Wrapper>
	);
};
