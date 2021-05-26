import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// api
import getProfile from 'app/API/getProfile';

// context
import { AdminPanelContext } from 'app/contexts/AdminPanelContext';

// style
import { userDefault, listEnglishLevel, feedbackDefault } from 'app/data';
import { AdminRoutePath } from '../routes';
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

export const Profile: React.FunctionComponent = () => {
	const [feedbackInfo, setFeedbackInfo] = useState<Array<IFeedbackInfo>>(
		feedbackDefault
	);
	const [user, setUser] = useState<IUserInfo>(userDefault);
	const [isFetching, setIsFetching] = useState(false);
	const { userId } = useContext(AdminPanelContext);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getProfile(userId);
			setUser(data);
			const { interviews } = data;
			console.log(data);
			if (interviews.length === 0) {
				setFeedbackInfo(feedbackDefault);
			} else if (interviews.length === 1) {
				setFeedbackInfo([interviews[0], feedbackDefault[0]]);
			} else {
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
					<Link to={AdminRoutePath.TABLE} style={{ textDecoration: 'none' }}>
						<ArrowBack />
					</Link>
					<SidebarInfo>
						<CandidateInfo info={user} />
						<InterviewInfo info={feedbackInfo} />
					</SidebarInfo>
					<MainFields>
						<RecruiterField
							englishLevelProps={listEnglishLevel}
							feedbackContent={feedbackInfo}
						/>
						<TechField feedbackContent={feedbackInfo} />
						<AdminField />
					</MainFields>
				</ProfileContainer>
			)}
		</React.Fragment>
	);
};
