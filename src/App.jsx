import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseCartContext from "./components/Context/UseCartContext";
import Footer from "./components/Footer/Footer";
import MainProduct from "./components/ItemDetail/mainProduct";
import NavBar from "./components/navbar/MainNavBar";
import CartPage from "./components/CartPage/CartPage";
import SearchIcon from "./components/icons/SearchIcon";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import OrderPage from "./components/CartPage/OrderPage";

const App = () => {
  return (
    <BrowserRouter>
      <UseCartContext>
        <NavBar/>
        {/* <OrderPage/> */}
        {/* <ContactPage /> */}
        {/* <AboutPage/> */}
        <section className=" md:hidden grid grid-row-1 justify-center"><SearchIcon /></section>
            <MainProduct/>
       {/*  <CartPage/> */}
        <Footer />
      </UseCartContext>
    </BrowserRouter>
  );
};

export default App;
