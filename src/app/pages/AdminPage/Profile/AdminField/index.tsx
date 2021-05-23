import React from 'react';

import { ButtonMaterial, ContainerAdmin } from '../components';

const AdminField: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<ContainerAdmin>
				<ButtonMaterial
					variant="outlined"
					color="primary"
					title="Accept an internship candidate"
				>
					Accept
				</ButtonMaterial>
				<ButtonMaterial
					variant="outlined"
					color="primary"
					title="Reject a candidate"
				>
					reject
				</ButtonMaterial>
			</ContainerAdmin>
		</React.Fragment>
	);
};

export default AdminField;
