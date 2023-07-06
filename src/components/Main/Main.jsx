import React, { useState } from "react";
import List from "./List/List";
import { useEffect } from "react";

// import demoList from "./demoList";

import LogoBig from '../../assets/images/logo-big.png'
import SearchForm from "./SearchForm/SearchForm";

const Main = () => {

  const [list, setList] = useState([])

  // useEffect(() => {

  //   setList(demoList);

  // }, [])

  return (
    <>
      <main>
        <section className="title-section">
          <img className="logo-big" src={LogoBig} alt="" />
          <h1>App</h1>
        </section>
        <SearchForm list={list} setList={setList} />
        <List list={list}/>
      </main>
    </>
  );
};

export default Main;
