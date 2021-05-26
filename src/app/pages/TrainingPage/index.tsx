import React, { useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
	HandleButton,
	List,
	ListItem,
	Paragraph,
	SubTitle,
	Title,
	Wrapper,
} from './components';

import { Share } from './Share';
import { SubInformation } from './SubInformation';
import { SendForm } from './SendForm';

export const TrainingPage: React.FunctionComponent = () => {
	const [showForm, setShowForm] = useState(false);

	const showFormOnClick = useCallback(() => setShowForm(true), [showForm]);

	return (
		<Wrapper>
			<Title>JavaScript internship program</Title>
			<Share />
			<SubInformation />
			<Paragraph>
				We are looking for a self-motivated and experienced Lead .NET Developer
				to join our team! You will have the chance to push your development
				skills to the limit, expand your abilities and work with one of the
				largest privately owned organizations in the United States.
			</Paragraph>
			<SubTitle>Work at Exadel – Who We Are:</SubTitle>
			<Paragraph>
				We are looking for a self-motivated and experienced Lead .NET Developer
				to join our team! You will have the chance to push your development
				skills to the limit, expand your abilities and work with one of the
				largest privately owned organizations in the United States.
			</Paragraph>
			<SubTitle>Work at Exadel – Who We Are:</SubTitle>

			<List>
				<ListItem>Produce code using .NET languages</ListItem>
				<ListItem>Produce code using .NET languages</ListItem>
				<ListItem>Produce code using .NET languages</ListItem>
				<ListItem>Produce code using .NET languages</ListItem>
				<ListItem>Produce code using .NET languages</ListItem>
				<ListItem>Produce code using .NET languages</ListItem>
			</List>

			<Paragraph>
				We are looking for a self-motivated and experienced Lead .NET Developer
				to join our team! You will have the chance to push your development
				skills to the limit, expand your abilities and work with one of the
				largest privately owned organizations in the United States.
			</Paragraph>

			{!showForm && (
				<HandleButton onClick={showFormOnClick}>Apply</HandleButton>
			)}

			<CSSTransition
				in={showForm}
				timeout={0}
				classNames="show-form-transition"
				unmountOnExit
			>
				<SendForm />
			</CSSTransition>
			<SubTitle>Work at Exadel – Who We Are:</SubTitle>
			<Paragraph>
				We are looking for a self-motivated and experienced Lead .NET Developer
				to join our team! You will have the chance to push your development
				skills to the limit, expand your abilities and work with one of the
				largest privately owned organizations in the United States.
			</Paragraph>
		</Wrapper>
	);
};
