import Footer from "./components/Footer/Footer";
import MainProduct from "./components/ItemDetail/mainProduct";
import NavBar from "./components/navbar/MainNavBar";

import UseCartContext from "./components/Context/UseCartContext";
import CartPage from "./components/CartPage/CartPage";
import SearchIcon from "./components/icons/SearchIcon";
import AboutPage from "./components/AboutPage/AboutPage";

const App = () => {
    return(
        <>  
        <UseCartContext>
            <NavBar/>
            <AboutPage/>
            {/* <section className=" md:hidden grid grid-row-1 justify-center"><SearchIcon /></section>
            <MainProduct/> */}
            {/* <CartPage/> */}
            <Footer/>
        </UseCartContext>
        </>
    )
}

export default App;

