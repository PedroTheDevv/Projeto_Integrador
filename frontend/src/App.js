import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Login from './pages/Home';  

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Auth />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/inicial" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
