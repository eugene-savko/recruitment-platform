import React, { useState } from 'react';

// components
import MoreInfoModal from './MoreInfoModal';

// style
import {
	List,
	ListItem,
	ListItemIconCustom,
	ListItemTextCustom,
	ButtonMaterial,
} from '../components';

import { ContainerInfo } from './components';

import {
	PhoneAndroidSharpIcon,
	LocationCitySharpIcon,
	RoomSharpIcon,
	AccountBoxSharpIcon,
	ComputerSharpIcon,
	EmailSharpIcon,
	DescriptionSharpIcon,
	BusinessCenterSharpIcon,
	TranslateSharpIcon,
} from '../components/IconsMaterial';

// types
import IUserInfo from '../types/IUserInfo';

interface IInfoProps {
	info: IUserInfo;
}

const CandidateInfo: React.FunctionComponent<IInfoProps> = ({ info }) => {
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
						<ListItemTextCustom secondary={info.firstName} />
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<ComputerSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom secondary={info.specialityId} />
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<BusinessCenterSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom secondary={info.internshipId} />
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<PhoneAndroidSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom secondary={info.phone} />
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<RoomSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom secondary={info.country} />
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<LocationCitySharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom secondary={info.city} />
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<EmailSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom secondary={info.email} />
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<TranslateSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom secondary={info.englishLevel} />
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<DescriptionSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom secondary={info.cv} />
					</ListItem>
				</List>

				<ButtonMaterial variant="contained" onClick={toggle}>
					OtherInformation
				</ButtonMaterial>
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

export default CandidateInfo;
