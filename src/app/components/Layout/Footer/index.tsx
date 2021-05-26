import React from 'react';

// components
import SocialLinks from './SocialLinks';
import FooterInfo from './FooterInfo';

// styles
import WrapperFooter from './components/WrapperFooter';

// data
import SocialLinksData from './data/SocialLinksData';

const Footer: React.FunctionComponent = () => (
	<React.Fragment>
		<WrapperFooter>
			<SocialLinks socialLinksItem={SocialLinksData} />
			<FooterInfo />
		</WrapperFooter>
	</React.Fragment>
);

export default Footer;
