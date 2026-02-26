import { useState } from 'react'
import styled from 'styled-components'

import ballPng from '../../../assets/images/ball.png'
import navBgImage from '../../../assets/images/nav-bg.png'

const NavWrapper = styled.div`
	background-image: url(${navBgImage});
	background-size: 100% 100%;
	background-position: center;
	background-repeat: no-repeat;

	height: 48px;
	display: flex;
	align-items: center;
	padding-left: 16px;
	border-radius: 8px;
	margin-top: 8px;
	margin-bottom: 8px;
	gap: 24px;

	overflow-x: auto;
	overflow-y: hidden;

	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}

	@media (min-width: 1440px) {
		height: 54px;
		padding-left: 24px;
		gap: 32px;
		border-radius: 10px;
	}

	@media (max-width: 1199px) {
		height: 44px;
		gap: 18px;
		padding-left: 14px;
	}

	@media (max-width: 767px) {
		height: 42px;
		gap: 12px;
		padding-left: 12px;
		border-radius: 6px;
		margin-top: 6px;
		margin-bottom: 6px;
	}

	@media (max-width: 575px) {
		height: 40px;
		gap: 4px;
		padding-left: 8px;
		padding-right: 8px;
		border-radius: 6px;
		margin-top: 6px;
		margin-bottom: 6px;
	}

	@media (max-width: 375px) {
		height: 38px;
		padding-left: 6px;
		padding-right: 6px;
	}
`

const NavItem = styled.button`
	background: transparent;
	border: none;
	height: 100%;
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
	position: relative;
	white-space: nowrap;
	flex-shrink: 0;
	padding: 0 4px;

	color: ${props => (props.$active ? '#FFFFFF' : '#B0C8A2')};
	font-family: Roboto, sans-serif;
	font-size: 20px;
	font-weight: ${props => (props.$active ? '700' : '400')};
	transition: color 0.2s;

	img {
		opacity: ${props => (props.$active ? '1' : '0.6')};
		transition: opacity 0.2s;
	}

	&:hover {
		color: #ffffff;
		img {
			opacity: 1;
		}
	}

	&::after {
		content: '';
		display: ${props => (props.$active ? 'block' : 'none')};
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: #63d92b;
	}

	@media (min-width: 1440px) {
		font-size: 20px;
		gap: 10px;
	}

	@media (max-width: 1199px) {
		font-size: 17px;
		gap: 6px;
	}

	@media (max-width: 767px) {
		font-size: 15px;
		gap: 5px;
		padding: 0 2px;
	}

	@media (max-width: 575px) {
		font-size: 13px;
		gap: 4px;
		padding: 0 6px;
	}

	@media (max-width: 375px) {
		font-size: 12px;
		gap: 3px;
		padding: 0 4px;
	}
`

const IconImg = styled.img`
	width: 18px;
	height: 18px;
	object-fit: contain;
	flex-shrink: 0;

	@media (min-width: 1440px) {
		width: 20px;
		height: 20px;
	}

	@media (max-width: 1199px) {
		width: 16px;
		height: 16px;
	}

	@media (max-width: 575px) {
		width: 14px;
		height: 14px;
	}

	@media (max-width: 375px) {
		width: 13px;
		height: 13px;
	}
`

const leagues = [
	{ id: '1xchampions', name: '1XCHAMPIONS' },
	{ id: 'epl', name: 'EPL' },
	{ id: 'laliga', name: 'LaLiga' },
	{ id: 'europa', name: 'Europa League' }
]

export const LeagueNavBar = () => {
	const [activeLeague, setActiveLeague] = useState('1xchampions')

	return (
		<NavWrapper>
			{leagues.map(league => (
				<NavItem
					key={league.id}
					$active={activeLeague === league.id}
					onClick={() => setActiveLeague(league.id)}
				>
					<IconImg
						src={ballPng}
						alt="league icon"
					/>
					{league.name}
				</NavItem>
			))}
		</NavWrapper>
	)
}
