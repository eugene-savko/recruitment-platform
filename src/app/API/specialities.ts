import { ISpecializationItem } from 'app/pages/HomePage/Trainings/Filter/types';
import { API } from './axios';
import { URL_SPECIALITIES } from './urls';

export const fetchSpecialities = async (): Promise<
	Array<ISpecializationItem>
> => {
	const { data } = await API.get(URL_SPECIALITIES);
	const updateData = data.map((elem: ISpecializationItem) => {
		const newElem = { ...elem };
		newElem.checked = false;
		return newElem;
	});
	updateData.unshift({
		id: 0,
		name: 'Any Speciality',
		checked: false,
	});
	return updateData;
};
