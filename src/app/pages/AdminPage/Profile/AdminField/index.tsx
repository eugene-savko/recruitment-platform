import React, { useContext } from 'react';

// API
import setStatusCandidate from 'app/API/setStatusCandidate';

// context
import { AdminPanelContext } from 'app/context/AdminPanelContext';

// style
import { ButtonMaterial, ContainerAdmin } from '../components';

const AdminField: React.FunctionComponent = () => {
	const { userId } = useContext(AdminPanelContext);

	const setStatusAssept = async () => {
		const status = {
			id: userId as number,
			status: 'ACCEPTED' as string,
		};
		try {
			await setStatusCandidate(status);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log('COM RecruiterField.Error message - ', e.message);
		}
	};
	const setStatusReject = async () => {
		const status = {
			id: userId as number,
			status: 'REJECTED' as string,
		};
		try {
			await setStatusCandidate(status);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log('COM RecruiterField.Error message - ', e.message);
		}
	};

	return (
		<React.Fragment>
			<ContainerAdmin>
				<ButtonMaterial
					variant="outlined"
					color="primary"
					title="Accept an internship candidate"
					onClick={setStatusAssept}
				>
					Accept
				</ButtonMaterial>
				<ButtonMaterial
					variant="outlined"
					color="primary"
					title="Reject a candidate"
					onClick={setStatusReject}
				>
					reject
				</ButtonMaterial>
			</ContainerAdmin>
		</React.Fragment>
	);
};

export default AdminField;
