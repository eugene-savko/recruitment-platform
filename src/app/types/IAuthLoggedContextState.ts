interface IAuthLoggedContextState {
	isLogged: boolean;
	setIsLogged?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default IAuthLoggedContextState;
