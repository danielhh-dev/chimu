import Home from "../../Pages/Home/Home";
import TazasBotellas from "../../Pages/TazasBotellas.jsx/TazasBotellas";
import MainProduct from "../ItemDetailContainer/mainProduct";
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
  const [component, setComponent] = useState();
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");
    //   if (categoryId) {
    //     const queryFilter = query(
    //       queryCollection,
    //       where("category", "==", categoryId)
    //     );
    //     getDocs(queryFilter).then((res) =>
    //       setProducts(
    //         res.docs.map((product) => ({ id: product.id, ...product.data() }))
    //       )
    //     );
    //   } else {
    //     const queryFilter = query(
    //       queryCollection,
    //       where("category", "==", "principales")
    //     );
    //     getDocs(queryFilter).then((res) =>
    //       setProducts(
    //         res.docs.map((product) => ({ id: product.id, ...product.data() }))
    //       )
    //     );
    //   }

    switch (categoryId) {
      case "tazasbotellas":
        getDocs(query(queryCollection, where("category", "==", categoryId)))
          .then((res) =>
            setProducts(
              res.docs.map((product) => ({ id: product.id, ...product.data() }))
            )
          )
          .then(setComponent(<TazasBotellas products={products} />));
        break;

      case "kits":
        getDocs(query(queryCollection, where("category", "==", categoryId)))
          .then((res) =>
            setProducts(
              res.docs.map((product) => ({ id: product.id, ...product.data() }))
            )
          )
          .then(setComponent(<MainProduct products={products} />));
        break;

      case "cotillones":
        getDocs(query(queryCollection, where("category", "==", categoryId)))
          .then((res) =>
            setProducts(
              res.docs.map((product) => ({ id: product.id, ...product.data() }))
            )
          )
          .then(setComponent(<MainProduct products={products} />));
        break;

      default:
        getDocs(query(queryCollection, where("category", "==", "principales")))
          .then((res) =>
            setProducts(
              res.docs.map((product) => ({ id: product.id, ...product.data() }))
            )
          )
          .then(setComponent(<Home />));
        break;
    }
  }, [categoryId]);

  return <>{component}</>;
};

export default MainContainer;
