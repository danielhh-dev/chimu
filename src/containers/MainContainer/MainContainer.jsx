import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const MainContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, categoryId);
    if (categoryId) {
      getDocs(queryCollection).then((res) =>
        setProducts(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(collection(db, "ProductosPrincipales")).then((res) =>
        setProducts(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoryId]);

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default MainContainer;
