import './App.css';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { postApi } from './Features/postApi';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './Routes/routes';
import Navbar from './Components/Navbar';

const Routes = () => useRoutes(routes);

function App() {
    return (
        <>
            <ApiProvider api={postApi}>
                <BrowserRouter>
                    <Navbar />
                    <main className="main">
                       <Routes />
                    </main>
                </BrowserRouter>
            </ApiProvider>
        </>
    )
};

export default App;
