import React from 'react';

// style
import {
	AdminsFields,
	InterviewInfo,
	ProfileContainer,
	SidebarInfo,
} from './components';

// components
import CloseCross from './CloseCross';
import RecruiterField from './RecruiterField';
import TechField from './TechField';
import CandidateInfo from './CandidateInfo';

// data
import { user } from './data/user-test';

export const Profile: React.FunctionComponent = () => {
	const handlerClose = () => {
		// eslint-disable-next-line no-console
		console.log('close');
	};

	return (
		<React.Fragment>
			<ProfileContainer>
				<CloseCross close={handlerClose} />
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
