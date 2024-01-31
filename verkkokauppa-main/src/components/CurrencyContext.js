import React, { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

/**Component makes a context provider for the currency app*/

export const CurrencySelection = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("eur");

  const toggleCurrency = () => {
    setSelectedCurrency((prevCurrency) =>
      prevCurrency === "usd" ? "eur" : "usd"
    );
  };

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, toggleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

/**React hook so the code can be imported*/
export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
