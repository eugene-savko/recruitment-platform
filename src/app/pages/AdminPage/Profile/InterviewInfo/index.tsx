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
							secondary={`${info[0].fromUser.firstName} ${info[0].fromUser.lastName}`}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<EventIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							primary="data interview:"
							secondary={moment(info[0].startDateTime).format(
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
							secondary={`${info[1].fromUser.firstName} ${info[1].fromUser.lastName}`}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<EventIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							primary="data interview:"
							secondary={moment(info[1].startDateTime).format(
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
