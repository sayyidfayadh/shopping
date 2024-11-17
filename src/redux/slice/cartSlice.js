import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
  name:'cart',
  initialState:[],
  reducers:{
    addToCart:(state,action)=>{
   const existingProduct=state.find(item=>item.id==action.payload.id)
   if (existingProduct){
    const newState=state.filter(item=>item.id!=existingProduct)
    existingProduct.quantity++
    existingProduct.totalprice=existingProduct.quantity*existingProduct.price
    state=([...newState,existingProduct])
   }
   else{
    state.push({...action.payload,quantity:1,totalprice:action.payload.price})
   }
    },
    removeFromCart:(state,action)=>{
      return state.filter(item=>item.id!==action.payload)
    },
    emptyCart:(state,action)=>{
      return state=[]
    }
  }

})
export default cartSlice.reducer
export const{addToCart,removeFromCart,emptyCart}=cartSlice.actions