export interface IFormInputs {
	fullName: Record<string, unknown>;
	status: string;
}
const FORM_INPUTS: IFormInputs = {
	fullName: {},
	status: '',
};
export default FORM_INPUTS;
