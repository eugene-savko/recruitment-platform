import { API } from './axios';
import { URL_UPDATE_FEEDBACK } from './urls';

interface ISendDataTech {
	id: number;
	feedback: string;
	englishLevel?: string;
}

const updateFeedback = async (sendDataTech: ISendDataTech): Promise<void> => {
	// const { id, feedback }: ISendDataTech = sendDataTech;
	const { data } = await API({
		method: 'put',
		url: URL_UPDATE_FEEDBACK,
		data: sendDataTech,
		headers: { 'Content-Type': 'application/json' },
	});
	console.log(data);
};

export default updateFeedback;
