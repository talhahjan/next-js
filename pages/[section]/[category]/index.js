import Head from "next/head";
import SideBar from "../../../components/sideBar";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import Link from "next/link";
import { useRouter } from "next/router";
import { userState, widthState } from "../../../lib/atoms";
import { useSession } from "next-auth/react";
import Filter from "../../../components/filter";
import { MdTune } from "react-icons/md";
import CardProduct from "../../../components/productcard";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

const Section = ({ data }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const link = router.query;
  const section = link.section;
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

    $(document).ready(function () {
      $(".expandableCollapsibleDiv")
        .find("i")
        .click(function (e) {
          var showElementDescription = $(this)
            .parents(".expandableCollapsibleDiv")
            .find(".filter-content");

          if ($(showElementDescription).is(":visible")) {
            showElementDescription.hide(500, "swing");
            $(this).html("keyboard_arrow_down");
          } else {
            showElementDescription.show(500, "swing");
            $(this).html("keyboard_arrow_up");
          }
        });
    }, []);

    const sorting = document.querySelectorAll(".sorting");
    const sortSelect = document.querySelector("#SortMenuButton");
    for (let i = 0; i < sorting.length; i++) {
      sorting[i].addEventListener("click", function (event) {
        document.querySelector("#SortMenuButton").innerHTML = this.innerText;
      });
    }

    for (let i = 0; i < sortSelect.length; i++) {
      sortSelect[i].addEventListener("click", function (event) {
        document.querySelector("#SortMenuButton").innerHTML = this.innerText;
      });
    }
  });

  useEffect(() => {
    document.querySelector("body").classList.add("wrapper");
    document.querySelector("body").classList.add("page-product-listing");
  }, []);

  return (
    <>
      <Head>
        {/* <!-- Required meta tags --> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home Page</title>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
        {/* <!-- Jquery js file --> */}
        <script src="http://localhost/bootstrap5.0.1/assets/js/jquery/jquery-3.5.1.min.js"></script>
      </Head>
      {/* <SideBar /> */}
      <SideBar />
      <Filter />
      <main className="product-listing">
        <div className="container-fluid">
          {/* <!-- breadcrup start  --> */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-start">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <Link href={"/" + link.section}>{link.section}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {link.category}
              </li>
            </ol>
          </nav>
          {/* <!-- breadcrumb ends  --> */}

          {/* <!-- category title  --> */}
          <div className="category-title">
            <h6 className="text-center my-2 py-2 bg-light text-dark text-uppercase ">
              {data.categories.title}
            </h6>
          </div>
          {/* <!-- category title  --> */}

          {/* <!-- filter options sort  --> */}
          <div className="filter-sort">
            <div className="d-flex justify-content-between mx-auto mt-2 px-2">
              <div className="filter-btn">
                <button
                  className="btn btn-outline-primary btn-sm"
                  data-bs-toggle="offcanvas"
                  href="#filterOptions"
                  role="button"
                  aria-controls="filterOptions"
                  id="filter"
                >
                  <MdTune />
                  <span>Filter</span>
                </button>
              </div>
              <div className="sort">
                <div className="d-none d-lg-flex align-items-center">
                  <span
                    className="text-primary mr-2"
                    style={{ fontWeight: "700" }}
                  >
                    Sort By :&nbsp;
                  </span>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button className="btn btn-outline-primary btn-sm">
                      Trending
                    </button>
                    <button className="btn btn-outline-primary btn-sm">
                      Latest
                    </button>
                    <button className="btn btn-outline-primary btn-sm">
                      Popular
                    </button>
                    <button className="btn btn-outline-primary btn-sm">
                      featured
                    </button>
                  </div>
                </div>
                <div className="dropdown d-flex d-lg-none">
                  <button
                    className="btn btn-outline-primary btn-sm dropdown-toggle"
                    type="button"
                    id="SortMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="SortMenuButton"
                    id="categorList"
                  >
                    <li>
                      <a className="dropdown-item sorting" href="#">
                        Trending
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item sorting" href="#">
                        Latest
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item sorting" href="#">
                        Popular
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item sorting" href="#">
                        Featured
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- filter options sort  --> */}

          <div className="products my-2">
            {data.products.map((curProduct) => {
              return (
                <CardProduct
                  parentCategory={data.categories.slug}
                  product={curProduct}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(link) {
  let slug = link.query.section;
  const res = await fetch(`http://localhost/l8ecom/api/section/${slug}`);
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Section;
