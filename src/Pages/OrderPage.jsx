import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import FlechaAbajo from "../components/icons/FlechaAbajo";
import FlechaArriba from "../components/icons/FlechaArriba";
import { CartContext } from "../context/UseCartContext";

const OrderPage = () => { 
    const [contador, setContador] = useState(1);

    const { cart, deleteToCart,addToCart,discountByOne } = useContext(CartContext);
    
    
    /* const { addToCart } = useContext(CartContext);
    const onAdd = () => {
        addToCart(product, contador);
    }; */
    return(
        <section >
            
        <div className="mx-4 rounded-md bg-gray-200">
            <h4 className="px-6 py-8 text-center text-lg font-bold">Carrito</h4>
            {cart.map((item, index) => {
            
            return (
                <div key={index}>
                    <div className="w-full  border border-solid border-black"></div>

                    <div className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4">
                        <img src={item.image[0]} alt="" className="rounded-md" />

                        <div>
                            <h6>{item.name}</h6>
                            <div>
                                <span>Cantidad: {item.quantity}</span> <br />
                                <span>ARS {item.price*item.quantity}</span> <br></br>
                                <span>Monto</span>
                            </div>
                        </div>

                        <div className="pt-12">
                        <div className="mx-4 mb-4   flex  w-40 flex-col md:col-span-2 md:mx-0  ">
                        <h6 className="col-span-2">Cantidad</h6>
                    <div className="flex justify-center gap-11  rounded-lg bg-rosa-claro p-2">
                        <span>{item.quantity}</span>
                        <div className="flex flex-col gap-1 ">
                        <button onClick={() => addToCart(item,0)}>
                            <FlechaArriba />
                        </button>
                        <button onClick={() => discountByOne(item.id)}>
                            <FlechaAbajo />
                        </button>
                        </div>
                </div>
                </div>
                            <button
                                className="ml-auto"
                                onClick={() => deleteToCart(item.id)}
                            >
                                {/* <DeleteIcon fill="#000"/> */}Eliminar
                            </button>
                            <span className="font-bold">
                                ARS{item.price * item.quantity}
                            </span>

                        </div>
                    </div>
                </div>
            );
            })}

            {cart.length == 0 ? (
            <span className="flex p-4 ">
                No hay items,{" "}
                <NavLink className="underline " to="/category">
                {" "}
                ver productos
                </NavLink>
            </span>
            ) : (
            <div className="px-6 pb-8">
                <span className="flex justify-end text-lg font-bold">
                Total: $
                {cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)}
                </span>
                <NavLink to="/order" className="w-full rounded-md bg-slate-300 py-4">Hacer pedido</NavLink>
            </div>
            )}
        </div>
    </section>
    )
}

export default OrderPage;