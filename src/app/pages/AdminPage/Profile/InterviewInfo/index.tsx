import React from 'react';
import dateFormat from 'dateformat';

// styles
import {
	List,
	ListItem,
	ListItemIconCustom,
	ListItemTextCustom,
} from '../components';

import { ContainerInterviewInfo } from './components';

import { AccountBoxSharpIcon, EventIcon } from '../components/IconsMaterial';

// types
import IFeedbackInfo from '../types/IFeedbackInfo';

interface IInfoProps {
	info: Array<IFeedbackInfo>;
}

const chekDate = (time: number | null) =>
	typeof time === 'number'
		? dateFormat(new Date(time), 'dd/mm/yy - HH:MM')
		: '';

const InterviewInfo: React.FunctionComponent<IInfoProps> = ({ info }) => {
	const timeInterviewRecruter = info[0].startDateTime;
	const formatTimeInterviewRecruter = chekDate(timeInterviewRecruter);

	const timeInterviewTech = info[1].startDateTime;
	const formatTimeInterviewTech = chekDate(timeInterviewTech);

	const fullNameRecruiter = `${info[0].fromUser.firstName} ${info[0].fromUser.lastName}`;
	const fullNameTech = `${info[1].fromUser.firstName} ${info[1].fromUser.lastName}`;
	return (
		<React.Fragment>
			<ContainerInterviewInfo>
				<List>
					<ListItem>
						<ListItemIconCustom>
							<AccountBoxSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							primary="Name recruiter:"
							secondary={fullNameRecruiter}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<EventIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							primary="data interview:"
							secondary={formatTimeInterviewRecruter}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<AccountBoxSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom primary="Name Tech:" secondary={fullNameTech} />
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<EventIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							primary="data interview:"
							secondary={formatTimeInterviewTech}
						/>
					</ListItem>
				</List>
			</ContainerInterviewInfo>
		</React.Fragment>
	);
};

export default InterviewInfo;
