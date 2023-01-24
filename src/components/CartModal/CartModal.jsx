import { useContext } from 'react';
import imgcart from '../../assets/imagen-1.jpg'
import DeleteIcon from "../icons/DeleteIcon";

import {CartContext} from '../Context/UseCartContext';

const CartModal = () => {

    const {cart, deleteToCart} = useContext(CartContext);

    return(
        <section className="absolute  top-[125%] z-10 left-0 w-full md:max-w-md md:left-full md:-translate-x-full md:top-full ">
                    
        <div className="bg-green-400 mx-4 rounded-md"> 
            <h4 className="px-6 py-8 font-bold text-lg">Carrito</h4>
            <hr />
            {cart.map( item => {
                return (
                
                <div className="grid grid-cols-[1fr_4fr_1fr] gap-6 px-6 py-4 items-center" key={item.id}>
                    <img src={imgcart} alt="" className="rounded-md"/>
                    <div>
                        <h6>{item.title}</h6>
                        <div>
                            <span>Cantidad: {item.quantity}</span> <br />
                            <span>ARS {item.price}</span> 
                            
                        </div>
                    </div>
                    <div className='pt-12'>

                    <button className="ml-auto" onClick={()=> deleteToCart(item.id)}>{/* <DeleteIcon fill="#000"/> */}Eliminar</button>
                    <span className="font-bold">ARS{item.price*item.quantity}</span>
                    </div>
                </div>
                )
            })}
    
            <div className="px-6 pb-8">
                <button className="w-full py-4 bg-slate-300 rounded-md"> Ver carrito</button>

            </div>
        </div>
        
    </section>
    )
}

export default CartModal;