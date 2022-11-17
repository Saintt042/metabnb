import { Container } from './CardStyles';
import starIcon from '../../resources/middlesect/iconstar.svg';

const Card = ({ icon }) => {
	return (
		<Container>
			<figure>
				<img src={icon} alt='nft' />
			</figure>

			<section className='info'>
				<div>
					<p>Desert king</p>
					<p> 1MBT per night </p>
				</div>

				<div>
					<p>2345km away</p>
					<p className='weeks'>available for 2weeks stay</p>
				</div>

				<div>
					<div className='iconstar'>
						<img src={starIcon} alt='iconstar' id='iconstars' />
						<img src={starIcon} alt='iconstar' id='iconstars' />
						<img src={starIcon} alt='iconstar' id='iconstars' />
						<img src={starIcon} alt='iconstar' id='iconstars' />
						<img src={starIcon} alt='iconstar' id='iconstars' />
					</div>
				</div>
			</section>
		</Container>
	);
};

export default Card;