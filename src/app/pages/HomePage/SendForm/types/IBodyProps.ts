import IListItemSelect from './IListItemSelect';

interface IBodyProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	errorMessage: any;
	englishLevel: Array<IListItemSelect>;
	primarySkill: Array<IListItemSelect>;
}

export default IBodyProps;
