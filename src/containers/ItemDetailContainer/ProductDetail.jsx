import { useContext } from "react";
import { CartContext } from "../../context/UseCartContext";

const ProductDetail = ({ objectProduct }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <section className="container mx-auto mb-4 px-4">
      <h2 className="mb-3 text-2xl font-bold">{objectProduct.title}</h2>
      <h4 className="mb-4">Descripcion</h4>

      <p className="mb-5">
        {objectProduct.description}
        <br></br>
        {objectProduct.measure}
      </p>
      <p className="col-span-3 mb-5">
        <span>ARS {objectProduct.price}</span>
      </p>
    </section>
  );
};

export default ProductDetail;
