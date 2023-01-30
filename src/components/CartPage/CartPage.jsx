import {CartContext} from '../Context/UseCartContext';
import FlechaAbajo from '../icons/FlechaAbajo';
import FlechaArriba from '../icons/FlechaArriba';
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

const CART = [
    {id:1,
    title: 'Taza de polimero personalizada',
    description: 'Taza de plastico personalizada con nombre y disenio a eleccion.',
    measure: 'Medidas: 10cm x 8cm de diametro.',
    price: 700,
    images: ARRAY_IMGS,
    quantity: 1},
    {
        id:2,
    title: 'Taza de polimero personalizada',
    description: 'Taza de plastico personalizada con nombre y disenio a eleccion.',
    measure: 'Medidas: 10cm x 8cm de diametro.',
    price: 700,
    images: ARRAY_IMGS,
    quantity: 1
    }
]

const CartPage = () => { 
    return(
        <section >
            <h1 className='text-center text-xl'>Carrito</h1>
                <div className='grid grid-cols-[.5fr_1fr_1fr] items-center '>

                <img src={ARRAY_IMGS[0]} alt="" />
                
                <div className='flex flex-col ml-5 '>
                    <h1 className=''>Taza Magica</h1>
                    <span>Diseno: </span>
                    <span>Cantidad: </span>
                    <span>precio</span>
                </div>

                <div className='flex flex-col  justify-self-end bg-red-400 w-2/4 '>
                    <h6>Cantidad</h6>
                    <div className='flex gap-11 justify-center'>
                        <span>3</span>
                        <div>
                            <FlechaArriba/>
                            <FlechaAbajo/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartPage;