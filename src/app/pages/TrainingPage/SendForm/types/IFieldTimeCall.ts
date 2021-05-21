import { useForm } from 'react-hook-form';

interface IFieldTimeCall {
	register: ReturnType<typeof useForm>['register'];
}
export default IFieldTimeCall;
