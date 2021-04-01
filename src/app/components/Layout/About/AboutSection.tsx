import React from 'react';
import { ArrowLink } from './components/ArrowLink';
import { SectionWrapper } from './components/SectionWrapper';

type AboutSectionProps = {
	title: string,
	text: string,
	background: string,
	linkText: string | undefined,
};

export const AboutSection: React.FC<AboutSectionProps> = ({
	background,
	title,
	text,
	linkText,
}) => (
	<SectionWrapper background={background}>
		<h2>{title}</h2>
		<p>{text}</p>

		{linkText ? <ArrowLink arrow>{linkText}</ArrowLink> : ''}
	</SectionWrapper>
);
