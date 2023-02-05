import { Routes, Route } from "react-router-dom";
import MainContainer from "./containers/MainContainer/MainContainer";
import NavBar from "./components/navbar/MainNavBar";
import Footer from "./components/Footer/Footer";
import MainProduct from "./containers/ItemDetailContainer/mainProduct";
// import CartPage from "../pages/CartPage/CartPage";
// import AboutPage from "../pages/AboutPage/AboutPage";
// import ContactPage from "../pages/ContactPage/ContactPage";
// import OrderPage from "../pages/OrderPage/OrderPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/category/:categoryId" element={<MainContainer />} />
        <Route path="/detail/:id" element={<MainProduct />} />
        {/* <Route path="/oder" element={<OrderPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
