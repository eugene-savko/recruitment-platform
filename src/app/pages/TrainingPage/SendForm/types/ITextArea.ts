import { useForm } from 'react-hook-form';

interface ITextArea {
	register: ReturnType<typeof useForm>['register'];
}

export default ITextArea;
