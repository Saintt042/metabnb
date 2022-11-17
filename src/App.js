import Layout from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { AppProvider } from './Context/AppContext';
import Placetostay from './pages/pts/Placetostay';

function App() {
	return (
		<AppProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='placetostay' element={<Placetostay />} />
				</Route>
			</Routes>
		</AppProvider>
	);
}

export default App;