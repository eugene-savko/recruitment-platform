interface ISpeciality {
	id: number;
	name: string;
}
interface ICountry {
	id: number;
	name: string;
}
interface ITrainingItem {
	id: number;
	name: string;
	description: string;
	deadline?: number;
	startDate?: number;
	endDate?: number;
	status: string;
	specialities: Array<ISpeciality>;
	countries: Array<ICountry>;
	skills: [];
}
export default ITrainingItem;
