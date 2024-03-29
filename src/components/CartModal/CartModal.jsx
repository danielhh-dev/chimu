import { useContext } from "react";
import { CartContext } from "../../context/UseCartContext";
import imgcart from "../../assets/imagen-1.jpg";
import DeleteIcon from "../icons/DeleteIcon";
import { NavLink } from "react-router-dom";

const CartModal = () => {
  const { cart, deleteToCart } = useContext(CartContext);

  return (
    <section className="absolute  top-[125%] left-0 z-10 w-full md:left-full md:top-full md:max-w-md md:-translate-x-full  " >
      <div className="mx-4 rounded-md bg-rosa-claro">
        <h4 className="px-6 py-8 text-center text-lg font-bold">Carrito</h4>
        {cart.map((item, index) => {
          console.log("desde cartmodal", item);
          return (
            <div key={index}>
              <div className="w-full  border border-solid border-rosa-oscuro"></div>

              <div className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4">
                <img src={item.image[0]} alt="" className="rounded-md" />
                <div>
                  <h6>{item.name}</h6>
                  <div>
                    <span>Cantidad: {item.quantity}</span> <br />
                    <span>ARS {item.price}</span> <br></br>
                    <span>Monto</span>
                  </div>
                </div>

                <div className="pt-12">
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
          <>
            <div className="my-4  w-full border border-solid border-rosa-oscuro"></div>
            <div className="px-6 pb-8">
              <span className="flex justify-end text-lg font-bold">
                Total: $
                {cart.reduce(
                  (acc, prod) => acc + prod.price * prod.quantity,
                  0
                )}
              </span>
              <button className="my-2 w-full rounded-md bg-rosa-oscuro py-4 text-lg text-white">
                <NavLink to="/order">Ver carrito</NavLink>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartModal;
