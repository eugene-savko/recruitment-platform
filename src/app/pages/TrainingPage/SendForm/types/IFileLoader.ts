import { useForm } from 'react-hook-form';

interface IFileLoader {
	register: ReturnType<typeof useForm>['register'];
	errors: ReturnType<typeof useForm>['errors'];
	setFileName: React.Dispatch<React.SetStateAction<string>>;
	fileName: string;
}

export default IFileLoader;
