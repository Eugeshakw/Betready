import styled from 'styled-components'

import { HeroBanner } from '../TopEvents/HeroBanner/HeroBanner'
import { LeagueNavBar } from '../TopEvents/LeagueNavBar/LeagueNavBar'
import { MatchesSection } from '../TopEvents/MatchesSection/MatchesSection'
import { StandingsBlock } from '../TopEvents/StandingsBlock/StandingsBlock'
import { TopPlayersBlock } from '../TopEvents/TopPlayersBlock/TopPlayersBlock'
import { WhoWillWinBlock } from '../TopEvents/WhoWillWinBlock/WhoWillWinBlock'
import { Footer } from './Footer'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

const LayoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding-left: 8px;
	padding-right: 8px;
`

const ContentWrapper = styled.div`
	display: flex;
	flex: 1;
	gap: 16px;
`

const MainColumn = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 0;
`

const TopEventsLayout = () => {
	return (
		<LayoutWrapper>
			<TopBar />
			<Header />
			<LeagueNavBar />

			<ContentWrapper>
				<Sidebar />

				<MainColumn>
					<HeroBanner />
					<MatchesSection />
					<WhoWillWinBlock />
					<StandingsBlock />
					<TopPlayersBlock />
				</MainColumn>
			</ContentWrapper>

			<Footer />
		</LayoutWrapper>
	)
}

export default TopEventsLayout
