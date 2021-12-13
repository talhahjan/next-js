import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";
import { MdFingerprint, MdEmail, MdPersonAdd } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import { signIn } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const [inputs, setInputs] = useState([
    {
      email: "",
      password: "",
      remember: true,
      validation_errors: [],
    },
  ]);
  const [eye, setEye] = useState(0);

  const submitLogin = async (e) => {
    e.persist();
    e.setAttribute = true;
    const Data = {
      email: inputs.email,
      password: inputs.password,
      // email: "talhah.jan@gmail.com",
      // password: "password",
      remember: inputs.remember,
    };

    await axios.get("sanctum/csrf-cookie").then((res) => {
      axios.post("api/login", Data).then((response) => {
        if (response.status === 200) {
          console.log("200", response.data.user);
          signIn("credentials", {
            email: response.data.user.email,
            name: response.data.user.fullname,
            id: response.data.user.id,
            avatar: response.data.user.avatar,
            // The page where you want to redirect to after a
            // successful login
            callbackUrl: `${window.location.origin}/`,
          });
          console.log("else", response.data.status);
        } else if (response.status === 201) {
          setInputs({
            ...inputs,
            validation_errors: response.data.validation_errors,
          });

          console.log("201", response.data);
        } else {
          setInputs({
            ...inputs,
            validation_errors: response.data.validation_errors,
          });
        }
      });
    });
  };

  const handleInputs = (e) => {
    e.persist();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  let Eye = eye ? FaEye : FaEyeSlash;

  const toggleEye = () => {
    eye ? setEye(0) : setEye(1);
    document
      .getElementById("password")
      .setAttribute("type", eye ? "password" : "text");
  };

  useEffect(() => {
    document.querySelector("body").classList.add("login-page");
    const cardLogin = document.querySelector(".card-login");
    setTimeout(() => {
      cardLogin.style.opacity = 1;
    }, 500);
  }, []);
  return (
    <>
      <Head>
        {/* <!-- Required meta tags --> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Login :: T.J Shoes Login Page</title>
      </Head>
      {/* <SideBar /> */}
      <div
        className="page-content"
        style={{
          background:
            " linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('http://localhost/l8ecom/assets/images/hd-07.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand mx-auto w-100 navbar-transparent">
          <div className="container">
            <div className="navbar-wrappr">
              <a className="navbar-brand" href="#">
                Home
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
              <span className="navbar-toggler-icon icon-bar"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="login" className="nav-link active">
                    <MdFingerprint size="2rem" />
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a href="Login" className="nav-link">
                    <MdPersonAdd size="2rem" />
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- End Navbar --> */}

        <div className="card card-mdb mx-2 card-login">
          <div className="card-header card-header-primary">
            <h5 className="text-center">Login With Social Account</h5>
          </div>
          <div className="card-body">
            <div className="social-line text-center">
              <a
                href="login/facebook"
                className="btn-social btn-outline-facebook btn-social-circle waves-effect waves-light m-1"
              >
                <FaFacebookF />
              </a>
              <a
                href="login/google"
                className="btn-social btn-outline-google btn-social-circle waves-effect waves-light m-1"
              >
                <FaGooglePlusG />
              </a>
              <a
                href="login//instagram"
                className="btn-social btn-outline-instagram waves-effect btn-social-circle waves-light m-1"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="text-muted text-center my-2">Or Be Classical</p>
            <div className="container">
              <form onSubmit={submitLogin}>
                <div className="inputWithIcon inputWithAction my-2">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    defaultValue={inputs.email}
                    onChange={handleInputs}
                    placeholder="Enter Email-Address"
                    aria-label="email"
                    id="email"
                    aria-describedby="basic-addon1"
                    autoComplete="off"
                    required
                  />
                  <MdEmail />
                </div>

                <div className="inputWithIcon inputWithAction my-2">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    defaultValue={inputs.password}
                    onChange={handleInputs}
                    placeholder="Enter Password"
                    aria-label="Password"
                    id="password"
                    aria-describedby="basic-addon1"
                    autoComplete="off"
                    required
                  />
                  <MdFingerprint />
                  <Eye className="action" id="eye" onClick={toggleEye} />
                </div>
              </form>
            </div>

            <div className="row justify-content-between my-2 mx-1">
              <div className="col-sm-12 col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckChecked"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="check">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <a href="password/reset" className="text-form">
                  Forgot Your Password ?
                </a>
              </div>
            </div>

            <div className="form-group my-2">
              <button
                className="btn col-12 btn-primary"
                type="submit"
                onClick={submitLogin}
              >
                Log In
              </button>
            </div>

            <div className="py-1">
              <a href="Login" className="text-dark">
                All ready have an ID Login ?
              </a>
            </div>
          </div>
        </div>

        {/* footer star  */}
        <footer className="footer">
          <div className="row m-1">
            <div className="col-sm">
              <p className="policy">Privacy Policy - Terms of Use </p>
            </div>
            <div className="col-sm-auto">
              <p className="copyright">
                &copy 2019 Company name, All rights reserved
              </p>
            </div>
          </div>
        </footer>
        {/* end footer */}
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

Login.getlayout = function PageLayout(page) {
  return <>{page}</>;
};
