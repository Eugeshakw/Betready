import styled from 'styled-components'

export const SectionWrapper = styled.div`
	background: #397617;
	border-radius: 8px;
	overflow: hidden;
	margin-bottom: 8px;
`

export const Header = styled.div`
	display: flex;
	align-items: center;

	margin: 0 8px;
	height: 30px;
	color: #fff;
	border-bottom: 1px solid #b0c8a2;

	.calendar-section {
		display: flex;
		align-items: center;
		height: 20px;
		padding-right: 8px;
		border-right: 1px solid #b0c8a2;
	}

	.tabs-section {
		display: flex;
		align-items: center;
		height: 100%;
		margin-left: 8px;
		gap: 16px;
		font-size: 12px;
	}

	.date-text {
		color: #b0c8a2;
		font-weight: 400;
	}

	.active-tab {
		display: flex;
		align-items: center;
		height: 100%;
		font-weight: 700;
		position: relative;
		cursor: pointer;

		&::after {
			content: '';
			position: absolute;
			bottom: -1px;
			left: -4px;
			right: -4px;
			height: 2px;
			background: #63d92b;
		}
	}

	.icon-btn {
		background: transparent;
		border: none;
		color: #b0c8a2;
		cursor: pointer;
		display: flex;
		align-items: center;
		padding: 0;

		&:hover {
			color: #fff;
		}
	}

	@media (min-width: 1440px) {
		height: 36px;
		margin: 0 12px;

		.tabs-section {
			gap: 20px;
			font-size: 13px;
		}
	}

	@media (max-width: 1199px) {
		.tabs-section {
			gap: 12px;
			font-size: 11px;
		}
	}

	@media (max-width: 575px) {
		height: 28px;
		margin: 0 6px;

		.tabs-section {
			gap: 8px;
			font-size: 11px;
		}

		.calendar-section {
			padding-right: 6px;
		}
	}

	@media (max-width: 375px) {
		.tabs-section {
			gap: 6px;
			font-size: 10px;
		}
	}
`

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 8px;
	padding: 8px;

	@media (min-width: 1440px) {
		gap: 12px;
		padding: 12px;
	}

	@media (max-width: 1199px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 767px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 6px;
		padding: 6px;
	}

	@media (max-width: 575px) {
		grid-template-columns: 1fr;
		gap: 6px;
		padding: 6px;
	}
`

export const Card = styled.div`
	background: #fff;
	border-radius: 8px;
	padding: 30px 8px 8px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 1440px) {
		padding: 36px 12px 12px;
		border-radius: 10px;
	}

	@media (max-width: 767px) {
		padding: 20px 8px 8px;
	}

	@media (max-width: 575px) {
		padding: 16px 12px 10px;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
`

export const ScoreBoard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 16px;

	@media (min-width: 1440px) {
		margin-bottom: 20px;
	}

	@media (max-width: 767px) {
		margin-bottom: 10px;
	}

	@media (max-width: 575px) {
		margin-bottom: 8px;
	}
`

export const Team = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	width: 80px;

	.logo {
		width: 64px;
		height: 64px;
		object-fit: contain;
	}

	.name {
		color: #00251d;
		font-size: 16px;
		font-weight: 700;
		text-align: center;
	}

	@media (min-width: 1440px) {
		width: 90px;
		gap: 10px;

		.logo {
			width: 72px;
			height: 72px;
		}

		.name {
			font-size: 18px;
		}
	}

	@media (max-width: 1199px) {
		width: 70px;

		.logo {
			width: 54px;
			height: 54px;
		}

		.name {
			font-size: 14px;
		}
	}

	@media (max-width: 767px) {
		width: 60px;
		gap: 6px;

		.logo {
			width: 44px;
			height: 44px;
		}

		.name {
			font-size: 13px;
		}
	}

	@media (max-width: 575px) {
		width: 72px;
		gap: 6px;

		.logo {
			width: 48px;
			height: 48px;
		}

		.name {
			font-size: 14px;
		}
	}

	@media (max-width: 375px) {
		width: 60px;

		.logo {
			width: 40px;
			height: 40px;
		}

		.name {
			font-size: 12px;
		}
	}
`

export const Score = styled.div`
	color: #00251d;
	font-size: 32px;
	font-weight: 700;

	@media (min-width: 1440px) {
		font-size: 36px;
	}

	/* Tablets landscape */
	@media (max-width: 1199px) {
		font-size: 26px;
	}

	@media (max-width: 767px) {
		font-size: 22px;
	}

	@media (max-width: 575px) {
		font-size: 26px;
	}

	@media (max-width: 375px) {
		font-size: 22px;
	}
`

export const StatusText = styled.div`
	color: #767575;
	font-size: 11px;
	font-weight: 400;
	margin-bottom: 16px;
	text-align: center;

	@media (min-width: 1440px) {
		font-size: 12px;
		margin-bottom: 20px;
	}

	@media (max-width: 767px) {
		font-size: 10px;
		margin-bottom: 10px;
	}

	@media (max-width: 575px) {
		width: 100%;
		font-size: 10px;
		margin-bottom: 8px;
	}
`

export const StatButton = styled.button`
	width: 100%;
	background: #b0c8a2;
	color: #00251d;
	border: none;
	border-radius: 8px;
	padding: 8px;
	font-size: 11px;
	font-weight: 400;
	cursor: pointer;
	transition: background 0.2s;

	&:hover {
		background: #a5b99a;
	}

	@media (min-width: 1440px) {
		font-size: 12px;
		padding: 10px;
		border-radius: 10px;
	}

	@media (max-width: 767px) {
		font-size: 10px;
		padding: 7px;
	}

	@media (max-width: 575px) {
		font-size: 11px;
		padding: 8px;
	}

	@media (max-width: 375px) {
		font-size: 10px;
		padding: 7px;
	}
`
