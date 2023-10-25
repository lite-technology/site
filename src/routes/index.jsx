import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "@pages/landingpage";
import LinksPage from "@pages/links";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/links" element={<LinksPage />} />
                <Route path="*" element={<h1>Error!</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
