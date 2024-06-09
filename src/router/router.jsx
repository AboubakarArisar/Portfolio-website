import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "../App";
import PageNotFound from "../Components/PageNotFound";
import Contact from "../Components/Contact";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<App />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
