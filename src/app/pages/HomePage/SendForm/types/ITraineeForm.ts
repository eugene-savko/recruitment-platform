import IListItemSelect from './IListItemSelect';

interface ITraineeForm {
	register: any;
	errorMessage: any;
	englishLevel: Array<IListItemSelect>;
	primarySkill: Array<IListItemSelect>;
}

export default ITraineeForm;
