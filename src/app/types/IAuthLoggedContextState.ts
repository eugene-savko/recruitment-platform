interface IAuthLoggedContextState {
	auth: { loading: boolean; data: any };
	setAuthData?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default IAuthLoggedContextState;
