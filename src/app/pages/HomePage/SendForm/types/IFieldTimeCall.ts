import { useForm } from 'react-hook-form';
import IListItemSelect from './IListItemSelect';

interface IFieldTimeCall {
	register: ReturnType<typeof useForm>['register'];
	timeForCall: Array<IListItemSelect>;
}

export default IFieldTimeCall;
