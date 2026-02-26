import styled from 'styled-components'

const BlockWrapper = styled.div`
	background: linear-gradient(180deg, #ffffff 0%, #397617 100%);
	border-radius: 8px;
	min-height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	margin-bottom: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

const Title = styled.h2`
	color: #00251d;
	font-family: Roboto, sans-serif;
	font-size: 16px;
	font-weight: 700;
	margin-bottom: 60px;
	position: absolute;
	top: 24px;
`

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
`

const NoDataTitle = styled.div`
	color: #00251d;
	font-family: Roboto, sans-serif;
	font-size: 11px;
	font-weight: 700;
`

const SubText = styled.div`
	color: #00251d;
	font-family: Roboto, sans-serif;
	font-size: 11px;
	font-weight: 400;
`

export const WhoWillWinBlock = () => {
	return (
		<BlockWrapper style={{ position: 'relative' }}>
			<Title>Who Will Win</Title>
			<ContentWrapper>
				<NoDataTitle>No data</NoDataTitle>
				<SubText>Information will be displayed soon</SubText>
			</ContentWrapper>
		</BlockWrapper>
	)
}
