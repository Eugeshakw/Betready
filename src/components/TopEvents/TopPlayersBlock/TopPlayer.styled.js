import styled from 'styled-components'

export const BlockWrapper = styled.div`
	background: #397617;
	border-radius: 8px;
	overflow: hidden;
	margin-bottom: 8px;
	display: flex;
	flex-direction: column;

	@media (min-width: 1440px) {
		border-radius: 10px;
	}

	@media (max-width: 575px) {
		border-radius: 6px;
	}
`

export const Title = styled.h2`
	color: #ffffff;
	font-family: Roboto, sans-serif;
	font-size: 16px;
	font-weight: 700;
	margin: 0 8px;
	padding: 16px 0 4px 0;
	border-bottom: 1px solid #b0c8a2;

	@media (min-width: 1440px) {
		font-size: 18px;
		padding: 20px 0 6px 0;
		margin: 0 12px;
	}

	@media (max-width: 575px) {
		font-size: 14px;
		padding: 12px 0 4px 0;
		margin: 0 6px;
	}
`

export const TabsWrapper = styled.div`
	display: flex;
	gap: 16px;
	margin: 0 8px;
	padding: 10px 0 0 0;
	border-bottom: 1px solid #b0c8a2;
	overflow-x: auto;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
	@media (min-width: 1440px) {
		gap: 20px;
		margin: 0 12px;
		padding: 12px 0 0 0;
	}

	@media (max-width: 575px) {
		gap: 10px;
		margin: 0 6px;
		padding: 8px 0 0 0;
	}
`

export const Tab = styled.button`
	background: transparent;
	border: none;
	padding: 0 0 4px 0;
	color: ${props => (props.$active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)')};
	font-family: Roboto, sans-serif;
	font-size: 11px;
	font-weight: 400;
	cursor: pointer;
	position: relative;
	transition: color 0.2s;
	white-space: nowrap;
	flex-shrink: 0;

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
		font-size: 11px;
		padding-bottom: 6px;
	}

	@media (max-width: 575px) {
		font-size: 10px;
	}
`

export const ListContainer = styled.div`
	padding: 12px 8px 16px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-height: 300px;
	overflow-y: auto;
	padding-right: 8px;

	&::-webkit-scrollbar {
		width: 6px;
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
		padding: 16px 12px 20px;
		gap: 10px;
	}

	@media (max-width: 1199px) {
		max-height: 280px;
	}

	@media (max-width: 575px) {
		padding: 8px 6px 12px;
		gap: 6px;
		max-height: 260px;
	}
`

export const PlayerRow = styled.div`
	background: #ffffff;
	border-radius: 8px;
	padding: 3px 8px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 1440px) {
		padding: 4px 12px;
		border-radius: 10px;
	}

	@media (max-width: 1199px) {
		padding: 3px 6px;
	}

	@media (max-width: 575px) {
		padding: 4px 6px;
		flex-wrap: wrap;
		gap: 4px;
	}

	@media (max-width: 375px) {
		padding: 4px;
	}
`

export const PlayerInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin: 5px 0 7px 0;

	.rank {
		font-size: 11px;
		font-weight: 400;
		color: #00251d;
		width: 7px;
	}

	.avatar {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		object-fit: cover;
		border: 1px solid #99b1ac;
		flex-shrink: 0;
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.name {
		font-size: 11px;
		font-weight: 400;
		color: #00251d;
		white-space: nowrap;
	}

	.country {
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: 8px;
		color: #00251d;
		white-space: nowrap;
	}

	.flag {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		object-fit: cover;
		flex-shrink: 0;
	}

	@media (min-width: 1440px) {
		gap: 10px;
		margin: 6px 0 8px 0;

		.rank {
			font-size: 12px;
			width: 10px;
		}

		.avatar {
			width: 36px;
			height: 36px;
		}

		.name {
			font-size: 12px;
		}

		.country {
			font-size: 9px;
		}

		.flag {
			width: 16px;
			height: 16px;
		}
	}

	@media (max-width: 1199px) {
		gap: 6px;

		.avatar {
			width: 28px;
			height: 28px;
		}

		.name {
			font-size: 10px;
		}
	}

	@media (max-width: 575px) {
		margin: 3px 0 4px 0;
		gap: 6px;

		.avatar {
			width: 28px;
			height: 28px;
		}

		.name {
			font-size: 10px;
		}

		.country {
			font-size: 8px;
		}
	}

	@media (max-width: 375px) {
		gap: 5px;

		.rank {
			font-size: 10px;
		}

		.avatar {
			width: 26px;
			height: 26px;
		}

		.name {
			font-size: 10px;
		}
	}
`

export const StatsContainer = styled.div`
	display: flex;
	gap: 8px;

	@media (min-width: 1440px) {
		gap: 10px;
	}

	@media (max-width: 1199px) {
		gap: 6px;
	}

	@media (max-width: 575px) {
		gap: 4px;
	}

	@media (max-width: 375px) {
		gap: 3px;
	}
`

export const StatBox = styled.div`
	background: #b0c8a2;
	border-radius: 8px;
	padding: 3px 30px 5px;
	display: flex;
	gap: 4px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-width: 100px;

	.label {
		font-size: 12px;
		color: #00251d;
		font-weight: 400;
	}

	.value {
		font-size: 16px;
		font-weight: 700;
		color: #00251d;
	}

	@media (min-width: 1440px) {
		min-width: 110px;
		padding: 4px 34px 6px;

		.label {
			font-size: 13px;
		}

		.value {
			font-size: 18px;
		}
	}

	@media (max-width: 1199px) {
		min-width: 80px;
		padding: 3px 18px 5px;

		.label {
			font-size: 11px;
		}

		.value {
			font-size: 14px;
		}
	}

	@media (max-width: 767px) {
		min-width: 68px;
		padding: 3px 12px 5px;

		.label {
			font-size: 10px;
		}

		.value {
			font-size: 13px;
		}
	}

	@media (max-width: 575px) {
		min-width: 58px;
		padding: 3px 8px 4px;
		border-radius: 6px;
		gap: 2px;

		.label {
			font-size: 9px;
		}

		.value {
			font-size: 13px;
		}
	}

	@media (max-width: 375px) {
		min-width: 50px;
		padding: 3px 6px 4px;

		.label {
			font-size: 8px;
		}

		.value {
			font-size: 12px;
		}
	}
`
