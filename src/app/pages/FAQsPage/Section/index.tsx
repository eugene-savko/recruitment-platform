import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { SectionWrapper } from '../components/SectionWrapper';

type SectionProps = {
	title: string;
	text: string;
	isOpened: boolean;
	onClick: () => void;
};

export const Section: React.FunctionComponent<SectionProps> = ({
	title,
	text,
	isOpened,
	onClick,
}) => (
	<SectionWrapper onClick={onClick}>
		<div className={`faq__question ${isOpened ? 'faq__question_opened' : ''}`}>
			{title}
			<ExpandMoreIcon className={`arrow ${isOpened ? 'arrow_opened' : ''}`} />
		</div>
		<p className="faq__answer">{text}</p>
	</SectionWrapper>
);
