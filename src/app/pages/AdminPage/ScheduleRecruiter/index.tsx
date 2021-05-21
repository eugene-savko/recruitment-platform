import React, { useContext, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Resource,
	Grouping,
	ViewState,
	EditingState,
	GroupingState,
	IntegratedEditing,
	IntegratedGrouping,
	AppointmentForm as AppointmentFormBase,
} from '@devexpress/dx-react-scheduler';
import {
	DayView,
	Toolbar,
	WeekView,
	MonthView,
	Scheduler,
	Resources,
	TodayButton,
	ViewSwitcher,
	Appointments,
	GroupingPanel,
	DateNavigator,
	AppointmentForm,
	AppointmentTooltip,
	ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

import { fetchListRecruiters } from 'app/API/scheduleRecruiter';
import { CircularProgress } from '@material-ui/core';
import { authContext } from 'app/context/AuthLoggedContext';
import { TextEditor } from './hoc/TextEditor';
import { BasicLayout } from './hoc/BasicLayout';
import { useChangeEditingState } from './hooks/useChangeEditingState';
import { BooleanEditor } from './hoc/BooleanEditor';
import AuthCircularProgress from '../../AuthPage/Auth/components/AuthCircularProgress';
import IListRecruiters from './types/IListRecruiters';
import { FlexibleSpace } from './hoc/FlexibleSpace';

export const ScheduleRecruiter: React.FunctionComponent = () => {
	const [loading, setLoading] = useState(true);
	const [useListRecruters, setUseListRecruiters] = useState<IListRecruiters[]>(
		[]
	);

	useEffect(() => {
		const fetchData = async () => {
			const listRecruiter = await fetchListRecruiters();
			setUseListRecruiters(listRecruiter);
			setLoading(false);
		};
		fetchData();
	}, []);

	const { commitChanges, data } = useChangeEditingState(useListRecruters);

	const { auth } = useContext(authContext);
	const role = auth.dataRole?.role as string;
	const messages: AppointmentFormBase.LocalizationMessages = {
		moreInformationLabel: '',
		titleLabel: 'Empty time slot',
		detailsLabel: 'Name of candidate',
	};

	const resources: Array<Resource> = [
		{
			fieldName: 'members',
			title: 'Name of recruiter',
			allowMultiple: false,
			instances: useListRecruters,
		},
	];

	const grouping: Array<Grouping> = [{ resourceName: 'members' }];

	if (loading) {
		return (
			<AuthCircularProgress>
				<CircularProgress />
			</AuthCircularProgress>
		);
	}

	return (
		<Paper>
			<Scheduler data={data} height={850}>
				<ViewState defaultCurrentViewName="Week" />
				<EditingState onCommitChanges={commitChanges} />
				<GroupingState grouping={grouping} />

				<DayView startDayHour={10} endDayHour={18} />
				<WeekView excludedDays={[0]} startDayHour={10} endDayHour={18} />
				<MonthView />

				<Appointments />
				<Resources data={resources} mainResourceName="members" />

				<Toolbar flexibleSpaceComponent={FlexibleSpace} />
				<DateNavigator />
				<TodayButton />
				<ViewSwitcher />

				<IntegratedGrouping />
				<IntegratedEditing />

				<AppointmentTooltip showCloseButton showOpenButton showDeleteButton />
				<ConfirmationDialog />
				<AppointmentForm
					readOnly={role === 'SPECIALIST'}
					basicLayoutComponent={BasicLayout}
					textEditorComponent={TextEditor}
					booleanEditorComponent={BooleanEditor}
					messages={messages}
				/>

				<GroupingPanel />
			</Scheduler>
		</Paper>
	);
};
