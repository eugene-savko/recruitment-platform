import React from 'styled-components';

import FacebookIcon from '../../assets/facebook-icon.svg';
import LinkedInIcon from '../../assets/linkedin-icon.svg';
import TwitterIcon from '../../assets/twitter-icon.svg';

import { Icon, Wrapper } from './components';

export const Social: React.FunctionComponent = () => {
	return (
		<Wrapper>
			<Icon src={FacebookIcon} />
			<Icon src={LinkedInIcon} />
			<Icon src={TwitterIcon} />
		</Wrapper>
	);
};
