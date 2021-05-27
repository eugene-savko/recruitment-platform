import React, { useCallback, useContext, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactHtmlParser from 'react-html-parser';
import { FrontendLandingContext } from 'app/contexts/FrontendLandingContext';
import getInternshipDescription, {
	IIntenshipInfoInterface,
} from 'app/API/getInternshipDescription';
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
	const { internshipValue } = useContext(FrontendLandingContext);
	const [infoInternship, setInfoInternship] = useState<IIntenshipInfoInterface>(
		{ description: '', name: '', status: '', startDate: 0, endDate: 0 }
	);
	const showFormOnClick = useCallback(() => setShowForm(true), [showForm]);
	useEffect(() => {
		const fetchInternship = async () => {
			const data = await getInternshipDescription(internshipValue);
			setInfoInternship(data);
		};
		fetchInternship();
	}, []);
	if (internshipValue === 10) {
		return <div>{ReactHtmlParser(infoInternship.description)}</div>;
	}
	return (
		<Wrapper>
			<Title>{infoInternship.name}</Title>
			<Share />
			<SubInformation infoInternship={infoInternship} />
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
				{infoInternship.skills?.map((elem) => (
					<ListItem key={elem.id}>{elem.name}</ListItem>
				))}
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
