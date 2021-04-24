import IAuthState from './IAuthState';
import IFormInput from './IFormInput';

interface IAuthLoggedContextState {
	auth: IAuthState;
	setAuthData?: (data: IFormInput) => void;
}
export default IAuthLoggedContextState;
