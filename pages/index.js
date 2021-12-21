import Head from "next/head";
import SideBar from "../components/sideBar";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import Link from "next/link";
import { userState, widthState } from "../lib/atoms";
import { useSession } from "next-auth/react";
import CatsBySection from "../components/catsBySection";
import axios from "axios";

const Home = ({ sections }) => {
  const { data: session } = useSession();
  const bgs = [
    "bg-danger",
    "bg-rose",
    "bg-dark",
    "bg-warning",
    "bg-info",
    "bg-success",
  ];

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
        {/* Mega Menu */}

        {/* mega Menu */}

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
                src={axios.defaults.baseURL + "assets/images/slide1.jpg"}
                className="d-block w-100"
                alt="..."
                style={{ maxHeight: "300px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ maxHeight: "300px" }}
                src={axios.defaults.baseURL + "assets/images/slide2.jpg"}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ maxHeight: "300px" }}
                src={axios.defaults.baseURL + "assets/images/slide2.jpg"}
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
        <div className="categories shadow">
          <CatsBySection section={sections} />
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export async function getServerSideProps(context) {
  const getCategories = await fetch("http://localhost/l8ecom/api/sections");
  const sections = await getCategories.json();

  return {
    props: {
      sections: sections,
    }, // will be passed to the page component as props
  };
}

export default Home;
