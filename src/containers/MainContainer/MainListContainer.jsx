import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const MainListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const db = getFirestore();

  const getProduct = async () => {
    const fullCollection = collection(db, "items");
    const dataDoc = await getDocs(fullCollection);

    const listProduct = dataDoc.docs.map((product) => {
      let item = product.data();
      item.id = product.id;
      return item;
    });

    const filterByCategory = listProduct.filter(
      (item) => item.category == category
    );

    if (category) {
      return filterByCategory;
    } else {
      return listProduct;
    }
  };

  useEffect(() => {
    getProduct().then((res) => setProducts(res));
  }, [category]);

  return (
    <>
      <h1 className="my-4 text-center text-2xl">
        {category ? category.toUpperCase() : "PRODUCTOS"}
      </h1>
      <ItemList products={products} title={category} />
    </>
  );
};

export default MainListContainer;
