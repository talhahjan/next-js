import Head from "next/head";
import SideBar from "../components/sideBar";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import Link from "next/link";
import { userState, widthState } from "../lib/atoms";
import { useSession } from "next-auth/react";
const Home = () => {
  const { data: session } = useSession();

  const setWidth = useSetRecoilState(widthState);
  const setuser = useSetRecoilState(userState);
  if (session) {
    setuser(session);
  }
  useEffect(() => {
    let searchForm = document.querySelector(".search-bar");

    document.querySelector("#search-btn").onclick = () => {
      searchForm.classList.toggle("active");
    };

    window.onscroll = () => {
      searchForm.classList.remove("active");
    };
    window.onscroll = () => {
      searchForm.classList.remove("active");
    };

    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  useEffect(() => {
    document.querySelector("body").classList.add("wrapper");
  });
  return (
    <>
      <Head>
        {/* <!-- Required meta tags --> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home Page</title>
      </Head>
      {/* <SideBar /> */}
      <SideBar />

      <div className="welcome-page">
        {/* <!-- departments start here  --> */}

        <div class="department-wrapper flex">
          <ul>
            <li className="bg-danger">Men</li>
            <li className="bg-rose">Women</li>
            <li className="bg-primary">Boys</li>
            <li className="bg-secondary">Girls</li>
            <li className="bg-dark">Kids</li>
            <li className="bg-info">Accesories</li>
          </ul>
        </div>
        {/* <!-- departments ends here ] --> */}
        {/* <!-- carousel starts  --> */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide mt-10 border-circle"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="assets/images/slide1.jpg"
                className="d-block w-100"
                alt="..."
                style={{ maxHeight: "250px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="./assets/images/slide2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./assets/images/slide3.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <!-- carousel ends  --> */}
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Home;
