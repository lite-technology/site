import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "@pages/landingpage";
import LinksPage from "@pages/links";
import ErrorPage from "@pages/error";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/links" element={<LinksPage />} />
                <Route path="/e/:code" element={<ErrorPage />} />
                <Route path="*" element={<ErrorPage code={404} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
