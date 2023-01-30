import { useContext } from 'react';
import {CartContext} from '../Context/UseCartContext';
import imgcart from '../../assets/imagen-1.jpg'
import DeleteIcon from "../icons/DeleteIcon";


const CartModal = () => {

    const {cart, deleteToCart} = useContext(CartContext);

    return(
        <section className="absolute  top-[125%] z-10 left-0 w-full md:max-w-md md:left-full md:-translate-x-full md:top-full ">
                    
        <div className="bg-gray-200 mx-4 rounded-md"> 
            <h4 className="px-6 py-8 font-bold text-lg text-center">Carrito</h4>
            {cart.map( item => {
                return (
                    <>
                    <div className='w-full  border-black border-solid border'></div>
                <div className="grid grid-cols-[1fr_4fr_1fr] gap-6 px-6 py-4 items-center" key={item.id}>
                    <img src={imgcart} alt="" className="rounded-md"/>
                    <div>
                        <h6>{item.title}</h6>
                        <div>
                            <span>Cantidad: {item.quantity}</span> <br />
                            <span>ARS {item.price}</span>  <br></br>
                            <span>Monto</span>
                        </div>
                    </div>

                    <div className='pt-12'>
                        <button className="ml-auto" onClick={()=> deleteToCart(item.id)}>{/* <DeleteIcon fill="#000"/> */}Eliminar</button>
                        <span className="font-bold">ARS{item.price*item.quantity}</span>
                    </div>
                    
                </div>
                </>
                )
            })}
    
            
            {cart.length == 0 
                ?   <span className='flex p-4 '>No hay items, <a className='underline ' href="/"> ver productos</a></span>
                :   <div className="px-6 pb-8"> 
                        <span className='font-bold text-lg flex justify-end'>Total: ${cart.reduce((acc,prod) => acc + (prod.price*prod.quantity), 0)}</span>
                        <button className="w-full py-4 bg-slate-300 rounded-md"> Hacer pedido</button>
                    </div>
            }
                

            
        </div>
        
    </section>
    )
}

export default CartModal;