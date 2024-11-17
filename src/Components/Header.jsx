import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const[wishListCount,setWishListCount]=useState(0)
  const[cartCount,setCartCount]=useState(0)
  const wishlist=useSelector(state=>state.wishlistSlice.wishlist)
  const cart=useSelector(state=>state.cartSlice)
  useEffect(()=>{
    setWishListCount(wishlist.length)
    setCartCount(cart.length)
  },[wishlist,cart])
  return (
    <div>
      <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:1}}>
      <Container>
        <Navbar.Brand className='text-light'> <Link to={'/'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>
        <i className='fa-solid fa-truck-fast '></i>E-Cart
        </Link> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link >
              <Link to={'/wishlist'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>
              <i className='fa-solid fa-heart text-danger'></i>Wishlist
              <Badge bg="success rounded ms-2">{wishListCount}</Badge> </Link>
            </Nav.Link>
            <Nav.Link >
            <Link to={'/cart'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>
              <i className='fa-solid fa-cart-shopping '></i>Cart
              <Badge bg="success rounded ms-2">{cartCount}</Badge> </Link>
  
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Header