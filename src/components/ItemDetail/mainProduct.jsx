import ProductDetail from "./ProductDetail";
import SliderProduct from "./SliderProduct";

const MainProduct = () =>{
    return(
        <main className="grid grid-cols-1 md:grid-cols-2 lg:mt-10 gap-8 items-center md:container  md:mx-auto md:min-h-[calc(100vh-84px)] ">
                <SliderProduct/>
                <ProductDetail/>
        </main>
    )
}

export default MainProduct;