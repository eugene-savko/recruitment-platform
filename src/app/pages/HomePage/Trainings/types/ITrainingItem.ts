interface ITrainingItem {
	id: number;
	name: string;
	specialityList: Array<string>;
	country: string;
	description: string;
	status: string;
	deadline?: string;
	startDate?: string;
	endDate?: string;
}
export default ITrainingItem;
