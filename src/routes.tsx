import Home from './pages/Home';
import Coin from './pages/Coin';


export const routes = [
    {
        path: '/',
        element: <Home/>,
        errorElement: 'error :/',
    },
    {
        path: ':coinId',
        element: <Coin/>,
        errorElement: 'error :///',
    }
];
