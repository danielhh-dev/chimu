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
      console.log(item);
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
      <div>ItemList</div>
      <ItemList products={products} />
    </>
  );
};

export default MainListContainer;
