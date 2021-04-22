import React, { useState } from 'react';
import { Section } from './Section';
import { FAQsWrapper } from './components/FAQsWrapper';
import SectionsData from './data/SectionsData';
import FAQsTitle from './FAQsTitle';

type activeIdType = null | number;

export const FAQsPage: React.FunctionComponent = () => {
	const [activeId, setActiveId] = useState<activeIdType>(null);
	const handleActiveIdSet = (id: number) =>
		id !== activeId ? setActiveId(id) : setActiveId(null);

	return (
		<React.Fragment>
			<FAQsWrapper>
				<FAQsTitle />
				<div>
					{SectionsData.map((sectionData, i) => (
						<Section
							key={sectionData.title}
							isOpened={activeId === i}
							onClick={() => handleActiveIdSet(i)}
							title={sectionData.title}
							text={sectionData.text}
						/>
					))}
				</div>
			</FAQsWrapper>
		</React.Fragment>
	);
};
