import ItemList from "../../components/ItemList/ItemList";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const TazasBotellas = () => {
  const [products, setProducts] = useState([]);

  const db = getFirestore();
  const queryCollection = collection(db, "items");

  useEffect(() => {
    getDocs(query(queryCollection, where("category", "==", "tazas"))).then(
      (res) =>
        setProducts(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
    );
  }, []);
  return (
    <>
      <h1>Tazas / Botellas</h1>
      <ItemList products={products} />
    </>
  );
};

export default TazasBotellas;
