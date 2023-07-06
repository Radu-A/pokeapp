import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import List from "./List/List";
import LogoBig from '../../assets/images/logo-big.png';
import SearchForm from "./SearchForm/SearchForm";
import Home from "../Home/Home";
import New from "../New/New";
import Details from "../Details/Details";

const Main = () => {

  const [list, setList] = useState([])

  return (
    <>
      <main>
        {/* <section className="title-section">
          <img className="logo-big" src={LogoBig} alt="" />
          <h1>App</h1>
        </section>
        <SearchForm list={list} setList={setList} />
        <List list={list}/> */}
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
