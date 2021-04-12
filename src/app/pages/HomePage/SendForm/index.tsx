import React from 'react';
import { useForm } from 'react-hook-form';

// style
import { Form, Note, Title, Wrapper, Submit } from './components';

// components
import { Body } from './Body';
import { FileLoader } from './FileLoader';
import { Agreements } from './Agreements';

// interface
import IFormInputs from './types';

export const SendForm: React.FunctionComponent = () => {
	const { handleSubmit, register } = useForm<IFormInputs>();

	// eslint-disable-next-line no-alert
	const onSubmit = (data: IFormInputs) => alert(JSON.stringify(data));

	return (
		<Wrapper>
			<Title>Submit your application</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Body register={register} />
				<Note>* Поля отмеченные * обязательны.</Note>
				<FileLoader />
				<Agreements />
				<Submit type="submit">Submit</Submit>
			</Form>
		</Wrapper>
	);
};
