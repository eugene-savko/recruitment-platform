import React, { useState } from 'react';
import { Section } from './Section';
import SectionsData from './data/SectionsData';

type activeIdType = null | number;

export const FAQsPage: React.FunctionComponent = () => {
	const [activeId, setActiveId] = useState<activeIdType>(null);
	const handleActiveIdSet = (id: number) => {
		if (id !== activeId) {
			setActiveId(id);
		} else {
			setActiveId(null);
		}
	};
	return (
		<React.Fragment>
			<div className="faqs-title">
				<h1>Frequently asked questions</h1>
			</div>
			{SectionsData.map((sectionData, i) => (
				<Section
					key={sectionData.title}
					isOpened={activeId === i}
					onClick={() => handleActiveIdSet(i)}
					title={sectionData.title}
					text={sectionData.text}
				/>
			))}
		</React.Fragment>
	);
};
