import React, { useState } from 'react';
import { Section } from './Section';
import { FAQsWrapper } from './Section/components/FAQsWrapper';
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
			<FAQsWrapper>
				<div className="faqs-title">
					<div className="faqs-title_left">
						<h1>Frequently&nbsp;asked questions</h1>
					</div>
					<div className="faqs-title_right" />
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
			</FAQsWrapper>
		</React.Fragment>
	);
};
