import IFormInput from './IFormInput';
import IDataRole from './IDataRole';

interface IAuthState {
	loading: boolean;
	dataRole: IDataRole | null;
	dataLoginForm: IFormInput | null;
	hasError: boolean;
}
export default IAuthState;
