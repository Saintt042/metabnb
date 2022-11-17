import React, { useContext } from 'react';
import Categories from '../../Components/categories/Categories';
import AppContext from '../../Context/AppContext';
import Modal from '../../Components/modal/Modal';
import Card from '../../Components/nft/Card';
import { Container } from './PlacetostayStyles';
import a from '../../resources/middlesect/first.png';
import b from '../../resources/middlesect/second.png';
import c from '../../resources/middlesect/third.png';
import d from '../../resources/middlesect/fourth.png';
import e from '../../resources/middlesect/fifth.png';
import f from '../../resources/middlesect/sixth.png';
import g from '../../resources/middlesect/seven.png';
import h from '../../resources/middlesect/eight.png';
import i from '../../resources/middlesect/nine.png';
import j from '../../resources/middlesect/tenth.png';
import k from '../../resources/middlesect/eleven.png';
import l from '../../resources/middlesect/twelve.png';
import m from '../../resources/middlesect/thirteen.png';
import n from '../../resources/middlesect/fourteen.png';
import o from '../../resources/middlesect/fifteen.png';
import p from '../../resources/middlesect/last.png';

const Placetostay = () => {
	const iconArr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p];
	const { showModal } = useContext(AppContext);
	return (
		<Container>
			{showModal && <Modal />}
			<Categories />
			<section className='grid'>
				{iconArr.map((item, indx) => (
					<Card key={indx} icon={item} />
				))}
			</section>
		</Container>
	);
};

export default Placetostay;