import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import AuthPage from './pages/AuthPage';
import Planning from './pages/Planning';
import Awards from './pages/Awards';
import Contacts from './pages/Contacts';
import Main from "./pages/Main";

const Router = () => {
    return (
        <Routes>
            <Route path="auth" element={<AuthPage />} />
            <Route path="planning" element={<Planning />} />
            <Route path="awards" element={<Awards />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="/" element = {<Main />}></Route>
        </Routes>
    )
};

export default Router;