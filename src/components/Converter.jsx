import { BsArrowLeftRight, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const Converter = ({ currencies, conversion }) => {
  const initInput = {
    from: "eur",
    to: "usd",
    value: "",
    result: "",
  };
  const [input, setInput] = useState(initInput);
  const handleInput = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleConvert = async (e) => {
    e.preventDefault();
    if (input.value < 1) return;
    console.log("handleConvert");
    handleInput(
      "result",
      await conversion(input["from"], input["to"], input["value"])
    );
  };

  const switchCurrency = () => {
    let from = input.from;
    let to = input.to;
    setInput({ ...input, from: to, to: from });
  };

  return (
    <main className="container">
      <header className="py-5 d-flex flex-column text-center">
        <div className="fs-2">Currency Converter</div>
        <div className="fs-6 text-secondary">Tap on arrow to convert</div>
      </header>

      <form
        className="d-flex flex-column gap-4"
        onSubmit={(e) => handleConvert(e)}
      >
        {/* From > To */}
        <div className="row gap-4 justify-content-center ">
          {/* From */}
          <select
            className="col form-select form-item-dark"
            name="from"
            value={input.from}
            onChange={(e) => handleInput(e.target.name, e.target.value)}
          >
            {currencies &&
              Object.keys(currencies).map((currency) => (
                <option value={currency} key={currency} className="fw-bold">
                  {currency.toUpperCase()} - {currencies[currency]}
                </option>
              ))}
          </select>

          {/* Swtich button */}
          <div
            className="col-auto  p-0  d-flex justify-content-center align-items-center fs-2 rotate-180"
            onClick={switchCurrency}
          >
            <BsArrowLeftRight />
          </div>

          {/* To */}
          <select
            className="col form-select form-item-dark"
            name="to"
            value={input.to}
            onChange={(e) => handleInput(e.target.name, e.target.value)}
          >
            {/* <option value="from" disabled selected>
              To
            </option> */}
            {currencies &&
              Object.keys(currencies).map((currency) => (
                <option value={currency} key={currency} className="fw-bold">
                  {currency.toUpperCase()} - {currencies[currency]}
                </option>
              ))}
          </select>
        </div>

        {/* Value > Convert */}
        <div className="row gap-4 justify-content-center align-items-center">
          {/* Value */}
          <input
            type="number"
            className="col form-control form-item-dark"
            placeholder="Value"
            name="value"
            onChange={(e) => handleInput(e.target.name, e.target.value)}
            min={1}
          />

          {/* Convert button */}
          <button className="col-auto p-0 fs-2 btn text-light" type="submit">
            <BsArrowRight />
          </button>

          {/* Result */}
          <input
            type="number"
            disabled
            className="col form-control form-item-dark"
            placeholder="Result"
            name="result"
            value={input.result}
            onChange={(e) => handleInput(e.target.name, e.target.value)}
          />
        </div>
      </form>
    </main>
  );
};

export default Converter;
