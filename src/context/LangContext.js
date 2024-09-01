"use client";
import { createContext, useState } from "react";

const LangContext = createContext();

const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState("bahasa");
  const [cart, setCart] = useState([]);

  return (
    <LangContext.Provider value={{ lang, setLang, cart, setCart }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangContext };
export default LangContextProvider;
