import Footer from "./components/Footer/Footer";
import MainProduct from "./components/ItemDetail/mainProduct";
import NavBar from "./components/navbar/MainNavBar";

import UseCartContext from "./components/Context/UseCartContext";

const App = () => {
    return(
        <>  
        <UseCartContext>
            <NavBar/>
            <MainProduct/>
            <Footer/>
        </UseCartContext>
        </>
    )
}

export default App;