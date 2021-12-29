import { useState, useEffect } from "react";
import { fetchWithFallback } from "../App";
import Converter from "../components/Converter";
import Rates from "../components/Rates";

const Home = ({ currencies }) => {
  const [currency, setCurrency] = useState("");
  const [rates, setRates] = useState({});
  useEffect(() => fetchRates(currency), [currency]);

  const fetchRates = async (currency) => {
    if (!currency) return;
    console.log("fetchRates");
    const links = [
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.min.json`,
    ];
    const res = await fetchWithFallback(links);
    const data = await res.json();
    setRates(data[currency]);
  };

  const fetchConversion = async (from, to, value) => {
    console.log("fetchConversion");
    const links = [
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`,
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.min.json`,
    ];
    const res = await fetchWithFallback(links);
    const data = await res.json();
    // Save 'from' currency for later use in 'Rates' component
    setCurrency(from);

    return (data[to] * value).toFixed(2);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6">
          <Converter currencies={currencies} conversion={fetchConversion} />
          <Rates currency={currency} rates={rates} />
        </div>
      </div>
    </div>
  );
};

export default Home;
