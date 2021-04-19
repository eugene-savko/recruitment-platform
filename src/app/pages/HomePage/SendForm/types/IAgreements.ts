import { useForm } from 'react-hook-form';

interface IAgreements {
	register: ReturnType<typeof useForm>['register'];
	errors: string;
}

export default IAgreements;
