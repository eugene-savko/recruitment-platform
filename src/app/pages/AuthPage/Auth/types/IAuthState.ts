import IFormInput from './IFormInput';

interface IDataRole {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	role: string;
	skype: string;
	photo: string;
	phone: string;
	otherInformation: string;
}

interface IAuthState {
	loading: boolean;
	dataRole: IDataRole | null;
	dataLoginForm: IFormInput | null;
	hasError: boolean;
}
export default IAuthState;
