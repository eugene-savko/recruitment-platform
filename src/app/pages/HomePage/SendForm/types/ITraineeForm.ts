import { useForm } from 'react-hook-form';
import IListItemSelect from './IListItemSelect';

interface ITraineeForm {
	register: ReturnType<typeof useForm>['register'];
	errorMessage: string;
	englishLevel: Array<IListItemSelect>;
	primarySkill: Array<IListItemSelect>;
}

export default ITraineeForm;
