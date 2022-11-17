import React from 'react';
import Card from '../nft/Card';
import { Container } from './MetahomeStyles';
import first from '../../resources/middlesect/first.png';
import second from '../../resources/middlesect/second.png';
import third from '../../resources/middlesect/third.png';
import four from '../../resources/middlesect/fourth.png';
import six from '../../resources/middlesect/sixth.png';
import seven from '../../resources/middlesect/seven.png';
import five from '../../resources/middlesect/fifth.png';
import eight from '../../resources/middlesect/eight.png';

const Metahomes = () => {
	const iconArr = [first, second, third, four, six, seven, five, eight];
	return (
		<Container>
			<h2>Inspiration for your next adventure</h2>
			<section className='grid'>
				{iconArr.map((item, indx) => (
					<Card key={indx} icon={item} />
				))}
			</section>
		</Container>
	);
};

export default Metahomes;