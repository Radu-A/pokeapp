import React, { useState } from "react";
import List from "./List/List";
import LogoBig from '../../assets/images/logo-big.png';
import SearchForm from "./SearchForm/SearchForm";

const Home = () => {

  return (
    <>
      <section className="title-section">
        <img className="logo-big" src={LogoBig} alt="" />
        <h1>App</h1>
      </section>
      <SearchForm />
      <List />
    </>
  );
};

export default Home;
