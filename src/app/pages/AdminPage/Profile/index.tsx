import React from 'react';

// style
import { AdminsFields, ProfileContainer, SidebarInfo } from './components';

// components
import ArrowBack from './ArrowBack';
import RecruiterField from './RecruiterField';
import TechField from './TechField';
import CandidateInfo from './CandidateInfo';
import InterviewInfo from './InterviewInfo';

// data
import user from './data/user-test';
import feedbackInfo from './data/feedbackInfo';
import listEnglishLevel from './data/listEnglishLevel';

export const Profile: React.FunctionComponent = () => {
	const feedbackRecruiter = feedbackInfo[1];
	const feedbackTech = feedbackInfo[0];
	const handlerClose = () => {
		// exit from Profile
	};

	return (
		<React.Fragment>
			<ProfileContainer>
				<ArrowBack close={handlerClose} />
				<SidebarInfo>
					<CandidateInfo info={user} />
					<InterviewInfo info={feedbackInfo} />
				</SidebarInfo>
				<AdminsFields>
					<RecruiterField
						englishLevel={listEnglishLevel}
						feedbackContent={feedbackRecruiter}
					/>
					<TechField feedbackContent={feedbackTech} />
				</AdminsFields>
			</ProfileContainer>
		</React.Fragment>
	);
};
