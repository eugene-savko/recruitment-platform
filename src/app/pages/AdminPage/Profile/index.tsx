import React, { useEffect, useState } from 'react';

// style

import { AdminsFields, ProfileContainer, SidebarInfo } from './components';

// components
import ArrowBack from './ArrowBack';
import RecruiterField from './RecruiterField';
import TechField from './TechField';
import CandidateInfo from './CandidateInfo';
import InterviewInfo from './InterviewInfo';

// preloader
import Preloader from '../Preloader';

// data
// import user from './data/user-test';
import feedbackInfo from './data/feedbackInfo';
import listEnglishLevel from './data/listEnglishLevel';

interface IUserInfo {
	[name: string]: string;
}

export const Profile: React.FunctionComponent = () => {
	const feedbackRecruiter = feedbackInfo[1];
	const feedbackTech = feedbackInfo[0];
	const [user, setUser] = useState<IUserInfo>({});
	const [isFetching, setIsFetching] = useState(false);
	const fetchData = async () => {
		const res = await fetch('https://reqres.in/api/users/2');
		const json = await res.json();

		setTimeout(() => {
			setUser(json.data);
			setIsFetching(true);
		}, 3000);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handlerClose = () => {
		// exit from Profile
	};

	return (
		<React.Fragment>
			{!isFetching ? (
				<Preloader />
			) : (
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
			)}
		</React.Fragment>
	);
};
