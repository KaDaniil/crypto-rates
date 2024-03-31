import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Coin from './pages/Coin';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                index: true,
                element: <Home/>,
                errorElement: 'error :/',
            },
            {
                path: ':coinId',
                element: <Coin/>,
                errorElement: 'error :///',
            }
        ],
    },
]);

export default router;
