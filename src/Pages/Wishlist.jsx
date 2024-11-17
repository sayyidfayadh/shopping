import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import wishlistSlice, { removeFromWishlist } from '../redux/slice/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slice/cartSlice'

const Wishlist = () => {
  const dispatch=useDispatch() 
const wishlist=useSelector(state=>state.wishlistSlice.wishlist)
const cart=useSelector(state=>state.cartSlice)
const handleaddtocart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  
  }  
return (
    <div>

<Row className='mt-5 container'>
       {wishlist.length>0?wishlist.map(product=>(
        <Col className='mt-5 sm={12} md={6} lg={4} xl={3}'>
        <Card style={{ width: '18rem' }}>
     <Link to={'/view/1'}>
     <Card.Img variant="top" src={product?.thumbnail} />
     </Link>
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
         {product?.description}
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button className='btn btn-light'onClick={()=>dispatch(removeFromWishlist(product.id))}>
          <i className='fa-solid fa-heart-circle-minus text-danger'></i>
          </Button>

          <Button className='btn btn-light'onClick={()=>handleaddtocart(product)}>
          <i className='fa-solid fa-cart-plus text-success '></i>
            </Button>

        </div>
      </Card.Body>
    </Card>
        
        </Col>
       ))  : <div className="container mt-5 d-flex align-items-center">
        <h1 className='text-danger'>Your wishlist is empty....</h1>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--state-no-items-zero-page-added-states-pack-design-development-illustrations-4610092.png" alt="" />
       </div>      
        
        }


      </Row>
    </div>
  )
}

export default Wishlist