import axios from "axios";

const MegaMenu = (sections) => {
  return (
    <>
      {/* <!-- Start Mega Menu HTML --> */}

      <nav className="navbar navbar-expand navbar-light shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Bootstrap 5 <span className="badge bg-primary">Mega Menu</span>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
          >
            <div className="hamburger-toggle">
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown dropdown-mega position-static">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  Megamenu
                </a>
                <div className="dropdown-menu shadow">
                  <div className="mega-content px-4">
                    <div className="container-fluid">
                      <div className="row">asas</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- END Mega Menu HTML --> */}
    </>
  );
};

export default MegaMenu;
