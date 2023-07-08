import React from "react";
import NewForm from "./NewForm/NewForm";
import List from "../Home/List/List";

const New = () => {

  const initialMessage = 'Create a new pokemon';

  return (
    <>
      <NewForm />
      <List initialMessage={initialMessage}/>
    </>
  );
};

export default New;
