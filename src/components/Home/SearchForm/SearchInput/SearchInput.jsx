import React, { useState, useRef } from "react";

const SearchInput = ({setName}) => {

  const [timeoutId, setTimeoutId] = useState('');

  const ref = useRef('');
  const handleChange = () => {
    clearTimeout(timeoutId)
    const timer = setTimeout(() => {
      setName(ref.current.value);
      ref.current.value = '';
    }, 1000)
    setTimeoutId(timer);
  }

  return <input type="text" name="name" ref={ref} placeholder="Name" onChange={handleChange}/>
};

export default SearchInput;
