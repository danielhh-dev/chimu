import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./containers/MainContainer/MainContainer";
import NavBar from "./components/navbar/MainNavBar";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import CartPage from "./components/CartPage/CartPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import OrderPage from "./components/CartPage/OrderPage";
import UseCartContext from "./context/UseCartContext";

const App = () => {
  return (
    <BrowserRouter>
      <UseCartContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/category/:categoryId" element={<MainContainer />} />
          <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path="/oder" element={<OrderPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </UseCartContext>
    </BrowserRouter>
  );
};

export default App;
