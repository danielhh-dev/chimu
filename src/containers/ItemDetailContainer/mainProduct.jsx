import ProductDetail from "./ProductDetail";
import SliderProduct from "./SliderProduct";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/UseCartContext";
import NavSearchIcon from "../../components/icons/NavSearchIcon";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const MainProduct = () => {
  const [product, setProduct] = useState({});
  

  const [images, setImages] = useState([]);
  const { id } = useParams();
  const db = getFirestore();

  const getProduct = async () => {
    const queryRef = doc(db, "items", id);
    const dataDoc = await getDoc(queryRef);
    let dbProduct = dataDoc.data();
    dbProduct.id = id; // importante para asignarle un id y asi puede trabajar el carrito
    return dbProduct;
  };

  useEffect(() => {
    getProduct().then((res) => {
      setProduct(res);
      
      setImages(res.image);
    });
  }, [id]);
  
  return (
    <>
      <NavSearchIcon navBar={false} />
      <main className="mb-8  grid  grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-84px)]  md:w-9/12 md:grid-cols-2  lg:mt-10">
        <SliderProduct images={images}/>
        <ProductDetail product={product}/>
      </main>
    </>
  );
};

export default MainProduct;
