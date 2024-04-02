import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Coin = lazy(() => import('./pages/Coin'));

const router = createBrowserRouter([
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
