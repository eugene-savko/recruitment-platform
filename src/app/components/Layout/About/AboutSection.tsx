import React from 'react';
import { ArrowLink } from './components/ArrowLink';
import { SectionWrapper } from './components/SectionWrapper';

type AboutSectionProps = {
	title: string,
	text: string,
	background: string,
	backgroundAside: boolean,
	linkText?: string,
	linkUrl?: string,
};

export const AboutSection: React.FC<AboutSectionProps> = ({
	title,
	text,
	background,
	backgroundAside,
	linkText,
	linkUrl,
}) => (
	<SectionWrapper
		background={background}
		className={backgroundAside ? 'leftAside' : ''}
	>
		<h2>{title}</h2>
		<p>{text}</p>

		{linkText ? <ArrowLink linkUrl={linkUrl}>{linkText}</ArrowLink> : ''}
	</SectionWrapper>
);
