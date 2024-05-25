import React, { createContext, useState } from 'react';

const MyContext = createContext();

function MyProvider(props) {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <MyContext.Provider value={{ selectedValue, setSelectedValue }}>
      {props.children}
    </MyContext.Provider>
  );
}

export { MyContext, MyProvider };
