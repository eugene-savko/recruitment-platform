import { useForm } from 'react-hook-form';
import IListItemSelect from './IListItemSelect';

interface IFileLoader {
	register: ReturnType<typeof useForm>['register'];
	errors: string;
	timeForCall: Array<IListItemSelect>;
}

export default IFileLoader;
