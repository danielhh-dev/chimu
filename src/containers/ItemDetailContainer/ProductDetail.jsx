import { useContext, useState } from "react";
import { CartContext } from "../../context/UseCartContext";
import FlechaAbajo from "../../components/icons/FlechaAbajo";
import FlechaArriba from "../../components/icons/FlechaArriba";

import ProductSpecs from "./ProductSpecs";

const ProductDetail = ({ product }) => {
  const [contador, setContador] = useState(1);
  // aumenta contador
  const addNumber = () => {
    setContador(contador + 1);
  };
  
  //disminuye contador
  const deleteNumber = () => {
    if (contador !== 1) setContador(contador - 1);
  };

  const { addToCart } = useContext(CartContext);
  // agregar al carrito desde Detail

  const onAdd = () => {
    addToCart(product, contador);
  };

  return (
    <section className="container mx-auto mb-4 px-4">
      <h2 className="mb-3 text-2xl font-bold">{product.name}</h2>
      <h4 className="mb-4">Descripcion</h4>

      <p className="mb-5">{product.description}</p>
      <p className="col-span-3 mb-5">
        <span>ARS {product.price}</span>
      </p>
      <ProductSpecs />
      <div className="grid items-center">

      <div className="flex w-40 flex-col md:col-span-2 md:mx-0 mb-5 ">
          <h6 className="col-span-2">Cantidad</h6>
          <div className="flex justify-center gap-11   rounded-lg bg-rosa-claro p-2">
            <span>{contador}</span>
            <div className="flex flex-col gap-1 ">
              <button onClick={() => addNumber()}>
                <FlechaArriba />
              </button>
              <button onClick={() => deleteNumber()}>
                <FlechaAbajo />
              </button>
            </div>
          </div>
      </div>
      <button
            className=" mb-10 w-full rounded-md bg-slate-400 py-3  md:col-span-2"
            onClick={() => onAdd()}
          >
            Añadir al carrito
      </button>
      </div>
      
    </section>
  );
};

export default ProductDetail;