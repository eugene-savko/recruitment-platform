import React from 'react';

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

export const TrainingPage: React.FunctionComponent = () => {
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
			<Paragraph>
				<SubTitle>Work at Exadel – Who We Are:</SubTitle>
				We are looking for a self-motivated and experienced Lead .NET Developer
				to join our team! You will have the chance to push your development
				skills to the limit, expand your abilities and work with one of the
				largest privately owned organizations in the United States.
			</Paragraph>
			<Paragraph>
				<SubTitle>Work at Exadel – Who We Are:</SubTitle>
				<List>
					<ListItem>Produce code using .NET languages</ListItem>
					<ListItem>Produce code using .NET languages</ListItem>
					<ListItem>Produce code using .NET languages</ListItem>
					<ListItem>Produce code using .NET languages</ListItem>
					<ListItem>Produce code using .NET languages</ListItem>
					<ListItem>Produce code using .NET languages</ListItem>
				</List>
			</Paragraph>
			<Paragraph>
				We are looking for a self-motivated and experienced Lead .NET Developer
				to join our team! You will have the chance to push your development
				skills to the limit, expand your abilities and work with one of the
				largest privately owned organizations in the United States.
			</Paragraph>
			<HandleButton>Apply</HandleButton>
			<Paragraph>
				<SubTitle>Work at Exadel – Who We Are:</SubTitle>
				We are looking for a self-motivated and experienced Lead .NET Developer
				to join our team! You will have the chance to push your development
				skills to the limit, expand your abilities and work with one of the
				largest privately owned organizations in the United States.
			</Paragraph>
		</Wrapper>
	);
};
