import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import ErrorBoundary from './components/ErrorBoundary';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary fallback={<div>Error! Please try again later.</div>}>
            <Main />
        </ErrorBoundary>
    </React.StrictMode>,
);

