import { Toaster } from 'sonner'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayout from "./components/Layout/UserLayout"
import Home from "./pages/Home"
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import Checkout from './components/Cart/Checkout'
import ProductDetails from './components/Products/ProductDetails'

function App() {
  return (
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Toaster richColors position='top-right' expand={false} />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />}/>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='profile' element={<Profile />} />
          <Route path='collections/:collection' element={<CollectionPage />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='product/:id' element={<ProductDetails />} />
        </Route>
        <Route>
          {/* Admin's layout */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
