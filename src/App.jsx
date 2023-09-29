import './App.css';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { postApi } from './Features/postApi';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Routes from './Routes/routes';

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


