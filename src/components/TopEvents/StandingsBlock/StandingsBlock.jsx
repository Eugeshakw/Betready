import { useState } from 'react'
import { mockStandings } from './mock-standings.data'
import {
	BlockWrapper,
	FormDot,
	FormWrapper,
	Header,
	Tab,
	Table,
	TableContainer,
	Td,
	TeamLogo,
	Th,
	Tr
} from './StandingsBlock.styled'

export const StandingsBlock = () => {
	const [activeTab, setActiveTab] = useState('standings')

	return (
		<BlockWrapper>
			<Header>
				<Tab
					$active={activeTab === 'standings'}
					onClick={() => setActiveTab('standings')}
				>
					Standings
				</Tab>
				<Tab
					$active={activeTab === 'calendar'}
					onClick={() => setActiveTab('calendar')}
				>
					Event calendar
				</Tab>
			</Header>

			<TableContainer>
				<Table>
					<thead>
						<tr>
							<Th>#</Th>
							<Th>Team</Th>
							<Th>GP</Th>
							<Th>W</Th>
							<Th>L</Th>
							<Th>T</Th>
							<Th>G</Th>
							<Th>Pts</Th>
							<Th>Form</Th>
						</tr>
					</thead>
					<tbody>
						{mockStandings.map(row => (
							<Tr key={row.id}>
								<Td>{row.id}</Td>
								<Td>
									<div className="team-cell-content">
										<TeamLogo
											src={row.logo}
											alt={row.team}
										/>
										{row.team}
									</div>
								</Td>
								<Td>{row.gp}</Td>
								<Td>{row.w}</Td>
								<Td>{row.l}</Td>
								<Td>{row.t}</Td>
								<Td>{row.g}</Td>
								<Td>{row.pts}</Td>
								<Td>
									<FormWrapper>
										{row.form.map((result, i) => (
											<FormDot
												key={i}
												$result={result}
											/>
										))}
									</FormWrapper>
								</Td>
							</Tr>
						))}
					</tbody>
				</Table>
			</TableContainer>
		</BlockWrapper>
	)
}
