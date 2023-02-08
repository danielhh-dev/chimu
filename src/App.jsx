import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from "./components/navbar/MainNavBar";
import Footer from "./components/Footer/Footer";
import MainProduct from "./containers/ItemDetailContainer/mainProduct";
import MainListContainer from "./containers/MainContainer/MainListContainer";

// import CartPage from "../pages/CartPage/CartPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import OrderPage from "./Pages/OrderPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        
        <Route path="/category/:category" element={<MainListContainer />} />
        <Route path="/category" element={<MainListContainer />} />
        <Route path="/detail/:id" element={<MainProduct />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
