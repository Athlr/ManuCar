import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" to="/">
          ManuCar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="dropdown">
              <button className="text-light btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="/manufacturers">Manufacturers</Link>
                  <Link className="dropdown-item" to="/manufacturers/create">Create a Manufacturer</Link>
                  <Link className="dropdown-item" to="/models">Models</Link>
                  <Link className="dropdown-item" to="/models/create">Create a Model</Link>
                  <Link className="dropdown-item" to="/automobiles">Automobiles</Link>
                  <Link className="dropdown-item" to="/automobiles/create">Create an Automobile</Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="text-light btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="/salespeople">Salespeople</Link>
                  <Link className="dropdown-item" to="/salespeople/create">Add a Salesperson</Link>
                  <Link className="dropdown-item" to="/customers">Customers</Link>
                  <Link className="dropdown-item" to="/customers/create">Add a Customer</Link>
                  <Link className="dropdown-item" to="/sales">Sales</Link>
                  <Link className="dropdown-item" to="/sales/create">Add a Sale</Link>
                  <Link className="dropdown-item" to="/sales/history">Salesperson History</Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="text-light btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="/technicians">Technicians</Link>
                  <Link className="dropdown-item" to="/technicians/create">Add a technician</Link>
                  <Link className="dropdown-item" to="/appointments">Service appointments</Link>
                  <Link className="dropdown-item" to="/appointments/create">Create a service appointment</Link>
                  <Link className="dropdown-item" to="/appointments/history">Service history</Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
