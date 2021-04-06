import React from 'react';
import { LinkWrapper } from './components/LinkWrapper';

type ArrowLinkProps = {
	linkUrl: string | undefined;
	text: string;
};

export const ArrowLink: React.FC<ArrowLinkProps> = ({ linkUrl, text }) => (
	<LinkWrapper className="arrow" href={linkUrl}>
		{text}
		<span className="anim-arrow">
			<span className="anim-arrow__shaft" />
		</span>
	</LinkWrapper>
);
