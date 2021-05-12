import React, { useEffect, useState } from 'react';

// style

import getProfile from 'app/API/getProfile';
import { postLoginData } from 'app/API/login';
import { AdminsFields, ProfileContainer, SidebarInfo } from './components';

// components
import ArrowBack from './ArrowBack';
import RecruiterField from './RecruiterField';
import TechField from './TechField';
import CandidateInfo from './CandidateInfo';
import InterviewInfo from './InterviewInfo';

// preloader
import Preloader from '../components/Preloader';

// types
import { IUserInfo, IFeedbackInfo } from './types';

// data
import userDefault from './data/user-test';
import listEnglishLevel from './data/listEnglishLevel';

export const Profile: React.FunctionComponent = () => {
	const [feedbackInfo, setFeedbackInfo] = useState<Array<IFeedbackInfo>>([]);
	const [user, setUser] = useState<IUserInfo>(userDefault);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		postLoginData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getProfile(21);
			setUser(data);
			const { interviews } = data;
			setFeedbackInfo(interviews);
			setIsFetching(true);
		};
		setTimeout(() => {
			fetchData();
		}, 6000);
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
							feedbackContent={feedbackInfo}
						/>
						<TechField feedbackContent={feedbackInfo} />
					</AdminsFields>
				</ProfileContainer>
			)}
		</React.Fragment>
	);
};
