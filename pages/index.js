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
  // const getCategories = await fetch(
  //   "http://tjshoes.epizy.com/laravel/api/sections"
  // );
  // const sections = await getCategories.json();
  const sections =
    '[{"id":1,"title":"Men","description":null,"categories":[{"id":1,"title":"Shoes","description":null,"slug":"shoes","pivot":{"section_id":1,"category_id":1}},{"id":2,"title":"Slippers","description":null,"slug":"slippers","pivot":{"section_id":1,"category_id":2}},{"id":3,"title":"Sandals","description":null,"slug":"sandals","pivot":{"section_id":1,"category_id":3}},{"id":5,"title":"Boots","description":null,"slug":"Boots","pivot":{"section_id":1,"category_id":5}},{"id":6,"title":"Moccasin","description":null,"slug":"moccasin","pivot":{"section_id":1,"category_id":6}},{"id":7,"title":"Slip-ons","description":null,"slug":"slip-ons","pivot":{"section_id":1,"category_id":7}},{"id":8,"title":"Loafers","description":null,"slug":"loafers","pivot":{"section_id":1,"category_id":8}},{"id":9,"title":"Flip-Flops","description":null,"slug":"folip-flops","pivot":{"section_id":1,"category_id":9}},{"id":10,"title":"Canvas","description":null,"slug":"canvas","pivot":{"section_id":1,"category_id":10}},{"id":11,"title":"Casual Shoes","description":null,"slug":"casual-shoes","pivot":{"section_id":1,"category_id":11}},{"id":14,"title":"Slides","description":null,"slug":"slides","pivot":{"section_id":1,"category_id":14}}]},{"id":2,"title":"Women","description":null,"categories":[{"id":1,"title":"Shoes","description":null,"slug":"shoes","pivot":{"section_id":2,"category_id":1}},{"id":2,"title":"Slippers","description":null,"slug":"slippers","pivot":{"section_id":2,"category_id":2}},{"id":3,"title":"Sandals","description":null,"slug":"sandals","pivot":{"section_id":2,"category_id":3}},{"id":4,"title":"Pumps","description":null,"slug":"pumps","pivot":{"section_id":2,"category_id":4}},{"id":5,"title":"Boots","description":null,"slug":"Boots","pivot":{"section_id":2,"category_id":5}},{"id":6,"title":"Moccasin","description":null,"slug":"moccasin","pivot":{"section_id":2,"category_id":6}},{"id":7,"title":"Slip-ons","description":null,"slug":"slip-ons","pivot":{"section_id":2,"category_id":7}},{"id":8,"title":"Loafers","description":null,"slug":"loafers","pivot":{"section_id":2,"category_id":8}},{"id":9,"title":"Flip-Flops","description":null,"slug":"folip-flops","pivot":{"section_id":2,"category_id":9}},{"id":10,"title":"Canvas","description":null,"slug":"canvas","pivot":{"section_id":2,"category_id":10}},{"id":11,"title":"Casual Shoes","description":null,"slug":"casual-shoes","pivot":{"section_id":2,"category_id":11}},{"id":13,"title":"Wedges","description":null,"slug":"wedges","pivot":{"section_id":2,"category_id":13}},{"id":15,"title":"Bridals","description":null,"slug":"bridals","pivot":{"section_id":2,"category_id":15}}]},{"id":3,"title":"Boys","description":null,"categories":[{"id":1,"title":"Shoes","description":null,"slug":"shoes","pivot":{"section_id":3,"category_id":1}},{"id":2,"title":"Slippers","description":null,"slug":"slippers","pivot":{"section_id":3,"category_id":2}},{"id":3,"title":"Sandals","description":null,"slug":"sandals","pivot":{"section_id":3,"category_id":3}},{"id":5,"title":"Boots","description":null,"slug":"Boots","pivot":{"section_id":3,"category_id":5}},{"id":6,"title":"Moccasin","description":null,"slug":"moccasin","pivot":{"section_id":3,"category_id":6}},{"id":7,"title":"Slip-ons","description":null,"slug":"slip-ons","pivot":{"section_id":3,"category_id":7}},{"id":8,"title":"Loafers","description":null,"slug":"loafers","pivot":{"section_id":3,"category_id":8}},{"id":9,"title":"Flip-Flops","description":null,"slug":"folip-flops","pivot":{"section_id":3,"category_id":9}},{"id":10,"title":"Canvas","description":null,"slug":"canvas","pivot":{"section_id":3,"category_id":10}},{"id":11,"title":"Casual Shoes","description":null,"slug":"casual-shoes","pivot":{"section_id":3,"category_id":11}},{"id":12,"title":"School Shoes","description":null,"slug":"school-shoes","pivot":{"section_id":3,"category_id":12}}]},{"id":4,"title":"Girls","description":null,"categories":[{"id":1,"title":"Shoes","description":null,"slug":"shoes","pivot":{"section_id":4,"category_id":1}},{"id":2,"title":"Slippers","description":null,"slug":"slippers","pivot":{"section_id":4,"category_id":2}},{"id":3,"title":"Sandals","description":null,"slug":"sandals","pivot":{"section_id":4,"category_id":3}},{"id":5,"title":"Boots","description":null,"slug":"Boots","pivot":{"section_id":4,"category_id":5}},{"id":6,"title":"Moccasin","description":null,"slug":"moccasin","pivot":{"section_id":4,"category_id":6}},{"id":7,"title":"Slip-ons","description":null,"slug":"slip-ons","pivot":{"section_id":4,"category_id":7}},{"id":8,"title":"Loafers","description":null,"slug":"loafers","pivot":{"section_id":4,"category_id":8}},{"id":9,"title":"Flip-Flops","description":null,"slug":"folip-flops","pivot":{"section_id":4,"category_id":9}},{"id":10,"title":"Canvas","description":null,"slug":"canvas","pivot":{"section_id":4,"category_id":10}},{"id":11,"title":"Casual Shoes","description":null,"slug":"casual-shoes","pivot":{"section_id":4,"category_id":11}},{"id":12,"title":"School Shoes","description":null,"slug":"school-shoes","pivot":{"section_id":4,"category_id":12}},{"id":13,"title":"Wedges","description":null,"slug":"wedges","pivot":{"section_id":4,"category_id":13}}]},{"id":5,"title":"Accesorries","description":null,"categories":[]}]';
  return {
    props: {
      sections: sections,
    }, // will be passed to the page component as props
  };
}
export default Home;
