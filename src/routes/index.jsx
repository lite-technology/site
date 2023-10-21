import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landingpage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="*" element={<h1>Error!</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
