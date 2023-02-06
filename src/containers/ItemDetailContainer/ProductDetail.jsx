import { useContext } from "react";
import { CartContext } from "../../context/UseCartContext";

const ProductDetail = ({ product }) => {
  console.log(product);
  const { addToCart } = useContext(CartContext);
  return (
    <section className="container mx-auto mb-4 px-4">
      <h2 className="mb-3 text-2xl font-bold">{product.name}</h2>
      <h4 className="mb-4">Descripcion</h4>

      <p className="mb-5">{product.description}</p>
      <p className="col-span-3 mb-5">
        <span>ARS {product.price}</span>
      </p>
    </section>
  );
};

export default ProductDetail;
