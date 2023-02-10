import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const MainListContainer = ({ title }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const db = getFirestore();

  const getProducts = async () => {
    const fullCollection = collection(db, "items");

    if (category) {
      const queryFilter = query(
        fullCollection,
        where("category", "==", category)
      );
      const dataDocs = await getDocs(queryFilter);
      setProducts(
        dataDocs.docs.map((product) => ({ id: product.id, ...product.data() }))
      );
    } else {
      const dataDocs = await getDocs(fullCollection);
      setProducts(
        dataDocs.docs.map((product) => ({ id: product.id, ...product.data() }))
      );
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <>
      <div>{title}</div>
      <ItemList products={products} />
    </>
  );
};

export default MainListContainer;
