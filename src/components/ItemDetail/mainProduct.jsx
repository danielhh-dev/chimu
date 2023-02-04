import ProductDetail from "./ProductDetail";
import SliderProduct from "./SliderProduct";
import ProductSpecs from "./ProductSpecs";
import FlechaAbajo from '../icons/FlechaAbajo';
import FlechaArriba from '../icons/FlechaArriba';

import imgProduct1 from '../../assets/imagen-5.jpg';
import imgProduct3 from '../../assets/imagen-2.jpg';
import imgProduct4 from '../../assets/imagen-3.jpg';
import imgProduct5 from '../../assets/imagen-4.jpg';
import { useContext, useState } from 'react';
import {CartContext} from '../Context/UseCartContext';
import NavSearchIcon from "../icons/NavSearchIcon";

const ARRAY_IMGS = [imgProduct1,imgProduct3,imgProduct4,imgProduct5];

const objectProduct = {
    id:1,
    title: 'Taza de polimero personalizada',
    description: 'Taza de plastico personalizada con nombre y disenio a eleccion.',
    measure: 'Medidas: 10cm x 8cm de diametro.',
    price: 700,
    images: ARRAY_IMGS,
    quantity: 1,
    stock: 3
}

const objectProduct2 = {
    id:2,
    title: 'Hola',
    description: 'Taza de plastico personalizada con nombre y disenio a eleccion.',
    measure: 'Medidas: 10cm x 8cm de diametro.',
    price: 700,
    images: ARRAY_IMGS,
    quantity: 1,
    stock: 3
}


const MainProduct = () =>{
    const [contador,setContador] = useState(1)

    
    // aumenta contador
    const addNumber = () => {
        if(objectProduct.stock>contador){ 
        setContador(contador + 1)
        }
    }

    //disminuye contador
    const deleteNumber = () => {
        if( contador!==1)
        setContador(contador - 1)
    }

    // agregar al carrito desde Detail
    const onAdd = () => {
        addToCart(objectProduct,contador)
    }
    const {addToCart} = useContext(CartContext);
    return(
        <>
        <NavSearchIcon navBar = {false} />
        <main className="grid  grid-cols-1  md:grid-cols-2 md:w-9/12 lg:mt-10 gap-8 items-center md:container  md:mx-auto md:min-h-[calc(100vh-84px)]  mb-8">
                <SliderProduct/>
                <ProductDetail objectProduct= {objectProduct}/>
                <ProductSpecs/>
                <div className='flex flex-col   mb-4  w-40 md:col-span-2 mx-4 md:mx-0  '>
                    <h6 className="col-span-2">Cantidad</h6>
                    <div className='flex gap-11 justify-center  bg-rosa-claro rounded-lg p-2'>
                        <span>{contador}</span>
                        <div className='flex flex-col gap-1 '>
                            <button onClick={()=>addNumber()}><FlechaArriba/></button>
                            <button onClick={()=>deleteNumber()}><FlechaAbajo/></button>
                            
                        </div>
                    </div>
                </div>
                
                <div className='md:col-span-2 text-center'>
                        <button className="col-span-3 rounded-md w-1/4 bg-slate-400 py-3 mb-10" onClick={() => onAdd()}> Añadir al carrito </button>
                        <h2 className='text-center underline text-gray-500 text-xl '>Envíos gratuitos en compras superiores a $20000</h2>
                </div>
                
        </main>
        </>
    )
}

export default MainProduct;