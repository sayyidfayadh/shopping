import React, { useEffect } from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductData } from "../redux/slice/productSlice";
import { addTowishlist } from "../redux/slice/wishlistSlice";
import { addToCart } from "../redux/slice/cartSlice";

function Home1() {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productSlice
  );
const{wishlist}=useSelector(state=>state.wishlistSlice)
  useEffect(() => {
    dispatch(fetchProductData());
  }, []);
const cart=useSelector(state=>state.cartSlice)
  const handlewishlist=(product)=>{
    const existingProduct=wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("product already in wishlist")
    }
    else{
      dispatch(addTowishlist(product))
    }
    }
   
  return (
    <div style={{ marginTop: "70px" }} className="">
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ marginTop: "40vh" }}
        >
          <Spinner animation="border" variant="" info />
          Loading
        </div>
      ) : (
        <Row className="  p-5">
          {products.length > 0 &&
            products.map((product, index) => (
              <Col sm={12} md={6} lg={5} xl={2} className="mt-5 ">
                <Card style={{ width: "18rem" ,height:"35rem"}}>
                  <Link to={`/view/${product.id}`}>
                    <Card.Img variant="top" src={product.thumbnail} />
                  </Link>
                  <Card.Body>
                
                    <Card.Title>{product.title.slice(0, 20)}</Card.Title>
                    <Card.Text>
                     {product.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button className="btn btn-light" onClick={()=>handlewishlist(product)}>
                        <i className="fa-regular fa-heart text-danger"></i>
                      </Button>
                      <Button className="btn btn-light mb-3" onClick={()=>dispatch(addToCart(product))}>
                        <i className="fa-solid fa-cart-shopping "></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      )}
    </div>
  );
}

export default Home1;
