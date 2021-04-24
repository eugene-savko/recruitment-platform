import IFormInput from '../pages/AuthPage/Auth/types/IFormInput';

interface IAuthLoggedContextState {
	auth: { loading: boolean; data: IFormInput };
	setAuthData?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default IAuthLoggedContextState;
