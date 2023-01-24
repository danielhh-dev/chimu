import ProductDetail from "./ProductDetail";
import SliderProduct from "./SliderProduct";

import imgProduct1 from '../../assets/imagen-5.jpg';
import imgProduct3 from '../../assets/imagen-2.jpg';
import imgProduct4 from '../../assets/imagen-3.jpg';
import imgProduct5 from '../../assets/imagen-4.jpg';

const ARRAY_IMGS = [imgProduct1,imgProduct3,imgProduct4,imgProduct5];

const objectProduct = {
    id:1,
    title: 'Taza de polimero personalizada',
    description: 'Taza de plastico personalizada con nombre y disenio a eleccion.',
    measure: 'Medidas: 10cm x 8cm de diametro.',
    price: 700,
    images: ARRAY_IMGS,
    quantity: 1
}

const MainProduct = () =>{
    return(
        <main className="grid  grid-cols-1 md:grid-cols-2 lg:mt-10 gap-8 items-center md:container  md:mx-auto md:min-h-[calc(100vh-84px)] ">
                <SliderProduct/>
                <ProductDetail objectProduct= {objectProduct}/>
        </main>
    )
}

export default MainProduct;