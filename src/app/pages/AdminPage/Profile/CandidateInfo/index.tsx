import React, { useState } from 'react';

// material-ui
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// components
import MoreInfoModal from './MoreInfoModal';

// style
import {
	ContainerInfo,
	ListItemTextCustom,
	ListItemIconCustom,
	ButtonClose,
} from './component/index';
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
} from './component/IconsMaterial';

// types
import IUserInfo from '../types/IUserInfo';

interface IInfo {
	info: IUserInfo;
}

const CandidateInfo: React.FunctionComponent<IInfo> = ({ info }) => {
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
							<ComputerSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom>{info.specialityId}</ListItemTextCustom>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<BusinessCenterSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom>{info.internshipId}</ListItemTextCustom>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<PhoneAndroidSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom>{info.phone}</ListItemTextCustom>
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
							<EmailSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom>{info.email}</ListItemTextCustom>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<TranslateSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom>{info.englishLevel}</ListItemTextCustom>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<DescriptionSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom>{info.cv}</ListItemTextCustom>
					</ListItem>
				</List>

				<ButtonClose variant="contained" onClick={toggle}>
					OtherInformation
				</ButtonClose>
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
