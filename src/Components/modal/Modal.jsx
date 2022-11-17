import { Container } from './Modastyles';
import { FaTimes } from 'react-icons/fa';
import metaWallet from '../../resources/topsect/metacomplete.png';
import walletConnect from '../../resources/topsect/wccomplete.png';
import angle from '../../resources/topsect/arrowhead.svg';
import { useContext } from 'react';
import AppContext from '../../Context/AppContext';

const Modal = () => {
	const { setClick } = useContext(AppContext);
	return (
		<Container>
			<div className='modalCard'>
				<div className='modalHeader'>
					<h1>Connect Wallet</h1>
					<FaTimes className='icon' onClick={() => setClick()} />
				</div>
				<div className='wallets'>
					<p>Choose your preferred wallet:</p>
					<div className='top'>
						<img src={metaWallet} alt='wallet' />
						<img src={angle} alt='angle' />
					</div>
					<div>
						<img src={walletConnect} alt='wallet' />
						<img src={angle} alt='angle' />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Modal;