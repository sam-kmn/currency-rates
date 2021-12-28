const Rates = ({ currency, rates }) => {
  return (
    <div className="container">
      {currency ? (
        <header className="row p-4 pt-5 mt-2 fs-2 justify-content-center align-items-center">
          <div className="col-auto">
            Rates for {`${currency.toUpperCase()}`}
          </div>
          <div
            className={`col-auto currency-flag currency-flag-${currency}`}
          ></div>
        </header>
      ) : (
        ""
      )}
      <div className="row justify-content-evenly row-cols-2 row-cols-sm-3 row-cols-lg-4">
        {rates &&
          Object.keys(rates).map((curr) => (
            <div
              className="col d-flex justify-content-center gap-3 py-1"
              key={curr}
            >
              {curr.toUpperCase()}{" "}
              <div className="text-secondary">{rates[curr].toFixed(2)}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Rates;
