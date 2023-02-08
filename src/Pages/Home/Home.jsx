import MainSlider from "../../components/MainSlider/MainSlider";
import ItemList from "../../components/ItemList/ItemList";
import NavSearchIcon from "../../components/icons/NavSearchIcon";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const Home = () => {
  const [products, setProducts] = useState([]);

  const db = getFirestore();
  const queryCollection = collection(db, "items");

  useEffect(() => {
    getDocs(query(queryCollection, where("category", "==", "principales"))).then(
      (res) =>
        setProducts(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
    )
  },[])

  return (
    <div>
      <NavSearchIcon navBar={false} />
      <MainSlider />
      <ItemList products={products} />
    </div>
  );
};

export default Home;
