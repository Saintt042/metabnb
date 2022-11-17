import { useContext } from 'react';
import AppContext from '../../Context/AppContext';

import Modal from '../../Components/modal/Modal';
import Metahomes from '../../Components/metahomes/Metahomes';
import Metanfts from '../../Components/meta_nft/Meta_nfts';
import Sponsor from '../../Components/sponsors/Sponsor';
import Rent from '../../Components/rent/Rent';

const Home = () => {
	const { showModal } = useContext(AppContext);
	return (
		<>
			{showModal && <Modal />}
			<Rent />
			<Sponsor />
			<Metahomes />
			<Metanfts />
		</>
	);
};

export default Home;