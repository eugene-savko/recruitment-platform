import IAuthState from './IAuthState';
import IFormInput from './IFormInput';

interface IAuthLoggedContextState {
	auth: IAuthState;
	logIn?: (data: IFormInput) => void;
	logOut?: () => void;
}
export default IAuthLoggedContextState;
