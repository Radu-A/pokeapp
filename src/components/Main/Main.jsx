// import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../Home/Home";
import New from "../New/New";
import Details from "../Details/Details";
import { useState } from 'react';

const Main = () => {

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
