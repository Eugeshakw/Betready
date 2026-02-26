import styled from 'styled-components'

const MainWrapper = styled.main`
	flex: 1;
	background: #f5f8f3;
	min-height: 100vh;
	padding: 24px;
`

export const MainContent = () => (
	<MainWrapper>
		{/* Здесь будет основной контент */}

		<h2>Top Events</h2>
		<div
			style={{
				height: 300,
				background: '#e0e8de',
				borderRadius: 8,
				marginBottom: 24
			}}
		/>
		<h2>Popular Matches</h2>
		<div style={{ height: 300, background: '#e0e8de', borderRadius: 8 }} />
	</MainWrapper>
)
