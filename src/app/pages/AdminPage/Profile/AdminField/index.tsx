import React, { useContext } from 'react';

// API
import setStatusCandidate from 'app/API/setStatusCandidate';

// context
import { AdminPanelContext } from 'app/contexts/AdminPanelContext';

// style
import { ButtonMaterial, ContainerAdmin } from '../components';

const AdminField: React.FunctionComponent = () => {
	const { userId } = useContext(AdminPanelContext);

	const setStatusAssept = async (param: string) => {
		const status = {
			internshipRequestId: userId as number,
			internshipRequestStatus: `${param}` as string,
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
					onClick={() => setStatusAssept('ACCEPTED')}
				>
					Accept
				</ButtonMaterial>
				<ButtonMaterial
					variant="outlined"
					color="primary"
					title="Reject a candidate"
					onClick={() => setStatusAssept('REJECTED')}
				>
					reject
				</ButtonMaterial>
			</ContainerAdmin>
		</React.Fragment>
	);
};

export default AdminField;
