import IFormInput from './IFormInput';

interface IAuthState {
	loading: boolean;
	data: IFormInput | null;
}
export default IAuthState;
