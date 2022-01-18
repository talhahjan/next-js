import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { MdFavorite, MdLocalMall, MdVisibility } from "react-icons/md";

const CardProduct = ({ product, parentCategory }) => {
  return (
    <div className="card-product">
      <div className="imgBx">
        <img src={product.thumbnails["0"].path} alt="Product Image" />
        <ul className="action">
          <li>
            <MdFavorite />
            <span>Add to WishList</span>
          </li>
          <li>
            <MdLocalMall />
            <span>Add to cart</span>
          </li>
          <li>
            <Link
              href={"/product/" + product.slug + "?category=" + parentCategory}
            >
              View Details
            </Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="p_name">
          <h3>{product.title}</h3>
        </div>
        <div className="price_rating">
          <span className="prices">
            <h2 className="actual">{product.price}</h2>
            <h2 className="discounted">{product.price - product.discount}</h2>
          </span>
          <div className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
