import { IFormInput } from './index';

interface IUseMocoServer {
	fetchRequestLogin: ({ username, password }: IFormInput) => Promise<void>;
}
export default IUseMocoServer;
