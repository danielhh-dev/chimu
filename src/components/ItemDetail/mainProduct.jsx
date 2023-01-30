import ProductDetail from "./ProductDetail";
import SliderProduct from "./SliderProduct";
import ProductSpecs from "./ProductSpecs";

import imgProduct1 from '../../assets/imagen-5.jpg';
import imgProduct3 from '../../assets/imagen-2.jpg';
import imgProduct4 from '../../assets/imagen-3.jpg';
import imgProduct5 from '../../assets/imagen-4.jpg';
import { useContext } from 'react';
import {CartContext} from '../Context/UseCartContext';

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

const objectProduct2 = {
    id:2,
    title: 'Hola',
    description: 'Taza de plastico personalizada con nombre y disenio a eleccion.',
    measure: 'Medidas: 10cm x 8cm de diametro.',
    price: 700,
    images: ARRAY_IMGS,
    quantity: 1
}


const MainProduct = () =>{
    const {addToCart} = useContext(CartContext);
    return(
        <main className="grid  grid-cols-1 md:grid-cols-2 lg:mt-10 gap-8 items-center md:container  md:mx-auto md:min-h-[calc(100vh-84px)]  mb-8">
                <SliderProduct/>
                <ProductDetail objectProduct= {objectProduct}/>
                <ProductSpecs/>
                
                <div className='md:col-span-2 text-center'>
                        <button className="col-span-3 rounded-md w-1/4 bg-slate-400 py-3 mb-10" onClick={() => addToCart(objectProduct)}> Añadir al carrito </button>
                        <h2 className='text-center underline text-gray-500 text-xl '>Envíos gratuitos en compras superiores a $20000</h2>
                </div>
                
        </main>
    )
}

export default MainProduct;