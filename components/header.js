import { useEffect } from "react";
import {
  FaBars,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import {
  MdSearch,
  MdLocalMall,
  MdFavorite,
  MdAccountCircle,
} from "react-icons/md";
import { signIn, signOut } from "next-auth/react";
import { useRecoilValue } from "recoil";
import { userState } from "../lib/atoms";
const Header = (props) => {
  const user = useRecoilValue(userState);

  useEffect(() => {});
  return (
    <>
      {/* <!-- header section  --> */}
      <header>
        {/* <!-- navbar --> */}
        <nav className="navbar navbar-expand fixed-top">
          <div className="container">
            <a
              className="btn btn-link"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <FaBars size="15px" />
            </a>
            <a href="#" className="navbar-brand" href="#">
              T.J Shoes
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-taraget="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="search-bar mx-auto">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="dropdown">
                      <a
                        className="btn btn-primary dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        All
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                        id="categorList"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Electronic Items
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Fashion
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Medicine & HealthCare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="search-btn"
                    placeholder="search ..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="search-btn"
                    >
                      <MdSearch />
                    </button>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item d-md-none">
                  <a className="nav-link" href="#" id="search-btn">
                    <MdSearch />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <MdLocalMall />
                    <span className="d-none d-lg-inline text-nowrap">Cart</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <MdFavorite />
                    <span className="d-none d-lg-inline text-nowrap">
                      favorite
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <div
                    className="dropdown animate user-widget"
                    aria-labelledby="dropdownMenuButton1"
                    style={{ zIndex: "100", width: "100%" }}
                  >
                    <a
                      className="nav-link"
                      href="#"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <MdAccountCircle />
                      <span className="d-none d-md-inline">
                        {!user && <>Guest</>}
                        {user && <>{user.user.name}</>}
                      </span>
                    </a>
                    {!user && (
                      <>
                        <div className="dropdown-menu slideIn animate user-widget">
                          <div className="login">
                            <div>
                              <p className="text-muted mb-2 float-center">
                                Welcome To T.J Shoes
                              </p>
                              <button
                                type="button"
                                className="btn btn-sm btn-block btn-primary col-12 my-2"
                                onClick={(e) => {
                                  e.preventDefault();
                                  signIn();
                                }}
                              >
                                Sign In
                              </button>
                              <br />
                              <p className="text-muted text-center">
                                Use Social Accounts
                              </p>
                            </div>
                            <div className="social-line text-center">
                              <a
                                href="#"
                                onClick={() => signIn("facebook")}
                                className="btn-social btn-outline-facebook btn-social-circle waves-effect waves-light m-1"
                              >
                                <FaFacebookF />
                              </a>
                              <a
                                href="#"
                                onClick={() => signIn("google")}
                                className="btn-social btn-outline-google btn-social-circle waves-effect waves-light m-1"
                              >
                                <FaGooglePlusG />
                              </a>
                              <a
                                href="login/instagram"
                                className="btn-social btn-outline-instagram waves-effect btn-social-circle waves-light m-1"
                              >
                                <FaInstagram />
                              </a>
                            </div>
                            <br />
                            <p className="text-muted mb-2 text-left">
                              New customer ?
                            </p>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm col-12 my-2"
                            >
                              Register
                            </button>
                          </div>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item mx-auto" href="#">
                            My Orders
                          </a>
                          <a className="dropdown-item mx-auto" href="#">
                            My Wish list
                          </a>
                          <a className="dropdown-item mx-auto" href="#">
                            My Favorite Items
                          </a>
                        </div>
                      </>
                    )}
                    {user && (
                      <>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <div className="login">
                            <div>
                              <div
                                className="d-flex"
                                style={{ userSelect: "none" }}
                              >
                                <div>
                                  <img
                                    src={user.user.image}
                                    width="60"
                                    height="60"
                                    className="img-thumbnail rounded-circle shadow"
                                  />
                                </div>
                                <div className="align-self-center">
                                  Welcome
                                  <h6>{user.user.name}</h6>
                                </div>
                              </div>

                              <button
                                type="button"
                                className="btn btn-sm btn-block btn-primary col-12 my-2"
                                onClick={(e) => {
                                  e.preventDefault();
                                  signOut();
                                }}
                              >
                                Sign Out
                              </button>
                              <br />

                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item mx-auto" href="#">
                                My Orders
                              </a>
                              <a className="dropdown-item mx-auto" href="#">
                                My Wish list
                              </a>
                              <a className="dropdown-item mx-auto" href="#">
                                My Favorite Items
                              </a>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
