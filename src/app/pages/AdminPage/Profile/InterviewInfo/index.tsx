import React from 'react';
import moment from 'moment';

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

const InterviewInfo: React.FunctionComponent<IInfoProps> = ({ info }) => {
	const fullName = (first: string, second: string) => `${first} ${second}`;

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
							secondary={fullName(
								info[0].specialist.firstName,
								info[0].specialist.lastName
							)}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<EventIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							primary="data interview:"
							secondary={moment(info[0].userTime.startDateTime).format(
								'DD/MM/YYYY H:mm'
							)}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<AccountBoxSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							primary="Name Tech:"
							secondary={fullName(
								info[1].specialist.firstName,
								info[1].specialist.lastName
							)}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<EventIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							primary="data interview:"
							secondary={moment(info[1].userTime.startDateTime).format(
								'DD/MM/YYYY H:mm'
							)}
						/>
					</ListItem>
				</List>
			</ContainerInterviewInfo>
		</React.Fragment>
	);
};

export default InterviewInfo;
