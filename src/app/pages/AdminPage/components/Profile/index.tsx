import React from 'react';

// style
import {
	AdminsFields,
	CandidateInfo,
	InterviewInfo,
	ProfileContainer,
	SidebarInfo,
} from './components';

// components
import { RecruiterField } from './RecruiterField';
import { TechField } from './TechField';

export const Profile: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<ProfileContainer>
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
