import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {
	ContainerInfo,
	ListItemTextCustom,
	ListItemIconCustom,
} from './component';

// types
import IUserInfo from '../types/IUserInfo';

interface IInfo {
	info: IUserInfo;
}

export const CandidateInfo: React.FunctionComponent<IInfo> = ({ info }) => {
	return (
		<React.Fragment>
			<ContainerInfo>
				<List>
					<ListItem>
						<ListItemIconCustom>
							<FiberManualRecordIcon />
						</ListItemIconCustom>
						<ListItemTextCustom>
							{info.firstName} {info.lastName}
						</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<FiberManualRecordIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.email}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<FiberManualRecordIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.primarySkill}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<FiberManualRecordIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.internship}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<FiberManualRecordIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.englishLevel}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<FiberManualRecordIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.country}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<FiberManualRecordIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.city}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<FiberManualRecordIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.phone}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<FiberManualRecordIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.cvLink}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<FiberManualRecordIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>about</ListItemTextCustom>
					</ListItem>
				</List>
			</ContainerInfo>
		</React.Fragment>
	);
};
