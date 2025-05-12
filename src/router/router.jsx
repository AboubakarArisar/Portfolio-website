import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import PageNotFound from "../Components/PageNotFound";
import Contact from "../Components/Contact";
import { BrowserRouter } from "react-router-dom";

const RouterComponent = () => {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<App />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
      </>
  );
};

export default RouterComponent;
