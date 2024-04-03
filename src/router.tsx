import { lazy, Suspense } from 'react';
import { createHashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Coin = lazy(() => import('./pages/Coin'));

// gh-pages doesn't allow to work with the BrowserRouter.
const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                index: true,
                element: (
                    <Suspense fallback={<Loader />}>
                        <Home />
                    </Suspense>
                ),
                errorElement: <div>Error :/</div>,
            },
            {
                path: ':coinId',
                element: (
                    <Suspense fallback={<Loader />}>
                        <Coin />
                    </Suspense>
                ),
                errorElement: <div>Error :/</div>,
            }
        ],
    },
]);

export default router;
