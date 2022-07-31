import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import Planning from './pages/Planning';
import Awards from './pages/Awards';
import Contacts from './pages/Contacts';

const Router = () => {
    return (
        <Routes>
            <Route path="auth" element={<AuthPage />} />
            <Route path="home" element={<Home />} />
            <Route path="planning" element={<Planning />} />
            <Route path="awards" element={<Awards />} />
            <Route path="contacts" element={<Contacts />} />
        </Routes>
    )
};

export default Router;