import React from 'react';
import { ArrowLink } from './ArrowLink';
import { SectionWrapper } from './components/SectionWrapper';

type SectionProps = {
	title: string;
	text: string;
	background: string;
	backgroundAside: boolean;
	linkText?: string;
	linkUrl?: string;
};

export const Section: React.FunctionComponent<SectionProps> = ({
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

		{linkText && <ArrowLink linkUrl={linkUrl} text={linkText} />}
	</SectionWrapper>
);
