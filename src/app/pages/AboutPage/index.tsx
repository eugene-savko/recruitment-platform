import React from 'react';
import { Section } from './Section';
import SectionsData from './data/SectionsData';

export const AboutPage: React.FunctionComponent = () => (
	<React.Fragment>
		{SectionsData.map((sectionData) => (
			<Section
				key={sectionData.title}
				title={sectionData.title}
				text={sectionData.text}
				background={sectionData.background}
				backgroundAside={sectionData.backgroundAside}
				linkText={sectionData.linkText}
				linkUrl={sectionData.linkUrl}
			/>
		))}
	</React.Fragment>
);
