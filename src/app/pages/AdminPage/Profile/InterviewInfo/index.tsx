import React from 'react';

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
import IInterviewInfo from '../types/IInterviewInfo';

interface IInfoProps {
	info: IInterviewInfo;
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
							secondary={info.nameRecruiter}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<EventIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							primary="data interview:"
							secondary={info.dataInterviewRecruiter}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<AccountBoxSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							primary="Name Tech:"
							secondary={info.nameTech}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<EventIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							primary="data interview:"
							secondary={info.dataInterviewTech}
						/>
					</ListItem>
				</List>
			</ContainerInterviewInfo>
		</React.Fragment>
	);
};

export default InterviewInfo;
