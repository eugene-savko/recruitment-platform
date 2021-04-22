import React from 'react';

// style
import {
	AdminsFields,
	CloseCross,
	InterviewInfo,
	ProfileContainer,
	SidebarInfo,
} from './components';

// components
import { RecruiterField } from './RecruiterField';
import { TechField } from './TechField';
import { CandidateInfo } from './CandidateInfo';

// image
import Cross from './assets/cross.png';

// data
import { user } from './data/user-test';

export const Profile: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<ProfileContainer>
				<CloseCross src={Cross} />
				<SidebarInfo>
					<CandidateInfo info={user} />
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
