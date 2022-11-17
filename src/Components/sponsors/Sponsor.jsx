import { Container } from './SponsorStyle';
import mbtoken from '../../resources/topsect/mbtoken.png';
import metamask from '../../resources/topsect/metamask11.png';
import opensea from '../../resources/topsect/opensea22.png';

const Sponsor = () => {
	return (
		<Container>
			<div>
				<img src={mbtoken} alt='mbtoken' />
			</div>
			<div>
				<img src={metamask} alt='metamask' />
			</div>
			<div>
				<img src={opensea} alt='opensea' />
			</div>
		</Container>
	);
};

export default Sponsor;