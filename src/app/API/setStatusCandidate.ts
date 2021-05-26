import { API } from './axios';
import { URL_UPDATE_STATUS_CANDIDATE } from './urls';

interface ISendStatus {
	internshipRequestId: number;
	internshipRequestStatus: string;
}

const setStatusCandidate = async (status: ISendStatus): Promise<void> => {
	await API({
		method: 'put',
		url: URL_UPDATE_STATUS_CANDIDATE,
		data: status,
		headers: { 'Content-Type': 'application/json' },
	});
};

export default setStatusCandidate;
