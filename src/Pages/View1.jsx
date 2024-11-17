import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addTowishlist } from "../redux/slice/wishlistSlice";
import { addToCart } from "../redux/slice/cartSlice";

function View1() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productSlice
  );
  const cart = useSelector((state) => state.cartSlice);
  const { wishlist } = useSelector((state) => state.wishlistSlice);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));
    setProduct(products.find((product) => product.id == id));
  }, []);

  const handlewishlist = (product) => {
    const existingProduct = wishlist.find((item) => item.id == product.id);
    if (existingProduct) {
      alert("product already in wishlist");
    } else {
      dispatch(addTowishlist(product));
    }
  };
  const handleaddtocart = (product) => {
    const existingProduct = cart.find((item) => item.id == product.id);
    if (existingProduct) {
      alert("product already in cart");
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="container">
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ marginTop: "40vh" }}
        >
          <Spinner animation="border" variant="" info />
          Loading
        </div>
      ) : (
        <div
          className="container row "
          style={{ marginTop: "100px", marginLeft: "200px",height:"53vh" }}
        >
          <div className="col-lg-4">
            <img src={product?.thumbnail} alt="" />
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-6">
            <p>{product?.id}</p>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <div className="d-flex justify-content-between mt-4">
              <Button
                className="btn btn-outline-light"
                onClick={() => handlewishlist(product)}
              >
                <i className="fa-solid fa-heart text-danger"></i>Wishlist
              </Button>
              <Button
                className="btn btn-outline-light"
                onClick={() => dispatch(addToCart(product))}
              >
                <i className="fa-solid fa-cart-shopping text-warning"> </i>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default View1;
