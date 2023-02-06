import ProductDetail from "./ProductDetail";
import SliderProduct from "./SliderProduct";
import ProductSpecs from "./ProductSpecs";
import FlechaAbajo from "../../components/icons/FlechaAbajo";
import FlechaArriba from "../../components/icons/FlechaArriba";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/UseCartContext";
import NavSearchIcon from "../../components/icons/NavSearchIcon";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const MainProduct = () => {
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const [contador, setContador] = useState(1);
  const db = getFirestore();

  const getProduct = async () => {
    const queryRef = doc(db, "items", id);
    const dataDoc = await getDoc(queryRef);
    let dbProduct = dataDoc.data();
    return dbProduct;
  };

  useEffect(() => {
    getProduct().then((res) => {
      setProduct(res);
      setImages(res.image);
    });
  }, [id]);

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
    <>
      <NavSearchIcon navBar={false} />
      <main className="mb-8  grid  grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-84px)]  md:w-9/12 md:grid-cols-2  lg:mt-10">
        <SliderProduct images={images} />
        <ProductDetail product={product} />
        <ProductSpecs />
        <div className="mx-4 mb-4   flex  w-40 flex-col md:col-span-2 md:mx-0  ">
          <h6 className="col-span-2">Cantidad</h6>
          <div className="flex justify-center gap-11  rounded-lg bg-rosa-claro p-2">
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

        <div className="text-center md:col-span-2">
          <button
            className="col-span-3 mb-10 w-1/4 rounded-md bg-slate-400 py-3"
            onClick={() => onAdd()}
          >
            {" "}
            Añadir al carrito{" "}
          </button>
          <h2 className="text-center text-xl text-gray-500 underline ">
            Envíos gratuitos en compras superiores a $20000
          </h2>
        </div>
      </main>
    </>
  );
};

export default MainProduct;
