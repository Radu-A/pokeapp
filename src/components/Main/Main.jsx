import React, { useState } from "react";
import List from "./List/List";
import Search from "./Search/Search";
import { useEffect } from "react";

import LogoBig from '../../assets/images/logo-big.png'

const Main = () => {

  const [list, setList] = useState([])

  return (
    <>
      <main>
        <section className="title-section">
          <img className="logo-big" src={LogoBig} alt="" />
          <h1>App</h1>
        </section>
        <Search list={list} setList={setList} />
        <List list={list}/>
      </main>
    </>
  );
};

export default Main;
