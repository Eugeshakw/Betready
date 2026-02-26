import { useState } from 'react'
import {
	BlockWrapper,
	ListContainer,
	PlayerInfo,
	PlayerRow,
	StatBox,
	StatsContainer,
	Tab,
	TabsWrapper,
	Title
} from './TopPlayer.styled'
import { mockPlayers } from './mock-players.data'

import avatarPlaceholder from '../../../assets/images/avatar.png'
import franceFlag from '../../../assets/images/france.png'

const tabs = [
	{ id: 'assists', label: 'Assists' },
	{ id: 'goalkeepers', label: 'Goalkeepers' },
	{ id: 'cards', label: 'Cards' },
	{ id: 'scorers', label: 'Top scorers' }
]

export const TopPlayersBlock = () => {
	const [activeTab, setActiveTab] = useState('scorers')

	return (
		<BlockWrapper>
			<Title>Top 10 Players</Title>

			<TabsWrapper>
				{tabs.map(tab => (
					<Tab
						key={tab.id}
						$active={activeTab === tab.id}
						onClick={() => setActiveTab(tab.id)}
					>
						{tab.label}
					</Tab>
				))}
			</TabsWrapper>

			<ListContainer>
				{mockPlayers.map((player, index) => (
					<PlayerRow key={index}>
						<PlayerInfo>
							<div className="rank">{player.rank}</div>

							<img
								src={avatarPlaceholder}
								alt="avatar"
								className="avatar"
							/>
							<div className="details">
								<span className="name">{player.name}</span>
								<span className="country">
									<img
										src={franceFlag}
										alt="flag"
										className="flag"
									/>
									{player.country}
								</span>
							</div>
						</PlayerInfo>

						<StatsContainer>
							<StatBox>
								<span className="label">Games</span>
								<span className="value">{player.games}</span>
							</StatBox>
							<StatBox>
								<span className="label">Penalties</span>
								<span className="value">{player.penalties}</span>
							</StatBox>
							<StatBox>
								<span className="label">Goals</span>
								<span className="value">{player.goals}</span>
							</StatBox>
						</StatsContainer>
					</PlayerRow>
				))}
			</ListContainer>
		</BlockWrapper>
	)
}
