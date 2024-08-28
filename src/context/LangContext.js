"use client";
import { createContext, useState } from "react";

const LangContext = createContext();

const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState("bahasa");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangContext };
export default LangContextProvider;
