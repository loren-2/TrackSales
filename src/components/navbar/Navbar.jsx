import "./navBar.css";

const NavBar = () => {
  return (
    <div className="wrapper">
      <div className="inner">
        <nav className="navbar">
          <ul>
            <li className="nav-section">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-section">
              <a className="nav-link" href="#">
                Taks
              </a>
            </li>
            <li className="nav-section">
              <a className="nav-link" href="#">
                Companies
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;





