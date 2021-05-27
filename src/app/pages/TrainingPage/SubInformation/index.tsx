import { IIntenshipInfoInterface } from 'app/API/getInternshipDescription';
import { INTERNSHIP_STATUS } from 'app/data/INTERNSHIPS_STATUS';
import React from 'react';

import { Wrapper, Line, Strong, Label } from './components';

export const SubInformation: React.FunctionComponent<{
	infoInternship: IIntenshipInfoInterface;
}> = ({ infoInternship }) => {
	console.log(infoInternship);
	return (
		<Wrapper>
			<Line>
				<Strong>Course ID:</Strong>
				123
				<Label>{INTERNSHIP_STATUS[`${infoInternship.status}`]}</Label>
			</Line>
			<Line>
				<Strong>Countries: {'  '}</Strong>
				{infoInternship.countries?.map((elem) => (
					<span style={{ marginRight: '1ch' }} key={elem.id}>{`${
						elem.name
					}${'  '}`}</span>
				))}
			</Line>
			<Line>
				<Strong>Technical stack:</Strong>
				{infoInternship.specialities?.map((elem) => (
					<span style={{ marginRight: '1ch' }} key={elem.id}>{`${
						elem.name
					}${'  '}`}</span>
				))}
			</Line>
			<Line>
				<Strong>Date Start:</Strong>
				<span>
					{new Date(infoInternship.startDate)
						.toLocaleDateString('en-US')
						.split('/')
						.join(' / ')}
				</span>
			</Line>
			<Line>
				<Strong>Date End:</Strong>
				<span>
					{new Date(infoInternship.endDate)
						.toLocaleDateString('en-US')
						.split('/')
						.join(' / ')}
				</span>
			</Line>
		</Wrapper>
	);
};
