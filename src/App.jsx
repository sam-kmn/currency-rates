import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./routes/Home";
import Available from "./routes/Available";
import Error from "./routes/Error";

import Navbar from "./components/Navbar";

export const fetchWithFallback = async (links, obj) => {
  console.log("fetchWithFallback");
  let response;
  for (let link of links) {
    try {
      response = await fetch(link, obj);
      if (response.ok) return response;
    } catch (e) {}
  }
  return response;
};

function App() {
  const [currencies, setCurrencies] = useState({});
  const fetchCurrencies = async () => {
    console.log("fetchCurrencies");
    const currenciesLinks = [
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json",
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json",
    ];
    const res = await fetchWithFallback(currenciesLinks);
    const data = await res.json();

    setCurrencies(data);
  };

  useEffect(() => fetchCurrencies(), []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home currencies={currencies} />} />
        <Route
          path="/available"
          element={<Available currencies={currencies} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
