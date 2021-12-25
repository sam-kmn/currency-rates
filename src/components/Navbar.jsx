import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Currency Rates
        </Link>

        <Link
          className="navbar-item text-decoration-none text-light"
          to={"/available"}
        >
          Available currencies
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
