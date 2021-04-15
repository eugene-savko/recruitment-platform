import React from 'react';

// styles
import { ListItem, AnchorItem, UnorderedList } from './components';

// types
import { ISocialLinksProps } from '../types';

const SocialLinks: React.FunctionComponent<ISocialLinksProps> = ({
	socialLinksItem,
}) => (
	<React.Fragment>
		<UnorderedList>
			{socialLinksItem?.map((item) => (
				<ListItem key={item.name}>
					<AnchorItem
						href={item.href}
						title={item.name}
						target="_blank"
						rel="noreferrer"
					>
						<svg viewBox={item.viewBox}>
							<path d={item.path} />
						</svg>
					</AnchorItem>
				</ListItem>
			))}
		</UnorderedList>
	</React.Fragment>
);

export default SocialLinks;
