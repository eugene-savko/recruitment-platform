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
import { IUserInfo } from '../types';

interface IInfoProps {
	info: IUserInfo;
}

const CandidateInfo: React.FunctionComponent<IInfoProps> = ({ info }) => {
	const [isShown, setIsShown] = useState(false);
	const toggle = () => setIsShown(!isShown);
	const { firstName, lastName } = info;
	const fullName = `${firstName} ${lastName}`;

	return (
		<React.Fragment>
			<ContainerInfo>
				<List>
					<ListItem>
						<ListItemIconCustom>
							<AccountBoxSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							title="Full name candidate"
							secondary={fullName}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<ComputerSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							title="Primary skill"
							secondary={info.speciality}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<BusinessCenterSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							title="Internship"
							secondary={info.internship}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<PhoneAndroidSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom title="Phone number" secondary={info.phone} />
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<RoomSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							title="Location country"
							secondary={info.country}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<LocationCitySharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom title="Location city" secondary={info.city} />
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<EmailSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom title="Email" secondary={info.email} />
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<TranslateSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom
							title="English level"
							secondary={info.englishLevel}
						/>
					</ListItem>

					<ListItem>
						<ListItemIconCustom>
							<DescriptionSharpIcon />
						</ListItemIconCustom>
						<ListItemTextCustom title="Link CV" secondary={info.cv} />
					</ListItem>
				</List>

				<ButtonMaterial
					variant="outlined"
					color="primary"
					onClick={toggle}
					title="More info about candidate"
				>
					More info
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
