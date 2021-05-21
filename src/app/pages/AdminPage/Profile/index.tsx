import React, { useEffect, useState } from 'react';

// style
import getProfile from 'app/API/getProfile';
import { postLoginData } from 'app/API/login';
import { Link } from 'react-router-dom';
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
import userDefault from './data/userDefault';
import listEnglishLevel from './data/listEnglishLevel';
import feedbackDeafult from './data/feedbackDefault';

export const Profile: React.FunctionComponent = () => {
	const [feedbackInfo, setFeedbackInfo] = useState<Array<IFeedbackInfo>>(
		feedbackDeafult
	);
	const [user, setUser] = useState<IUserInfo>(userDefault);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		postLoginData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getProfile(21);
			setUser(data);
			console.log(data);
			const { interviews } = data;
			setFeedbackInfo(interviews);
			setIsFetching(true);
		};
		setTimeout(() => {
			fetchData();
		}, 1000);
	}, []);

	return (
		<React.Fragment>
			{!isFetching ? (
				<Preloader />
			) : (
				<ProfileContainer>
					<Link to="/table" style={{ textDecoration: 'none' }}>
						<ArrowBack />
					</Link>
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
