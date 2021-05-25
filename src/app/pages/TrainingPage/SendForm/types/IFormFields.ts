interface IFormFields {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	country: string;
	city: string;
	englishLevel: string;
	primarySkill: string;
	internship?: number;
	fileLoader: FileList;
	agreements: boolean;
	textArea: string;
	timeForCall: string;
}

export default IFormFields;
