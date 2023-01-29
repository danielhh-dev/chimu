import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseCartContext from "./components/Context/UseCartContext";
import Footer from "./components/Footer/Footer";
import MainProduct from "./components/ItemDetail/mainProduct";
import NavBar from "./components/navbar/MainNavBar";
import CartPage from "./components/CartPage/CartPage";
import SearchIcon from "./components/icons/SearchIcon";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <UseCartContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<ContactPage />} />
        </Routes>
        <Footer />
      </UseCartContext>
    </BrowserRouter>
  );
};

export default App;
