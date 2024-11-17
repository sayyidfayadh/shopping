
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer.jsx'
// import Wishlist from './pages/Wishlist.jsx'
import Cart from './pages/Cart'
import Home1 from './Pages/Home1'
import View1 from './Pages/View1'
import Wishlist from './Pages/Wishlist.jsx'

function App() {
  

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home1/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/view/:id' element={<View1/>} />
      <Route path='/**' element={<Navigate to={'/'} />} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
