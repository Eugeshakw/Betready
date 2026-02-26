import styled from 'styled-components'

export const BannerWrapper = styled.div`
	width: 100%;
	height: 220px;
	border-radius: 12px;
	display: flex;
	align-items: center;
	padding: 0 48px;
	margin-bottom: 8px;

	background: url(${props => props.$bgImage}) center/cover no-repeat;

	position: relative;
	overflow: hidden;

	@media (min-width: 1440px) {
		height: 260px;
		padding: 0 64px;
		border-radius: 16px;
	}

	@media (max-width: 1199px) {
		height: 190px;
		padding: 0 36px;
	}

	@media (max-width: 767px) {
		height: 160px;
		padding: 0 24px;
		border-radius: 10px;
		margin-bottom: 12px;
	}

	@media (max-width: 575px) {
		height: 130px;
		padding: 0 16px;
		border-radius: 8px;
		margin-bottom: 10px;
	}

	@media (max-width: 375px) {
		height: 110px;
		padding: 0 12px;
	}
`

export const BannerTitle = styled.h1`
	color: #ffffff;
	font-family: 'Roboto', sans-serif;
	font-size: 32px;
	font-weight: 700;
	text-transform: uppercase;
	margin: 0;
	z-index: 2;
	letter-spacing: 0.04em;

	@media (max-width: 1199px) {
		font-size: 28px;
	}

	@media (max-width: 767px) {
		font-size: 24px;
	}

	@media (max-width: 575px) {
		font-size: 20px;
		letter-spacing: 0.06em;
	}

	@media (max-width: 375px) {
		font-size: 17px;
	}
`
