import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart,emptyCart } from '../redux/slice/cartSlice'
import { Link } from 'react-router-dom'


function Cart() {
  const dispatch=useDispatch()
  const cart=useSelector((state)=>state.cartSlice)
  const[total,setTotal]=useState(0)
  useEffect(()=>{
    if(cart?.length){
      setTotal(cart?.map(product=>product?.totalprice).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
      
    }
    },[cart])

  return (
    <div className='container' style={{marginTop:"100px",minHeight:"53vh"}}>
      
      <div className="row mt-5 p-5">
        <div className="col-lg-8 mt-5">
          <table className='table shadow'>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Image</th>
          <th>quantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>

      </thead>
      <tbody>
        {cart?.length>0?cart.map((product,index)=>(
        <tr>
      <td>{index+1}</td>
      <td>{product?.title}</td>
      <td><img src={product?.thumbnail} width={100}  alt="" /></td>
      <td>{product?.quantity} </td>
     <td>{product?.totalprice}</td>
      <td> <button className='btn' onClick={()=>dispatch(removeFromCart(product?.id))}><i className='fa-solid fa-trash text-danger'></i></button> </td>
        </tr> )) : <p>your cart is empty</p>
      
        }
        </tbody>
        
          </table>
          <div className="float-end">
            <button className='btn btn-warning' onClick={()=>dispatch(emptyCart())} >Empty cart</button>
            <Link to={`/`} style={{textdecoration:"none"}}>
            <button className='btn btn-outline-success'>Shop More</button>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 ms-5">
            <div className="container border rounded shadow mt-5 p-4 w-100">
              <h3>Cart Summary</h3>
              <h4>total Products:{cart?.length}</h4>
              <h5>Total: <span className='text-danger fw-bolder'>${total}</span></h5>
            </div>
            <div className="text-center">
              <button className='btn btn-success m-3 rounded w-75 text-center'>Checkout</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart