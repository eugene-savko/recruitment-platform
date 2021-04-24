import IInitStateMain from './IInitStateMain';

interface IInitStateMainContext {
	dataFromServer: IInitStateMain;
	setDataFromServer?: React.Dispatch<React.SetStateAction<IInitStateMain>>;
}
export default IInitStateMainContext;
