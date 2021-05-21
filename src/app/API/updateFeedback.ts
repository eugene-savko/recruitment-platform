import { API } from './axios';
import { UPDATE_FEEDBACK } from './urls';

interface ISendDataTech {
	id: number;
	feedback: string;
	englishLevel?: string;
}

const updateFeedback = async (sendDataTech: ISendDataTech): Promise<void> => {
	await API({
		method: 'put',
		url: UPDATE_FEEDBACK,
		data: { sendDataTech },
	});
};

export default updateFeedback;
