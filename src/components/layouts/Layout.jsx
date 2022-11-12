import { Outlet } from 'react-router-dom';
import Footer from '../layouts/Layout';

const Layout = () => {
	return (
		<>
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;