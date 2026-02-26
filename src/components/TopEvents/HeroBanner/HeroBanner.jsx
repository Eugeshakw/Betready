import heroBg from '../../../assets/images/hero-bg.png'
import { BannerTitle, BannerWrapper } from './HeroBanner.styled'

export const HeroBanner = () => {
	return (
		<BannerWrapper $bgImage={heroBg}>
			<BannerTitle>1XCHAMPIONS</BannerTitle>
		</BannerWrapper>
	)
}
