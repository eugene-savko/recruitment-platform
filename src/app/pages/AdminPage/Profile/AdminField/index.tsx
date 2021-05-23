import React from 'react';

import { ButtonMaterial, ContainerAdmin } from '../components';

const AdminField: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<ContainerAdmin>
				<ButtonMaterial variant="outlined" color="primary">
					Accept
				</ButtonMaterial>
				<ButtonMaterial variant="outlined" color="primary">
					reject
				</ButtonMaterial>
			</ContainerAdmin>
		</React.Fragment>
	);
};

export default AdminField;
