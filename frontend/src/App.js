import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
//import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Login from './components/Login';
import Register from './components/Register';
//import ProtectedRoute from './ProtectedRoute';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/registrar" element={<Register />} />
                <Route path="/entrar" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
