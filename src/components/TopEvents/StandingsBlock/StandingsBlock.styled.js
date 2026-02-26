import styled from 'styled-components'

export const BlockWrapper = styled.div`
	background: #397617;
	border-radius: 8px;
	padding: 16px 8px 16px 8px;
	margin-bottom: 8px;
	display: flex;
	flex-direction: column;

	@media (min-width: 1440px) {
		padding: 20px 12px;
		border-radius: 10px;
	}

	@media (max-width: 575px) {
		padding: 10px 6px;
		border-radius: 6px;
	}
`

export const Header = styled.div`
	display: flex;
	gap: 16px;
	margin-bottom: 8px;
	border-bottom: 1px solid #b0c8a2;
	margin-right: 8px;

	@media (min-width: 1440px) {
		gap: 24px;
		margin-bottom: 12px;
	}

	@media (max-width: 575px) {
		gap: 12px;
		margin-right: 4px;
	}
`

export const Tab = styled.button`
	background: transparent;
	border: none;
	color: ${props => (props.$active ? '#FFFFFF' : '#B0C8A2')};
	font-family: Roboto, sans-serif;
	font-size: 12px;
	font-weight: 700;
	cursor: pointer;
	padding: 0 0 12px 0;
	position: relative;
	white-space: nowrap;

	&:hover {
		color: #ffffff;
	}

	&::after {
		content: '';
		display: ${props => (props.$active ? 'block' : 'none')};
		position: absolute;
		bottom: -1px;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #63d92b;
	}

	@media (min-width: 1440px) {
		font-size: 13px;
		padding-bottom: 14px;
	}

	@media (max-width: 575px) {
		font-size: 11px;
		padding-bottom: 8px;
	}
`

export const TableContainer = styled.div`
	overflow-x: auto;
	overflow-y: auto;
	padding-right: 8px;
	max-height: 300px;
	position: relative;

	&::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}
	&::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.15);
		border-radius: 8px;
	}
	&::-webkit-scrollbar-thumb {
		background: #63d92b;
		border-radius: 8px;
	}

	@media (min-width: 1440px) {
		max-height: 360px;
		padding-right: 12px;
	}

	@media (max-width: 767px) {
		max-height: 280px;
		padding-right: 4px;
	}

	@media (max-width: 575px) {
		max-height: 260px;
		padding-right: 2px;
	}
`

export const Table = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing: 0;
	color: #fff;
	font-size: 12px;
	position: relative;

	@media (min-width: 1440px) {
		font-size: 13px;
	}

	@media (max-width: 1199px) {
		font-size: 11px;
	}

	@media (max-width: 575px) {
		font-size: 11px;
		min-width: 420px;
	}

	@media (max-width: 375px) {
		min-width: 380px;
		font-size: 10px;
	}
`

export const Th = styled.th`
	font-weight: 400;
	color: #ffffff;
	padding-bottom: 8px;
	font-size: 12px;

	&:nth-child(1) {
		text-align: left;
		padding-left: 12px;
		width: 32px;
	}

	&:nth-child(2) {
		text-align: left;
	}

	&:nth-child(n + 3) {
		text-align: center;
		width: 44px;
	}

	&:last-child {
		width: 90px;
	}

	@media (min-width: 1440px) {
		font-size: 13px;
		padding-bottom: 10px;

		&:nth-child(1) {
			width: 36px;
			padding-left: 14px;
		}

		&:nth-child(n + 3) {
			width: 50px;
		}

		&:last-child {
			width: 100px;
		}
	}

	@media (max-width: 1199px) {
		font-size: 11px;

		&:nth-child(n + 3) {
			width: 36px;
		}

		&:last-child {
			width: 80px;
		}
	}

	@media (max-width: 575px) {
		font-size: 10px;
		padding-bottom: 6px;

		&:nth-child(1) {
			padding-left: 8px;
			width: 24px;
		}

		&:nth-child(n + 3) {
			width: 30px;
		}

		&:last-child {
			width: 70px;
		}
	}
`

export const Tr = styled.tr`
	background: #ffffff;
	color: #00251d;

	&:first-child > td:first-child::before {
		top: 0;
		height: 100%;
		border-top-left-radius: 4px;
	}

	&:last-child > td:first-child::before {
		border-bottom-left-radius: 4px;
	}
`

export const Td = styled.td`
	padding: 8px;
	font-weight: 700;
	text-align: center;
	height: 36px;
	border-bottom: 1px solid #b0c8a2;

	&:first-child {
		position: relative;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		text-align: left;
		font-weight: 400;
	}

	&:first-child::before {
		content: '';
		position: absolute;
		left: 0;
		top: -4px;
		width: 6px;
		height: calc(100% + 4px);
		background-color: #63d92b;
	}

	&:last-child {
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	&:nth-child(n + 3) {
		border-left: 1px solid #b0c8a2;
	}

	.team-cell-content {
		display: flex;
		align-items: center;
		gap: 12px;
		text-align: left;
		font-weight: 400;
		white-space: nowrap;
	}

	@media (min-width: 1440px) {
		padding: 10px;
		height: 40px;

		.team-cell-content {
			gap: 14px;
		}
	}

	@media (max-width: 1199px) {
		padding: 6px;
		height: 32px;

		.team-cell-content {
			gap: 8px;
		}
	}

	@media (max-width: 575px) {
		padding: 5px 4px;
		height: 30px;

		.team-cell-content {
			gap: 6px;
		}
	}

	@media (max-width: 375px) {
		padding: 4px 3px;
		height: 28px;

		.team-cell-content {
			gap: 4px;
		}
	}
`

export const TeamLogo = styled.img`
	width: 16px;
	height: 16px;
	object-fit: contain;
	flex-shrink: 0;

	@media (min-width: 1440px) {
		width: 20px;
		height: 20px;
	}

	@media (max-width: 1199px) {
		width: 14px;
		height: 14px;
	}

	@media (max-width: 575px) {
		width: 13px;
		height: 13px;
	}

	@media (max-width: 375px) {
		width: 12px;
		height: 12px;
	}
`

export const FormWrapper = styled.div`
	display: flex;
	gap: 5px;
	justify-content: center;
	align-items: center;
	height: 100%;

	@media (min-width: 1440px) {
		gap: 6px;
	}

	@media (max-width: 1199px) {
		gap: 4px;
	}

	@media (max-width: 575px) {
		gap: 3px;
	}
`

export const FormDot = styled.div`
	width: 12px;
	height: 12px;
	border-radius: 50%;
	flex-shrink: 0;
	background-color: ${props => {
		if (props.$result === 'W') return '#00B85C'
		if (props.$result === 'L') return '#FF575A'
		if (props.$result === 'D') return '#99B1AC'
		return '#99B1AC'
	}};

	@media (min-width: 1440px) {
		width: 14px;
		height: 14px;
	}

	@media (max-width: 1199px) {
		width: 10px;
		height: 10px;
	}

	@media (max-width: 575px) {
		width: 9px;
		height: 9px;
	}

	@media (max-width: 375px) {
		width: 8px;
		height: 8px;
	}
`
