import React, { useContext, useEffect, useState } from 'react';

// style
import getProfile from 'app/API/getProfile';
import { Link } from 'react-router-dom';
import { authContext } from 'app/context/AuthLoggedContext';
import { MainFields, ProfileContainer, SidebarInfo } from './components';

// components
import AdminField from './AdminField';
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
	const [feedbackRecruiter, setFeedbackRecruiter] = useState<IFeedbackInfo>(
		feedbackDeafult[0]
	);
	const [feedbackTech, setFeedbackTech] = useState<IFeedbackInfo>(
		feedbackDeafult[1]
	);
	const [user, setUser] = useState<IUserInfo>(userDefault);
	const [isFetching, setIsFetching] = useState(false);

	const { auth } = useContext(authContext);
	const role = auth.dataRole?.role as string;
	console.log('start profile role - ', role);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getProfile(40);
			setUser(data);
			console.log('Data from server - ', data);
			const { interviews } = data;

			if (interviews.length === 0) {
				setFeedbackInfo(feedbackDeafult);
			} else if (interviews.length === 1) {
				setFeedbackRecruiter(interviews[0]);
				setFeedbackTech(feedbackDeafult[0]);
				setFeedbackInfo([interviews[0], feedbackDeafult[0]]);
			} else {
				setFeedbackRecruiter(interviews[0]);
				setFeedbackTech(interviews[1]);
				setFeedbackInfo(interviews);
			}
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
					<MainFields>
						<RecruiterField
							role={role}
							englishLevel={listEnglishLevel}
							feedbackContent={feedbackRecruiter}
						/>
						<TechField role={role} feedbackContent={feedbackTech} />
						<AdminField />
					</MainFields>
				</ProfileContainer>
			)}
		</React.Fragment>
	);
};
