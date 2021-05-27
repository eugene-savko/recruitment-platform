import styled from 'styled-components';

const DetailedCourseInfoWrapper = styled.div`
	.modal {
		height: 100vh;
		width: calc(100% - 25px);
		background-color: rgba(0, 0, 0, 0.4);
		position: fixed;
		top: 0;
		left: 127.5px;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		pointer-events: none;
		transition: 0.5s;
	}
	.modal-title,
	.modal-date {
		padding: 0 30px;
		margin: 0;
	}

	.modal-date {
		font-size: 13px;
		padding-top: 5px;
		padding-bottom: 20px;
		color: black;
	}
	.modal-date em {
		color: gray;
	}
	.modal.active {
		opacity: 1;
		pointer-events: all;
	}
	.modal__content {
		padding: 20px 0;
		border-radius: 12px;
		background-color: white;
		width: 45vh;
		transform: scale(0.5);
		transition: 0.4s all;
	}

	.modal__content.active {
		transform: scale(1);
	}
	.modal-table {
		width: 100%;
	}
	.dash-rows th,
	.dash-rows td {
		padding: 5px 30px;
		border-top: 1px solid #d9dddc;
		font-weight: 400;
		font-size: 16px;
		text-align: center;
		// line-height: 2px;
	}
	.dash-rows th {
		text-align: left;
	}
`;

export default DetailedCourseInfoWrapper;
