import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

interface ISideBarItems {
	href: string;
	icon: OverridableComponent<SvgIconTypeMap>;
	title: string;
}

export default ISideBarItems;
