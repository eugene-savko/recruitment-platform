import { API } from './axios';
import { URL_UPDATE_FEEDBACK } from './urls';

interface ISendDataTech {
	id: number;
	feedback: string;
	englishLevel?: string;
}

const updateFeedback = async (sendDataTech: ISendDataTech): Promise<void> => {
	await API({
		method: 'put',
		url: URL_UPDATE_FEEDBACK,
		data: sendDataTech,
		headers: { 'Content-Type': 'application/json' },
	});
};

export default updateFeedback;
