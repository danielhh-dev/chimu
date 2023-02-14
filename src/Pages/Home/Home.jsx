import MainSlider from "../../components/MainSlider/MainSlider";
import MainListContainer from "../../containers/MainContainer/MainListContainer";
import NavSearchIcon from "../../components/icons/NavSearchIcon";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const Home = () => {
  const title = "Conocé nuestros productos";
  const [products, setProducts] = useState([]);

  const db = getFirestore();
  const queryCollection = collection(db, "items");

  useEffect(() => {
    getDocs(
      query(queryCollection, where("category", "==", "principales"))
    ).then((res) =>
      setProducts(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);

  return (
    <div className="m-auto flex flex-col items-center md:w-9/12 ">
      <NavSearchIcon navBar={false} />
      <MainSlider />
      <MainListContainer title={title} />
    </div>
  );
};

export default Home;
