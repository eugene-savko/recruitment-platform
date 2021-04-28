import React from 'react';

// style
import { AdminsFields, ProfileContainer, SidebarInfo } from './components';

// components
import CloseCross from './CloseCross';
import RecruiterField from './RecruiterField';
import TechField from './TechField';
import CandidateInfo from './CandidateInfo';
import InterviewInfo from './InterviewInfo';

// data
import user from './data/user-test';
import interviewInfo from './data/interviewInfo-test';
import listEnglishLevel from './data/listEnglishLevel';

export const Profile: React.FunctionComponent = () => {
	const handlerClose = () => {
	};

	return (
		<React.Fragment>
			<ProfileContainer>
				<CloseCross close={handlerClose} />
				<SidebarInfo>
					<CandidateInfo info={user} />
					<InterviewInfo info={interviewInfo} />
				</SidebarInfo>
				<AdminsFields>
					<RecruiterField englishLevel={listEnglishLevel} />
					<TechField />
				</AdminsFields>
			</ProfileContainer>
		</React.Fragment>
	);
};
