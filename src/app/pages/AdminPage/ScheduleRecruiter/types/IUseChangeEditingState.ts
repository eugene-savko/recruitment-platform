import { AppointmentModel, ChangeSet } from '@devexpress/dx-react-scheduler';

interface IUseChangeEditingState {
	data: AppointmentModel[];
	commitChanges: ({ added, changed, deleted }: ChangeSet) => void;
}
export default IUseChangeEditingState;
