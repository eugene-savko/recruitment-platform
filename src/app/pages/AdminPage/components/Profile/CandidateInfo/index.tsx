/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PhoneAndroidSharpIcon from '@material-ui/icons/PhoneAndroidSharp';
import LocationCitySharpIcon from '@material-ui/icons/LocationCitySharp';
import RoomSharpIcon from '@material-ui/icons/RoomSharp';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import ComputerSharpIcon from '@material-ui/icons/ComputerSharp';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
import BusinessCenterSharpIcon from '@material-ui/icons/BusinessCenterSharp';
import TranslateSharpIcon from '@material-ui/icons/TranslateSharp';

import {
	ContainerInfo,
	ListItemTextCustom,
	ListItemIconCustom,
} from './component';

// types
import IUserInfo from '../types/IUserInfo';
import { MoreInfoModal } from './MoreInfoModal';

interface IInfo {
	info: IUserInfo;
}

export const CandidateInfo: React.FunctionComponent<IInfo> = ({ info }) => {
	const [isShown, setIsShown] = useState<boolean>(false);
	const toggle = () => setIsShown(!isShown);

	return (
		<React.Fragment>
			<ContainerInfo>
				<List>
					<ListItem>
						<ListItemIconCustom>
							<AccountBoxSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom>
							{info.firstName} {info.lastName}
						</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<EmailSharpIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.email}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<ComputerSharpIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.primarySkill}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<BusinessCenterSharpIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.internship}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<TranslateSharpIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.englishLevel}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<RoomSharpIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.country}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<LocationCitySharpIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.city}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<PhoneAndroidSharpIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.phone}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<ListItemIconCustom>
							<DescriptionSharpIcon />
						</ListItemIconCustom>

						<ListItemTextCustom>{info.cvLink}</ListItemTextCustom>
					</ListItem>
					<ListItem>
						<button onClick={toggle}>OtherInformation</button>
					</ListItem>
				</List>
			</ContainerInfo>
			<MoreInfoModal
				isShow={isShown}
				hide={toggle}
				headerText="OtherInformation:"
				modalContent={info.otherInformation}
			/>
		</React.Fragment>
	);
};
