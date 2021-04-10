import React from 'react';

import { Form, Note, Title, Wrapper, Submit } from './components';

import { Body } from './Body';
import { FileLoader } from './FileLoader';
import { Agreements } from './Agreements';

export const SendForm: React.FunctionComponent = () => {
	return (
		<Wrapper>
			<Title>Submit your application</Title>
			<Form>
				<Body />
				<Note>Note</Note>
				<FileLoader />
				<Agreements />
				<Submit>Submit</Submit>
			</Form>
		</Wrapper>
	);
};
