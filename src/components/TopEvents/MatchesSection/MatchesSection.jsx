import { CalendarIcon, MenuIcon } from './MatchesSection.icon'
import {
	Card,
	Grid,
	Header,
	Score,
	ScoreBoard,
	SectionWrapper,
	StatButton,
	StatusText,
	Team
} from './MatchesSection.styled'

import arsenalLogo from '../../../assets/images/arsenal.png'
import chelseaLogo from '../../../assets/images/chelsea.png'

const mockMatches = Array(6).fill({
	team1: 'Chelsea',
	team2: 'Arsenal',
	score: '3 : 0',
	status: '29/01 Match Finished'
})

export const MatchesSection = () => {
	return (
		<SectionWrapper>
			<Header>
				<div className="calendar-section">
					<CalendarIcon />
				</div>

				<div className="tabs-section">
					<span className="date-text">22/01</span>

					<div className="active-tab">
						<span>Today</span>
					</div>

					<button className="icon-btn">
						<MenuIcon />
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polyline points="6 9 12 15 18 9"></polyline>
						</svg>
					</button>
				</div>
			</Header>

			<Grid>
				{mockMatches.map((match, index) => (
					<Card key={index}>
						<ScoreBoard>
							<Team>
								<img
									src={chelseaLogo}
									alt={match.team1}
									className="logo"
								/>
								<span className="name">{match.team1}</span>
							</Team>

							<Score>{match.score}</Score>

							<Team>
								<img
									src={arsenalLogo}
									alt={match.team2}
									className="logo"
								/>
								<span className="name">{match.team2}</span>
							</Team>
						</ScoreBoard>

						<StatusText>{match.status}</StatusText>

						<StatButton>Match statistics</StatButton>
					</Card>
				))}
			</Grid>
		</SectionWrapper>
	)
}
