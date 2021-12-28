const Available = ({ currencies }) => {
  return (
    <div className="container">
      <header className="text-center fs-1 p-2 m-4 border-bottom">
        All available currencies
      </header>

      <div className="table-responsive">
        <table className="table table-dark ">
          <tbody>
            {currencies &&
              Object.keys(currencies).map((currency) => (
                <tr key={currency} className="fs-4">
                  <th scope="row">
                    <div
                      className={`currency-flag currency-flag-${currency}`}
                    ></div>
                  </th>
                  <td className="text-uppercase">{currency}</td>
                  <td>{currencies[currency]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Available;
