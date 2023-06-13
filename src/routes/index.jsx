import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Error from "../pages/error";
import Main from '../pages/main';
import Links from "../pages/links";


  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/links" element={<Links />}/>
          <Route path="/visite-card" element={<Links />}/>
          <Route path="/" element={<Main />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    )
  }


  export default Router