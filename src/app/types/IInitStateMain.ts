interface IInitStateMain {
	[name: string]:
		| string
		| { [name: string]: string }
		| { [name: string]: boolean };
}
export default IInitStateMain;
