import { useForm } from 'react-hook-form';

interface IAgreements {
	register: ReturnType<typeof useForm>['register'];
	errors: ReturnType<typeof useForm>['errors'];
}

export default IAgreements;
