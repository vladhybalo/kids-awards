import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import Planning from './pages/Planning';
import Awards from './pages/Awards';
import Contacts from './pages/Contacts';

const Router = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="planning" element={<Planning />} />
            <Route path="awards" element={<Awards />} />
            <Route path="contacts" element={<Contacts />} />
        </Routes>
    )
};

export default Router;