import { Link } from "react-router-dom";
import { IoGrid } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ">
        <Link className="navbar-brand" to={"/"}>
          Currency Rates
        </Link>

        <Link
          className="navbar-item text-decoration-none text-light d-flex align-items-center gap-2"
          to={"/available"}
        >
          All <IoGrid />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
