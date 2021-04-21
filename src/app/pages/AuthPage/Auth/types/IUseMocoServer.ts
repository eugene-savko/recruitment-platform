import { IFormInput } from './index';

interface IUseMocoServer {
	fetchRequestLogin: ({ email, password }: IFormInput) => Promise<void>;
}
export default IUseMocoServer;
