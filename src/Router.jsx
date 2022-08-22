import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Login from './pages/Login';
import Planning from './pages/Planning';
import Awards from './pages/Awards';
import Contacts from './pages/Contacts';
import Main from "./pages/Main";

const Router = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="planning" element={<Planning />} />
            <Route path="awards" element={<Awards />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="/" element = {<Main />}></Route>
        </Routes>
    )
};

export default Router;