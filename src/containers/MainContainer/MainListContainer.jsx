import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import NavBar from "../../components/navbar/MainNavBar";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useLocation } from "react-router-dom";

const MainListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const db = getFirestore();
  const location = useLocation();

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

  console.log(category);

  return (
    <>
      {location.pathname == "/category" || category ? (
        <>
          <NavBar />
          <h1 className="my-8 text-center text-lg font-light md:my-16 md:text-4xl">
            {category ? category.toUpperCase() : "Conocé nuestros productos"}
          </h1>
          <ItemList products={products} title={category} />
        </>
      ) : (
        <>
          <h1 className="my-8 text-center text-lg font-light md:my-16 md:text-4xl">
            {category ? category.toUpperCase() : "Conocé nuestros productos"}
          </h1>
          <ItemList products={products} title={category} />
        </>
      )}
    </>
  );
};

export default MainListContainer;
