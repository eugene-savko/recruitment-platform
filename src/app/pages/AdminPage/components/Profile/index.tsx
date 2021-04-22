import React from 'react';

// style
import {
	AdminsFields,
	CandidateInfo,
	CloseCross,
	InterviewInfo,
	ProfileContainer,
	SidebarInfo,
} from './components';

// components
import { RecruiterField } from './RecruiterField';
import { TechField } from './TechField';

import Cross from './assets/cross.png';

export const Profile: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<ProfileContainer>
				<CloseCross src={Cross} />
				<SidebarInfo>
					<CandidateInfo />
					<InterviewInfo />
				</SidebarInfo>
				<AdminsFields>
					<RecruiterField />
					<TechField />
				</AdminsFields>
			</ProfileContainer>
		</React.Fragment>
	);
};
